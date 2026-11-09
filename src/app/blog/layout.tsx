import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Notes from the operator — ZERODIN',
  description: 'Notes from the ZERODIN operator on building a cybersecurity company, the products, and the engineering behind them.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
