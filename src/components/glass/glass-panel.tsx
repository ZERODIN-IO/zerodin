import { forwardRef, type ReactNode } from "react";
import { Glass, type GlassMaterial } from "./glass";
import { cn } from "@/lib/utils";

// Panel is a <Glass> with preset size and ratio classes so no caller
// ever writes the same combination twice. The glass materials stay
// flexible; the shapes are fixed presets.

type PanelSize = "sm" | "md" | "lg" | "xl";
type PanelRatio = "square" | "portrait" | "landscape" | "sliver" | "auto";

const sizeClasses: Record<PanelSize, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12",
};

const ratioClasses: Record<PanelRatio, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/9]",
  sliver: "aspect-[5/1]",
  auto: "",
};

interface GlassPanelProps {
  material?: GlassMaterial;
  size?: PanelSize;
  ratio?: PanelRatio;
  specular?: boolean;
  className?: string;
  children: ReactNode;
}

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  function GlassPanel(
    {
      material = "clear",
      size = "md",
      ratio = "auto",
      specular = true,
      className,
      children,
    },
    ref
  ) {
    return (
      <Glass
        ref={ref}
        material={material}
        specular={specular}
        className={cn(sizeClasses[size], ratioClasses[ratio], className)}
      >
        {children}
      </Glass>
    );
  }
);

export type { GlassPanelProps, PanelSize, PanelRatio };
