'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  BookOpen, Terminal, Shield, Zap, Globe, Eye, Server, Rocket,
  Key, Code, ArrowRight, FileText, Search, Settings,
  Cloud, Smartphone, Radio, Users, Lock, Target
} from 'lucide-react';
import { motion } from 'framer-motion';

const docSections = [
  {
    icon: Rocket,
    title: 'Getting Started',
    description: 'Quick start guides, installation, and first scan.',
    links: [
      { label: 'Quick Start Guide', href: '/docs/quickstart' },
      { label: 'Installation', href: '/docs/installation' },
      { label: 'Running Your First Scan', href: '/docs/first-scan' },
      { label: 'Dashboard Overview', href: '/docs/dashboard' },
    ],
  },
  {
    icon: Target,
    title: 'TALOS Platform',
    description: 'Complete pentesting platform documentation.',
    links: [
      { label: 'Scanner Configuration', href: '/docs/talos/scanner' },
      { label: 'Findings & Reports', href: '/docs/talos/findings' },
      { label: 'Settings & Configuration', href: '/docs/talos/settings' },
      { label: '16 Pentesting Types', href: '/docs/talos/pentesting-types' },
      { label: '7-Phase Pipeline', href: '/docs/talos/pipeline' },
      { label: 'API Reference', href: '/docs/api' },
    ],
  },
  {
    icon: Shield,
    title: 'Security Engines',
    description: 'Premium engine documentation.',
    links: [
      { label: 'PROMETHEUS — Bypass Engine', href: '/docs/engines/prometheus' },
      { label: 'JANUS — Attack Chains', href: '/docs/engines/janus' },
      { label: 'NEMESIS — Impact Prover', href: '/docs/engines/nemesis' },
      { label: 'NEXUS — Learning Engine', href: '/docs/engines/nexus' },
      { label: 'MINERVA — Intelligence', href: '/docs/engines/minerva' },
      { label: 'AEGIS — Surface Mapping', href: '/docs/engines/aegis' },
    ],
  },
  {
    icon: Terminal,
    title: 'API Reference',
    description: 'Complete REST API documentation.',
    links: [
      { label: 'Authentication', href: '/docs/api/auth' },
      { label: 'Engagements & Scans', href: '/docs/api/engagements' },
      { label: 'Findings', href: '/docs/api/findings' },
      { label: 'Intelligence', href: '/docs/api/intelligence' },
      { label: 'Settings', href: '/docs/api/settings' },
    ],
  },
  {
    icon: Server,
    title: 'Deployment',
    description: 'Self-hosted and cloud deployment guides.',
    links: [
      { label: 'Docker Compose Setup', href: '/docs/deployment/docker' },
      { label: 'Oracle Cloud Deployment', href: '/docs/deployment/oracle' },
      { label: 'Nginx Configuration', href: '/docs/deployment/nginx' },
      { label: 'SSL & Security', href: '/docs/deployment/ssl' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Guides & Tutorials',
    description: 'Step-by-step pentesting guides.',
    links: [
      { label: 'Web Application Pentesting', href: '/docs/guides/web-app' },
      { label: 'Active Directory Assessment', href: '/docs/guides/ad' },
      { label: 'Cloud Security Audit', href: '/docs/guides/cloud' },
      { label: 'API Security Testing', href: '/docs/guides/api' },
      { label: 'Mobile App Analysis', href: '/docs/guides/mobile' },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Documentation</Badge>
          <h1 className="text-5xl font-bold mb-4 gradient-text">Documentation</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to master the Zerodin platform. From quickstart guides to API references.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full h-12 rounded-xl border border-border bg-card pl-10 pr-4 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Doc Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <section.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-colors py-1"
                    >
                      <ArrowRight className="h-3 w-3 flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* API Quick Reference */}
        <div className="mt-16 p-8 rounded-xl border border-border bg-card/50">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">API Quick Reference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { method: 'POST', endpoint: '/api/v1/auth/login', desc: 'Authenticate user' },
              { method: 'POST', endpoint: '/api/v1/scan/start', desc: 'Start a pentest scan' },
              { method: 'GET', endpoint: '/api/v1/findings', desc: 'List all findings' },
              { method: 'GET', endpoint: '/api/v1/stats', desc: 'Dashboard statistics' },
            ].map((api) => (
              <div key={api.endpoint} className="p-3 rounded-lg bg-background border border-border">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                  api.method === 'POST' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {api.method}
                </span>
                <code className="block text-xs text-primary mt-2 font-mono">{api.endpoint}</code>
                <span className="text-xs text-muted-foreground mt-1 block">{api.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Help CTA */}
        <div className="mt-16 text-center p-8 rounded-xl border border-border bg-card/50">
          <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Can't find what you need?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our community and support team are here to help.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="sm">Contact Support</Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="sm">Read Guides</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
