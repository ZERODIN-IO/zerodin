import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'OTA Sentinel — SIM security platform — ZERODIN',
  description: 'OTA Sentinel is a SIM security platform for telecom operators and regulators. Audits SIM cards for Simjacker vulnerabilities. Secure OTA management with KIC/KID keys.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
