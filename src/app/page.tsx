"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Glass,
  GlassPanel,
  Section,
  Reveal,
  GlassButton,
  DisplayText,
  BodyText,
  LightParticles,
} from "@/components/glass";

const products = [
  {
    slug: "athelos",
    name: "ATHELOS",
    tagline: "Cybersecurity command center. Self-hosted. Proven.",
    material: "crystal" as const,
    size: "large" as const,
  },
  {
    slug: "ota-sentinel",
    name: "OTA Sentinel",
    tagline: "SIM security for telecoms. Audit and manage.",
    material: "clear" as const,
    size: "small" as const,
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-3, 3]), {
    stiffness: 150,
    damping: 20,
  });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (reducedMotion || isTouch) return;

    setTiltEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const relative = (e.clientX - centerX) / (rect.width / 2);
      mouseX.set(Math.max(-1, Math.min(1, relative)));
    };

    const handleMouseLeave = () => mouseX.set(0);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX]);

  return (
    <div className="relative overflow-x-hidden">
      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section
        ref={heroRef}
        className="isolate relative min-h-screen flex items-center justify-center px-4 py-24"
      >
        {/* Hero background image — the treated server room photo */}
        <div className="hero-bg-image" aria-hidden="true" />

        {/* Depth -1: faint background glass shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none relative z-[3]" aria-hidden="true">
          <Glass
            material="bubble"
            className="absolute w-[300px] h-[300px] opacity-[0.15] -top-20 -left-20"
            specular={false}
          />
          <Glass
            material="bubble"
            className="absolute w-[400px] h-[400px] opacity-[0.10] -bottom-32 -right-32"
            specular={false}
          />
        </div>

        {/* Depth 1.5: light particles */}
        <div className="absolute inset-0 relative z-[3] pointer-events-none" aria-hidden="true">
          <Suspense fallback={null}>
            <LightParticles count={200} />
          </Suspense>
        </div>

        {/* Depth 1 + 2: content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          {/* Central panel */}
          <motion.div
            style={{
              rotateY: tiltEnabled ? rotateY : 0,
              transformPerspective: 1200,
            }}
            className="mx-auto max-w-3xl"
          >
            <Glass
              material="liquid"
              className="px-8 py-14 md:px-16 md:py-20 text-center"
            >
              <DisplayText size="xl" as="h1" className="mb-6">
                Security infrastructure for the operators.
              </DisplayText>
              <BodyText size="lg" tone="secondary">
                Two products. One standard. Built and shipped.
              </BodyText>
            </Glass>
          </motion.div>

          {/* Floating products */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={index === 1 ? "md:mt-8 md:scale-95" : ""}
              >
                <Link href={`/products/${product.slug}`} className="block">
                  <Glass
                    material="liquid"
                    hoverable
                    className="p-8 md:p-10 h-full"
                  >
                    <DisplayText size="md" as="h2" className="mb-3">
                      {product.name}
                    </DisplayText>
                    <BodyText size="base" tone="secondary" className="mb-6">
                      {product.tagline}
                    </BodyText>
                    <span className="inline-flex items-center gap-2 text-sm text-text-accent">
                      Learn more
                      <span aria-hidden="true">→</span>
                    </span>
                  </Glass>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* POSITIONING SLIVER */}
      {/* ============================================================ */}
      <Section spacing="md">
        <Reveal>
          <Glass
            material="liquid"
            className="max-w-4xl mx-auto p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <BodyText size="sm" tone="tertiary" className="uppercase tracking-[0.2em] mb-2">
                  Self-hosted
                </BodyText>
                <BodyText size="base" tone="primary">
                  No SaaS dependency.
                </BodyText>
              </div>
              <div>
                <BodyText size="sm" tone="tertiary" className="uppercase tracking-[0.2em] mb-2">
                  Audited
                </BodyText>
                <BodyText size="base" tone="primary">
                  No cloud AI on client data.
                </BodyText>
              </div>
              <div>
                <BodyText size="sm" tone="tertiary" className="uppercase tracking-[0.2em] mb-2">
                  Shipped
                </BodyText>
                <BodyText size="base" tone="primary">
                  Both products run in production.
                </BodyText>
              </div>
            </div>
          </Glass>
        </Reveal>
      </Section>

      {/* ============================================================ */}
      {/* CTA PANEL */}
      {/* ============================================================ */}
      <Section spacing="lg">
        <Reveal>
          <Glass
            material="liquid"
            className="max-w-3xl mx-auto p-10 md:p-16 text-center"
          >
            <DisplayText size="md" as="h2" className="mb-4">
              Read the docs. Start the trial.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-8 max-w-lg mx-auto">
              ATHELOS is live and taking trial signups. OTA Sentinel is
              available through direct engagement with ZERODIN.
            </BodyText>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.athelos.pro/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassButton variant="primary" size="lg">
                  ATHELOS docs
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
    </div>
  );
}
