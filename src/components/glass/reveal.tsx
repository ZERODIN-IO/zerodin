"use client";

// Scroll-triggered reveal. Wraps children in a Framer Motion element
// that animates them from an offset position to their natural place
// when they enter the viewport.
//
// Framer Motion's whileInView triggers when 20% of the element is
// visible. The once: true means it triggers only once per page load,
// not on every scroll direction change. The margin reduces the
// trigger point slightly so elements animate before they reach the
// very edge of the viewport.
//
// prefers-reduced-motion: Framer Motion respects it automatically —
// when the user has enabled it, the animation is skipped and the
// element renders in its final position immediately. No conditional
// logic needed here.

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

const directionOffset: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  none: { x: 0, y: 0 },
};

export interface RevealProps {
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: RevealDirection;
  className?: string;
  children: ReactNode;
}

export function Reveal({
  delay = 0,
  duration = 0.6,
  distance,
  direction = "up",
  className,
  children,
  ...rest
}: RevealProps & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport">) {
  const baseOffset = directionOffset[direction];
  const scale = distance !== undefined ? distance / 30 : 1;

  const initial = {
    opacity: 0,
    x: baseOffset.x * scale,
    y: baseOffset.y * scale,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
