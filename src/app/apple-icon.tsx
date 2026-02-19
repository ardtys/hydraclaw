import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "linear-gradient(135deg, #0D1117 0%, #161B22 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Center core */}
          <circle cx="70" cy="70" r="16" fill="#10B981" />

          {/* 5 Heads representing 5 layers */}
          {/* Top */}
          <circle cx="70" cy="18" r="12" fill="#10B981" />
          <line x1="70" y1="54" x2="70" y2="30" stroke="#10B981" strokeWidth="6" />

          {/* Top-right */}
          <circle cx="118" cy="45" r="12" fill="#10B981" />
          <line x1="82" y1="60" x2="106" y2="50" stroke="#10B981" strokeWidth="6" />

          {/* Bottom-right */}
          <circle cx="100" cy="112" r="12" fill="#10B981" />
          <line x1="78" y1="82" x2="92" y2="102" stroke="#10B981" strokeWidth="6" />

          {/* Bottom-left */}
          <circle cx="40" cy="112" r="12" fill="#10B981" />
          <line x1="62" y1="82" x2="48" y2="102" stroke="#10B981" strokeWidth="6" />

          {/* Top-left */}
          <circle cx="22" cy="45" r="12" fill="#10B981" />
          <line x1="58" y1="60" x2="34" y2="50" stroke="#10B981" strokeWidth="6" />

          {/* Inner glow */}
          <circle cx="70" cy="70" r="10" fill="#34D399" opacity="0.6" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
