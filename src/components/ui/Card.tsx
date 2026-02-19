"use client";

import { forwardRef, HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type CardVariant = "default" | "glass" | "gradient" | "glow";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: CardVariant;
  glowColor?: "web1" | "web2" | "web25" | "web3" | "web4";
  hover?: boolean;
  children: React.ReactNode;
}

const variants: Record<CardVariant, string> = {
  default: "bg-hydra-bg-card border border-hydra-border",
  glass: "glass-card",
  gradient: "gradient-border",
  glow: "bg-hydra-bg-card border border-hydra-border",
};

const glowColors: Record<string, string> = {
  web1: "hover:border-web1/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  web2: "hover:border-web2/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]",
  web25: "hover:border-web25/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]",
  web3: "hover:border-web3/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
  web4: "hover:border-web4/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", glowColor, hover = true, className = "", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { scale: 1.01, y: -2 } : undefined}
        transition={{ duration: 0.2 }}
        className={`
          rounded-xl p-6 transition-all duration-300
          ${variants[variant]}
          ${glowColor ? glowColors[glowColor] : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
