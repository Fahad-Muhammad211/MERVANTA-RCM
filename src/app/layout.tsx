import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://www.mervantarcm.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mervanta RCM | Healthcare Revenue Cycle Management, Worldwide",
    template: "%s | Mervanta RCM",
  },
  description:
    "Mervanta RCM delivers end-to-end revenue cycle management for healthcare organizations worldwide — medical billing, coding, claims, denial management, and enterprise RCM solutions built on security, compliance, and operational scale.",
  keywords: [
    "revenue cycle management",
    "medical billing",
    "medical coding",
    "healthcare RCM",
    "denial management",
    "enterprise RCM",
  ],
  openGraph: {
    title: "Mervanta RCM | Healthcare Revenue Cycle Management, Worldwide",
    description:
      "End-to-end revenue cycle solutions for healthcare organizations worldwide.",
    url: siteUrl,
    siteName: "Mervanta RCM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mervanta RCM | Healthcare Revenue Cycle Management, Worldwide",
    description: "End-to-end revenue cycle solutions for healthcare organizations worldwide.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper-0 text-ink-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
