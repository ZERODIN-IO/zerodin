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
            material="heavy"
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
              A cybersecurity company. One operator. Two products in production.
            </DisplayText>
            <BodyText size="lg" tone="secondary" className="max-w-xl mx-auto">
              ZERODIN builds cybersecurity tools for the operators who defend
              networks, systems, and infrastructure. Two products are shipped
              today. More are in development.
            </BodyText>
          </Glass>
        </Reveal>
      </Section>

      {/* Stats */}
      {/* ============================================================ */}
      {/* THE MISSION */}
      {/* ============================================================ */}
      <Section spacing="lg">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-6"
            >
              Who we are
            </BodyText>
            <DisplayText size="md" as="h2" className="mb-8">
              Cybersecurity for the operators.
            </DisplayText>
            <BodyText size="lg" tone="primary" className="mb-6">
              ZERODIN is a cybersecurity company. We build tools for security
              operators, network engineers, and the organizations responsible
              for protecting critical infrastructure.
            </BodyText>
            <BodyText size="base" tone="secondary" className="mb-4">
              We work across offensive and defensive security. The offensive
              side is where threats are found — penetration testing,
              vulnerability research, the discovery of what an attacker would
              exploit. The defensive side is where those findings become
              protection — detection, response, the systems that keep a
              network safe after the threat is known. Both matter. Both are
              part of the same work.
            </BodyText>
            <BodyText size="base" tone="secondary" className="mb-4">
              We ship two products today: ATHELOS, a command center for
              security operators, and OTA Sentinel, a SIM security platform
              for telecom networks. Both are in production. Both are used by
              real operators. Both are the first of more.
            </BodyText>
            <BodyText size="base" tone="secondary">
              What we build is self-hosted where possible. Audited. Proven by
              tests, not by claims. The customer keeps their data. The operator
              keeps control. The tools work in the environments where security
              actually happens — networks, servers, SIM cards — not in a demo.
            </BodyText>
          </div>
        </Reveal>
      </Section>

      <Section spacing="md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.1 * index}>
              <Glass material="heavy" className="p-6 text-center h-full">
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
            <Glass material="heavy" className="p-8 h-full">
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
            <Glass material="heavy" className="p-8 h-full flex flex-col justify-center">
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
              <Glass material="heavy" className="p-6 h-full">
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

      {/* Roadmap */}
      <Section spacing="md">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-6"
            >
              What's next
            </BodyText>
            <DisplayText size="md" as="h2" className="mb-8">
              Two products shipped. More in development.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-6">
              ATHELOS and OTA Sentinel are the first two. The roadmap is the
              same mission applied to other problems:
            </BodyText>
            <div className="space-y-4">
              <Glass material="heavy" className="p-6">
                <DisplayText size="md" as="h3" className="text-lg mb-2">
                  Defensive tooling
                </DisplayText>
                <BodyText size="sm" tone="secondary">
                  The same rigor ATHELOS brings to offensive work, applied to
                  detection, response, and monitoring.
                </BodyText>
              </Glass>
              <Glass material="heavy" className="p-6">
                <DisplayText size="md" as="h3" className="text-lg mb-2">
                  Telecom security
                </DisplayText>
                <BodyText size="sm" tone="secondary">
                  More tools for the operators and regulators responsible for
                  network and SIM security.
                </BodyText>
              </Glass>
              <Glass material="heavy" className="p-6">
                <DisplayText size="md" as="h3" className="text-lg mb-2">
                  Operator tooling
                </DisplayText>
                <BodyText size="sm" tone="secondary">
                  The command center, extended. New pillars, new integrations,
                  new workflows.
                </BodyText>
              </Glass>
            </div>
            <BodyText size="sm" tone="tertiary" className="mt-6">
              Products will be announced when they are ready. Contact us to be
              notified.
            </BodyText>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section spacing="lg">
        <Reveal>
          <Glass
            material="heavy"
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
