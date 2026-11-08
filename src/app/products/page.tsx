"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
        <Reveal>
          <DisplayText size="lg" as="h1" className="mb-4">
            Two products. Both shipped.
          </DisplayText>
          <BodyText size="lg" tone="secondary" className="max-w-2xl mb-16">
            ATHELOS for cybersecurity operators. OTA Sentinel for telecom
            SIM security. No aspirational roadmap, no vaporware — two
            products that run in production today.
          </BodyText>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Reveal
              key={product.slug}
              delay={0.15 * index}
              className={index === 1 ? "md:mt-12" : ""}
            >
              <Glass
                material={product.material}
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
            </Reveal>
          ))}
        </div>
      </Section>

      <Section spacing="md">
        <Reveal>
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
        </Reveal>
      </Section>
    </main>
  );
}
