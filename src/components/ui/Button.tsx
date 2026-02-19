"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "amber";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  glow?: boolean;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-web4 text-hydra-bg hover:bg-web4/90 border border-web4/50",
  secondary:
    "bg-hydra-bg-elevated text-hydra-text hover:bg-hydra-bg-light border border-hydra-border",
  outline:
    "bg-transparent text-hydra-text hover:bg-hydra-bg-light border border-hydra-border hover:border-hydra-border-glow",
  ghost:
    "bg-transparent text-hydra-text-muted hover:text-hydra-text hover:bg-hydra-bg-light",
  amber:
    "bg-transparent text-web3 hover:bg-web3/10 border border-web3/50 hover:border-web3",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

const glowStyles: Record<ButtonVariant, string> = {
  primary: "glow-primary",
  secondary: "",
  outline: "",
  ghost: "",
  amber: "glow-amber",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", glow = false, className = "", children, ...props },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          inline-flex items-center justify-center gap-2 rounded-lg font-medium
          transition-all duration-200 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-web2 focus-visible:ring-offset-2 focus-visible:ring-offset-hydra-bg
          disabled:pointer-events-none disabled:opacity-50
          ${variants[variant]}
          ${sizes[size]}
          ${glow ? glowStyles[variant] : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
