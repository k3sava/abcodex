import type { Metadata } from "next";
import "./globals.css";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
  title: "DemandOS — Demand Intelligence System",
  description: "Evidence-first market pain mining, opportunity scoring, and PMM reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Shell>{children}</Shell></body></html>;
}
