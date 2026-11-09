"use client";

import {
  Glass,
  GlassButton,
  DisplayText,
  BodyText,
  Section,
} from "@/components/glass";



export default function DocsPage() {
  return (
    <main className="min-h-screen pt-24">
      <Section spacing="lg">
        <div className="text-center mb-12">
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-4"
            >
              Documentation
            </BodyText>
            <DisplayText size="lg" as="h1" className="mb-4">
              Docs.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="max-w-2xl mx-auto">
              ATHELOS documentation lives at its own site. OTA Sentinel
              documentation is available on request while the product is
              being onboarded with its first operators.
            </BodyText>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Glass material="heavy" className="p-8 md:p-10 h-full flex flex-col">
              <DisplayText size="md" as="h2" className="text-2xl mb-3">
                ATHELOS
              </DisplayText>
              <BodyText size="base" tone="secondary" className="mb-6 flex-1">
                The full documentation for ATHELOS — five pillars, three
                deployment models, and the database-per-tenant Cloud
                architecture — is maintained at www.athelos.pro/docs.
              </BodyText>
              <a
                href="https://www.athelos.pro/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassButton variant="primary" size="md">
                  Open ATHELOS docs
                </GlassButton>
              </a>
            </Glass>

          <Glass material="heavy" className="p-8 md:p-10 h-full flex flex-col">
              <DisplayText size="md" as="h2" className="text-2xl mb-3">
                OTA Sentinel
              </DisplayText>
              <BodyText size="base" tone="secondary" className="mb-6 flex-1">
                OTA Sentinel ships with a technical brief for network
                operators and regulators. Request the brief through the
                contact form and it will be sent directly.
              </BodyText>
              <GlassButton href="/contact?product=ota-sentinel" variant="secondary" size="md">
                Request the brief
              </GlassButton>
            </Glass>
        </div>

        <Glass material="heavy" className="max-w-3xl mx-auto p-8 md:p-12 mt-12 text-center">
            <DisplayText size="md" as="h2" className="text-2xl mb-3">
              Questions about deployment?
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-6">
              If you are deploying ATHELOS self-hosted, or evaluating OTA
              Sentinel for a telecom network, the operator is available for
              direct technical conversations.
            </BodyText>
            <GlassButton href="/contact" variant="ghost" size="md">
              Contact us
            </GlassButton>
          </Glass>
      </Section>
    </main>
  );
}
