import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

const siteUrl = "https://atfro.in/process";

export const metadata: Metadata = {
  title: "Business Transformation Process | ATFRO",
  description:
    "ATFRO's 7-stage business transformation process moves companies from chaos to structured, scalable growth using a diagnostic-first methodology.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    url: siteUrl,
    type: "article",
    title: "Business Transformation Process | ATFRO",
    description:
      "Explore ATFRO's 7-stage transformation process for architecting scalable growth systems across technology, growth, brand, and operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Transformation Process | ATFRO",
    description:
      "A diagnostic, 7-stage business transformation process for startups and growth companies ready for structured scale.",
  },
};

const stages = [
  {
    index: "01",
    label: "Audit",
    title: "The Diagnostic Audit",
    body: "A 2–4 week deep audit across your funnels, brand, operations, and tech stack to locate structural bottlenecks and revenue leaks.",
  },
  {
    index: "02",
    label: "Insight",
    title: "Findings & Strategy Formulation",
    body: "We synthesize the audit into a single, coherent strategy that spans product narrative, operations, and growth instead of isolated tactics.",
  },
  {
    index: "03",
    label: "Architecture",
    title: "Roadmap & Architecture Blueprint",
    body: "We design a step-by-step architecture and implementation roadmap, with clear milestones, ownership, and expected business outcomes.",
  },
  {
    index: "04",
    label: "Implementation",
    title: "Execution & Weekly Sprints",
    body: "Our team executes in tightly scoped, high-visibility sprints with weekly reviews, demos, and transparent prioritization.",
  },
  {
    index: "05",
    label: "Foundation",
    title: "25% Development Milestone",
    body: "Core infrastructure is laid: CRM mappings, data flows, and primary funnels are in place for early validation and feedback.",
  },
  {
    index: "06",
    label: "Scale Up",
    title: "50–80% Milestones",
    body: "Systems are expanded, refined, and stress-tested. You retain full ownership of all assets as we move towards launch.",
  },
  {
    index: "07",
    label: "Growth",
    title: "Handover & Growth Management",
    body: "Once the architecture is live, we shift focus to optimization, campaign management, and compounding growth loops.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">Process</Typography>
            <Typography variant="h1">
              The Business Transformation Process.
            </Typography>
            <Typography variant="p" className={styles.leadText}>
              We do not guess. We follow a strict, diagnostic methodology that
              turns fragmented operations into a cohesive, scalable
              architecture.
            </Typography>
          </FadeIn>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.timelineGrid}>
            {stages.map((stage, idx) => (
              <FadeIn
                key={stage.index}
                direction="up"
                delay={idx * 0.05}
                className={styles.stageWrapper}
              >
                <div className={styles.stageCard}>
                  <div className={styles.stageProgress}>
                    <span className={styles.stageNumber}>{stage.index}</span>
                    {idx < stages.length - 1 && (
                      <div className={styles.connector} aria-hidden />
                    )}
                  </div>
                  <div className={styles.stageContent}>
                    <span className={styles.stageTag}>{stage.label}</span>
                    <Typography
                      variant="h3"
                      className={styles.stageTitle}
                      as="h2"
                    >
                      {stage.title}
                    </Typography>
                    <Typography variant="p" className={styles.stageBody}>
                      {stage.body}
                    </Typography>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="h2">
              Ready to move through these stages?
            </Typography>
            <Typography variant="p" className="ctaText">
              Start with a diagnostic audit that surfaces the real reasons
              growth has stalled, then move into a structured roadmap and
              implementation.
            </Typography>
            <div className="actions">
              <Link href="/contact" tabIndex={-1}>
                <Button variant="primary" size="lg">
                  Start Transformation
                </Button>
              </Link>
              <Link href="/case-studies" tabIndex={-1}>
                <Button variant="outline" size="lg">
                  See Transformation in Action
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
