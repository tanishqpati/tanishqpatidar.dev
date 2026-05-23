import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tanishq Patidar — Backend-focused full-stack engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#f4f4f5",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", color: "#86efac", fontSize: 28 }}>
          ~/tanishq.dev
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", color: "#a1a1aa", fontSize: 30 }}>
            <span style={{ color: "#86efac", marginRight: 16 }}>&gt;</span>
            whoami
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            tanishq patidar
          </div>
          <div
            style={{
              display: "flex",
              color: "#a1a1aa",
              fontSize: 30,
              fontFamily: "system-ui, sans-serif",
              marginTop: 12,
              maxWidth: 980,
            }}
          >
            Backend-focused full-stack engineer. Event-driven systems, AI
            integrations, and notes worth writing down.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#71717a",
            fontSize: 22,
            borderTop: "1px dashed #3f3f46",
            paddingTop: 32,
          }}
        >
          <span>tanishqpatidar.dev</span>
          <span>$ cat /about</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
