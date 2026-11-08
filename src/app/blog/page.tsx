"use client";

import Link from "next/link";
import {
  Glass,
  DisplayText,
  BodyText,
  Section,
  Reveal,
} from "@/components/glass";

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
    <main className="min-h-screen pt-24">
      <Section spacing="lg">
        <Reveal>
          <div className="text-center mb-12">
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-4"
            >
              Blog
            </BodyText>
            <DisplayText size="lg" as="h1" className="mb-4">
              Writing.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="max-w-2xl mx-auto">
              Occasional notes on the two products ZERODIN ships, the
              engineering behind them, and what it is like to build security
              software from Sierra Leone.
            </BodyText>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={0.1 * index}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Glass
                  material="clear"
                  hoverable
                  className="p-6 md:p-8 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <BodyText size="sm" tone="tertiary">
                      {post.date}
                    </BodyText>
                    <span className="h-1 w-1 rounded-full bg-border-subtle" />
                    <BodyText size="sm" tone="tertiary">
                      {post.author}
                    </BodyText>
                  </div>
                  <DisplayText size="md" as="h2" className="text-xl md:text-2xl mb-3">
                    {post.title}
                  </DisplayText>
                  <BodyText size="sm" tone="secondary" className="mb-6 flex-1">
                    {post.excerpt}
                  </BodyText>
                  <div className="flex items-center justify-between">
                    <BodyText
                      size="sm"
                      tone="secondary"
                      className="uppercase tracking-wider text-text-accent"
                    >
                      {post.category}
                    </BodyText>
                    <BodyText size="sm" tone="secondary" className="text-text-accent">
                      Read more →
                    </BodyText>
                  </div>
                </Glass>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
