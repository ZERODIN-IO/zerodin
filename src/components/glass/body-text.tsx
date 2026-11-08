import { forwardRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Inter body text. Three sizes, three tones. The font-sans class
// resolves to var(--font-inter) via the @theme inline --font-sans
// token, and --font-sans is set on the body element from layout.tsx.

type BodySize = "lg" | "base" | "sm";
type BodyTone = "primary" | "secondary" | "tertiary";

const sizeClasses: Record<BodySize, string> = {
  lg: "text-[length:var(--text-body-lg)] leading-relaxed",
  base: "text-base leading-relaxed",
  sm: "text-sm leading-normal",
};

const toneClasses: Record<BodyTone, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
};

interface BodyTextProps {
  as?: ElementType;
  size?: BodySize;
  tone?: BodyTone;
  className?: string;
  children: ReactNode;
}

export const BodyText = forwardRef<HTMLParagraphElement, BodyTextProps>(
  function BodyText(
    { as: Component = "p", size = "base", tone = "primary", className, children },
    ref
  ) {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-sans",
          sizeClasses[size],
          toneClasses[tone],
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

export type { BodyTextProps, BodySize, BodyTone };
