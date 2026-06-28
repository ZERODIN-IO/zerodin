'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Shield, ArrowRight, Zap, Target, Lock, Globe, Eye, 
  ChevronRight, CheckCircle2, Server, Cloud, Smartphone,
  Radio, Code, Users, Key, Terminal, Database
} from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    icon: Target,
    name: 'TALOS',
    color: 'cyan',
    description: 'Universal Pentesting Platform. 16 attack surfaces. 122 tools. 7-phase automated pipeline.',
    href: '/products/talos',
    tiers: ['Community Free', 'Pro $199/mo', 'Team $799/mo', 'Enterprise'],
  },
  {
    icon: Eye,
    name: 'SENTINEL',
    color: 'orange',
    description: 'Continuous Security Monitoring. 24/7 automated vulnerability scanning with real-time alerts.',
    href: '/products/sentinel',
    tiers: ['Starter $499/mo', 'Business $1,499/mo', 'Enterprise $4,999/mo'],
  },
  {
    icon: Globe,
    name: 'ODIN',
    color: 'red',
    description: 'Threat Intelligence. Dark web monitoring. Zero-day detection. Credential leak alerts.',
    href: '/products/odin',
    tiers: ['Intelligence $999/mo', 'Dark Web $2,499/mo', 'Enterprise Shield'],
  },
  {
    icon: Zap,
    name: 'FORGE',
    color: 'purple',
    description: 'Automated Exploitation Engine. Prove vulnerabilities are real with automated impact verification.',
    href: '/products/forge',
    tiers: ['Pro $2,999/mo', 'Enterprise $9,999/mo'],
  },
  {
    icon: Server,
    name: 'NEXUS',
    color: 'blue',
    description: 'Cross-Platform Intelligence. Correlate security data from all tools into one dashboard.',
    href: '/products/nexus',
    tiers: ['Business $1,999/mo', 'Enterprise $5,999/mo'],
  },
];

const stats = [
  { icon: Shield, value: '16', label: 'Attack Surfaces Covered' },
  { icon: Terminal, value: '122', label: 'Integrated Security Tools' },
  { icon: Eye, value: '1,629', label: 'CISA KEV Vulnerabilities Tracked' },
  { icon: Lock, value: '99.9%', label: 'Uptime SLA (Enterprise)' },
];

const features = [
  {
    icon: Eye,
    title: 'See All Attack Surfaces',
    description: '16 pentesting types covering web, mobile, API, network, cloud, AD, containers, IoT, wireless, source code, and more.',
  },
  {
    icon: Shield,
    title: 'Defend Against Zero-Days',
    description: 'ODIN monitors the dark web and exploit markets for threats targeting your infrastructure before they strike.',
  },
  {
    icon: Zap,
    title: 'Automate at Scale',
    description: 'AI-powered pentesting that gets smarter with every scan. Run 122 tools across 16 attack surfaces automatically.',
  },
];

const attackSurfaces = [
  { icon: Globe, name: 'Web Applications' },
  { icon: Smartphone, name: 'Mobile Apps' },
  { icon: Cloud, name: 'Cloud Infrastructure' },
  { icon: Server, name: 'External Network' },
  { icon: Database, name: 'Internal Network' },
  { icon: Radio, name: 'Wireless / RF' },
  { icon: Key, name: 'Active Directory' },
  { icon: Code, name: 'Source Code' },
  { icon: Users, name: 'Social Engineering' },
  { icon: Lock, name: 'Physical Security' },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ════════════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E3FD] rounded-full blur-[200px] opacity-[0.03]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[200px] opacity-[0.03]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <Badge variant="default" className="text-sm px-4 py-1.5 gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00E3FD] animate-pulse" />
                Now in Public Beta
              </Badge>
            </div>

            {/* Logo Symbol */}
            <div className="flex justify-center mb-8">
              <Shield className="h-20 w-20 text-[#00E3FD]" style={{ filter: "drop-shadow(0 0 30px rgba(0,227,253,0.5))" }} />
            </div>

            {/* Hero Text */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">See the Unseen</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7D95] max-w-2xl mx-auto mb-10 leading-relaxed">
              Universal cybersecurity platform protecting organizations against zero-day threats, 
              undiscovered vulnerabilities, and emerging attack vectors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/register">
                <Button size="xl" className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Explore Products
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50 backdrop-blur">
                  <stat.icon className="h-5 w-5 text-[#00E3FD] mb-2 mx-auto" />
                  <div className="text-2xl font-bold text-[#E8EDF5]">{stat.value}</div>
                  <div className="text-xs text-[#6B7D95]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* PRODUCTS SECTION */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4">Products</Badge>
            <h2 className="text-4xl font-bold mb-4">Our Product Suite</h2>
            <p className="text-[#6B7D95] max-w-2xl mx-auto">
              Five integrated products covering every aspect of offensive and defensive cybersecurity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={product.href}>
                  <div className="group p-6 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50 hover:border-[#00E3FD]/30 hover:bg-[#0A1628] transition-all duration-300 h-full glow-cyan">
                    <product.icon className="h-10 w-10 text-[#00E3FD] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-[#6B7D95] mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.tiers.map((tier) => (
                        <Badge key={tier} variant="secondary" className="text-xs">{tier}</Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* WHY ZERODIN SECTION */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-[#0A1628]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4">Why Zerodin</Badge>
            <h2 className="text-4xl font-bold mb-4">Built for the Unknown</h2>
            <p className="text-[#6B7D95] max-w-2xl mx-auto">
              The most dangerous threats are the ones nobody knows about. We see them first.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center p-8 rounded-xl border border-[#1A2D44] bg-[#060B14]/50"
              >
                <feature.icon className="h-12 w-12 text-[#00E3FD] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6B7D95] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* ATTACK SURFACES SECTION */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="default" className="mb-4">Coverage</Badge>
          <h2 className="text-4xl font-bold mb-4">16 Attack Surfaces Covered</h2>
          <p className="text-[#6B7D95] mb-12 max-w-2xl mx-auto">
            No other platform covers this breadth of security testing in a single unified interface.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {attackSurfaces.map((surface) => (
              <div key={surface.name} className="p-4 rounded-xl border border-[#1A2D44] bg-[#0A1628]/30 hover:border-[#00E3FD]/20 transition-all">
                <surface.icon className="h-6 w-6 text-[#00E3FD] mb-2 mx-auto" />
                <div className="text-xs text-[#6B7D95]">{surface.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* CTA SECTION */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-2xl border border-[#1A2D44] bg-[#0A1628]/50 glow-cyan">
            <Shield className="h-16 w-16 text-[#00E3FD] mx-auto mb-6" style={{ filter: "drop-shadow(0 0 20px rgba(0,227,253,0.4))" }} />
            <h2 className="text-3xl font-bold mb-4">Ready to See the Unseen?</h2>
            <p className="text-[#6B7D95] mb-8 max-w-xl mx-auto">
              Start your free trial today. No credit card required. Full access to TALOS Community Edition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="xl">
                  Contact Sales
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#6B7D95]">
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-400" /> No credit card required</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-400" /> 14-day Pro trial</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-400" /> Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
