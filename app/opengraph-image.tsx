import { ImageResponse } from "next/og";

export const alt = "Piyush Agarwal — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "76px",
        color: "#f4f5f7",
        background: "#08090d",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: "0.14em", color: "#777986", textTransform: "uppercase" }}>
        Software Engineer
      </div>
      <div style={{ display: "flex", marginTop: 24, fontSize: 112, fontWeight: 700, letterSpacing: "-0.06em" }}>
        Piyush Agarwal
      </div>
      <div style={{ display: "flex", gap: 18, marginTop: 56, fontSize: 24, color: "#a0a3af" }}>
        <span>TraceLens</span><span>·</span><span>PathForge</span><span>·</span><span>LeetVis</span>
      </div>
    </div>,
    size,
  );
}
