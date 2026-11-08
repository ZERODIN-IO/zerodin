"use client";

import {
  Glass,
  GlassButton,
  DisplayText,
  BodyText,
  Section,
  Reveal,
} from "@/components/glass";

export default function RegisterPage() {
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
              Start your trial
            </BodyText>
            <DisplayText size="md" as="h1" className="mb-4">
              Trial signup is at ATHELOS.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-8">
              Create a workspace at ATHELOS Cloud. The trial includes the
              full ATHELOS platform — five pillars, three deployment models.
            </BodyText>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://app.athelos.pro/cloud/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassButton variant="primary" size="lg">
                  Start free trial
                </GlassButton>
              </a>
              <a
                href="https://www.athelos.pro/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassButton variant="secondary" size="lg">
                  Read the docs
                </GlassButton>
              </a>
            </div>
          </Glass>
        </Reveal>
      </Section>
    </main>
  );
}
