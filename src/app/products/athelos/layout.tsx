import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ATHELOS — Cybersecurity command center — ZERODIN',
  description: 'ATHELOS is a cybersecurity command center for the solo operator. Five pillars, three deployment models, database-per-tenant Cloud with proven isolation.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
