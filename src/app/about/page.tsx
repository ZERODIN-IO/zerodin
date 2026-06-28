'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Target, Eye, Users, MapPin, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '16', label: 'Attack Surfaces' },
  { value: '122', label: 'Security Tools' },
  { value: '7', label: 'Products' },
  { value: '0', label: 'Breaches Under Our Watch' },
];

const values = [
  {
    icon: Eye,
    title: 'See the Unseen',
    description: 'We find threats that others miss. Zero-days, undiscovered vulnerabilities, and emerging attack vectors — we see them first.',
  },
  {
    icon: Shield,
    title: 'Protect Relentlessly',
    description: 'We build tools that never sleep. Continuous monitoring, automated exploitation, and real-time threat intelligence.',
  },
  {
    icon: Target,
    title: 'Build for Power',
    description: 'Every product we build is designed to give security professionals an edge. No compromises. No shortcuts.',
  },
  {
    icon: Users,
    title: 'Empower the Community',
    description: 'Free Community Edition for learners. Open documentation. Transparent security practices.',
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <Badge variant="default" className="mb-4">About</Badge>
        <h1 className="text-5xl font-bold mb-4 gradient-text">Our Mission</h1>
        <p className="text-[#6B7D95] max-w-3xl mx-auto text-lg leading-relaxed">
          We exist to protect organizations against the unknown. The most dangerous threats 
          are the ones nobody knows about — and we see them first.
        </p>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#0A1628]/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl border border-[#1A2D44] bg-[#060B14]/50">
                <div className="text-4xl font-bold text-[#00E3FD] mb-2">{stat.value}</div>
                <div className="text-sm text-[#6B7D95]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="default" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl font-bold mb-4">Born from Necessity</h2>
              <p className="text-[#6B7D95] leading-relaxed mb-4">
                Zerodin was founded in 2026 by a security researcher who was tired of juggling 
                20 different tools for a single pentest. The vision was simple: one platform 
                that does everything.
              </p>
              <p className="text-[#6B7D95] leading-relaxed mb-4">
                What started as TALOS — a universal pentesting orchestration platform — grew 
                into a complete ecosystem of security products. Today, Zerodin builds tools 
                used by pentesters, security teams, and government agencies worldwide.
              </p>
              <p className="text-[#6B7D95] leading-relaxed">
                We're headquartered in Freetown, Sierra Leone — proving that world-class 
                cybersecurity can come from anywhere.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50 glow-cyan">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-[#00E3FD]" />
                <span className="text-sm text-[#6B7D95]">Headquarters</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Freetown, Sierra Leone</h3>
              <p className="text-sm text-[#6B7D95] leading-relaxed mb-4">
                Building enterprise-grade cybersecurity tools from West Africa. Our location 
                gives us a unique perspective on global security challenges.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#00E3FD]">
                <Globe className="h-4 w-4" />
                <span>Serving clients worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[#0A1628]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4">Values</Badge>
            <h2 className="text-3xl font-bold">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-[#1A2D44] bg-[#060B14]/50"
              >
                <value.icon className="h-8 w-8 text-[#00E3FD] mb-3" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-[#6B7D95] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-[#6B7D95] mb-8">Be part of the future of cybersecurity.</p>
        <Link href="/register">
          <Button size="xl">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
