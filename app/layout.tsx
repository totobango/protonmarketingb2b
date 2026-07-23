import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

/*
 * Proton serves Inter under the family name `ProtonSans`, so this is the real
 * typeface, not an approximation. Their display face is ABC Arizona Flare
 * (`ProtonSerif`), which is commercially licensed — Fraunces is the closest
 * freely licensable flared serif. Both are self-hosted by next/font, so the
 * page makes no third-party font requests.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const SITE = "https://proton-b2b-pitch.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Proton B2B Performance Marketing Strategy — Thomas Germain",
    template: "%s | Proton B2B Pitch — Thomas Germain",
  },
  description:
    "A hands-on B2B performance marketing pitch for Proton Workspace: audience mapping, a 90-day plan, privacy-first attribution, campaign concepts, and channel mix. By Thomas Germain.",
  keywords: [
    "Proton",
    "Proton Workspace",
    "B2B performance marketing",
    "privacy-first attribution",
    "Google Ads",
    "LinkedIn Ads",
    "server-side tracking",
    "Thomas Germain",
  ],
  authors: [{ name: "Thomas Germain" }],
  creator: "Thomas Germain",
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Proton B2B Performance Marketing Strategy",
    title: "Proton B2B Performance Marketing Strategy — Thomas Germain",
    description:
      "How I would acquire, convert, and retain B2B customers for Proton Workspace — while practicing what we preach on privacy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proton B2B Performance Marketing Strategy — Thomas Germain",
    description:
      "How I would acquire, convert, and retain B2B customers for Proton Workspace — while practicing what we preach on privacy.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1b1340",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
