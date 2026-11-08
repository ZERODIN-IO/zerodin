"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "Building from West Africa: The Story Behind ZERODIN",
    excerpt:
      "How one security researcher in Freetown built two products — a cybersecurity command center and a telecom SIM security platform — with no venture capital.",
    date: "October 15, 2026",
    author: "Cyb3rwize",
    category: "Company",
    slug: "building-from-west-africa",
  },
  {
    title: "Two Products, One Standard: ATHELOS and OTA Sentinel",
    excerpt:
      "What ZERODIN ships, what each product does, and the standard they share: self-hosted, no SaaS dependency, no cloud AI on client data.",
    date: "October 22, 2026",
    author: "Cyb3rwize",
    category: "Product",
    slug: "two-products-one-standard",
  },
  {
    title: "Database-per-Tenant: How ATHELOS Isolates Cloud Customers",
    excerpt:
      "The multi-tenancy problem, the architecture that solves it, and the OWASP test that proves it: Tenant B saw 0 rows. Tenant A saw 59 rows.",
    date: "October 29, 2026",
    author: "Cyb3rwize",
    category: "Engineering",
    slug: "database-per-tenant",
  },
];

export default function BlogPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Blog</Badge>
          <h1 className="text-5xl font-bold mb-4 gradient-text">Writing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Occasional notes on the two products ZERODIN ships, the
            engineering behind them, and what it is like to build security
            software from Sierra Leone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 h-full glow-cyan">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {post.author}
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
