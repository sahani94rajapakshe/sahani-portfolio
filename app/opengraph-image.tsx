import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050510 0%, #0b0b2a 50%, #12082a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "48px 72px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700, color: "#e6e8f0" }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a78bfa", marginTop: 12 }}>
            {siteConfig.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#9aa0b5",
              marginTop: 32,
              lineHeight: 1.4,
            }}
          >
            AI-powered search · RAG systems · Enterprise microservices
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#22d3ee", marginTop: 24 }}>
            {`${siteConfig.location} · ${siteConfig.locationDetail}`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
