import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://atfro.com/services/technology";

export const metadata: Metadata = {
  title: "Automation Systems for Businesses | ATFRO Technology",
  description:
    "ATFRO designs automation systems, CRM architectures, and operational infrastructure so businesses can scale without manual bottlenecks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    type: "article",
    title: "Automation Systems for Businesses | ATFRO Technology",
    description:
      "Explore how ATFRO architects CRMs, data flows, and automation systems that become the backbone of scalable operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Systems for Businesses | ATFRO Technology",
    description:
      "Technology infrastructure and automation architecture for startups and growth companies.",
  },
};

const features = [
  {
    number: "01",
    title: "The nervous system of your business.",
    description:
      "We treat your technology stack like a centralized nervous system. Data should move seamlessly from marketing site to CRM to billing to customer success—with zero manual handoff.",
  },
  {
    number: "02",
    title: "From scattered tools to one architecture.",
    description:
      "Instead of layering yet another SaaS tool on top of an already-fragmented stack, we design a single architecture where every system has a defined role. This eliminates invisible revenue leaks created by broken integrations and duplicated data.",
  },
  {
    number: "03",
    title: "Built for the next stage of scale.",
    description:
      "Whether you are moving from 10 to 100 customers or from 100 to 1,000, your infrastructure must handle volume before it arrives. We design systems that are resilient under pressure and simple enough for your team to operate.",
  },
];

const deliverables = [
  "Custom CRM architectures and data models",
  "Lead routing, assignment, and follow-up automations",
  "Centralized analytics and performance dashboards",
  "API-first integrations between disconnected tools",
  "Event-based triggers for onboarding and lifecycle flows",
];

export default function TechnologyServicesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Technology" },
  ];

  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <FadeIn direction="up">
            <Breadcrumbs items={breadcrumbItems} />
            <Typography variant="caption">Technology Infrastructure</Typography>
            <Typography variant="h1">
              Automation Systems for Growing Businesses.
            </Typography>
            <Typography variant="p" className={styles.leadText}>
              We design the technical backbone of your company—CRMs, data
              pipelines, and automation flows—so growth is supported by
              resilient systems, not manual effort.
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
                What we build.
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
              Ready to build a real backbone for growth?
            </Typography>
            <Typography variant="p" className="ctaText">
              Start with a diagnostic audit of your current infrastructure and
              a technical roadmap that shows exactly what needs to change.
            </Typography>
            <div className="actions">
              <Link href="/process" tabIndex={-1}>
                <Button variant="secondary" size="lg">
                  Explore the Process
                </Button>
              </Link>
              <Link href="/contact" tabIndex={-1}>
                <Button variant="primary" size="lg">
                  Start a Discovery Call
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
