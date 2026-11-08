import { forwardRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Instrument Serif display text. Three sizes mapped to the fluid
// clamp() tokens in globals.css. The font-display utility class
// resolves to var(--font-instrument-serif) via the @theme inline
// --font-display token.

type DisplaySize = "xl" | "lg" | "md";

const sizeClasses: Record<DisplaySize, string> = {
  xl: "text-[length:var(--text-display-xl)] leading-[0.95] tracking-[-0.02em]",
  lg: "text-[length:var(--text-display-lg)] leading-[1] tracking-[-0.015em]",
  md: "text-[length:var(--text-display-md)] leading-[1.05] tracking-[-0.01em]",
};

interface DisplayTextProps {
  as?: ElementType;
  size?: DisplaySize;
  className?: string;
  children: ReactNode;
}

export const DisplayText = forwardRef<HTMLHeadingElement, DisplayTextProps>(
  function DisplayText(
    { as: Component = "h1", size = "lg", className, children },
    ref
  ) {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-[family-name:var(--font-instrument-serif)] text-text-primary",
          sizeClasses[size],
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

export type { DisplayTextProps, DisplaySize };
