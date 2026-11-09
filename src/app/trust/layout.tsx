import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Trust Center — ZERODIN',
  description: 'The security standards ZERODIN holds across every product — current and future. Encryption, isolation, audit, data protection.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
