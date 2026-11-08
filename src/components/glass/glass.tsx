"use client";

// The single glass surface primitive used everywhere on the site.
//
// Each panel is built from layers that create physical depth:
//
//   1. backdrop-blur + backdrop-saturate — the frost
//   2. base background tint — the color transmission
//   3. border — the edge
//   4. inner depth via inset shadow — a bright top line and a dark bottom
//      line, giving the panel thickness
//   5. outer shadows — contact + cast + ambient, three layers that make
//      the panel float above the surface
//
// The material prop selects the tint, blur, and shadow intensity.
// The hoverable prop makes the panel lift when hovered — this is what
// makes an interactive card read as floating rather than resting.
//
// Dark-mode and light-mode values come from the token system in
// globals.css. Every color class used below flips when the .light class
// is applied to <html>.

import { forwardRef, type ElementType, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassMaterial =
  | "clear"
  | "frosted"
  | "crystal"
  | "smoked"
  | "aurora-tinted"
  | "thick"
  | "bubble"
  | "water";

// Deeper shadow stacks than T4. The cast and ambient layers are
// pushed further out so every panel reads as clearly floating above
// the page, not resting on it.
const shadowStack = {
  soft: "shadow-[0_4px_10px_rgba(0,0,0,0.22),0_16px_32px_rgba(0,0,0,0.12),0_36px_72px_rgba(0,0,0,0.06)]",
  medium: "shadow-[0_6px_16px_rgba(0,0,0,0.26),0_24px_48px_rgba(0,0,0,0.14),0_56px_96px_rgba(0,0,0,0.08)]",
  strong: "shadow-[0_8px_20px_rgba(0,0,0,0.30),0_32px_64px_rgba(0,0,0,0.18),0_72px_128px_rgba(0,0,0,0.10)]",
  glow: "shadow-[0_6px_20px_rgba(0,227,253,0.10),0_24px_48px_rgba(0,227,253,0.06),0_4px_10px_rgba(0,0,0,0.18)]",
};

const innerDepth =
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.10)]";

// The hover shadow is larger than the resting shadow. When a card
// lifts 4px on hover, the shadow expands to compensate — this is
// what reads as "the panel is now further from the page."
const hoverShadow =
  "hover:shadow-[0_12px_28px_rgba(0,0,0,0.32),0_40px_80px_rgba(0,0,0,0.20),0_80px_140px_rgba(0,0,0,0.12)]";

const materialClasses: Record<GlassMaterial, string> = {
  clear: cn(
    "backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]",
    shadowStack.medium,
    innerDepth
  ),
  frosted: cn(
    "backdrop-blur-2xl bg-white/[0.06] border border-white/[0.06]",
    shadowStack.medium,
    innerDepth
  ),
  crystal: cn(
    "backdrop-blur-xl bg-white/[0.08] border border-white/[0.12]",
    shadowStack.strong,
    innerDepth
  ),
  smoked: cn(
    "backdrop-blur-lg bg-black/[0.30] border border-white/[0.04]",
    shadowStack.soft,
    innerDepth
  ),
  "aurora-tinted": cn(
    "backdrop-blur-2xl bg-[rgba(0,227,253,0.03)] border border-[rgba(0,227,253,0.15)]",
    shadowStack.glow,
    innerDepth
  ),
  thick: cn(
    "backdrop-blur-3xl bg-white/[0.05] border border-white/[0.08]",
    shadowStack.strong,
    innerDepth
  ),
  bubble: cn(
    "backdrop-blur-md bg-white/[0.10] border border-white/[0.15] rounded-full",
    shadowStack.soft
  ),
  water: cn(
    "backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]",
    shadowStack.medium,
    innerDepth
  ),
};

interface GlassProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  as?: ElementType;
  material?: GlassMaterial;
  specular?: boolean;
  hoverable?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Glass = forwardRef<HTMLDivElement, GlassProps>(
  function Glass(
    {
      as: Component = "div",
      material = "clear",
      specular,
      hoverable = false,
      className,
      children,
      ...rest
    },
    ref
  ) {
    const classes = cn(
      "relative rounded-2xl",
      materialClasses[material],
      hoverable && hoverShadow,
      hoverable && "transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
      className
    );

    if (hoverable) {
      return (
        <motion.div
          ref={ref}
          className={classes}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          {...rest}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <Component ref={ref} className={classes} {...rest}>
        {children}
      </Component>
    );
  }
);

export type { GlassProps, GlassMaterial };
