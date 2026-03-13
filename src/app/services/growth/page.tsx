import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://atfro.com/services/growth";

export const metadata: Metadata = {
  title: "Growth Systems for Startups | ATFRO Growth",
  description:
    "ATFRO builds growth systems for startups—funnels, campaigns, and measurement loops that turn attention into predictable revenue.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    type: "article",
    title: "Growth Systems for Startups | ATFRO Growth",
    description:
      "From sporadic campaigns to reliable, structured demand-generation systems tailored to your market.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Systems for Startups | ATFRO Growth",
    description:
      "End-to-end growth architecture for startups ready for predictable demand.",
  },
};

const features = [
  {
    number: "01",
    title: "From campaigns to compounding systems.",
    description:
      "Most companies launch disconnected campaigns and hope one of them performs. We design a growth system where each touchpoint builds on the previous one, and every experiment feeds back into a central learning loop.",
  },
  {
    number: "02",
    title: "Message, market, and mechanics in sync.",
    description:
      "We align your positioning, offer design, and channel mix so the right people see the right narrative at the right time. This is not about chasing the newest ad tactic—it is about structural alignment across your entire funnel.",
  },
  {
    number: "03",
    title: "Built with measurement from day one.",
    description:
      "Every funnel and campaign is wired into an analytics architecture that attributes revenue accurately. This allows you to make confident decisions about where to invest and where to pull back.",
  },
];

const deliverables = [
  "End-to-end acquisition and nurture funnels",
  "Channel strategy across paid, organic, and partner motion",
  "Offer and landing-page experimentation systems",
  "Measurement frameworks and growth dashboards",
  "Lifecycle email and retargeting sequences",
];

export default function GrowthServicesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Growth" },
  ];

  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <FadeIn direction="up">
            <Breadcrumbs items={breadcrumbItems} />
            <Typography variant="caption">Growth & Marketing</Typography>
            <Typography variant="h1">
              Growth Systems for Startups.
            </Typography>
            <Typography variant="p" className={styles.leadText}>
              We move you away from random acts of marketing and into a
              structured growth system where every campaign has a role and every
              lead has a defined journey.
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
                What we architect.
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
              Ready to replace ad-hoc marketing with a system?
            </Typography>
            <Typography variant="p" className="ctaText">
              Walk through our 7-stage process and see how we diagnose, design,
              and deploy growth systems for your specific market.
            </Typography>
            <div className="actions">
              <Link href="/process" tabIndex={-1}>
                <Button variant="secondary" size="lg">
                  Explore the Process
                </Button>
              </Link>
              <Link href="/contact" tabIndex={-1}>
                <Button variant="primary" size="lg">
                  Request a Growth Audit
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
