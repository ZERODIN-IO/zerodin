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

const stats = [
  { value: "2", label: "Products Shipped" },
  { value: "1", label: "Operator" },
  { value: "0", label: "Venture Capital" },
  { value: "0", label: "SaaS Dependencies" },
];

const principles = [
  {
    name: "Self-hosted where possible",
    description:
      "Customers can run the software on their own infrastructure and keep their data on their own infrastructure. No SaaS dependency for the software to work.",
  },
  {
    name: "No cloud AI on client data",
    description:
      "Local AI features use Ollama running on the customer's own hardware. The operator's data does not leave the operator's network.",
  },
  {
    name: "Audited",
    description:
      "ATHELOS has database-per-tenant isolation proven by an OWASP cross-tenant boundary test. OTA Sentinel has row-level security with hash-chained audit logs and 11/11 tests passing.",
  },
  {
    name: "Shipped",
    description:
      "Both products run in production today. No roadmap of five products that do not exist. Two products that work.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <Section spacing="lg">
        <Reveal>
          <Glass
            material="crystal"
            className="max-w-3xl mx-auto p-10 md:p-16 text-center"
          >
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-6"
            >
              About
            </BodyText>
            <DisplayText size="xl" as="h1" className="mb-6">
              Two products, one operator.
            </DisplayText>
            <BodyText size="lg" tone="secondary" className="max-w-xl mx-auto">
              ZERODIN is a security software company based in Freetown,
              Sierra Leone. It ships two products — ATHELOS and OTA Sentinel —
              built by one operator with no venture capital.
            </BodyText>
          </Glass>
        </Reveal>
      </Section>

      {/* Stats */}
      <Section spacing="md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.1 * index}>
              <Glass material="clear" className="p-6 text-center h-full">
                <DisplayText
                  size="md"
                  as="div"
                  className="text-4xl mb-2 text-text-accent"
                >
                  {stat.value}
                </DisplayText>
                <BodyText size="sm" tone="tertiary">
                  {stat.label}
                </BodyText>
              </Glass>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section spacing="md">
        <Reveal>
          <DisplayText size="md" as="h2" className="mb-8">
            The story.
          </DisplayText>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <Glass material="clear" className="p-8 h-full">
              <BodyText size="base" tone="primary" className="mb-4">
                ZERODIN was founded in 2026 by a security researcher in
                Freetown who was tired of juggling twenty tools for a single
                pentest. The first product, ATHELOS, was designed as a single
                workspace for the operator: five pillars covering knowledge,
                engagements, delivery, business, and tooling, all in one place.
              </BodyText>
              <BodyText size="base" tone="secondary">
                A second problem emerged from conversations with telecom
                operators: SIM cards misconfigured with insecure applets,
                vulnerable to the Simjacker attack class. That became OTA
                Sentinel — an audit and management platform for the operators
                and regulators responsible for those SIM fleets.
              </BodyText>
            </Glass>
          </Reveal>

          <Reveal delay={0.2}>
            <Glass material="clear" className="p-8 h-full flex flex-col justify-center">
              <BodyText
                size="sm"
                tone="tertiary"
                className="uppercase tracking-wider mb-2"
              >
                Headquarters
              </BodyText>
              <DisplayText size="md" as="h3" className="text-2xl mb-4">
                Freetown, Sierra Leone
              </DisplayText>
              <BodyText size="sm" tone="secondary">
                Building enterprise-grade security software from West Africa.
                The internet does not care where you are from. Code compiles
                the same in Freetown as it does in San Francisco.
              </BodyText>
            </Glass>
          </Reveal>
        </div>
      </Section>

      {/* Principles */}
      <Section spacing="md">
        <Reveal>
          <DisplayText size="md" as="h2" className="mb-8">
            What we stand for.
          </DisplayText>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.name} delay={0.1 * index}>
              <Glass material="clear" className="p-6 h-full">
                <DisplayText size="md" as="h3" className="text-xl mb-3">
                  {principle.name}
                </DisplayText>
                <BodyText size="sm" tone="secondary">
                  {principle.description}
                </BodyText>
              </Glass>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="lg">
        <Reveal>
          <Glass
            material="thick"
            className="max-w-3xl mx-auto p-10 md:p-14 text-center"
          >
            <DisplayText size="md" as="h2" className="mb-4">
              See what we ship.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-8 max-w-lg mx-auto">
              Two products, both running in production today.
            </BodyText>
            <Link href="/products">
              <GlassButton variant="primary" size="lg">
                View products
              </GlassButton>
            </Link>
          </Glass>
        </Reveal>
      </Section>
    </main>
  );
}
