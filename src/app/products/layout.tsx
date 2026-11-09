import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Products — ZERODIN',
  description: 'ATHELOS, a command center for security operators. OTA Sentinel, a SIM security platform for telecom networks. Two products shipped. More in development.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
