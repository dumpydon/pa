"use client";

import { useEffect, useState } from "react";

const storageKey = "pa:visitor-id";
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
let visitRequest: Promise<number | null> | undefined;

async function getVisitorId(): Promise<string | null> {
  function readOrCreate() {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored && uuidPattern.test(stored)) return stored;
      const id = crypto.randomUUID();
      localStorage.setItem(storageKey, id);
      return id;
    } catch {
      // Without persistent storage, skip counting rather than count every reload.
      return null;
    }
  }

  // First visits in multiple tabs share one ID; refreshes never create a new one.
  return navigator.locks
    ? navigator.locks.request(storageKey, readOrCreate)
    : readOrCreate();
}

async function registerVisit(): Promise<number | null> {
  try {
    const visitorId = await getVisitorId();
    if (!visitorId) return null;

    const response = await fetch("/api/visitors", {
      method: "POST",
      credentials: "same-origin",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitorId }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok || response.status === 204) return null;

    const body = await response.json();
    const count = body && typeof body === "object" && "count" in body ? body.count : null;
    return typeof count === "number" && Number.isSafeInteger(count) && count >= 0 ? count : null;
  } catch {
    return null;
  }
}

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    // Share the request across Strict Mode remounts and footer rerenders.
    visitRequest ??= registerVisit();
    void visitRequest.then((total) => {
      if (active) setCount(total);
      if (total === null) visitRequest = undefined;
    });
    return () => { active = false; };
  }, []);

  return (
    <span className="footer-visitor-count" style={{ visibility: count === null ? "hidden" : undefined }}>
      {count === null ? "0" : count.toLocaleString("en-US")}
    </span>
  );
}
