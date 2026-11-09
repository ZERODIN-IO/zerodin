"use client";

import Link from "next/link";
import {
  Glass,
  GlassButton,
  DisplayText,
  BodyText,
  Section,
  Reveal,
} from "@/components/glass";

const products = [
  {
    name: "ATHELOS",
    slug: "athelos",
    audience: "Security operators, penetration testers, solo consultants",
    problem: "Twenty tools, no single workspace. The finding is in a different app. The report takes three days.",
    does: "Five pillars in one tool: knowledge, engagements, delivery, business, tooling. Self-hosted, dedicated, or Cloud.",
    doesNot: "SIM card auditing. Telecom network management. Hardware integration.",
    cta: { label: "Start free trial", href: "https://app.athelos.pro/cloud/signup" },
    material: "heavy" as const,
  },
  {
    name: "OTA Sentinel",
    slug: "ota-sentinel",
    audience: "Telecom operators, regulators, managed security providers",
    problem: "SIM cards configured years ago with insecure applets. No record of what was deployed. No way to audit.",
    does: "Audits SIM cards for Simjacker vulnerabilities. Secure OTA management with KIC/KID keys. Three commercial tiers.",
    doesNot: "General-purpose pentesting. Web application security. Endpoint detection.",
    cta: { label: "Request an audit", href: "/contact?product=ota-sentinel" },
    material: "heavy" as const,
  },
];

const questions = [
  {
    question: "Do you need to audit SIM cards or manage OTA updates?",
    answer: "OTA Sentinel",
    detail: "It is built specifically for telecom SIM security. ATHELOS does not touch SIM cards.",
  },
  {
    question: "Do you run penetration tests, security assessments, or consulting engagements?",
    answer: "ATHELOS",
    detail: "It holds the full arc of the operator's work. OTA Sentinel is not a pentesting tool.",
  },
  {
    question: "Do you need both?",
    answer: "Both",
    detail: "They are different products for different work. An MSSP may use both. A telecom uses OTA Sentinel. A pentester uses ATHELOS.",
  },
];

export default function ComparePage() {
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
              Compare
            </BodyText>
            <DisplayText size="lg" as="h1" className="mb-4">
              Which product fits your work?
            </DisplayText>
            <BodyText size="base" tone="secondary" className="max-w-2xl mx-auto">
              ATHELOS and OTA Sentinel are different products for different
              problems. Here is the honest comparison.
            </BodyText>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={0.1 * index}>
              <Glass material={product.material} className="p-8 md:p-10 h-full flex flex-col">
                <DisplayText size="md" as="h2" className="text-2xl mb-6">
                  {product.name}
                </DisplayText>

                <div className="space-y-6 flex-1">
                  <div>
                    <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-2">
                      Who it is for
                    </BodyText>
                    <BodyText size="base" tone="secondary">
                      {product.audience}
                    </BodyText>
                  </div>
                  <div>
                    <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-2">
                      The problem it solves
                    </BodyText>
                    <BodyText size="base" tone="secondary">
                      {product.problem}
                    </BodyText>
                  </div>
                  <div>
                    <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-2">
                      What it does
                    </BodyText>
                    <BodyText size="base" tone="secondary">
                      {product.does}
                    </BodyText>
                  </div>
                  <div>
                    <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-2">
                      What it does not do
                    </BodyText>
                    <BodyText size="base" tone="secondary">
                      {product.doesNot}
                    </BodyText>
                  </div>
                </div>

                <div className="mt-8">
                  {product.cta.href.startsWith("http") ? (
                    <a href={product.cta.href} target="_blank" rel="noopener noreferrer">
                      <GlassButton variant="primary" size="md">
                        {product.cta.label}
                      </GlassButton>
                    </a>
                  ) : (
                    <Link href={product.cta.href}>
                      <GlassButton variant="primary" size="md">
                        {product.cta.label}
                      </GlassButton>
                    </Link>
                  )}
                </div>
              </Glass>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section spacing="md">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <DisplayText size="md" as="h2" className="mb-8">
              Three questions.
            </DisplayText>
            <div className="space-y-4">
              {questions.map((q, index) => (
                <Glass key={q.question} material="heavy" className="p-6">
                  <BodyText size="base" tone="primary" className="mb-2">
                    {q.question}
                  </BodyText>
                  <BodyText size="sm" tone="tertiary" className="mb-2 uppercase tracking-wider">
                    Answer: {q.answer}
                  </BodyText>
                  <BodyText size="sm" tone="secondary">
                    {q.detail}
                  </BodyText>
                </Glass>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section spacing="lg">
        <Reveal>
          <Glass material="heavy" className="max-w-3xl mx-auto p-10 text-center">
            <DisplayText size="md" as="h2" className="mb-4">
              Still not sure?
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-6">
              Contact the operator directly. Every question is read and
              answered by the person who built the software.
            </BodyText>
            <Link href="/contact">
              <GlassButton variant="primary" size="md">
                Contact us
              </GlassButton>
            </Link>
          </Glass>
        </Reveal>
      </Section>
    </main>
  );
}
