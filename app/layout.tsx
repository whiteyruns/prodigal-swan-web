import type { Metadata } from "next";
import Script from "next/script";
import { Anton, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://prodigalswan.com";
const OG_IMAGE = "/images/gallery-golden-hour.jpg";
const DESCRIPTION =
  "A fire-breathing, LED-lit art car built on a 1996 Taylor-Dunn cargo mover. Available for festivals, parades, brand activations, film shoots, and private bookings. Las Vegas, NV.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Prodigal Swan — Fire-breathing art car, Las Vegas",
    template: "%s — Prodigal Swan",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prodigal Swan — Fire-breathing art car, Las Vegas",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Prodigal Swan",
    images: [
      {
        url: OG_IMAGE,
        width: 1600,
        height: 1200,
        alt: "Prodigal Swan at golden hour on the Black Rock playa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prodigal Swan — Fire-breathing art car, Las Vegas",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prodigal Swan",
  image: `${SITE_URL}${OG_IMAGE}`,
  description: DESCRIPTION,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "Black Rock City, NV" },
  ],
  priceRange: "$5,000 per 6-hour event",
  founder: { "@type": "Organization", name: "Dust to Dust Collective" },
  foundingDate: "2016",
  sameAs: [
    "https://instagram.com/prodigal_swan",
    "https://www.swanforestcamp.com",
  ],
  knowsAbout: [
    "Art car",
    "Mutant vehicle",
    "Burning Man",
    "Fire effects",
    "LED lighting",
    "Festival activation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${anton.variable} ${jetbrains.variable}`}
    >
      <body>
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
