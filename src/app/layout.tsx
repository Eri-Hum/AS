import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["200", "300"],
});

const siteUrl = "https://alva.se";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alva — Rena händer. Lättare planet.",
  description:
    "Skummande handtvål i tablettform. Tillverkad i Sverige. Mindre plast, samma känsla.",
  openGraph: {
    title: "Alva — Rena händer. Lättare planet.",
    description:
      "Skummande handtvål i tablettform. Tillverkad i Sverige. Mindre plast, samma känsla.",
    url: siteUrl,
    siteName: "Alva",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alva — Rena händer. Lättare planet.",
    description:
      "Skummande handtvål i tablettform. Tillverkad i Sverige. Mindre plast, samma känsla.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-krita text-kol">
        {children}
      </body>
    </html>
  );
}
