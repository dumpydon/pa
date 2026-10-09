import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";

const origin = new URL(process.argv[2] ?? "http://localhost:3000").origin;
if (!["localhost", "127.0.0.1", "[::1]"].includes(new URL(origin).hostname)) {
  throw new Error("Counter tests may only run against a local database, never production.");
}

async function post(visitorId, overrides = {}) {
  return fetch(`${origin}/api/visitors`, {
    method: "POST",
    headers: {
      Origin: origin,
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 portfolio-counter-test",
      ...overrides,
    },
    body: JSON.stringify({ visitorId }),
  });
}

async function count(visitorId) {
  const response = await post(visitorId);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("cache-control"), /no-store/);
  const body = await response.json();
  assert.ok(Number.isSafeInteger(body.count) && body.count >= 1);
  return body.count;
}

const firstId = randomUUID();
const first = await count(firstId);
assert.equal(await count(firstId), first, "Refresh/revisit must not count twice");
const repeated = await Promise.all(Array.from({ length: 12 }, () => count(firstId)));
assert.ok(repeated.every((value) => value === first), "Concurrent duplicate IDs must count once");

const secondId = randomUUID();
const fresh = await Promise.all(Array.from({ length: 12 }, () => count(secondId)));
assert.ok(fresh.every((value) => value === first + 1), "Concurrent first requests must add exactly one visitor");

assert.equal((await post("invalid-id")).status, 400);
assert.equal((await post(randomUUID(), { Origin: "https://example.com" })).status, 403);
assert.equal((await post(randomUUID(), { Origin: "" })).status, 403);
assert.equal((await post(randomUUID(), { "Content-Type": "text/plain" })).status, 400);
assert.equal((await post("x".repeat(256))).status, 400);
assert.equal((await post(randomUUID(), { "User-Agent": "Googlebot" })).status, 204);
assert.equal((await fetch(`${origin}/api/visitors`)).status, 405, "GET/prefetch must not register a visit");
assert.equal(await count(firstId), first + 1, "Rejected requests and bots must not change the count");

console.log("PASS: unique IDs, refreshes, concurrent first/repeat visits, request validation, bots, and uncached responses.");
console.log("Two anonymous test IDs were added to local storage only; production was not contacted.");
