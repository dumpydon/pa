import type { CSSProperties } from "react";

/** Pre-rendered, transparent-center glows; regenerate when adding an accent. */
export function projectGlowStyle(accent: string): CSSProperties {
  const color = /^#[\da-f]{6}$/i.test(accent) ? accent.slice(1).toLowerCase() : "7768ff";
  return {
    "--glow-image-light": `url("/glows/${color}-light.png")`,
    "--glow-image-dark": `url("/glows/${color}-dark.png")`,
  } as CSSProperties;
}
