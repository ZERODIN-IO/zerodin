'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Check, X, ArrowRight, Shield, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const talosTiers = [
  {
    name: 'Community',
    price: 'Free',
    period: 'forever',
    description: 'For students, learners, and hobbyists.',
    icon: '🟢',
    features: [
      { text: '3 pentesting types', included: true },
      { text: '30 security tools', included: true },
      { text: 'Basic reports (MD, JSON)', included: true },
      { text: 'Single scan at a time', included: true },
      { text: 'Standard intensity only', included: true },
      { text: 'Community forum support', included: true },
      { text: 'All 16 pentesting types', included: false },
      { text: 'All 122 tools', included: false },
      { text: 'MITRE ATT&CK mapping', included: false },
      { text: 'Compliance mapping', included: false },
      { text: 'API access', included: false },
    ],
    cta: 'Get Started',
    href: '/register',
    variant: 'outline' as const,
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/month',
    description: 'For independent pentesters and consultants.',
    icon: '🔵',
    popular: true,
    features: [
      { text: 'ALL 16 pentesting types', included: true },
      { text: 'ALL 122 security tools', included: true },
      { text: 'ALL 4 intensity levels', included: true },
      { text: 'ALL 5 report formats', included: true },
      { text: '3 concurrent scans', included: true },
      { text: 'Unlimited findings', included: true },
      { text: 'MITRE ATT&CK mapping', included: true },
      { text: 'Compliance auto-mapping', included: true },
      { text: 'API access (1000 req/day)', included: true },
      { text: 'Email support', included: true },
    ],
    cta: 'Start Free Trial',
    href: '/register?plan=pro',
    variant: 'default' as const,
  },
  {
    name: 'Team',
    price: '$799',
    period: '/month',
    description: 'For small pentesting firms. Up to 5 operators.',
    icon: '🟣',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Up to 5 operator seats', included: true },
      { text: 'Team collaboration', included: true },
      { text: 'Shared methodology library', included: true },
      { text: 'Role-based access control', included: true },
      { text: 'Audit logging', included: true },
      { text: '10 concurrent scans', included: true },
      { text: 'API access (5000 req/day)', included: true },
      { text: 'Priority chat support', included: true },
      { text: 'SSO / SAML', included: false },
    ],
    cta: 'Start Free Trial',
    href: '/register?plan=team',
    variant: 'outline' as const,
  },
  {
    name: 'Enterprise',
    price: '$2,999',
    period: '/month',
    description: 'For large consultancies. Up to 20 operators.',
    icon: '💎',
    features: [
      { text: 'Everything in Team', included: true },
      { text: 'Up to 20 operator seats', included: true },
      { text: 'Unlimited concurrent scans', included: true },
      { text: 'Unlimited API access', included: true },
      { text: 'SSO / SAML', included: true },
      { text: 'On-premises deployment', included: true },
      { text: 'White label reporting', included: true },
      { text: 'Custom tool integration', included: true },
      { text: 'SLA 99.9% uptime', included: true },
      { text: '24/7 phone support', included: true },
    ],
    cta: 'Contact Sales',
    href: '/contact',
    variant: 'premium' as const,
  },
];

const standaloneProducts = [
  {
    name: 'SENTINEL',
    color: 'orange',
    description: 'Continuous Security Monitoring — 24/7 automated vulnerability scanning.',
    tiers: [
      { name: 'Starter', price: '$499/mo', desc: '10 assets, daily scans' },
      { name: 'Business', price: '$1,499/mo', desc: '50 assets, hourly scans' },
      { name: 'Enterprise', price: '$4,999/mo', desc: '250 assets, real-time' },
    ],
  },
  {
    name: 'ODIN',
    color: 'red',
    description: 'Threat Intelligence — Dark web monitoring, zero-day detection.',
    tiers: [
      { name: 'Intelligence', price: '$999/mo', desc: 'Weekly reports, CVE alerts' },
      { name: 'Dark Web', price: '$2,499/mo', desc: 'Real-time monitoring' },
      { name: 'Enterprise', price: '$5,999/mo', desc: '24/7 + dedicated analyst' },
    ],
  },
  {
    name: 'FORGE',
    color: 'purple',
    description: 'Automated Exploitation — Prove vulnerabilities are real.',
    tiers: [
      { name: 'Pro', price: '$2,999/mo', desc: 'Web, API, Network, 5 targets' },
      { name: 'Enterprise', price: '$9,999/mo', desc: 'All 16 types, unlimited' },
    ],
  },
  {
    name: 'NEXUS',
    color: 'blue',
    description: 'Cross-Platform Intelligence — Correlate all security data.',
    tiers: [
      { name: 'Business', price: '$1,999/mo', desc: 'TALOS + SENTINEL + ODIN' },
      { name: 'Enterprise', price: '$5,999/mo', desc: 'All sources + third-party' },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <Badge variant="default" className="mb-4">Pricing</Badge>
        <h1 className="text-5xl font-bold mb-4 gradient-text">Simple, Transparent Pricing</h1>
        <p className="text-[#6B7D95] max-w-2xl mx-auto text-lg">
          Start free. Upgrade when you need more power. All plans include 14-day free trial on Pro and Team.
        </p>
      </section>

      {/* TALOS Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="h-6 w-6 text-[#00E3FD]" />
              <h2 className="text-3xl font-bold">TALOS</h2>
            </div>
            <p className="text-[#6B7D95]">Universal Pentesting Platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {talosTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-xl border bg-[#0A1628]/50 ${
                  tier.popular 
                    ? 'border-[#00E3FD]/50 shadow-[0_0_30px_rgba(0,227,253,0.1)]' 
                    : 'border-[#1A2D44]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="default" className="gap-1">
                      <Star className="h-3 w-3" /> Most Popular
                    </Badge>
                  </div>
                )}
                <div className="text-2xl mb-3">{tier.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <p className="text-xs text-[#6B7D95] mb-4">{tier.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-[#6B7D95]">{tier.period}</span>
                </div>
                <Link href={tier.href}>
                  <Button variant={tier.variant} className="w-full mb-6" size="sm">
                    {tier.cta}
                    {tier.variant === 'premium' && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </Link>
                <ul className="space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-[#6B7D95]/30 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-[#E8EDF5]' : 'text-[#6B7D95]/40'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standalone Products */}
      <section className="py-16 px-4 bg-[#0A1628]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Standalone Products</h2>
            <p className="text-[#6B7D95]">Additional products that integrate with TALOS.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {standaloneProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-[#1A2D44] bg-[#060B14]/50"
              >
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-[#6B7D95] mb-4">{product.description}</p>
                <div className="space-y-2">
                  {product.tiers.map((tier) => (
                    <div key={tier.name} className="flex items-center justify-between p-3 rounded-lg bg-[#0A1628]">
                      <div>
                        <span className="text-sm font-medium">{tier.name}</span>
                        <span className="text-xs text-[#6B7D95] ml-2">{tier.desc}</span>
                      </div>
                      <span className="text-sm font-semibold text-[#00E3FD]">{tier.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Can I switch plans anytime?', a: 'Yes. Upgrade or downgrade anytime. Changes take effect immediately.' },
              { q: 'Is there a free trial?', a: 'Yes. 14-day free trial on Professional and Team plans. No credit card required.' },
              { q: 'What payment methods do you accept?', a: 'Credit cards, debit cards, PayPal, and cryptocurrency (ETH/USDC).' },
              { q: 'Can I cancel anytime?', a: 'Yes. Cancel anytime with no questions asked. You retain access until the end of your billing period.' },
              { q: 'Do you offer discounts for annual billing?', a: 'Yes. Save 16% with annual billing on all plans.' },
              { q: 'Is my data secure?', a: 'Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are GDPR compliant and pursuing SOC 2 certification.' },
            ].map((faq, i) => (
              <div key={i} className="p-5 rounded-xl border border-[#1A2D44] bg-[#0A1628]/30">
                <h4 className="font-semibold mb-1">{faq.q}</h4>
                <p className="text-sm text-[#6B7D95]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
          <p className="text-[#6B7D95] mb-8">Try TALOS free for 14 days. No credit card required.</p>
          <Link href="/register">
            <Button size="xl">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
