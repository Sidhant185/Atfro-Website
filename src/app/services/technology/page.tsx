import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://atfro.in/services/technology";

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

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <span className={styles.tag}>Deliverables</span>
              <Typography variant="h4" className={styles.listTitle}>
                What we build.
              </Typography>
              <ul className={styles.list}>
                <li>Custom CRM architectures and data models</li>
                <li>Lead routing, assignment, and follow-up automations</li>
                <li>Centralized analytics and performance dashboards</li>
                <li>API-first integrations between disconnected tools</li>
                <li>Event-based triggers for onboarding and lifecycle flows</li>
              </ul>
            </aside>

            <div className={styles.body}>
              <FadeIn direction="up" delay={0.1} className={styles.highlight}>
                <Typography variant="h3">
                  The nervous system of your business.
                </Typography>
                <Typography variant="p">
                  We treat your technology stack like a centralized nervous
                  system. Data should move seamlessly from marketing site to CRM
                  to billing to customer success—with zero manual handoff.
                </Typography>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <Typography variant="h4">
                  From scattered tools to one architecture.
                </Typography>
                <Typography variant="p">
                  Instead of layering yet another SaaS tool on top of an
                  already-fragmented stack, we design a single architecture
                  where every system has a defined role. This eliminates
                  invisible revenue leaks created by broken integrations and
                  duplicated data.
                </Typography>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <Typography variant="h4">
                  Built for the next stage of scale.
                </Typography>
                <Typography variant="p">
                  Whether you are moving from 10 to 100 customers or from 100
                  to 1,000, your infrastructure must handle volume before it
                  arrives. We design systems that are resilient under pressure
                  and simple enough for your team to operate.
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
              Ready to build a real backbone for growth?
            </Typography>
            <Typography variant="p" className={styles.ctaText}>
              Start with a diagnostic audit of your current infrastructure and
              a technical roadmap that shows exactly what needs to change.
            </Typography>
            <div className={styles.actions}>
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

