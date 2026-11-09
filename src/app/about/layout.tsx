import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About — ZERODIN',
  description: 'ZERODIN is a cybersecurity company based in Freetown, Sierra Leone. One operator. Two products in production. Offensive and defensive security tooling.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
