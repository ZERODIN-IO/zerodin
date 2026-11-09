import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare ATHELOS and OTA Sentinel — ZERODIN",
  description: "ATHELOS and OTA Sentinel are different products for different problems. Here is the honest comparison: who each is for, what problem it solves, what it does, and what it does not do.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
