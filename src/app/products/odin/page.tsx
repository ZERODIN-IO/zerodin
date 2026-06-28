'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Globe, Eye, Shield, Search, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
  { icon: Search, title: 'Dark Web Monitoring', desc: 'Continuous scanning of Tor, I2P, ZeroNet, and private forums for threats targeting your organization.' },
  { icon: AlertTriangle, title: 'Zero-Day Detection', desc: 'Early warning system for zero-day exploits being sold or discussed on underground markets.' },
  { icon: Eye, title: 'Credential Leak Alerts', desc: 'Instant notification when employee credentials are found in data dumps or paste sites.' },
  { icon: Globe, title: 'Threat Actor Tracking', desc: 'Monitor ransomware groups and threat actors targeting your industry.' },
];

const tiers = [
  {
    name: 'Intelligence Feed',
    price: '$999',
    period: '/month',
    features: ['Weekly threat reports', 'CVE alerts for your tech stack', 'Brand mention monitoring', 'Industry threat briefings', 'Email delivery'],
  },
  {
    name: 'Dark Web Monitor',
    price: '$2,499',
    period: '/month',
    popular: true,
    features: ['Real-time dark web monitoring', 'Credential leak alerts', 'Threat actor tracking', 'Telegram/Discord monitoring', 'GitHub secret scanning', 'Monthly executive briefing', 'Priority alerts via SMS'],
  },
  {
    name: 'Enterprise Shield',
    price: '$5,999',
    period: '/month',
    features: ['24/7 threat monitoring', 'Automated takedown requests', 'Dedicated threat analyst', 'Custom threat feeds', 'API access', 'SIEM integration', 'Quarterly attack surface review', 'Incident response support'],
  },
];

export default function OdinProductPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <Badge variant="default" className="mb-4">Product</Badge>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Globe className="h-10 w-10 text-[#EF4444]" />
          <h1 className="text-5xl font-bold gradient-text">ODIN</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-2">Threat Intelligence Platform</p>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          See what threats exist before they hit you. Dark web monitoring, zero-day detection, and credential leak alerts.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link href="/register"><Button size="lg">Start Monitoring <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          <Link href="/pricing"><Button variant="outline" size="lg">View Pricing</Button></Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 bg-[#0A1628]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What ODIN Monitors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <cap.icon className="h-8 w-8 text-[#EF4444] mb-3" />
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Plans & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-xl border bg-card ${
                  tier.popular ? 'border-[#EF4444]/50 shadow-[0_0_30px_rgba(239,68,68,0.1)]' : 'border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="destructive" className="gap-1 text-[10px]">MOST POPULAR</Badge>
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
                <div className="mb-4"><span className="text-3xl font-bold">{tier.price}</span><span className="text-sm text-muted-foreground">{tier.period}</span></div>
                <Link href="/register">
                  <Button variant={tier.popular ? 'destructive' : 'outline'} className="w-full mb-4" size="sm">
                    {tier.name === 'Enterprise Shield' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </Link>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-[#0A1628]/30">
        <h2 className="text-3xl font-bold mb-4">Know before they strike</h2>
        <p className="text-muted-foreground mb-8">Start monitoring the dark web for threats today.</p>
        <Link href="/register"><Button size="xl">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
      </section>
    </div>
  );
}
