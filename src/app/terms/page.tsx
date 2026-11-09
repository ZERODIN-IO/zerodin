"use client";

import {
  Glass,
  DisplayText,
  BodyText,
  Section,
} from "@/components/glass";



export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24">
      <Section spacing="lg">
        <div className="text-center mb-12">
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-4"
            >
              Terms
            </BodyText>
            <DisplayText size="lg" as="h1" className="mb-4">
              Terms of service.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="max-w-2xl mx-auto">
              Last updated: October 2026
            </BodyText>
          </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                What this site provides
              </DisplayText>
              <BodyText size="base" tone="secondary">
                This website is the marketing site for ZERODIN Security. It
                describes two products — ATHELOS and OTA Sentinel. It does not
                provide the products themselves. Use of the products is
                governed by the licenses and agreements provided at the point
                of engagement.
              </BodyText>
            </Glass>

          <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                ATHELOS
              </DisplayText>
              <BodyText size="base" tone="secondary">
                ATHELOS is available in three deployment models. Self-hosted
                use is governed by the license terms in the ATHELOS repository.
                Dedicated and Cloud deployments are governed by a direct
                agreement between ZERODIN Security and the customer. The
                terms of the Cloud trial and paid plans are documented at
                www.athelos.pro.
              </BodyText>
            </Glass>

          <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                OTA Sentinel
              </DisplayText>
              <BodyText size="base" tone="secondary">
                OTA Sentinel engagements — audit reports, network licenses,
                and sovereign deployments — are governed by a direct written
                agreement between ZERODIN Security and the customer. The scope
                of work, deliverables, and payment terms are defined in that
                agreement. Audit findings are provided as-is; remediation is
                the customer's responsibility unless explicitly included in
                the engagement scope.
              </BodyText>
            </Glass>

          <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                Liability
              </DisplayText>
              <BodyText size="base" tone="secondary">
                This site is provided as-is. ZERODIN Security is not liable for
                any decisions made based on the information on this site. For
                products, liability is limited as described in the applicable
                license or engagement agreement.
              </BodyText>
            </Glass>

          <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                Contact
              </DisplayText>
              <BodyText size="base" tone="secondary" className="mb-2">
                Questions about these terms:
              </BodyText>
              <BodyText size="base" tone="primary" className="font-mono">
                security@zerodin.pro
              </BodyText>
            </Glass>
        </div>
      </Section>
    </main>
  );
}
