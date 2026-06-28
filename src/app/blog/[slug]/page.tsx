import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
}

const posts: BlogPost[] = [
  {
    slug: 'building-from-west-africa',
    title: 'Building a Cybersecurity Company from West Africa',
    date: '2026-06-10',
    author: 'Cyb3rwize',
    category: 'Company',
    excerpt: 'The story behind Zerodin — how we built an enterprise-grade security platform from Freetown, Sierra Leone.',
    content: `I'm a security researcher and bug bounty hunter based in Freetown, Sierra Leone. Since 2024, I've been freelancing on platforms like Fiverr and hunting vulnerabilities on HackerOne and Bugcrowd — juggling 20 different tools for every engagement. Subfinder for subdomains. Nmap for ports. FFUF for fuzzing. Nuclei for vulnerabilities. SQLMap for injection. And a dozen more. Each tool had its own syntax, its own output format, its own quirks.

Late nights hunting bugs, I kept thinking: "Why isn't there one platform that does all of this?"

That question became TALOS.

## The Problem with Cybersecurity Tools

The cybersecurity industry has a fragmentation problem. There are incredible open-source tools available — but they don't work together. A pentester doing a full-scope assessment might use 5 tools for reconnaissance, 4 for enumeration, 8 for vulnerability analysis, 3 for exploitation, and manual processes for reporting.

TALOS flips that ratio. It unifies 122 tools across 16 attack surfaces into a single platform with a 7-phase automated pipeline.

## Building from Sierra Leone

People ask: "Why build a cybersecurity company from Sierra Leone?"

My answer: "Why not?"

The internet doesn't care where you're from. Code compiles the same in Freetown as it does in San Francisco. Building from Sierra Leone gave me advantages: low cost of living, unique perspective, and hunger.

## What We've Built

Today, Zerodin has seven products: TALOS, SENTINEL, ODIN, FORGE, NEXUS, SLEIPNIR, and HOPE. All built by one person from Freetown with no venture capital.

Zerodin proves that world-class cybersecurity can come from anywhere.`,
  },
  {
    slug: 'zero-day-exploits-2026',
    title: 'The State of Zero-Day Exploits in 2026',
    date: '2026-06-25',
    author: 'Cyb3rwize',
    category: 'Research',
    excerpt: 'An analysis of the most critical zero-day vulnerabilities discovered this year.',
    content: `The CISA Known Exploited Vulnerabilities (KEV) catalog currently lists 1,629 actively exploited vulnerabilities. These are not theoretical — attackers are using them right now.

## The Most Dangerous Zero-Days of 2026

**iOS iMessage Zero-Click** — Remote code execution without user interaction. Simply receiving a message is enough to compromise the device.

**Enterprise VPN Appliances** — Multiple zero-days in Pulse Secure, Fortinet, and Citrix continue to be the primary entry point for ransomware groups.

**MFT Software** — Managed File Transfer software remains a prime target with 3 new zero-days discovered this year alone.

## Why Zero-Days Are Getting More Dangerous

AI-powered exploit generation, supply chain targets, ransomware industrialization, and faster weaponization are making zero-days more dangerous than ever.

The only defense is continuous vigilance — knowing what threats exist before they hit you.`,
  },
  {
    slug: 'continuous-monitoring-vs-annual-pentesting',
    title: 'Why Continuous Monitoring Beats Annual Pentesting',
    date: '2026-06-15',
    author: 'Cyb3rwize',
    category: 'Security',
    excerpt: 'Annual pentests give you a snapshot. Continuous monitoring gives you a movie.',
    content: `Most organizations do one pentest per year. They get a 120-page report, fix some vulnerabilities, deploy new applications, and wait 12 months for the next test.

SENTINEL scans your infrastructure every hour. When a new vulnerability is discovered, you know within 60 minutes. When you deploy a new application, it's automatically scanned.

A financial services company used annual pentests for 5 years. Within 3 days of switching to SENTINEL, it found exposed S3 buckets, an unpatched VPN vulnerability, default credentials, and shadow IT applications.

Annual pentests are like getting a physical once a year while eating junk food every day. Continuous monitoring catches problems as they happen.`,
  },
  {
    slug: 'pentest-16-attack-surfaces',
    title: 'How to Pentest All 16 Attack Surfaces from a Single Platform',
    date: '2026-06-20',
    author: 'Cyb3rwize',
    category: 'Guide',
    excerpt: 'A comprehensive guide to running full-scope security assessments using TALOS.',
    content: `Most pentesting tools cover 1-3 attack surfaces. TALOS covers all 16 from a single platform.

## The 16 Attack Surfaces

Web Application (34 tools), Mobile Application (14 tools), API Security (13 tools), External Network (10 tools), Internal Network (11 tools), Wireless/RF (7 tools), Cloud Security (6 tools), Active Directory (9 tools), Containers (4 tools), IoT/Embedded (5 tools), Source Code Audit (6 tools), Social Engineering, Physical Security, Red Team, Bug Bounty, and Compliance.

## The 7-Phase Pipeline

Every pentest follows: Planning → Reconnaissance → Enumeration → Vulnerability Analysis → Exploitation → Post-Exploitation → Reporting.

One platform. Sixteen attack surfaces. Total coverage.`,
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="py-20 px-4">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        
        <Badge variant="default" className="mb-4">{post.category}</Badge>
        <h1 className="text-4xl font-bold mb-4 gradient-text">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
        </div>
        
        <div className="prose prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold mt-12 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={i} className="text-xl font-semibold mt-8 mb-3">{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
          })}
        </div>
        
        <div className="mt-16 p-8 rounded-xl border border-border bg-card text-center">
          <h3 className="text-xl font-bold mb-2">Ready to see the unseen?</h3>
          <p className="text-muted-foreground mb-4">Start your free trial today. No credit card required.</p>
          <Link href="/register">
            <Button size="lg">Get Started Free</Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
