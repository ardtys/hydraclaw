import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          {/* Center */}
          <circle cx="12" cy="12" r="3" fill="#10B981" />
          {/* 5 Heads */}
          <circle cx="12" cy="3" r="2" fill="#10B981" />
          <circle cx="20" cy="8" r="2" fill="#10B981" />
          <circle cx="17" cy="19" r="2" fill="#10B981" />
          <circle cx="7" cy="19" r="2" fill="#10B981" />
          <circle cx="4" cy="8" r="2" fill="#10B981" />
          {/* Connecting lines */}
          <line x1="12" y1="9" x2="12" y2="5" stroke="#10B981" strokeWidth="1.5" />
          <line x1="14.5" y1="10.5" x2="18" y2="8" stroke="#10B981" strokeWidth="1.5" />
          <line x1="14" y1="14" x2="16" y2="17.5" stroke="#10B981" strokeWidth="1.5" />
          <line x1="10" y1="14" x2="8" y2="17.5" stroke="#10B981" strokeWidth="1.5" />
          <line x1="9.5" y1="10.5" x2="6" y2="8" stroke="#10B981" strokeWidth="1.5" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
