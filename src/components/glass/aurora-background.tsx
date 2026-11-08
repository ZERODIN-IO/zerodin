// The aurora atmospheric background. Rendered once per page, fixed,
// behind everything. The intensity prop scales the opacity of the three
// radial gradients — 0 is invisible, 1 is the default, values above 1
// would brighten but are clamped here to avoid blowing out the page.
//
// The animation is defined in globals.css (.aurora-bg) and is a pure
// CSS keyframe. prefers-reduced-motion disables it there. No JavaScript
// runs for the drift.

export interface AuroraBackgroundProps {
  intensity?: number;
}

export function AuroraBackground({ intensity = 1 }: AuroraBackgroundProps) {
  const clamped = Math.max(0, Math.min(1, intensity));
  return (
    <div
      className="aurora-bg"
      aria-hidden="true"
      style={{ opacity: clamped }}
    />
  );
}
