"use client";

// A temporary verification page for the Phase 4 glass system.
// Renders every material, every button variant and size, every
// display size, every body size and tone, and every panel ratio.
// This page is deleted in Phase 12 or kept as an internal reference.

import {
  Glass,
  GlassButton,
  GlassPanel,
  DisplayText,
  BodyText,
  Section,
} from "@/components/glass";

const materials = [
  { name: "clear", label: "Clear Liquid" },
  { name: "frosted", label: "Frosted" },
  { name: "crystal", label: "Crystal" },
  { name: "smoked", label: "Smoked" },
  { name: "aurora-tinted", label: "Aurora Tinted" },
  { name: "thick", label: "Thick Translucent" },
  { name: "bubble", label: "Floating Bubble" },
  { name: "water", label: "Water" },
] as const;

export default function DesignTestPage() {
  return (
    <main className="min-h-screen pt-16">
      <Section spacing="lg">
        <DisplayText size="md" as="h1" className="mb-4">
          Design System Verification
        </DisplayText>
        <BodyText tone="secondary" className="mb-12">
          Every material, every variant, every size. If it looks right here,
          it will look right everywhere.
        </BodyText>

        {/* Materials */}
        <DisplayText size="md" as="h2" className="mb-6">
          Glass Materials
        </DisplayText>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {materials.map((m) => (
            <Glass
              key={m.name}
              material={m.name}
              className="aspect-[5/3] flex flex-col items-center justify-center p-4"
            >
              <BodyText size="sm" tone="primary" className="font-medium">
                {m.label}
              </BodyText>
              <BodyText size="sm" tone="tertiary">
                {m.name}
              </BodyText>
            </Glass>
          ))}
        </div>

        {/* Buttons */}
        <DisplayText size="md" as="h2" className="mb-6">
          Button Variants
        </DisplayText>
        <div className="space-y-8 mb-16">
          {(["primary", "secondary", "ghost"] as const).map((variant) => (
            <div key={variant}>
              <BodyText size="sm" tone="tertiary" className="mb-3 uppercase tracking-wider">
                {variant}
              </BodyText>
              <div className="flex flex-wrap items-center gap-3">
                <GlassButton variant={variant} size="sm">
                  Small
                </GlassButton>
                <GlassButton variant={variant} size="md">
                  Medium
                </GlassButton>
                <GlassButton variant={variant} size="lg">
                  Large
                </GlassButton>
              </div>
            </div>
          ))}
        </div>

        {/* Display text */}
        <DisplayText size="md" as="h2" className="mb-6">
          Display Typography
        </DisplayText>
        <div className="space-y-6 mb-16">
          <DisplayText size="xl">Display XL</DisplayText>
          <DisplayText size="lg">Display LG</DisplayText>
          <DisplayText size="md">Display MD</DisplayText>
        </div>

        {/* Body text */}
        <DisplayText size="md" as="h2" className="mb-6">
          Body Typography
        </DisplayText>
        <div className="space-y-4 mb-16">
          <BodyText size="lg" tone="primary">
            Body large, primary — this is the hero subtext size.
          </BodyText>
          <BodyText size="base" tone="primary">
            Body base, primary — this is the standard paragraph size.
          </BodyText>
          <BodyText size="base" tone="secondary">
            Body base, secondary — this is the supporting text tone.
          </BodyText>
          <BodyText size="sm" tone="tertiary">
            Body small, tertiary — this is captions and metadata only.
          </BodyText>
        </div>

        {/* Panels */}
        <DisplayText size="md" as="h2" className="mb-6">
          Panel Ratios
        </DisplayText>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GlassPanel material="clear" ratio="square">
            <BodyText size="sm" tone="secondary">
              Square
            </BodyText>
          </GlassPanel>
          <GlassPanel material="crystal" ratio="portrait">
            <BodyText size="sm" tone="secondary">
              Portrait
            </BodyText>
          </GlassPanel>
          <GlassPanel material="clear" ratio="landscape">
            <BodyText size="sm" tone="secondary">
              Landscape
            </BodyText>
          </GlassPanel>
          <GlassPanel material="clear" ratio="sliver">
            <BodyText size="sm" tone="secondary">
              Sliver
            </BodyText>
          </GlassPanel>
        </div>
      </Section>
    </main>
  );
}
