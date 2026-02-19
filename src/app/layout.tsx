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
  title: {
    default: "HydraClaw | The Universal Lightweight Agent Protocol",
    template: "%s | HydraClaw",
  },
  description:
    "Ultra-lightweight AI agents that trade, copy, farm, and evolve. <5MB Rust binary. <10ms boot. $10 hardware. Deploy anywhere.",
  keywords: [
    "HydraClaw",
    "AI trading agents",
    "multi-chain",
    "edge computing",
    "crypto",
    "lightweight",
    "Rust",
    "autonomous agents",
    "DeFi",
    "trading bot",
  ],
  authors: [{ name: "HydraClaw Protocol" }],
  creator: "HydraClaw Protocol",
  publisher: "HydraClaw Protocol",
  metadataBase: new URL("https://hydraclaw.io"),
  openGraph: {
    title: "HydraClaw | 5 Heads. 5 Layers. One Protocol.",
    description:
      "Ultra-lightweight AI agents that trade, copy, farm, and evolve. Deploy anywhere.",
    type: "website",
    locale: "en_US",
    siteName: "HydraClaw",
    url: "https://hydraclaw.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "HydraClaw | The Hydra Doesn't Sleep",
    description:
      "Ultra-lightweight AI agents. <5MB. <10ms boot. Deploy the swarm.",
    creator: "@hydra_claw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
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
