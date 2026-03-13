import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://atfro.com/services/brand";

export const metadata: Metadata = {
  title: "Brand Architecture Consulting | ATFRO Brand",
  description:
    "ATFRO's brand architecture consulting aligns your narrative, visuals, and sales messaging so your market understands why you are the superior choice.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    type: "article",
    title: "Brand Architecture Consulting | ATFRO Brand",
    description:
      "Clarify your positioning and design a brand architecture that makes your product the obvious answer in a crowded market.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Architecture Consulting | ATFRO Brand",
    description:
      "From visual identity to sales narrative, we architect brands that can carry ambitious growth.",
  },
};

const features = [
  {
    number: "01",
    title: "Positioning first. Tactics second.",
    description:
      "Before we touch ads or campaigns, we answer one question: what position in the market do you deserve to own? From there, everything—from your homepage headline to your sales deck—is rebuilt to express that position with clarity and conviction.",
  },
  {
    number: "02",
    title: "A brand that survives channel shifts.",
    description:
      "Platforms change. Algorithms move. Strong brands hold their ground because they are built on a clear promise and a repeatable narrative, not a single channel or tactic.",
  },
  {
    number: "03",
    title: "Designed for both founders and sales teams.",
    description:
      "We create brand systems that are easy for your team to use—from founders speaking on stage to sales reps in one-to-one conversations. Everyone tells the same, sharp story.",
  },
];

const deliverables = [
  "Positioning frameworks and competitive landscape mapping",
  "Core brand story and sales narratives",
  "Website and landing-page messaging architecture",
  "Visual identity direction and design systems",
  "Guidelines for marketing, product, and sales alignment",
];

export default function BrandServicesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Brand" },
  ];

  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <FadeIn direction="up">
            <Breadcrumbs items={breadcrumbItems} />
            <Typography variant="caption">Brand Architecture</Typography>
            <Typography variant="h1">
              The Brand That Builds Brands.
            </Typography>
            <Typography variant="p" className={styles.leadText}>
              We architect brand systems—positioning, messaging, and visual
              language—that make your company unforgettable and your offer
              undeniable.
            </Typography>
          </FadeIn>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.featureGrid}>
            {features.map((feature, i) => (
              <FadeIn key={feature.number} delay={i * 0.1}>
                <div className={styles.featureCard}>
                  <span className={styles.featureNumber}>{feature.number}</span>
                  <Typography variant="h3" className={styles.featureTitle}>
                    {feature.title}
                  </Typography>
                  <Typography variant="p" className={styles.featureDesc}>
                    {feature.description}
                  </Typography>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn direction="up" delay={0.3}>
            <div className={styles.deliverablesCard}>
              <Typography variant="caption" className={styles.deliverablesTag}>
                Deliverables
              </Typography>
              <Typography variant="h4" className={styles.deliverablesTitle}>
                How we shape your brand.
              </Typography>
              <ul className={styles.deliverablesList}>
                {deliverables.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="h2">
              Ready for a brand that can handle scale?
            </Typography>
            <Typography variant="p" className="ctaText">
              See how our architecture process combines brand, tech, and growth
              into a single system—and how it applies to your category.
            </Typography>
            <div className="actions">
              <Link href="/process" tabIndex={-1}>
                <Button variant="secondary" size="lg">
                  Explore the Process
                </Button>
              </Link>
              <Link href="/contact" tabIndex={-1}>
                <Button variant="primary" size="lg">
                  Discuss Brand Architecture
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
