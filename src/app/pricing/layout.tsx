import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing — ZERODIN',
  description: 'ATHELOS is available self-hosted, dedicated, or on the Cloud. OTA Sentinel is priced by engagement: Audit Report, Network License, or Sovereign/MSSP. More products will be added as they ship.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
