"use client";

import Link from "next/link";
import {
  Glass,
  GlassButton,
  DisplayText,
  BodyText,
  Section,
} from "@/components/glass";

const athelosModels = [
  {
    name: "Self-Hosted",
    price: "Free",
    description:
      "The tool runs on your own hardware. Signed releases, SLSA Level 2 provenance, no license fee.",
  },
  {
    name: "Dedicated",
    price: "Contact",
    description:
      "One Hetzner VPS per customer, provisioned from the same codebase. Priced by infrastructure.",
  },
  {
    name: "Cloud",
    price: "Tiered",
    description:
      "Multi-tenant SaaS with a database per tenant. Three tiers from Community to Enterprise.",
  },
];

const otaSentinelTiers = [
  {
    name: "Audit Report",
    price: "$5,000 – $10,000",
    billing: "One-time engagement",
    description:
      "A sample-based audit of the operator's SIM cards, delivered as a PDF compliance report with the vulnerable ICCIDs and the recommended remediation path.",
    bullets: [
      "Sample of 10,000 SIM cards (adjustable)",
      "Vulnerability enumeration with evidence",
      "PDF report suitable for regulators",
    ],
  },
  {
    name: "Network License",
    price: "From $25,000",
    billing: "Perpetual + 20% annual maintenance",
    description:
      "The operator deploys OTA Sentinel on their own infrastructure. Used continuously for audits and OTA management across the SIM fleet.",
    bullets: [
      "Self-hosted on the operator's infrastructure",
      "Unlimited SIMs, unlimited scans",
      "Annual maintenance with security updates",
    ],
  },
  {
    name: "Sovereign / MSSP",
    price: "Custom",
    billing: "Negotiated",
    description:
      "For government regulators and MSSPs auditing multiple networks. Includes source escrow, unlimited deployments, and legal indemnity.",
    bullets: [
      "Source code escrow",
      "Unlimited deployments across networks",
      "Legal indemnity for regulator use",
    ],
  },
];



export default function PricingPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Intro */}
      <Section spacing="lg">
        <DisplayText size="lg" as="h1" className="mb-4">
            Pricing.
          </DisplayText>
          <BodyText size="lg" tone="secondary" className="max-w-2xl">
            Two products, two pricing models. ATHELOS has three deployment
            tiers that map to how you run it. OTA Sentinel is priced by
            engagement.
          </BodyText>
      </Section>

      {/* ATHELOS */}
      <Section spacing="md">
        <div className="mb-10">
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-2"
            >
              Product
            </BodyText>
            <DisplayText size="md" as="h2" className="mb-3">
              ATHELOS
            </DisplayText>
            <BodyText size="base" tone="secondary" className="max-w-2xl">
              Three deployment models, each with its own pricing structure.
              The actual tier details live on the ATHELOS pricing page.
            </BodyText>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {athelosModels.map((model, index) => (
            <Glass material="heavy" className="h-full p-6">
                <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-2">
                  {model.name}
                </BodyText>
                <BodyText
                  size="lg"
                  tone="primary"
                  className="font-[family-name:var(--font-instrument-serif)] text-2xl mb-3"
                >
                  {model.price}
                </BodyText>
                <BodyText size="sm" tone="secondary">
                  {model.description}
                </BodyText>
              </Glass>
          ))}
        </div>

        <div className="flex justify-center">
            <a
              href="https://www.athelos.pro/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlassButton variant="primary" size="md">
                See ATHELOS pricing
              </GlassButton>
            </a>
          </div>
      </Section>

      {/* OTA Sentinel */}
      <Section spacing="md">
        <div className="mb-10">
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-2"
            >
              Product
            </BodyText>
            <DisplayText size="md" as="h2" className="mb-3">
              OTA Sentinel
            </DisplayText>
            <BodyText size="base" tone="secondary" className="max-w-2xl">
              Three commercial models, from a one-time audit to a perpetual
              license and a sovereign deployment. All engagements start with
              an audit.
            </BodyText>
          </div>

        <div className="space-y-4">
          {otaSentinelTiers.map((tier, index) => (
            <Glass
                material="aurora"
                className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
              >
                <div className="md:col-span-5">
                  <DisplayText size="md" as="h3" className="text-xl mb-2">
                    {tier.name}
                  </DisplayText>
                  <BodyText size="sm" tone="tertiary" className="mb-4">
                    {tier.billing}
                  </BodyText>
                  <BodyText
                    size="lg"
                    tone="primary"
                    className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl mb-3"
                  >
                    {tier.price}
                  </BodyText>
                  <BodyText size="sm" tone="secondary">
                    {tier.description}
                  </BodyText>
                </div>
                <div className="md:col-span-7 md:border-l md:border-white/[0.06] md:pl-8 flex flex-col justify-between">
                  <ul className="space-y-3 mb-6">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span
                          className="mt-2 h-1 w-1 rounded-full bg-text-accent shrink-0"
                          aria-hidden="true"
                        />
                        <BodyText size="sm" tone="secondary">
                          {bullet}
                        </BodyText>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact?product=ota-sentinel">
                    <GlassButton variant="secondary" size="md">
                      Request an audit
                    </GlassButton>
                  </Link>
                </div>
              </Glass>
          ))}
        </div>
      </Section>

      {/* Note about future products */}
      <Section spacing="sm">
        <div className="max-w-3xl mx-auto text-center">
            <BodyText size="base" tone="secondary">
              More products will be added as they ship. Contact us to be
              notified.
            </BodyText>
          </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="lg">
        <Glass
            material="thick"
            className="max-w-3xl mx-auto p-10 md:p-14 text-center"
          >
            <DisplayText size="md" as="h2" className="mb-4">
              Questions about which tier fits?
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-8 max-w-lg mx-auto">
              If you are not sure whether Self-Hosted, Dedicated, or Cloud is
              right for your ATHELOS deployment, or which OTA Sentinel
              engagement fits your network, talk to us.
            </BodyText>
            <Link href="/contact">
              <GlassButton variant="primary" size="lg">
                Contact us
              </GlassButton>
            </Link>
          </Glass>
      </Section>
    </main>
  );
}
