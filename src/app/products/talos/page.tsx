'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowRight, Target, Shield, Zap, CheckCircle2, 
  Globe, Smartphone, Cloud, Server, Database, Radio,
  Key, Code, Users, Lock, Eye, Terminal
} from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Target, text: '16 attack surfaces covered' },
  { icon: Terminal, text: '122 integrated security tools' },
  { icon: Zap, text: '7-phase automated pipeline' },
  { icon: Shield, text: 'MITRE ATT&CK mapping' },
];

const phases = [
  { number: 1, name: 'Planning', desc: 'Scope definition, asset inventory, authorization' },
  { number: 2, name: 'Reconnaissance', desc: 'Subdomain enum, tech fingerprint, DNS, WAF detection' },
  { number: 3, name: 'Enumeration', desc: 'Directory fuzzing, parameter discovery, crawling' },
  { number: 4, name: 'Vulnerability Analysis', desc: 'Template scanning, injection testing, XSS, SSRF' },
  { number: 5, name: 'Exploitation', desc: 'Controlled exploitation with safety gates' },
  { number: 6, name: 'Post-Exploitation', desc: 'Impact assessment, persistence mapping' },
  { number: 7, name: 'Reporting', desc: 'Executive summary, technical, compliance, remediation' },
];

const attackSurfaces = [
  { icon: Globe, name: 'Web Application', tools: 34 },
  { icon: Smartphone, name: 'Mobile Application', tools: 14 },
  { icon: Cloud, name: 'API Security', tools: 13 },
  { icon: Server, name: 'External Network', tools: 10 },
  { icon: Database, name: 'Internal Network', tools: 11 },
  { icon: Radio, name: 'Wireless / RF', tools: 7 },
  { icon: Key, name: 'Active Directory', tools: 9 },
  { icon: Code, name: 'Source Code Audit', tools: 6 },
  { icon: Eye, name: 'Cloud Security', tools: 6 },
];

export default function TalosProductPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <Badge variant="default" className="mb-4">Product</Badge>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-10 w-10 text-primary" />
          <h1 className="text-5xl font-bold gradient-text">TALOS</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-2">Universal Pentesting Platform</p>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          One command. Every attack surface. Autonomous.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link href="/register">
            <Button size="lg">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Button>
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
              <div key={h.text} className="p-4 rounded-xl border border-border bg-background/50 text-center">
                <h.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-foreground">{h.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Phase Pipeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">7-Phase Automated Pipeline</h2>
          <div className="space-y-3">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {phase.number}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{phase.name}</h3>
                  <p className="text-xs text-muted-foreground">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attack Surfaces */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Attack Surfaces Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {attackSurfaces.map((surface) => (
              <div key={surface.name} className="p-4 rounded-xl border border-border bg-background/50">
                <surface.icon className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium">{surface.name}</div>
                <div className="text-xs text-muted-foreground">{surface.tools} tools</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to pentest everything?</h2>
        <p className="text-muted-foreground mb-8">Start your 14-day free trial. Full access to all 16 types.</p>
        <Link href="/register">
          <Button size="xl">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Button>
        </Link>
      </section>
    </div>
  );
}
