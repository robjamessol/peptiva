import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "peptriva — Characterized research peptides",
  description:
    "Research-use-only peptides produced in FDA-regulated facilities. Batch-traceable, characterized by HPLC and mass spectrometry, never bundled.",
  metadataBase: new URL("https://peptriva.example"),
  openGraph: {
    title: "peptriva — Characterized research peptides",
    description:
      "Research-use-only peptides. Batch-traceable. Never bundled.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
