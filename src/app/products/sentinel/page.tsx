'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Eye, Bell, Clock, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Clock, text: '24/7 Automated Scanning' },
  { icon: Bell, text: 'Real-Time Alerts (Email, SMS, Slack)' },
  { icon: Shield, text: 'PCI DSS & SOC 2 Compliant' },
  { icon: Zap, text: 'Up to 250 Assets Monitored' },
];

const tiers = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    assets: '10 assets',
    frequency: 'Daily scans',
    alerts: 'Email alerts',
    features: ['10 assets monitored', 'Daily vulnerability scans', 'Email alert notifications', 'Basic dashboard', 'Weekly summary reports'],
  },
  {
    name: 'Business',
    price: '$1,499',
    period: '/month',
    assets: '50 assets',
    frequency: 'Hourly scans',
    alerts: 'Email, SMS, Slack',
    popular: true,
    features: ['50 assets monitored', 'Hourly vulnerability scans', 'Multi-channel alerts', 'Advanced dashboard', 'MITRE ATT&CK mapping', 'API access', 'Daily reports'],
  },
  {
    name: 'Enterprise',
    price: '$4,999',
    period: '/month',
    assets: '250 assets',
    frequency: 'Real-time',
    alerts: 'All channels + API',
    features: ['250 assets monitored', 'Real-time scanning', 'Custom integrations', 'Dedicated dashboard', 'SLA 99.9% uptime', 'Unlimited API access', 'Dedicated support team', 'Custom alert rules'],
  },
];

const steps = [
  { step: 1, title: 'Connect Your Assets', desc: 'Add domains, IPs, and cloud accounts. SENTINEL automatically discovers your attack surface.' },
  { step: 2, title: 'Continuous Scanning', desc: 'SENTINEL scans your infrastructure 24/7 for vulnerabilities, misconfigurations, and security gaps.' },
  { step: 3, title: 'Instant Alerts', desc: 'Get notified via email, SMS, or Slack the moment a new vulnerability is detected.' },
  { step: 4, title: 'Remediate & Verify', desc: 'Fix the issue and SENTINEL automatically verifies the fix on the next scan cycle.' },
];

export default function SentinelProductPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <Badge variant="default" className="mb-4">Product</Badge>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Eye className="h-10 w-10 text-amber-400" />
          <h1 className="text-5xl font-bold gradient-text">SENTINEL</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-2">Continuous Security Monitoring</p>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          24/7 automated vulnerability scanning. Never miss a security gap.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link href="/register">
            <Button size="lg">Start Monitoring <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg">View Pricing</Button>
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div key={h.text} className="p-4 rounded-xl border border-border bg-card text-center">
                <h.icon className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <div className="text-sm">{h.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-card/30">
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
                  tier.popular ? 'border-amber-400/50 shadow-[0_0_30px_rgba(245,158,11,0.1)]' : 'border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="warning" className="gap-1 text-[10px]">MOST POPULAR</Badge>
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
                <div className="mb-1"><span className="text-3xl font-bold">{tier.price}</span><span className="text-sm text-muted-foreground">{tier.period}</span></div>
                <div className="text-sm text-amber-400 mb-1">{tier.assets}</div>
                <div className="text-xs text-muted-foreground mb-4">{tier.frequency} · {tier.alerts}</div>
                <Link href="/register">
                  <Button variant={tier.popular ? 'default' : 'outline'} className="w-full mb-4" size="sm">
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
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
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Never miss a vulnerability again</h2>
        <p className="text-muted-foreground mb-8">Start monitoring your infrastructure today.</p>
        <Link href="/register"><Button size="xl">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
      </section>
    </div>
  );
}
