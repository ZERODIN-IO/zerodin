import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy — ZERODIN',
  description: 'ZERODIN privacy policy. What the site collects, how contact form data is handled, and the privacy terms for ATHELOS Cloud customers.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
