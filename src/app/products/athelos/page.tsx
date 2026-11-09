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

const pillars = [
  {
    name: "Knowledge Engine",
    description:
      "Methodologies, playbooks, cheat sheets, tools, wordlists, payloads, labs, and detection rules — a single searchable index.",
  },
  {
    name: "Engagement State Machine",
    description:
      "A ten-phase lifecycle from pre-engagement to billing, with every gate enforced by the tool.",
  },
  {
    name: "Delivery and Reports",
    description:
      "Findings, evidence, PDF generation, and a client portal for reviewing what was tested and what was found.",
  },
  {
    name: "CRM and Business",
    description:
      "Clients, contracts, scoping calculator, invoices, payments — the business side of the operator's work.",
  },
  {
    name: "Tooling and Ops",
    description:
      "Tools registry, labs, infrastructure tracking, automation, and detection engineering.",
  },
];

const deployments = [
  {
    name: "Self-Hosted",
    description:
      "Tag-triggered CI with cosign and SLSA Level 2. Deploy on your own hardware with signed releases.",
  },
  {
    name: "Dedicated",
    description:
      "Silo model — one Hetzner VPS per customer, provisioned from the same codebase with per-customer isolation.",
  },
  {
    name: "Cloud",
    description:
      "Multi-tenant SaaS with a database per tenant. Every query runs through the tenant-aware boundary.",
  },
];

export default function AthelosPage() {
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
              Product
            </BodyText>
            <DisplayText size="xl" as="h1" className="mb-6">
              ATHELOS
            </DisplayText>
            <BodyText size="lg" tone="secondary" className="mb-10 max-w-xl mx-auto">
              The command center for cybersecurity operators. Five pillars,
              three deployment models, one workspace.
            </BodyText>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.athelos.pro/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassButton variant="primary" size="lg">
                  Read the docs
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

      {/* Five pillars */}
      <Section spacing="md">
        <Reveal>
          <DisplayText size="md" as="h2" className="mb-4">
            Five pillars.
          </DisplayText>
          <BodyText size="base" tone="secondary" className="max-w-2xl mb-12">
            Every part of the operator's work lives in one tool. No context
            switching, no scattered notes, no external SaaS.
          </BodyText>
        </Reveal>

        <div className="space-y-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.name} delay={0.1 * index}>
              <Glass
                material="heavy"
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:px-8"
              >
                <div className="md:w-64 md:shrink-0">
                  <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-1">
                    Pillar {index + 1}
                  </BodyText>
                  <DisplayText size="md" as="h3" className="text-lg md:text-xl">
                    {pillar.name}
                  </DisplayText>
                </div>
                <BodyText size="base" tone="secondary" className="flex-1">
                  {pillar.description}
                </BodyText>
              </Glass>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Three deployment models */}
      <Section spacing="md">
        <Reveal>
          <DisplayText size="md" as="h2" className="mb-4">
            Three deployment models.
          </DisplayText>
          <BodyText size="base" tone="secondary" className="max-w-2xl mb-12">
            One codebase, three configurations. The same tool runs on your
            laptop, your VPS, or as a Cloud tenant — with the same behaviour.
          </BodyText>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deployments.map((deployment, index) => (
            <Reveal key={deployment.name} delay={0.1 * index}>
              <Glass
                material="aurora"
                className="aspect-square p-8 flex flex-col items-center justify-center text-center"
              >
                <DisplayText size="md" as="h3" className="mb-3 text-xl">
                  {deployment.name}
                </DisplayText>
                <BodyText size="sm" tone="secondary">
                  {deployment.description}
                </BodyText>
              </Glass>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Isolation proof panel */}
      <Section spacing="md">
        <Reveal>
          <Glass
            material="heavy"
            className="max-w-3xl mx-auto p-10 md:p-14 text-center"
          >
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-6"
            >
              Isolation
            </BodyText>
            <DisplayText size="md" as="h2" className="mb-6">
              Every customer runs on their own database.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-4 max-w-xl mx-auto">
              There is no shared table, no row-level filter, and no query that
              can reach across tenants. The isolation is architectural, not a
              policy that can be misconfigured.
            </BodyText>
            <BodyText size="base" tone="secondary" className="max-w-xl mx-auto">
              The claim is verified by an independent cross-tenant boundary
              test against two real customer databases. One tenant attempts to
              read the other's data. The result: zero rows returned. The test
              runs on every release. The full proof is documented in the
              ATHELOS security whitepaper.
            </BodyText>
          </Glass>
        </Reveal>
      </Section>

      {/* Final CTA */}
      <Section spacing="lg">
        <Reveal>
          <Glass
            material="thick"
            className="max-w-3xl mx-auto p-10 md:p-14 text-center"
          >
            <DisplayText size="md" as="h2" className="mb-4">
              Run ATHELOS on your hardware.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-8 max-w-lg mx-auto">
              Self-hosted, dedicated, or Cloud — the tool is the same. Start
              with a free trial on the Cloud, or read the installation docs.
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
              <Link href="/products">
                <GlassButton variant="ghost" size="lg">
                  See all products
                </GlassButton>
              </Link>
            </div>
          </Glass>
        </Reveal>
      </Section>
    </main>
  );
}
