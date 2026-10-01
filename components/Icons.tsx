type IconProps = { className?: string };

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="M7 17 17 7M8 7h9v9" /></svg>;
}
export function ArrowDown({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="M12 5v14m-6-6 6 6 6-6" /></svg>;
}
export function Close({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="m7 7 10 10M17 7 7 17" /></svg>;
}
export function Code({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" /></svg>;
}
export function External({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="M14 5h5v5m0-5-8 8" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>;
}
export function Sun({ className }: IconProps) {
  return <svg {...svgProps} className={className}><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
}
export function Moon({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="M20 15.2A8 8 0 0 1 8.8 4 8.2 8.2 0 1 0 20 15.2Z" /></svg>;
}
export function File({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="M6 3.5h7.25L18.5 8.75V20.5H6Z" /><path d="M13.25 3.5v5.25h5.25M9 12.25h6.5M9 16h6.5" /></svg>;
}
export function Github({ className }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.23c-3.25.7-3.93-1.38-3.93-1.38-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.1-.75.41-1.27.74-1.56-2.59-.3-5.31-1.3-5.31-5.68 0-1.25.45-2.28 1.2-3.08-.12-.3-.52-1.48.11-3.04 0 0 .98-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.18-1.49 3.16-1.18 3.16-1.18.63 1.56.23 2.74.11 3.04.75.8 1.2 1.83 1.2 3.08 0 4.4-2.73 5.38-5.33 5.67.42.36.79 1.08.79 2.18v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>;
}
export function Linkedin({ className }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M5.35 7.9H1.77V19.4h3.58V7.9ZM3.56 2.18a2.08 2.08 0 1 0 0 4.16 2.08 2.08 0 0 0 0-4.16ZM19.4 12.8c0-3.47-1.85-5.08-4.33-5.08-2 0-2.89 1.1-3.39 1.87V7.9H8.1v11.5h3.58V13c0-1.69.32-3.32 2.41-3.32 2.06 0 2.09 1.93 2.09 3.43v6.3h3.58Z" /></svg>;
}
export function Leetcode({ className }: IconProps) {
  return <svg viewBox="0 0 85 100" fill="currentColor" aria-hidden="true" className={className}><path d="M60.86 74.89a5.75 5.75 0 0 1 8.12 8.15L59 93.01c-9.21 9.2-24.23 9.33-33.6.31L7.42 75.69C-1.74 66.72-2.65 52.36 5.97 43.14l16.05-17.2c8.55-9.15 24.31-10.15 34.08-2.25l14.59 11.8a5.75 5.75 0 1 1-7.22 8.96l-14.59-11.8c-5.11-4.13-14.05-3.56-18.46 1.16L14.36 51c-4.19 4.49-3.73 11.72 1.1 16.46l17.9 17.55c4.87 4.69 12.74 4.62 17.52-.15Z" /><path d="M36.61 53.4H79a5.76 5.76 0 0 1 0 11.51H36.61a5.76 5.76 0 0 1 0-11.51Z" opacity="0.62" /><path d="M44.55 1.82a5.75 5.75 0 0 1 8.39 7.87L14.36 51c-4.19 4.49-3.73 11.72 1.1 16.46l17.82 17.47a5.76 5.76 0 0 1-8.05 8.23L7.42 75.69C-1.74 66.72-2.65 52.36 5.97 43.14Z" /></svg>;
}
export function Codeforces({ className }: IconProps) {
  // Codeforces mark from Simple Icons (CC0).
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" /></svg>;
}
export function Clist({ className }: IconProps) {
  return <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" className={className}><path d="M0 17.2L17.2 0L34.4 17.2L28.6 23L17.2 11.6L5.8 23L0 17.2Z" /><path d="M12 30.7L17.7 25L28.9 36.2L40.1 25L45.8 30.7L28.9 47.6L12 30.7Z" /></svg>;
}
export function Tool({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.5 2.5-3-3 2.5-2.5Z" /></svg>;
}
export function Branch({ className }: IconProps) {
  return <svg {...svgProps} className={className}><circle cx="6" cy="5" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="6" cy="19" r="2" /><path d="M6 7v10m2-7h5a5 5 0 0 0 5-5" /></svg>;
}
export function Warning({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="M12 3 2.8 20h18.4L12 3Z" /><path d="M12 9v5m0 3h.01" /></svg>;
}
