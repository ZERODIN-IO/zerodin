import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Glass,
  DisplayText,
  BodyText,
  Section,
  Reveal,
} from "@/components/glass";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
}

const posts: BlogPost[] = [
  {
    slug: "building-from-west-africa",
    title: "Building from West Africa: The Story Behind ZERODIN",
    date: "2026-10-15",
    author: "Cyb3rwize",
    category: "Company",
    readTime: "8 min read",
    excerpt:
      "How one security researcher in Freetown built two products — a cybersecurity command center and a telecom SIM security platform — with no venture capital.",
    content: `I'm a security researcher and bug bounty hunter based in Freetown, Sierra Leone. Since 2024 I have been freelancing on platforms like Fiverr and hunting vulnerabilities on HackerOne and Bugcrowd, juggling twenty different tools for every engagement. Subfinder for subdomains. Nmap for ports. FFUF for fuzzing. Nuclei for vulnerabilities. SQLMap for injection. Each tool with its own syntax, its own output format, its own quirks.

Late nights hunting bugs, I kept thinking: why is there no single workspace that holds all of this?

## Two Problems, Two Products

That question eventually became two separate products, each solving a different problem.

The first is ATHELOS: a cybersecurity command center for the solo operator. Five pillars in one tool — a knowledge engine of methodologies and playbooks, an engagement state machine that runs a penetration test through ten phases, a delivery layer that produces reports and evidence, a business layer for clients and contracts and invoices, and a tooling layer for the registry and labs and automation. Self-hosted, signed releases, no SaaS dependency. It is the tool I wanted when I was doing this work by hand.

The second is OTA Sentinel: a SIM security platform for telecom operators and regulators. Some SIM cards ship with insecure applets misconfigured — the S@T Browser with MSL=0 is the famous example — making them vulnerable to the Simjacker attack class. OTA Sentinel audits SIM cards through a PC/SC reader to find them, and for networks that hold their own KIC/KID keys, it can also construct secure OTA management commands over SMPP. It is a different problem from ATHELOS, for a different audience, but built by the same hand with the same discipline.

## Building from Sierra Leone

People ask: why build a cybersecurity company from Sierra Leone?

My answer: why not?

The internet does not care where you are from. Code compiles the same in Freetown as it does in San Francisco. Building from Sierra Leone has advantages: low cost of living, a unique perspective, and hunger. It also has disadvantages: the network is unreliable, parts are hard to source, and the talent pool is smaller. But the products are the same.

## What We Have Shipped

Today, ZERODIN ships two products: ATHELOS and OTA Sentinel. Both built by one person from Freetown with no venture capital.

ATHELOS has been in production for over a year, with a database-per-tenant Cloud deployment that passed the OWASP cross-tenant boundary test. OTA Sentinel runs audits against real SIM card samples with the same level of rigor.

There is no roadmap of five products. There is no fundraise. There are two things that work, and there is the work of making them work better.

## What Comes Next

The next year is about depth, not breadth. Making ATHELOS the best tool a solo operator can hold. Making OTA Sentinel the standard audit tool for West African telecoms. Making the documentation better, the onboarding smoother, and the software more honest about what it does and does not do.

If you want to see what that looks like, the products are at /products. If you want to talk, /contact.`,
  },
  {
    slug: "two-products-one-standard",
    title: "Two Products, One Standard: ATHELOS and OTA Sentinel",
    date: "2026-10-22",
    author: "Cyb3rwize",
    category: "Product",
    readTime: "6 min read",
    excerpt:
      "What ZERODIN ships, what each product does, and the standard they share: self-hosted, no SaaS dependency, no cloud AI on client data.",
    content: `ZERODIN ships exactly two products. This is what each one does, and why they are built to the same standard.

## ATHELOS — The Cybersecurity Command Center

ATHELOS is a workspace for the security operator. It has five pillars that together cover the full arc of a penetration test or security assessment:

The knowledge engine holds methodologies, playbooks, cheat sheets, tool registries, wordlists, payloads, labs, detection rules, and a learning tracker. It is what you reach for when you need to remember how a technique works, or which tool to use for which job.

The engagement state machine runs an assessment through ten phases, from pre-engagement through billing. Every gate is enforced by the tool. You cannot advance to reporting before findings are captured, or to invoicing before the report is delivered.

The delivery layer handles findings, evidence, PDF generation, and a client portal where the client can review what was tested and what was found.

The business layer holds clients, contracts, a scoping calculator, invoices, payments, and the financial view of the operator's work.

The tooling layer manages tools, labs, infrastructure, automation, and detection engineering.

ATHELOS runs in three deployment models from the same codebase: self-hosted (you run it on your own hardware), dedicated (one VPS per customer, provisioned from the same codebase), and Cloud (multi-tenant SaaS with a database per tenant).

The isolation of the Cloud deployment is verified by an OWASP cross-tenant boundary test. Tenant B cannot read a single row of Tenant A's data. That is not a claim, it is a test.

## OTA Sentinel — The SIM Security Platform

OTA Sentinel is a platform for telecom operators, government regulators, and managed security service providers. It solves two distinct problems.

The first path is auditing. Some SIM cards are misconfigured with insecure applets — the S@T Browser with MSL=0 is the canonical example — making them vulnerable to the Simjacker attack class. OTA Sentinel reads the ICCID, IMSI, ATR, and the installed applet list (the TARs) through a PC/SC reader, and flags the cards that are vulnerable. It then constructs ETSI TS 102 225 payloads with SPI=0x0000 to prove exploitability against the vulnerable card.

The second path is secure management. For networks that hold their own KIC/KID cryptographic keys, OTA Sentinel can construct ETSI TS 102 225 SCP80 OTA packets with 3DES/AES encryption and a valid cryptographic checksum, then dispatch them through the operator's SMPP connection to the SMSC. A raw-socket SMPP v3.4 client binds to the SMSC, sends the binary payload with data_coding=0x04, and listens for the deliver_sm proof of receipt. An asynchronous campaign worker processes queued campaigns, throttles the dispatch rate, and logs the results.

OTA Sentinel is sold in three commercial models: a one-time audit report ($5,000–$10,000), a perpetual network license (starting at $25,000 plus 20% annual maintenance), and a sovereign / MSSP engagement with custom pricing, source code escrow, and legal indemnity.

## The Standard Both Products Share

Both products share the same posture, deliberately:

They are self-hosted where possible. There is no SaaS dependency. A customer can run the software on their own infrastructure, keep their data on their own infrastructure, and stop depending on ZERODIN's servers for the software to work.

They do not send client data to a cloud AI. The local AI features use Ollama, running on the customer's own hardware. The operator's data does not leave the operator's network.

They are audited. ATHELOS has a database-per-tenant isolation that is proven by an OWASP test. OTA Sentinel has row-level security in PostgreSQL with hash-chained audit logs and 11/11 tests passing, including RLS isolation proofs.

They are shipped. Both products run in production today.

## What This Means

If you are a security operator who wants a single tool for the full arc of your work, ATHELOS is for you. If you are a telecom operator or regulator who needs to audit SIM card security, OTA Sentinel is for you. If you are an MSSP and you need both, both are available.

If you want a company that promises a roadmap of seven products it has not built yet, ZERODIN is not that company. We ship two products, and we ship them properly.`,
  },
  {
    slug: "database-per-tenant",
    title: "Database-per-Tenant: How ATHELOS Isolates Cloud Customers",
    date: "2026-10-29",
    author: "Cyb3rwize",
    category: "Engineering",
    readTime: "10 min read",
    excerpt:
      "The multi-tenancy problem, the architecture that solves it, and the OWASP test that proves it: Tenant B saw 0 rows. Tenant A saw 59 rows.",
    content: `Multi-tenant SaaS has a problem that is easy to describe and hard to solve: two customers, one database, and a bug that could show one customer the other's data. Most SaaS accepts a small risk of this. ATHELOS does not.

## The Problem With Row-Level Tenancy

The common way to do multi-tenancy is a single database with a tenant_id column on every table. Every query filters by tenant_id. If any query forgets the filter — a new server action, a forgotten WHERE clause, a raw SQL that bypasses the ORM — one customer can see another customer's data. The bug class is large. The industry has examples of it happening at major companies.

The alternative is to give each tenant their own database. Then a forgotten WHERE clause cannot leak data across tenants because the query never reaches another tenant's database in the first place. Isolation is physical, not logical.

ATHELOS uses this second approach.

## The Architecture

Every tenant gets a PostgreSQL database of their own, named athelos_tenant_<slug>. The tenant's application data — clients, engagements, findings, evidence, reports, knowledge base articles — lives entirely inside that database. There is no tenant_id column on any of the 46 application tables. There is no query that could be run without a tenant in scope.

There is a second database, called the control plane, which holds the cross-tenant data: the tenants table, the users table, the subscriptions table, and the audit and billing data that needs to be seen across tenants. The control plane is at soc_solo. It knows which tenants exist and which database belongs to each.

When a request comes in, it carries a subdomain or a header that identifies the tenant. A proxy in front of the application resolves that identifier to a tenant ID, and forwards the request with a trusted x-tenant-id header. The application's database layer, a Proxy object that wraps every query, reads that header from an AsyncLocalStorage context and routes the query to the correct tenant database. Every server action is wrapped by a boundary function that establishes the tenant context before the action runs.

## The Two Hard Problems

The architecture is simple in principle. Two things make it hard in practice.

The first is connection registration across processes. A tenant's connection pool has to be registered with the right process before a query can run. In a Next.js application, the proxy runs in one process, the API routes run in another, and background workers run in a third. If the connection is registered in the proxy but the query runs in the API route, the query has no connection and fails. This cost us three separate bug fixes — each one adding a bootstrap import to a new process that was not registering the connection. The rule we landed on is: any file that queries the control plane must import the control-plane bootstrap module at the top. Any file that queries a tenant database must run inside the tenant boundary. Every new entry point has to make this explicit.

The second is the tenant boundary itself. Every server action — all 302 of them — has to run inside the tenant context. We use an AST codemod (built with ts-morph) to wrap them mechanically, so that a new server action cannot be written without the boundary. The wrapping is applied at the top of each function. Inside the function, the code sees the tenant's database as if it were the only database. Outside the function, nothing runs.

## The Test

The isolation claim is verified by an OWASP cross-tenant boundary test. The test provisions two real tenants, Tenant A and Tenant B, each with their own database. Tenant A creates data — 59 rows across the tables it can write to. Then Tenant B, in the same application, attempts to read that data.

The result:

Tenant B saw 0 rows. Tenant A saw 59 rows.

That is the test passing. The isolation is not a claim in a README. It is a test that runs against two real databases and returns 0 rows for the tenant that should not see the data.

The test lives at test/cloud/owasp-cross-tenant.ts and is run on every release. If the isolation ever breaks, the test fails before the release ships.

## Why This Matters

If you are a security operator who is thinking about moving to a Cloud deployment of ATHELOS, the question you are going to ask is: "Is my data safe from the other tenants?"

The answer is not "trust us, our filter is good." The answer is: your data is in a database that no other tenant's query can reach. The proof is a test that reads zero rows from the other tenant. That is what database-per-tenant buys, and that is why ATHELOS uses it.`,
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content.split("\n\n");

  return (
    <main className="min-h-screen pt-24">
      <Section spacing="lg">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          All posts
        </Link>

        <Reveal>
          <Glass material="crystal" className="p-8 md:p-14">
            <div className="mb-8">
              <BodyText
                size="sm"
                tone="tertiary"
                className="uppercase tracking-[0.2em] mb-4"
              >
                {post.category}
              </BodyText>
              <DisplayText size="lg" as="h1" className="mb-6">
                {post.title}
              </DisplayText>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <BodyText size="sm" tone="tertiary">
                  {post.date}
                </BodyText>
                <span className="h-1 w-1 rounded-full bg-border-subtle" />
                <BodyText size="sm" tone="tertiary">
                  {post.author}
                </BodyText>
                <span className="h-1 w-1 rounded-full bg-border-subtle" />
                <BodyText size="sm" tone="tertiary">
                  {post.readTime}
                </BodyText>
              </div>
            </div>

            <article>
              {paragraphs.map((para, i) => {
                if (para.startsWith("## ")) {
                  return (
                    <DisplayText
                      key={i}
                      size="md"
                      as="h2"
                      className="text-xl md:text-2xl mt-10 mb-4"
                    >
                      {para.replace("## ", "")}
                    </DisplayText>
                  );
                }
                return (
                  <BodyText
                    key={i}
                    size="base"
                    tone="secondary"
                    className="mb-6"
                  >
                    {para}
                  </BodyText>
                );
              })}
            </article>

            <div className="mt-12 pt-8 border-t border-border-subtle">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>
            </div>
          </Glass>
        </Reveal>
      </Section>
    </main>
  );
}
