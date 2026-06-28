'use client';

import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const posts = [
  {
    title: 'The State of Zero-Day Exploits in 2026',
    excerpt: 'An analysis of the most critical zero-day vulnerabilities discovered this year and what they mean for enterprise security.',
    date: 'June 25, 2026',
    author: 'Cyb3rwize',
    category: 'Research',
    slug: 'zero-day-exploits-2026',
  },
  {
    title: 'How to Pentest All 16 Attack Surfaces from a Single Platform',
    excerpt: 'A comprehensive guide to running full-scope security assessments using TALOS — from web apps to Active Directory.',
    date: 'June 20, 2026',
    author: 'Cyb3rwize',
    category: 'Guide',
    slug: 'pentest-16-attack-surfaces',
  },
  {
    title: 'Why Continuous Monitoring Beats Annual Pentesting',
    excerpt: 'Annual pentests give you a snapshot. Continuous monitoring gives you a movie. Here\'s why SENTINEL changes the game.',
    date: 'June 15, 2026',
    author: 'Cyb3rwize',
    category: 'Security',
    slug: 'continuous-monitoring-vs-annual-pentesting',
  },
  {
    title: 'Building a Cybersecurity Company from West Africa',
    excerpt: 'The story behind Zerodin — how we built an enterprise-grade security platform from Freetown, Sierra Leone.',
    date: 'June 10, 2026',
    author: 'Cyb3rwize',
    category: 'Company',
    slug: 'building-from-west-africa',
  },
  {
    title: 'MITRE ATT&CK Mapping: From Findings to Executive Reports',
    excerpt: 'How to automatically map pentest findings to the MITRE ATT&CK framework and generate board-ready reports.',
    date: 'June 5, 2026',
    author: 'Cyb3rwize',
    category: 'Guide',
    slug: 'mitre-attack-mapping-guide',
  },
  {
    title: 'The Dark Web in 2026: What Security Teams Need to Know',
    excerpt: 'ODIN\'s dark web monitoring reveals emerging threats that every CISO should be tracking right now.',
    date: 'June 1, 2026',
    author: 'Cyb3rwize',
    category: 'Intelligence',
    slug: 'dark-web-2026',
  },
];

export default function BlogPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Blog</Badge>
          <h1 className="text-5xl font-bold mb-4 gradient-text">Security Research & Insights</h1>
          <p className="text-[#6B7D95] max-w-2xl mx-auto text-lg">
            Deep dives into cybersecurity, product updates, and industry analysis from the Zerodin team.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group p-6 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50 hover:border-[#00E3FD]/30 hover:bg-[#0A1628] transition-all duration-300 h-full glow-cyan">
                <div className="flex items-center gap-3 text-xs text-[#6B7D95] mb-3">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                </div>
                <h2 className="text-lg font-semibold mb-2 group-hover:text-[#00E3FD] transition-colors">{post.title}</h2>
                <p className="text-sm text-[#6B7D95] mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  <span className="text-xs text-[#00E3FD] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
