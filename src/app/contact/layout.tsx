import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact — ZERODIN',
  description: 'Contact ZERODIN about ATHELOS, OTA Sentinel, enterprise engagements, or audit inquiries.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
