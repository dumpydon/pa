import { getCloudflareContext } from "@opennextjs/cloudflare";

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const noCache = { "Cache-Control": "private, no-store" };

function json(body: unknown, status = 200) {
  return Response.json(body, { status, headers: noCache });
}

async function readSmallBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) return null;
  const decoder = new TextDecoder();
  let size = 0;
  let text = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return text + decoder.decode();
      size += value.byteLength;
      if (size > 128) {
        await reader.cancel();
        return null;
      }
      text += decoder.decode(value, { stream: true });
    }
  } finally {
    reader.releaseLock();
  }
}

export async function POST(request: Request) {
  // No cross-site counting, prefetch counting, or identifiers in URLs/logs.
  let origin: URL;
  try {
    origin = new URL(request.headers.get("origin") ?? "");
  } catch {
    return json({ error: "Forbidden" }, 403);
  }
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(origin.hostname);
  // OpenNext may reconstruct a HTTPS URL during a HTTP local Worker preview.
  // Match the incoming Host (including port), not that reconstructed scheme.
  if (
    origin.origin !== request.headers.get("origin") ||
    origin.host !== (request.headers.get("host") ?? new URL(request.url).host) ||
    (!local && origin.protocol !== "https:") ||
    !["http:", "https:"].includes(origin.protocol)
  ) {
    return json({ error: "Forbidden" }, 403);
  }

  if (
    !request.headers.get("content-type")?.startsWith("application/json") ||
    Number(request.headers.get("content-length") ?? 0) > 128
  ) {
    return json({ error: "Invalid request" }, 400);
  }

  let visitorId: unknown;
  try {
    const body = await readSmallBody(request);
    if (body === null) return json({ error: "Invalid request" }, 400);
    visitorId = JSON.parse(body)?.visitorId;
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  if (typeof visitorId !== "string" || !uuidPattern.test(visitorId)) {
    return json({ error: "Invalid request" }, 400);
  }

  // JavaScript-only registration already excludes most crawlers; this is
  // best-effort filtering, not a claim to distinguish every bot from a person.
  if (/bot\b|crawler|spider|headless|lighthouse|pagespeed/i.test(request.headers.get("user-agent") ?? "")) {
    return new Response(null, { status: 204, headers: noCache });
  }

  try {
    const { env } = await getCloudflareContext({ async: true });
    // Cloudflare version/branch previews must not inflate production traffic.
    if (!local && origin.hostname !== env.VISITOR_SITE_HOST) {
      return new Response(null, { status: 204, headers: noCache });
    }
    if (!env.VISITORS_DB) return json({ error: "Unavailable" }, 503);

    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(visitorId.toLowerCase()));
    const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");

    const [, countResult] = await env.VISITORS_DB.batch<{ total: number }>([
      env.VISITORS_DB.prepare("INSERT OR IGNORE INTO visitors (id_hash) VALUES (?)").bind(hash),
      env.VISITORS_DB.prepare("SELECT total FROM visitor_total WHERE id = 1"),
    ]);
    const total = countResult.results[0]?.total;

    if (!Number.isSafeInteger(total) || total < 0) throw new Error("Invalid visitor total");
    return json({ count: total });
  } catch {
    // Never display a fabricated zero or let analytics break the portfolio.
    console.error("Visitor counter storage is unavailable.");
    return json({ error: "Unavailable" }, 503);
  }
}
