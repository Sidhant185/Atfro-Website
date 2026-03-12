import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://atfro.in/services/brand";

export const metadata: Metadata = {
  title: "Brand Architecture Consulting | ATFRO Brand",
  description:
    "ATFRO’s brand architecture consulting aligns your narrative, visuals, and sales messaging so your market understands why you are the superior choice.",
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

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <span className={styles.tag}>Deliverables</span>
              <Typography variant="h4" className={styles.listTitle}>
                How we shape your brand.
              </Typography>
              <ul className={styles.list}>
                <li>Positioning frameworks and competitive landscape mapping</li>
                <li>Core brand story and sales narratives</li>
                <li>Website and landing-page messaging architecture</li>
                <li>Visual identity direction and design systems</li>
                <li>Guidelines for marketing, product, and sales alignment</li>
              </ul>
            </aside>

            <div className={styles.body}>
              <FadeIn direction="up" delay={0.1} className={styles.highlight}>
                <Typography variant="h3">
                  Positioning first. Tactics second.
                </Typography>
                <Typography variant="p">
                  Before we touch ads or campaigns, we answer one question:
                  what position in the market do you deserve to own? From there,
                  everything—from your homepage headline to your sales deck—is
                  rebuilt to express that position with clarity and conviction.
                </Typography>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <Typography variant="h4">
                  A brand that survives channel shifts.
                </Typography>
                <Typography variant="p">
                  Platforms change. Algorithms move. Strong brands hold their
                  ground because they are built on a clear promise and a repeatable
                  narrative, not a single channel or tactic.
                </Typography>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <Typography variant="h4">
                  Designed for both founders and sales teams.
                </Typography>
                <Typography variant="p">
                  We create brand systems that are easy for your team to use—
                  from founders speaking on stage to sales reps in one-to-one
                  conversations. Everyone tells the same, sharp story.
                </Typography>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="h2">
              Ready for a brand that can handle scale?
            </Typography>
            <Typography variant="p" className={styles.ctaText}>
              See how our architecture process combines brand, tech, and growth
              into a single system—and how it applies to your category.
            </Typography>
            <div className={styles.actions}>
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

