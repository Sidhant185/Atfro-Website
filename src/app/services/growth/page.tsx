import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://atfro.in/services/growth";

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

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <span className={styles.tag}>Deliverables</span>
              <Typography variant="h4" className={styles.listTitle}>
                What we architect.
              </Typography>
              <ul className={styles.list}>
                <li>End-to-end acquisition and nurture funnels</li>
                <li>Channel strategy across paid, organic, and partner motion</li>
                <li>Offer and landing-page experimentation systems</li>
                <li>Measurement frameworks and growth dashboards</li>
                <li>Lifecycle email and retargeting sequences</li>
              </ul>
            </aside>

            <div className={styles.body}>
              <FadeIn direction="up" delay={0.1} className={styles.highlight}>
                <Typography variant="h3">
                  From campaigns to compounding systems.
                </Typography>
                <Typography variant="p">
                  Most companies launch disconnected campaigns and hope one of
                  them performs. We design a growth system where each touchpoint
                  builds on the previous one, and every experiment feeds back
                  into a central learning loop.
                </Typography>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <Typography variant="h4">
                  Message, market, and mechanics in sync.
                </Typography>
                <Typography variant="p">
                  We align your positioning, offer design, and channel mix so
                  the right people see the right narrative at the right time.
                  This is not about chasing the newest ad tactic—it is about
                  structural alignment across your entire funnel.
                </Typography>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <Typography variant="h4">
                  Built with measurement from day one.
                </Typography>
                <Typography variant="p">
                  Every funnel and campaign is wired into an analytics
                  architecture that attributes revenue accurately. This allows
                  you to make confident decisions about where to invest and
                  where to pull back.
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
              Ready to replace ad-hoc marketing with a system?
            </Typography>
            <Typography variant="p" className={styles.ctaText}>
              Walk through our 7-stage process and see how we diagnose, design,
              and deploy growth systems for your specific market.
            </Typography>
            <div className={styles.actions}>
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

