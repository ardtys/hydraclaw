"use client";

import { HTMLAttributes } from "react";

type BadgeVariant = "web1" | "web2" | "web25" | "web3" | "web4" | "default" | "live" | "coming";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  glow?: boolean;
  children: React.ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  web1: "bg-web1/10 text-web1 border-web1/30",
  web2: "bg-web2/10 text-web2 border-web2/30",
  web25: "bg-web25/10 text-web25 border-web25/30",
  web3: "bg-web3/10 text-web3 border-web3/30",
  web4: "bg-web4/10 text-web4 border-web4/30",
  default: "bg-hydra-bg-elevated text-hydra-text-muted border-hydra-border",
  live: "bg-web4/10 text-web4 border-web4/30",
  coming: "bg-hydra-bg-elevated text-hydra-text-muted border-hydra-border",
};

const glowStyles: Record<BadgeVariant, string> = {
  web1: "shadow-[0_0_10px_rgba(59,130,246,0.3)]",
  web2: "shadow-[0_0_10px_rgba(139,92,246,0.3)]",
  web25: "shadow-[0_0_10px_rgba(236,72,153,0.3)]",
  web3: "shadow-[0_0_10px_rgba(245,158,11,0.3)]",
  web4: "shadow-[0_0_10px_rgba(16,185,129,0.3)]",
  default: "",
  live: "shadow-[0_0_10px_rgba(16,185,129,0.3)]",
  coming: "",
};

export function Badge({ variant = "default", glow = false, className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium
        ${variants[variant]}
        ${glow ? glowStyles[variant] : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}
