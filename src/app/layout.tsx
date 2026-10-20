import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/hanken-grotesk/index.css";
import "@fontsource/allura/index.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} · Data Analyst in Manchester`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: ["Oyewale Muftau", "data analyst Manchester", "Power BI", "Tableau", "SQL", "energy analytics", "operations analytics", "data analytics Nigeria"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.shortName,
    title: `${site.shortName} · Data Analyst`,
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name}, data analyst` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} · Data Analyst`,
    description: site.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0F2E2A",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.shortName,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}/images/portrait-standing.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Manchester", addressCountry: "GB" },
  sameAs: [site.linkedin],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Salford" },
    { "@type": "CollegeOrUniversity", name: "Osun State University" },
  ],
  award: ["Analytics Innovation Award, Titans of Tech Awards 2024", "Emerging Data Intelligence & Analytics Professional of the Year, Nigeria Technology Awards 2025"],
  knowsAbout: ["Data analysis", "Business intelligence", "Power BI", "Tableau", "SQL", "Python", "Energy analytics", "Forecasting"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body id="top">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-green px-5 py-3 font-semibold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
