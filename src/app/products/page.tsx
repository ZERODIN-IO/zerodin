"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Glass,
  GlassButton,
  DisplayText,
  BodyText,
  Section,
} from "@/components/glass";

const products = [
  {
    slug: "athelos",
    name: "ATHELOS",
    tagline: "Cybersecurity command center. Self-hosted. Proven.",
    description:
      "A single-pane-of-glass workspace for the security operator. Five pillars, three deployment models, and a database-per-tenant Cloud that passed the OWASP cross-tenant boundary test.",
    bullets: [
      "Five pillars: knowledge, engagements, delivery, CRM, tooling",
      "Three deployment models: self-hosted, dedicated, cloud",
      "OWASP cross-tenant isolation verified — 0 rows seen across tenants",
    ],
    primary: { label: "Read the docs", href: "https://www.athelos.pro/docs" },
    secondary: { label: "Learn more", href: "/products/athelos" },
    material: "crystal" as const,
    external: true,
  },
  {
    slug: "ota-sentinel",
    name: "OTA Sentinel",
    tagline: "SIM security for telecoms. Audit and manage.",
    description:
      "An enterprise platform for telecom operators and regulators. Path 1 audits SIM cards for Simjacker vulnerabilities. Path 2 manages OTA updates with the operator's own KIC/KID keys.",
    bullets: [
      "Simjacker audit via PC/SC reader — detects MSL=0 misconfigurations",
      "Secure OTA management — ETSI TS 102 225 over SMPP",
      "Row-level security in PostgreSQL, hash-chained audit log, 11/11 tests",
    ],
    primary: { label: "Request an audit", href: "/contact?product=ota-sentinel" },
    secondary: { label: "Learn more", href: "/products/ota-sentinel" },
    material: "clear" as const,
    external: false,
  },
];



export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24">
      <Section spacing="lg">
        <DisplayText size="lg" as="h1" className="mb-4">
            Two products. Both shipped.
          </DisplayText>
          <BodyText size="lg" tone="secondary" className="max-w-2xl mb-16">
            ATHELOS for cybersecurity operators. OTA Sentinel for telecom
            SIM security. No aspirational roadmap, no vaporware — two
            products that run in production today.
          </BodyText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Glass
                material="block"
                hoverable
                className="h-full p-8 md:p-10 flex flex-col"
              >
                <DisplayText size="md" as="h2" className="mb-3">
                  {product.name}
                </DisplayText>
                <BodyText size="base" tone="secondary" className="mb-6">
                  {product.tagline}
                </BodyText>
                <BodyText size="base" tone="primary" className="mb-6">
                  {product.description}
                </BodyText>

                <ul className="space-y-3 mb-8 flex-1">
                  {product.bullets.map((bullet) => (
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

                <div className="flex flex-wrap gap-3">
                  {product.external ? (
                    <a
                      href={product.primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GlassButton variant="primary" size="md">
                        {product.primary.label}
                      </GlassButton>
                    </a>
                  ) : (
                    <Link href={product.primary.href}>
                      <GlassButton variant="primary" size="md">
                        {product.primary.label}
                      </GlassButton>
                    </Link>
                  )}
                  <Link href={product.secondary.href}>
                    <GlassButton variant="ghost" size="md">
                      {product.secondary.label}
                    </GlassButton>
                  </Link>
                </div>
              </Glass>
          ))}
        </div>
      </Section>

      <Section spacing="md">
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
      </Section>

      <Section spacing="md">
        <Glass material="thick" className="p-8 md:p-12 text-center">
            <DisplayText size="md" as="h2" className="mb-4">
              Built and operated by ZERODIN Security.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-6 max-w-xl mx-auto">
              Every line of both products is written by one operator in
              Freetown. No outsourcing, no venture capital, no SaaS
              dependency.
            </BodyText>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact">
                <GlassButton variant="secondary" size="md">
                  Talk to us
                </GlassButton>
              </Link>
            </motion.div>
          </Glass>
      </Section>
    </main>
  );
}
