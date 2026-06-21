import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Incident Response Capstone - HealthSecure Systems case study by Wayne Howlett";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.28), transparent 32%), radial-gradient(circle at 82% 52%, rgba(14, 165, 233, 0.20), transparent 34%), linear-gradient(135deg, #020617 0%, #071827 46%, #020617 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.35,
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "0.02em" }}>Wayne Howlett</div>
            <div style={{ fontSize: 20, color: "#67e8f9", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Cybersecurity Portfolio
            </div>
          </div>
          <div
            style={{
              border: "1px solid rgba(103, 232, 249, 0.55)",
              borderRadius: "999px",
              padding: "14px 22px",
              color: "#a5f3fc",
              fontSize: 22,
              fontWeight: 800,
              background: "rgba(8, 47, 73, 0.42)",
            }}
          >
            High Severity IR
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "930px" }}>
          <div style={{ color: "#67e8f9", fontSize: 26, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em" }}>
            HealthSecure Systems - Incident 2025-HSS-IR-002
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.02, fontWeight: 900, letterSpacing: "-0.045em" }}>
            Incident Response Capstone
          </div>
          <div style={{ fontSize: 38, lineHeight: 1.18, color: "#dbeafe", fontWeight: 700 }}>
            Phishing -> PowerShell -> Credential Harvesting -> Lateral Movement
          </div>
        </div>

        <div style={{ display: "flex", gap: "18px", position: "relative" }}>
          {["Snort IDS", "Zeek", "Windows Logs", "MITRE ATT&CK", "IoCs"].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(148, 163, 184, 0.35)",
                borderRadius: "18px",
                padding: "14px 18px",
                background: "rgba(15, 23, 42, 0.72)",
                color: "#e2e8f0",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
