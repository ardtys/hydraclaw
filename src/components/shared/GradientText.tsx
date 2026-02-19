"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className = "", animate = false }: GradientTextProps) {
  return (
    <span
      className={`
        bg-gradient-to-r from-web1 via-web2 via-web25 via-web3 to-web4
        bg-clip-text text-transparent
        ${animate ? "animate-gradient bg-[length:200%_auto]" : ""}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
