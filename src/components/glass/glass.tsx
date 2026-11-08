// The single glass surface primitive used everywhere on the site.
//
// Every panel is built from the same six layers:
//   1. backdrop-blur + backdrop-saturate — the frost
//   2. base background tint — the color transmission
//   3. 1px border — the edge
//   4. ::before specular highlight — the light catching the upper-left
//   5. inset shadow — the inner depth
//   6. optional SVG displacement filter — the water material only
//
// The material prop selects layers 1-2-3. The specular prop controls
// layer 4 (default on). The water material applies layer 6.
//
// Dark-mode and light-mode variants come from the .light class on
// <html> which is set by ThemeProvider. The tint and border classes
// below are tuned for dark mode; .light overrides in globals.css
// adjust the base colors that sit behind the tint.

import { forwardRef, type ElementType, type ReactNode } from "react";
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

const materialClasses: Record<GlassMaterial, string> = {
  // Default panel — the workhorse. Subtle tint, standard blur.
  clear: "backdrop-blur-xl bg-white/[0.04] border-white/[0.08]",
  // Heavier blur, less transparent — for modals and dropdowns.
  frosted: "backdrop-blur-2xl bg-white/[0.06] border-white/[0.06]",
  // Brightest glass — for the featured panels that need to pop.
  crystal: "backdrop-blur-xl bg-white/[0.08] border-white/[0.12]",
  // Dark recessed glass — for nav backgrounds and footers.
  smoked: "backdrop-blur-lg bg-black/[0.30] border-white/[0.04]",
  // Cyan tinted — for the hero only, used with restraint.
  "aurora-tinted":
    "backdrop-blur-2xl bg-[rgba(0,227,253,0.03)] border-[rgba(0,227,253,0.15)]",
  // Deepest blur — for large section containers.
  thick: "backdrop-blur-3xl bg-white/[0.05] border-white/[0.08]",
  // Circular accent objects — decorative, not for content.
  bubble: "backdrop-blur-md bg-white/[0.10] border-white/[0.15] rounded-full",
  // Water material — SVG displacement added via filter class below.
  // The filter reference (#glass-displacement) is defined in the site's
  // inline SVG defs (added in Phase 7 with the hero). Until then, the
  // water material renders as clear with a slight tint shift.
  water: "backdrop-blur-xl bg-white/[0.04] border-white/[0.08]",
};

interface GlassProps<T extends ElementType = "div"> {
  as?: T;
  material?: GlassMaterial;
  specular?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Glass = forwardRef<HTMLDivElement, GlassProps>(
  function Glass(
    {
      as: Component = "div",
      material = "clear",
      specular = true,
      className,
      children,
      ...rest
    },
    ref
  ) {
    return (
      <Component
        ref={ref}
        className={cn(
          "relative rounded-2xl border",
          materialClasses[material],
          specular && "glass-specular",
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export type { GlassProps, GlassMaterial };
