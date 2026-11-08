"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Glass,
  GlassButton,
  DisplayText,
  BodyText,
  Section,
  Reveal,
} from "@/components/glass";

// The contact form needs useSearchParams to read ?product=ota-sentinel
// and pre-fill the subject. Next.js 15+ requires that useSearchParams
// be inside a Suspense boundary. The form is split into an inner
// component that uses the hook, and an outer component that wraps it.

function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const product = searchParams.get("product");
    if (product === "ota-sentinel") {
      setSubject("OTA Sentinel — Audit inquiry");
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Glass material="heavy" className="p-12 text-center">
        <DisplayText size="md" as="h3" className="mb-3">
          Message received.
        </DisplayText>
        <BodyText size="base" tone="secondary">
          We will get back to you within 24 hours.
        </BodyText>
      </Glass>
    );
  }

  return (
    <Glass material="heavy" className="p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full h-11 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 text-sm mt-1 focus:border-aurora-cyan/50 focus:outline-none focus:ring-2 focus:ring-aurora-cyan/20 transition-all text-text-primary"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full h-11 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 text-sm mt-1 focus:border-aurora-cyan/50 focus:outline-none focus:ring-2 focus:ring-aurora-cyan/20 transition-all text-text-primary"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
            Subject
          </label>
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-11 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 text-sm mt-1 focus:border-aurora-cyan/50 focus:outline-none focus:ring-2 focus:ring-aurora-cyan/20 transition-all text-text-primary"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
            Message
          </label>
          <textarea
            required
            rows={6}
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-sm mt-1 focus:border-aurora-cyan/50 focus:outline-none focus:ring-2 focus:ring-aurora-cyan/20 transition-all resize-none text-text-primary"
          />
        </div>
        <GlassButton
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
        >
          Send message
        </GlassButton>
      </form>
    </Glass>
  );
}

export default function ContactPage() {
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
              Contact
            </BodyText>
            <DisplayText size="lg" as="h1" className="mb-4">
              Get in touch.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="max-w-xl mx-auto">
              Questions about ATHELOS or OTA Sentinel. Enterprise engagements.
              Audit inquiries. All routed to the operator.
            </BodyText>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4 md:col-span-1">
            <Reveal>
              <Glass material="heavy" className="p-6">
                <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-2">
                  Security
                </BodyText>
                <BodyText size="sm" tone="primary" className="font-mono">
                  security@zerodin.pro
                </BodyText>
              </Glass>
            </Reveal>
            <Reveal delay={0.1}>
              <Glass material="heavy" className="p-6">
                <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-2">
                  Sales
                </BodyText>
                <BodyText size="sm" tone="primary" className="font-mono">
                  sales@zerodin.pro
                </BodyText>
              </Glass>
            </Reveal>
            <Reveal delay={0.2}>
              <Glass material="heavy" className="p-6">
                <BodyText size="sm" tone="tertiary" className="uppercase tracking-wider mb-2">
                  Location
                </BodyText>
                <BodyText size="sm" tone="primary">
                  Freetown, Sierra Leone
                </BodyText>
              </Glass>
            </Reveal>
          </div>

          <div className="md:col-span-2">
            <Reveal delay={0.15}>
              <Suspense
                fallback={
                  <Glass material="heavy" className="p-8">
                    <div className="h-96 animate-pulse rounded-xl bg-white/[0.04]" />
                  </Glass>
                }
              >
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
