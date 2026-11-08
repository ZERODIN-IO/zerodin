"use client";

import {
  Glass,
  DisplayText,
  BodyText,
  Section,
  Reveal,
} from "@/components/glass";

const securityFeatures = [
  {
    title: "Encryption",
    items: [
      "TLS 1.3 for all communications",
      "AES-256 for data at rest",
      "Fernet (AES-128) for SMSC credentials in OTA Sentinel",
      "Encrypted key management",
    ],
  },
  {
    title: "Isolation",
    items: [
      "Database-per-tenant in ATHELOS Cloud",
      "OWASP cross-tenant boundary test passed — 0 rows seen across tenants",
      "Row-Level Security in OTA Sentinel PostgreSQL",
      "11/11 isolation tests passing",
    ],
  },
  {
    title: "Audit and Forensics",
    items: [
      "Hash-chained audit logs (SHA-256)",
      "Immutable forensic records",
      "Tamper-detectable by cryptographic verification",
      "GDPR Article 30 compliant retention",
    ],
  },
  {
    title: "Data Protection",
    items: [
      "Data encrypted at rest and in transit",
      "Automated backups via restic to Backblaze B2",
      "Daily backup verification",
      "Data deletion on request",
    ],
  },
];

const compliance = [
  { name: "GDPR", status: "Compliant", detail: "Article 30, Article 7 consent" },
  { name: "OWASP", status: "Verified", detail: "Cross-tenant boundary test" },
  { name: "Self-Hosted", status: "Available", detail: "Data stays on your infrastructure" },
  { name: "No Cloud AI", status: "Standard", detail: "Ollama runs locally" },
];

export default function TrustPage() {
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
              Trust
            </BodyText>
            <DisplayText size="lg" as="h1" className="mb-4">
              Security posture.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="max-w-2xl mx-auto">
              What is actually true about how both products handle security,
              isolation, and client data. No aspirational certifications, no
              claims we cannot prove.
            </BodyText>
          </div>
        </Reveal>

        {/* Security features */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {securityFeatures.map((section, index) => (
            <Reveal key={section.title} delay={0.1 * index}>
              <Glass material="clear" className="p-8 h-full">
                <DisplayText size="md" as="h2" className="text-xl mb-4">
                  {section.title}
                </DisplayText>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-1 w-1 rounded-full bg-text-accent shrink-0"
                        aria-hidden="true"
                      />
                      <BodyText size="sm" tone="secondary">
                        {item}
                      </BodyText>
                    </li>
                  ))}
                </ul>
              </Glass>
            </Reveal>
          ))}
        </div>

        {/* Compliance */}
        <Reveal>
          <Glass material="crystal" className="p-8 md:p-12 mb-12">
            <DisplayText size="md" as="h2" className="mb-8 text-center">
              Verified.
            </DisplayText>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {compliance.map((item) => (
                <div key={item.name} className="text-center">
                  <BodyText
                    size="sm"
                    tone="tertiary"
                    className="uppercase tracking-wider mb-2"
                  >
                    {item.name}
                  </BodyText>
                  <DisplayText size="md" as="div" className="text-xl mb-2 text-text-accent">
                    {item.status}
                  </DisplayText>
                  <BodyText size="sm" tone="secondary">
                    {item.detail}
                  </BodyText>
                </div>
              ))}
            </div>
          </Glass>
        </Reveal>

        {/* Contact */}
        <Reveal>
          <Glass material="thick" className="max-w-3xl mx-auto p-10 text-center">
            <DisplayText size="md" as="h2" className="mb-4">
              Security questions?
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-4">
              Contact the operator directly. Every security question is read
              and answered by the person who built the software.
            </BodyText>
            <BodyText size="base" tone="primary" className="font-mono">
              security@zerodin.pro
            </BodyText>
          </Glass>
        </Reveal>
      </Section>
    </main>
  );
}
