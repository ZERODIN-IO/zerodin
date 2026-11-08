import { forwardRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Depth-plane wrapper. Section is a plain semantic <section> with a
// relative position so nested <Glass> panels render at a consistent
// depth within it. Spacing variants give the page a rhythm without
// hardcoding padding in every section.

type SectionSpacing = "sm" | "md" | "lg" | "xl";

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-12",
  md: "py-20",
  lg: "py-32",
  xl: "py-40",
};

interface SectionProps {
  as?: ElementType;
  spacing?: SectionSpacing;
  container?: boolean;
  className?: string;
  children: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      as: Component = "section",
      spacing = "md",
      container = true,
      className,
      children,
    },
    ref
  ) {
    return (
      <Component
        ref={ref}
        className={cn("relative", spacingClasses[spacing], className)}
      >
        {container ? (
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          children
        )}
      </Component>
    );
  }
);

export type { SectionProps, SectionSpacing };
