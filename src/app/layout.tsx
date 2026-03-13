import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const siteUrl = "https://atfro.com";
const GA_MEASUREMENT_ID = "G-R9132SCRDQ";

/** Paste your Google Search Console HTML tag content here to enable verification. Leave empty if not using. */
const googleSiteVerification = "";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ATFRO — Architecting Transformations For Robust Outcomes",
    template: "%s | ATFRO",
  },
  description:
    "ATFRO architects transformation systems across technology, growth, brand, and operations so startups can scale without chaos.",
  alternates: { canonical: siteUrl },
  robots: "index, follow",
  authors: [{ name: "ATFRO Team", url: siteUrl }],
  keywords: [
    "business transformation",
    "startup scaling",
    "operational systems",
    "growth architecture",
    "CRM implementation",
    "brand positioning",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ATFRO",
    title: "ATFRO — Architecting Transformations For Robust Outcomes",
    description:
      "A transformation architecture firm that builds the systems, brand, and growth infrastructure for scalable businesses.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ATFRO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATFRO — Architecting Transformations For Robust Outcomes",
    description:
      "Systems-first consulting for startups and growth-stage companies ready for structured, scalable growth.",
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.variable}
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {/* Organization & ProfessionalService Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "ATFRO",
              url: siteUrl,
              description:
                "ATFRO architects transformation systems across technology, growth, brand, and programs for scaling businesses.",
              address: { "@type": "PostalAddress", addressCountry: "IN" },
              contactPoint: [
                { "@type": "ContactPoint", email: "hello@atfro.com", contactType: "sales" },
              ],
            }),
          }}
        />
        {/* WebSite Schema for Search Console and sitelinks */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ATFRO",
              url: siteUrl,
              description:
                "ATFRO architects transformation systems across technology, growth, brand, and operations so startups can scale without chaos.",
              publisher: { "@type": "Organization", name: "ATFRO", url: siteUrl },
            }),
          }}
        />
        <header>
          <Navbar />
        </header>
        <main style={{ flex: 1 }}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
