import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Documentation — ZERODIN',
  description: 'ATHELOS documentation at www.athelos.pro/docs. OTA Sentinel documentation available on request.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
