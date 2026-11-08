"use client";

// Glass button with three layers of depth:
//
//   1. Layered shadows (contact + cast + ambient) — the button floats
//   2. Inner highlights (top specular, bottom shadow) — the button has thickness
//   3. Edge lighting (gradient border) — the glass catches directional light
//
// On hover the button lifts 2px and the shadow expands. On press it
// settles. Framer Motion handles the lift; CSS handles the shadow
// transition on the same element.
//
// The material behind the button face changes per variant:
//   primary   — cyan-tinted glass, cyan edge, cyan inner glow
//   secondary — neutral glass, subtle border
//   ghost     — border only, transparent fill, no inner glow
//
// All variants use the same shadow stack and the same hover lift.
// The variant only changes the tint.

import { forwardRef, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

// The shadow stack for every button. Three layers:
//   contact  — 2px offset, tight blur, strong alpha (where it touches)
//   cast     — 12px offset, medium blur, moderate alpha (where it floats)
//   ambient  — 0px offset, wide blur, faint alpha (atmosphere around it)
const shadowBase =
  "shadow-[0_2px_4px_rgba(0,0,0,0.3),0_12px_24px_rgba(0,0,0,0.15),0_32px_64px_rgba(0,0,0,0.08)]";

const shadowHover =
  "hover:shadow-[0_4px_8px_rgba(0,0,0,0.35),0_20px_40px_rgba(0,0,0,0.2),0_48px_80px_rgba(0,0,0,0.1)]";

const shadowActive =
  "active:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_6px_12px_rgba(0,0,0,0.2)]";

// The inner highlight and shadow that give the button thickness.
// inset 0 1px 0 = a bright 1px line on the top edge (light catch)
// inset 0 -1px 0 = a dark 1px line on the bottom edge (thickness shadow)
const innerDepth =
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.15)]";

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-[rgba(0,227,253,0.08)]",
    "border border-[rgba(0,227,253,0.35)]",
    "text-text-primary",
    "hover:bg-[rgba(0,227,253,0.14)]",
    "hover:border-[rgba(0,227,253,0.5)]"
  ),
  secondary: cn(
    "bg-surface/30",
    "border border-border-subtle",
    "text-text-primary",
    "hover:bg-surface/50",
    "hover:border-border-strong"
  ),
  ghost: cn(
    "bg-transparent",
    "border border-border-subtle",
    "text-text-secondary",
    "hover:text-text-primary",
    "hover:border-border-strong",
    "hover:bg-surface/20"
  ),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-xl",
  md: "h-11 px-6 text-base rounded-2xl",
  lg: "h-14 px-8 text-lg rounded-2xl",
};

const baseClasses = cn(
  "inline-flex items-center justify-center gap-2",
  "relative font-medium",
  "backdrop-blur-xl",
  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-void",
  "disabled:pointer-events-none disabled:opacity-50",
  "glass-specular",
  shadowBase,
  innerDepth,
  shadowHover,
  shadowActive
);

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
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const motionProps = disabled
      ? {}
      : {
          whileHover: { y: -2, scale: 1.01 },
          whileTap: { y: 0, scale: 0.99 },
          transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
        };

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
        <Link href={href} className="inline-block">
          <motion.span className={classes} {...motionProps}>
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
