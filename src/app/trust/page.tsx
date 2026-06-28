'use client';

import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Shield, Lock, Server, Eye, FileCheck, Globe, 
  CheckCircle2, ExternalLink, AlertTriangle, Clock 
} from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Encryption',
    items: [
      'TLS 1.3 for all communications',
      'AES-256 for data at rest',
      'End-to-end encryption for sensitive data',
      'Secure key management',
    ],
  },
  {
    icon: Shield,
    title: 'Infrastructure Security',
    items: [
      'DDoS protection',
      'Web Application Firewall (WAF)',
      'Regular penetration testing',
      '24/7 security monitoring',
    ],
  },
  {
    icon: FileCheck,
    title: 'Compliance',
    items: [
      'GDPR compliant',
      'SOC 2 Type II (in progress)',
      'PCI DSS compliant (via Stripe)',
      'Regular third-party audits',
    ],
  },
  {
    icon: Server,
    title: 'Data Protection',
    items: [
      'Data encrypted at rest and in transit',
      'Automated backups every 24 hours',
      '30-day backup retention',
      'Secure data deletion on request',
    ],
  },
];

const certifications = [
  { name: 'GDPR', status: 'Compliant', icon: '✅' },
  { name: 'SOC 2 Type II', status: 'In Progress', icon: '⏳' },
  { name: 'PCI DSS', status: 'Via Stripe', icon: '✅' },
  { name: 'ISO 27001', status: 'Planned 2027', icon: '📋' },
];

export default function TrustPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Trust Center</Badge>
          <h1 className="text-5xl font-bold mb-4 gradient-text">Security & Compliance</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Security is not just a feature — it's our foundation. Here's how we protect your data.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {securityFeatures.map((section) => (
            <div key={section.title} className="p-6 rounded-xl border border-border bg-card/50">
              <section.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="p-8 rounded-xl border border-border bg-card/50 mb-16">
          <h2 className="text-2xl font-bold mb-6">Certifications & Compliance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-4 rounded-lg border border-border bg-background/50 text-center">
                <div className="text-2xl mb-2">{cert.icon}</div>
                <div className="font-semibold text-sm mb-1">{cert.name}</div>
                <div className="text-xs text-muted-foreground">{cert.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Uptime & Monitoring */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <Clock className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Uptime SLA</h3>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <p className="text-sm text-muted-foreground">Enterprise plan includes 99.9% uptime SLA with financial penalties.</p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <AlertTriangle className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Responsible Disclosure</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Found a vulnerability? We want to hear from you. Our bug bounty program rewards 
              responsible disclosure.
            </p>
            <Link href="/trust/disclosure" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              View Disclosure Policy <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center p-8 rounded-xl border border-border bg-card/50">
          <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Security Questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Contact our security team at security@zerodin.io
          </p>
        </div>
      </div>
    </div>
  );
}
