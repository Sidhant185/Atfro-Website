import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://atfro.com/services/programs";

export const metadata: Metadata = {
  title: "Programs & Experience Systems | ATFRO",
  description:
    "ATFRO designs programs and customer experience systems that reduce churn, increase lifetime value, and turn clients into advocates.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    type: "article",
    title: "Programs & Experience Systems | ATFRO",
    description:
      "Onboarding, success, and retention programs engineered to keep customers moving and renewing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs & Experience Systems | ATFRO",
    description:
      "Customer programs and experiences that turn one-time buyers into long-term partners.",
  },
};

const features = [
  {
    number: "01",
    title: "Fix the leaky bucket first.",
    description:
      "Scaling acquisition on top of weak onboarding and retention is expensive. We first stabilize the post-purchase journey so every new customer has a clear, guided path to ongoing value.",
  },
  {
    number: "02",
    title: "Time-to-value as the core metric.",
    description:
      "We reduce the time between sign-up and the first undeniable moment of value. When customers experience meaningful outcomes quickly, retention and expansion follow naturally.",
  },
  {
    number: "03",
    title: "Programs built with systems, not heroics.",
    description:
      "Instead of relying on a few overextended team members, we design programs that are supported by automations, content, and clear operational playbooks.",
  },
];

const deliverables = [
  "Onboarding journeys mapped from purchase to first value",
  "In-product and out-of-product education programs",
  "Customer success playbooks and escalation paths",
  "Renewal, expansion, and advocacy campaigns",
  "Feedback loops that inform product and marketing",
];

export default function ProgramsServicesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Programs & Experience" },
  ];

  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <FadeIn direction="up">
            <Breadcrumbs items={breadcrumbItems} />
            <Typography variant="caption">Programs & Experience</Typography>
            <Typography variant="h1">
              Programs that retain and compound.
            </Typography>
            <Typography variant="p" className={styles.leadText}>
              We architect onboarding, engagement, and retention programs so
              customers keep moving, keep using, and keep renewing—without
              requiring manual heroics from your team.
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
                What we operationalize.
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
              Want customers who stay, grow, and refer?
            </Typography>
            <Typography variant="p" className="ctaText">
              Combine our programs and experience architecture with your
              existing demand engine to build a compounding, long-term revenue
              machine.
            </Typography>
            <div className="actions">
              <Link href="/case-studies" tabIndex={-1}>
                <Button variant="secondary" size="lg">
                  See Retention in Action
                </Button>
              </Link>
              <Link href="/contact" tabIndex={-1}>
                <Button variant="primary" size="lg">
                  Discuss Programs & CX
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
