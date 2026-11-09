"use client";

import {
  Glass,
  DisplayText,
  BodyText,
  Section,
  Reveal,
} from "@/components/glass";



export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24">
      <Section spacing="lg">
        <Reveal>
          <div className="text-center mb-12">
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-4"
            >
              Privacy
            </BodyText>
            <DisplayText size="lg" as="h1" className="mb-4">
              Privacy policy.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="max-w-2xl mx-auto">
              Last updated: October 2026
            </BodyText>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal>
            <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                What this site collects
              </DisplayText>
              <BodyText size="base" tone="secondary" className="mb-4">
                This website is a marketing site for ZERODIN Security. It does
                not use analytics, does not set tracking cookies, does not
                embed third-party scripts, and does not profile visitors.
              </BodyText>
              <BodyText size="base" tone="secondary">
                The only data stored on your device is a single preference in
                localStorage (<code className="font-mono text-sm text-text-accent">zerodin-theme</code>)
                recording whether you prefer dark or light mode. This preference
                stays on your device and is not transmitted to any server.
              </BodyText>
            </Glass>
          </Reveal>

          <Reveal delay={0.1}>
            <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                Contact form
              </DisplayText>
              <BodyText size="base" tone="secondary">
                If you use the contact form, the information you submit (name,
                email, subject, message) is sent to ZERODIN Security to respond
                to your inquiry. It is not shared with third parties. If you ask
                for the correspondence to be deleted, it will be deleted.
              </BodyText>
            </Glass>
          </Reveal>

          <Reveal delay={0.2}>
            <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                ATHELOS Cloud customer data
              </DisplayText>
              <BodyText size="base" tone="secondary">
                Customers of ATHELOS Cloud have their data stored in a
                dedicated database per tenant. The privacy and data processing
                terms for ATHELOS Cloud customers are governed by the
                Data Processing Agreement provided at signup and documented at
                www.athelos.pro.
              </BodyText>
            </Glass>
          </Reveal>

          <Reveal delay={0.3}>
            <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                OTA Sentinel
              </DisplayText>
              <BodyText size="base" tone="secondary">
                OTA Sentinel is deployed on customer infrastructure or operated
                under a direct engagement. ZERODIN does not receive or store
                customer SIM fleet data. Any SIM card information processed
                during an audit remains on the customer's infrastructure or is
                deleted at the end of the engagement.
              </BodyText>
            </Glass>
          </Reveal>

          <Reveal delay={0.4}>
            <Glass material="heavy" className="p-8 md:p-10">
              <DisplayText size="md" as="h2" className="text-xl mb-4">
                Contact
              </DisplayText>
              <BodyText size="base" tone="secondary" className="mb-2">
                Questions about this policy, or requests to delete data you
                have submitted through the contact form:
              </BodyText>
              <BodyText size="base" tone="primary" className="font-mono">
                security@zerodin.pro
              </BodyText>
            </Glass>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
