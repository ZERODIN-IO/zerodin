'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Globe, Zap, Server, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    icon: Target,
    name: 'TALOS',
    tagline: 'Universal Pentesting Platform',
    description: '16 attack surfaces. 122 integrated security tools. 7-phase automated pipeline. From reconnaissance to reporting — TALOS does it all.',
    tiers: ['Community Free', 'Pro $199/mo', 'Team $799/mo', 'Enterprise $2,999/mo'],
    href: '/products/talos',
    color: 'cyan',
  },
  {
    icon: Eye,
    name: 'SENTINEL',
    tagline: 'Continuous Security Monitoring',
    description: '24/7 automated vulnerability scanning with real-time alerts. Never miss a security gap. PCI DSS and SOC 2 compliant monitoring.',
    tiers: ['Starter $499/mo', 'Business $1,499/mo', 'Enterprise $4,999/mo'],
    href: '/products/sentinel',
    color: 'orange',
  },
  {
    icon: Globe,
    name: 'ODIN',
    tagline: 'Threat Intelligence',
    description: 'Dark web monitoring. Zero-day detection. Credential leak alerts. Know what threats exist before they hit your organization.',
    tiers: ['Intelligence $999/mo', 'Dark Web $2,499/mo', 'Enterprise $5,999/mo'],
    href: '/products/odin',
    color: 'red',
  },
  {
    icon: Zap,
    name: 'FORGE',
    tagline: 'Automated Exploitation Engine',
    description: 'Prove vulnerabilities are real. Automated exploitation with safety controls. Full attack narratives and impact verification.',
    tiers: ['Pro $2,999/mo', 'Enterprise $9,999/mo'],
    href: '/products/forge',
    color: 'purple',
  },
  {
    icon: Server,
    name: 'NEXUS',
    tagline: 'Cross-Platform Intelligence',
    description: 'Correlate security data from all tools into one dashboard. ML-powered predictions. Custom integrations with SIEM, EDR, and Cloud.',
    tiers: ['Business $1,999/mo', 'Enterprise $5,999/mo'],
    href: '/products/nexus',
    color: 'blue',
  },
];

export default function ProductsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Products</Badge>
          <h1 className="text-5xl font-bold mb-4 gradient-text">Our Product Suite</h1>
          <p className="text-[#6B7D95] max-w-2xl mx-auto text-lg">
            Five integrated products covering every aspect of offensive and defensive cybersecurity.
            All built on the same platform. All working together.
          </p>
        </div>

        {/* Product Cards */}
        <div className="space-y-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={product.href}>
                <div className="group p-8 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50 hover:border-[#00E3FD]/30 hover:bg-[#0A1628] transition-all duration-300 glow-cyan">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <product.icon className="h-12 w-12 text-[#00E3FD]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
                      <p className="text-sm text-[#00E3FD] mb-3">{product.tagline}</p>
                      <p className="text-[#6B7D95] mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.tiers.map((tier) => (
                          <Badge key={tier} variant="secondary" className="text-xs">{tier}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <ArrowRight className="h-6 w-6 text-[#6B7D95] group-hover:text-[#00E3FD] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Engine Add-ons */}
        <div className="mt-16 text-center">
          <Badge variant="default" className="mb-4">Add-ons</Badge>
          <h2 className="text-3xl font-bold mb-4">TALOS Premium Engines</h2>
          <p className="text-[#6B7D95] mb-8">
            Six specialized engines that extend TALOS with advanced capabilities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['PROMETHEUS', 'JANUS', 'NEMESIS', 'NEXUS', 'MINERVA', 'AEGIS'].map((engine) => (
              <div key={engine} className="p-4 rounded-lg border border-[#1A2D44] bg-[#0A1628]/30 text-sm font-mono text-[#00E3FD]">
                {engine}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
