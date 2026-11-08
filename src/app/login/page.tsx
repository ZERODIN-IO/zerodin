"use client";

import {
  Glass,
  GlassButton,
  DisplayText,
  BodyText,
  Section,
  Reveal,
} from "@/components/glass";

export default function LoginPage() {
  return (
    <main className="min-h-screen pt-24">
      <Section spacing="lg">
        <Reveal>
          <Glass
            material="crystal"
            className="max-w-lg mx-auto p-10 md:p-14 text-center"
          >
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-4"
            >
              Sign in
            </BodyText>
            <DisplayText size="md" as="h1" className="mb-4">
              ZERODIN accounts live at ATHELOS.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-8">
              Authentication is handled by the ATHELOS Cloud platform.
              Sign in there to access your workspace.
            </BodyText>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://app.athelos.pro/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassButton variant="primary" size="lg">
                  Sign in to ATHELOS
                </GlassButton>
              </a>
              <a
                href="https://app.athelos.pro/cloud/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassButton variant="secondary" size="lg">
                  Start free trial
                </GlassButton>
              </a>
            </div>
          </Glass>
        </Reveal>
      </Section>
    </main>
  );
}
