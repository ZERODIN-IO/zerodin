"use client";

import Link from "next/link";
import {
  Glass,
  GlassButton,
  DisplayText,
  BodyText,
  Section,
} from "@/components/glass";

const paths = [
  {
    number: "Path 1",
    name: "Audit",
    description:
      "Identify SIM cards that are misconfigured with insecure applets such as the S@T Browser with MSL=0, making them vulnerable to the Simjacker attack. Runs against the operator's existing SIM fleet through a PC/SC reader.",
    capabilities: [
      "Reads ICCID, IMSI, ATR, and the installed applet list (TARs)",
      "Detects MSL=0 misconfigurations that bypass KIC/KID protection",
      "Constructs ETSI TS 102 225 payloads with SPI=0x0000 to prove exploitability",
    ],
  },
  {
    number: "Path 2",
    name: "Secure Management",
    description:
      "For networks that hold their own KIC/KID cryptographic keys, construct and dispatch encrypted OTA payloads through the operator's SMPP connection. Every command is wrapped in 3DES/AES with a valid cryptographic checksum.",
    capabilities: [
      "ETSI TS 102 225 SCP80 OTA packet construction with operator keys",
      "Raw-socket SMPP v3.4 client bound to the operator's SMSC",
      "Asynchronous campaign worker with throttling and deliver_sm verification",
    ],
  },
];

const tiers = [
  {
    name: "Audit Report",
    price: "$5,000 – $10,000",
    billing: "One-time engagement",
    description:
      "ZERODIN scans a sample of the operator's SIM cards and delivers a PDF compliance report detailing the vulnerable ICCIDs and the recommended remediation path.",
    bullets: [
      "Sample-based audit (e.g. 10,000 cards)",
      "Vulnerability enumeration with evidence",
      "PDF compliance report for regulators",
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
      "For government regulators and managed security service providers auditing multiple networks. Includes source code escrow, unlimited deployments, and legal indemnity.",
    bullets: [
      "Source code escrow",
      "Unlimited deployments across networks",
      "Legal indemnity for regulator use",
    ],
  },
];



export default function OtaSentinelPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero with SIM-card glass motif */}
      <Section spacing="lg">
        <div className="relative max-w-3xl mx-auto">
            {/* SIM card silhouette behind the hero panel */}
            <div
              className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto max-w-[500px] opacity-[0.04]"
              >
                <path
                  d="M 60 20 L 340 20 Q 360 20 360 40 L 360 260 Q 360 280 340 280 L 60 280 Q 40 280 40 260 L 40 100 L 100 40 Q 110 30 120 20 Z M 40 100 L 120 100 L 120 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                />
                <rect x="80" y="80" width="80" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white" />
                <circle cx="120" cy="110" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white" />
                <line x1="80" y1="200" x2="360" y2="200" stroke="currentColor" strokeWidth="1" className="text-white" />
                <line x1="80" y1="230" x2="360" y2="230" stroke="currentColor" strokeWidth="1" className="text-white" />
              </svg>
            </div>

            <Glass
              material="heavy"
              className="p-10 md:p-16 text-center"
            >
              <BodyText
                size="sm"
                tone="tertiary"
                className="uppercase tracking-[0.2em] mb-6"
              >
                Product
              </BodyText>
              <DisplayText size="xl" as="h1" className="mb-6">
                OTA Sentinel
              </DisplayText>
              <BodyText size="lg" tone="secondary" className="mb-10 max-w-xl mx-auto">
                SIM security auditing and OTA management for telecom operators,
                regulators, and managed security service providers.
              </BodyText>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact?product=ota-sentinel">
                  <GlassButton variant="primary" size="lg">
                    Request an audit
                  </GlassButton>
                </Link>
                <Link href="/products">
                  <GlassButton variant="ghost" size="lg">
                    See all products
                  </GlassButton>
                </Link>
              </div>
            </Glass>
          </div>
      </Section>

      {/* The two paths */}
      <Section spacing="md">
        <DisplayText size="md" as="h2" className="mb-4">
            Two paths, one platform.
          </DisplayText>
          <BodyText size="base" tone="secondary" className="max-w-2xl mb-12">
            OTA Sentinel solves two distinct problems. Which one you need
            depends on whether you own the KIC/KID keys.
          </BodyText>

        <div className="space-y-4">
          {paths.map((path, index) => (
            <Glass
                material="heavy"
                className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 md:px-8"
              >
                <div className="md:w-64 md:shrink-0">
                  <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-1">
                    {path.number}
                  </BodyText>
                  <DisplayText size="md" as="h3" className="text-lg md:text-xl">
                    {path.name}
                  </DisplayText>
                </div>
                <div className="flex-1">
                  <BodyText size="base" tone="primary" className="mb-4">
                    {path.description}
                  </BodyText>
                  <ul className="space-y-2">
                    {path.capabilities.map((capability) => (
                      <li key={capability} className="flex gap-3">
                        <span
                          className="mt-2 h-1 w-1 rounded-full bg-text-accent shrink-0"
                          aria-hidden="true"
                        />
                        <BodyText size="sm" tone="secondary">
                          {capability}
                        </BodyText>
                      </li>
                    ))}
                  </ul>
                </div>
              </Glass>
          ))}
        </div>
      </Section>

      {/* Three commercial tiers */}
      <Section spacing="md">
        <DisplayText size="md" as="h2" className="mb-4">
            Commercial models.
          </DisplayText>
          <BodyText size="base" tone="secondary" className="max-w-2xl mb-12">
            Three engagement types, from a one-time audit to a perpetual
            self-hosted license and a sovereign deployment.
          </BodyText>

        <div className="space-y-4">
          {tiers.map((tier, index) => (
            <Glass
                material="heavy"
                className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
              >
                <div className="md:col-span-5">
                  <DisplayText size="md" as="h3" className="text-xl mb-2">
                    {tier.name}
                  </DisplayText>
                  <BodyText size="sm" tone="tertiary" className="mb-4">
                    {tier.billing}
                  </BodyText>
                  <BodyText size="lg" tone="primary" className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl mb-3">
                    {tier.price}
                  </BodyText>
                  <BodyText size="sm" tone="secondary">
                    {tier.description}
                  </BodyText>
                </div>
                <div className="md:col-span-7 md:border-l md:border-white/[0.06] md:pl-8">
                  <ul className="space-y-3">
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
                </div>
              </Glass>
          ))}
        </div>
      </Section>

      {/* Security posture panel */}
      <Section spacing="md">
        <Glass
            material="heavy"
            className="max-w-3xl mx-auto p-10 md:p-14"
          >
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-6 text-center"
            >
              Security posture
            </BodyText>
            <div className="space-y-6">
              <div>
                <DisplayText size="md" as="h3" className="text-lg mb-2">
                  Audit logging
                </DisplayText>
                <BodyText size="base" tone="secondary">
                  Every scan, every command, and every access is recorded in
                  a tamper-evident log. If any record is altered, the change
                  is cryptographically detectable.
                </BodyText>
              </div>
              <div>
                <DisplayText size="md" as="h3" className="text-lg mb-2">
                  Credential protection
                </DisplayText>
                <BodyText size="base" tone="secondary">
                  Network credentials — including SMSC passwords and SIM
                  authentication keys — are encrypted at rest using AES-256
                  and are never written to disk or logs in plaintext.
                </BodyText>
              </div>
              <div>
                <DisplayText size="md" as="h3" className="text-lg mb-2">
                  Access control
                </DisplayText>
                <BodyText size="base" tone="secondary">
                  Role-based access separates read-only analysts from
                  operators who can execute campaigns. Every action is
                  attributed to a named user.
                </BodyText>
              </div>
              <div>
                <DisplayText size="md" as="h3" className="text-lg mb-2">
                  Deployment
                </DisplayText>
                <BodyText size="base" tone="secondary">
                  OTA Sentinel can be deployed on the operator's own
                  infrastructure, keeping all SIM card data inside the
                  network perimeter.
                </BodyText>
              </div>
            </div>
          </Glass>
      </Section>

      {/* Final CTA */}
      <Section spacing="lg">
        <Glass
            material="heavy"
            className="max-w-3xl mx-auto p-10 md:p-14 text-center"
          >
            <DisplayText size="md" as="h2" className="mb-4">
              Start with an audit.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-8 max-w-lg mx-auto">
              A one-time engagement against a sample of your SIM fleet
              establishes the baseline. From there, we discuss whether a
              perpetual license or sovereign deployment fits your network.
            </BodyText>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact?product=ota-sentinel">
                <GlassButton variant="primary" size="lg">
                  Request an audit
                </GlassButton>
              </Link>
              <Link href="/products">
                <GlassButton variant="ghost" size="lg">
                  See all products
                </GlassButton>
              </Link>
            </div>
          </Glass>
      </Section>
    </main>
  );
}
