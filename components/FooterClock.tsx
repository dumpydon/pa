"use client";

import { useSyncExternalStore } from "react";

const istFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function subscribe(onChange: () => void) {
  let timeout: number;

  function tick() {
    window.clearTimeout(timeout);
    onChange();
    timeout = window.setTimeout(tick, 60_000 - (Date.now() % 60_000));
  }

  function refreshWhenVisible() {
    if (document.visibilityState === "visible") tick();
  }

  timeout = window.setTimeout(tick, 60_000 - (Date.now() % 60_000));
  document.addEventListener("visibilitychange", refreshWhenVisible);

  return () => {
    window.clearTimeout(timeout);
    document.removeEventListener("visibilitychange", refreshWhenVisible);
  };
}

function getSnapshot() {
  return Math.floor(Date.now() / 60_000);
}

// Match the server and initial hydration output without freezing a build-time clock.
function getServerSnapshot() {
  return null;
}

export function FooterClock() {
  const minute = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <time
      className="footer-clock"
      dateTime={minute === null ? undefined : new Date(minute * 60_000).toISOString()}
      style={{ visibility: minute === null ? "hidden" : undefined }}
    >
      {minute === null ? "--:-- --" : istFormatter.format(minute * 60_000)}
    </time>
  );
}
