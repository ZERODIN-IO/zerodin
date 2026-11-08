"use client";

// Glass button with Framer Motion hover lift.
//
// Three variants:
//   primary    — the crystal glass surface with a cyan edge
//   secondary  — clear glass, no accent
//   ghost      — border only, transparent fill, no glass
//
// Three sizes: sm / md / lg.
//
// Framer Motion's whileHover respects prefers-reduced-motion automatically
// when the user has enabled it — the animation is skipped, the color and
// border transitions remain.

import { forwardRef, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "backdrop-blur-xl bg-[rgba(0,227,253,0.08)] border-[rgba(0,227,253,0.25)]",
    "text-text-primary hover:bg-[rgba(0,227,253,0.12)] hover:border-[rgba(0,227,253,0.4)]",
    "shadow-[0_0_20px_rgba(0,227,253,0.08)] hover:shadow-[0_0_30px_rgba(0,227,253,0.15)]"
  ),
  secondary: cn(
    "backdrop-blur-xl bg-white/[0.06] border-white/[0.10]",
    "text-text-primary hover:bg-white/[0.10] hover:border-white/[0.15]"
  ),
  ghost: cn(
    "bg-transparent border-white/[0.08]",
    "text-text-secondary hover:text-text-primary hover:border-white/[0.15]"
  ),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-sm rounded-lg",
  md: "h-11 px-6 text-base rounded-xl",
  lg: "h-14 px-8 text-lg rounded-2xl",
};

interface GlassButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  function GlassButton(
    {
      variant = "secondary",
      size = "md",
      href,
      onClick,
      type = "button",
      disabled,
      className,
      children,
      target,
      rel,
    },
    ref
  ) {
    const classes = cn(
      "inline-flex items-center justify-center gap-2",
      "border font-medium",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-void",
      "disabled:pointer-events-none disabled:opacity-50",
      "glass-specular",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const motionProps = disabled
      ? {}
      : { whileHover: { y: -2 }, transition: { duration: 0.2 } };

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("mailto:");
      if (isExternal) {
        return (
          <motion.a
            href={href}
            target={target ?? "_blank"}
            rel={rel ?? "noopener noreferrer"}
            className={classes}
            {...motionProps}
          >
            {children}
          </motion.a>
        );
      }
      return (
        <Link href={href} className={classes}>
          <motion.span {...motionProps} className="contents">
            {children}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
);

export type { GlassButtonProps, ButtonVariant, ButtonSize };
