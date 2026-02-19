import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "HydraClaw - The Universal Lightweight Agent Protocol";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0D1117 0%, #161B22 50%, #0D1117 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow effects */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Hydra Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="70" cy="70" r="16" fill="#10B981" />
            <circle cx="70" cy="18" r="12" fill="#10B981" />
            <line x1="70" y1="54" x2="70" y2="30" stroke="#10B981" strokeWidth="6" />
            <circle cx="118" cy="45" r="12" fill="#10B981" />
            <line x1="82" y1="60" x2="106" y2="50" stroke="#10B981" strokeWidth="6" />
            <circle cx="100" cy="112" r="12" fill="#10B981" />
            <line x1="78" y1="82" x2="92" y2="102" stroke="#10B981" strokeWidth="6" />
            <circle cx="40" cy="112" r="12" fill="#10B981" />
            <line x1="62" y1="82" x2="48" y2="102" stroke="#10B981" strokeWidth="6" />
            <circle cx="22" cy="45" r="12" fill="#10B981" />
            <line x1="58" y1="60" x2="34" y2="50" stroke="#10B981" strokeWidth="6" />
            <circle cx="70" cy="70" r="10" fill="#34D399" opacity="0.6" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ECEDEE",
              letterSpacing: "-0.02em",
            }}
          >
            Hydra
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#10B981",
              letterSpacing: "-0.02em",
            }}
          >
            Claw
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            color: "#8B949E",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
            marginBottom: 40,
          }}
        >
          The Universal Lightweight Agent Protocol
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 60,
          }}
        >
          {[
            { value: "<5MB", label: "Binary Size" },
            { value: "<10ms", label: "Boot Time" },
            { value: "$10", label: "Hardware" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#10B981",
                  fontFamily: "monospace",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: "#8B949E",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom badges */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 16,
          }}
        >
          <span
            style={{
              padding: "8px 16px",
              background: "rgba(139, 92, 246, 0.2)",
              border: "1px solid rgba(139, 92, 246, 0.4)",
              borderRadius: 20,
              color: "#A78BFA",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Solana
          </span>
          <span
            style={{
              padding: "8px 16px",
              background: "rgba(59, 130, 246, 0.2)",
              border: "1px solid rgba(59, 130, 246, 0.4)",
              borderRadius: 20,
              color: "#60A5FA",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Base
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
