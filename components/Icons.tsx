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
  return <svg {...svgProps} className={className}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h5M10 13h5m-5 4h5" /></svg>;
}
export function Github({ className }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M12 .8A11.4 11.4 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.4-5.6-6a4.7 4.7 0 0 1 1.3-3.2c-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.3 3.2c0 4.7-2.9 5.7-5.6 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" /></svg>;
}
export function Linkedin({ className }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M5.2 7.9A2.2 2.2 0 1 0 5.2 3.5a2.2 2.2 0 0 0 0 4.4ZM3.3 21h3.8V9.4H3.3V21Zm6.1 0h3.8v-6.5c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h3.8v-7.2c0-3.5-.8-6.2-4.9-6.2-2 0-3.3 1.1-3.9 2.1h-.1V8H9.4v13Z" /></svg>;
}
export function Leetcode({ className }: IconProps) {
  return <svg {...svgProps} className={className}><path d="m15.5 4-7 7a3.6 3.6 0 0 0 0 5l2 2a3.6 3.6 0 0 0 5 0l2-2" /><path d="m10.5 8-2-2m1.5 6h9" /></svg>;
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
