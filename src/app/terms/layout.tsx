import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms — ZERODIN',
  description: 'ZERODIN terms of service. The terms that apply to ATHELOS and OTA Sentinel engagements.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
