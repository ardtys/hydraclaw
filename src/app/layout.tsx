import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-satoshi",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HydraClaw | The Universal Lightweight Agent Protocol",
  description:
    "Ultra-lightweight AI agents that trade, copy, farm, and evolve. <5MB Rust binary. <10ms boot. $10 hardware. Deploy on Solana & Base.",
  keywords: [
    "HydraClaw",
    "AI trading agents",
    "Solana",
    "Base",
    "crypto",
    "lightweight",
    "Rust",
    "autonomous agents",
    "DeFi",
    "trading bot",
  ],
  authors: [{ name: "HydraClaw Protocol" }],
  openGraph: {
    title: "HydraClaw | 5 Heads. 5 Layers. One Protocol.",
    description:
      "Ultra-lightweight AI agents that trade, copy, farm, and evolve. Deploy on Solana & Base.",
    type: "website",
    locale: "en_US",
    siteName: "HydraClaw",
  },
  twitter: {
    card: "summary_large_image",
    title: "HydraClaw | The Hydra Doesn't Sleep",
    description:
      "Ultra-lightweight AI agents. <5MB. <10ms boot. Deploy the swarm.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased bg-hydra-bg text-hydra-text`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <div className="grid-pattern fixed inset-0 pointer-events-none" aria-hidden="true" />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
