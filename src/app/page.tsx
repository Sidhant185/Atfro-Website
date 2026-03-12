import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

const pageUrl = "https://atfro.in";

export const metadata: Metadata = {
  title: "Business Transformation Architecture | ATFRO",
  description:
    "ATFRO architects business transformation systems across technology, growth, brand, and programs so startups can scale without chaos.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    type: "website",
    title: "Business Transformation Architecture | ATFRO",
    description:
      "A systems-first consulting firm that builds the architecture for scalable operations, brand, and growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Transformation Architecture | ATFRO",
    description:
      "Transformation architecture for startups and growth companies ready for structured scale.",
  },
};

export default function Home() {
  return (
    <>
      {/* Redesigned Hero: Centered, Minimal, High-Impact Typography */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <FadeIn direction="up" delay={0.1}>
              <Typography variant="caption" className={styles.heroCaption}>
                Operations • Growth • Brand
              </Typography>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <Typography variant="h1" className={styles.heroTitle}>
                The Brand That <br />
                <span className={styles.heroHighlight}>Builds Brands.</span>
              </Typography>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <Typography variant="p" className={styles.heroText}>
                We transform fragmented startups into scalable leaders by architecting integrated systems that handle operations, marketing, and the customer experience.
              </Typography>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.6}>
              <div className={styles.heroActions}>
                <Link href="/contact" tabIndex={-1}>
                  <Button variant="primary" size="lg">Start Transformation</Button>
                </Link>
                <Link href="/case-studies" tabIndex={-1}>
                  <Button variant="outline" size="lg">See Our Work</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Redesigned Problem Section: Bento Box Style */}
      <section className="section">
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">The Problem</Typography>
            <Typography variant="h2" className={styles.bentoTitle}>Fragmented systems stall great ideas.</Typography>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.1} className={`${styles.bentoCard} ${styles.bentoLarge}`}>
              <Typography variant="h3">The Growth Bottleneck</Typography>
              <Typography variant="p">Brilliant products often fail because the internal pipeline—sales, marketing, customer support—is disconnected and relies on manual effort.</Typography>
            </FadeIn>
            
            <FadeIn delay={0.2} className={styles.bentoCard} direction="left">
               <div className={styles.iconBox}>A</div>
               <Typography variant="h4">Lost Leads</Typography>
               <Typography variant="p">Unstructured pipelines let qualified prospects slip away.</Typography>
            </FadeIn>
            
             <FadeIn delay={0.3} className={styles.bentoCard} direction="left">
               <div className={styles.iconBox}>B</div>
               <Typography variant="h4">Brand Confusion</Typography>
               <Typography variant="p">Inconsistent messaging confuses your target market.</Typography>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className={`section ${styles.pillarsSection}`}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">Our Framework</Typography>
            <Typography variant="h2" className={styles.pillarsTitle}>
              What We Deliver
            </Typography>
          </FadeIn>
          
          <div className={styles.pillarsGrid}>
            {[
              { num: '01', title: 'Tech Infrastructure', desc: 'Custom CRMs, automated lead routing, and dynamic performance dashboards.' },
              { num: '02', title: 'Growth & Marketing', desc: 'High-converting funnels, SEO content strategies, and targeted paid acquisition.' },
              { num: '03', title: 'Brand Positioning', desc: 'Differentiated messaging, conversion-optimized design, and clear value propositions.' },
              { num: '04', title: 'Programs & Experience', desc: 'Automated onboarding flows and retention systems that reduce early churn.' }
            ].map((pillar, i) => (
              <FadeIn key={pillar.num} delay={i * 0.1} direction="up">
                <div className={styles.pillarCard}>
                  <Typography variant="caption" className={styles.pillarNum}>{pillar.num}</Typography>
                  <Typography variant="h4">{pillar.title}</Typography>
                  <Typography variant="p" className={styles.pillarText}>{pillar.desc}</Typography>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.6}>
            <div className={styles.pillarsAction}>
               <Link href="/services" tabIndex={-1}>
                  <Button variant="secondary" size="lg">Explore the Architecture</Button>
                </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7-Stage Transformation Process Embedded in Home Page */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <FadeIn direction="up" className={styles.processHeader}>
            <Typography variant="caption">Our Blueprint</Typography>
            <Typography variant="h2" className={styles.processTitle}>7 Stages of Transformation</Typography>
            <Typography variant="p" className={styles.processLead}>
              We do not guess. We operate on a strict, diagnostic methodology.
            </Typography>
          </FadeIn>

          <div className={styles.processTimeline}>
            {[
              { num: '01', title: 'The Diagnostic Audit', desc: 'We conduct a deep, 2-to-4 week audit mapping your technical infrastructure, brand positioning, and existing funnels to identify exactly where the bottlenecks are.' },
              { num: '02', title: 'Findings & Strategy Formulation', desc: 'We present our objective findings and develop a cohesive strategy spanning product narrative, operations, and marketing rather than fragmented tactics.' },
              { num: '03', title: 'Roadmap & Proposal', desc: 'We deliver a structured roadmap defining the precise steps, timeline, and investment required to implement the new architecture.' },
              { num: '04', title: 'Execution & Weekly Sprints', desc: 'Upon approval, implementation begins immediately. We operate transparently with weekly reviews and continuous feedback loops.' },
              { num: '05', title: '25% Development Milestone', desc: 'Early foundation build. At this checkpoint, our clients evaluate the initial setups (CRM mappings, early funnels) to ensure alignment.' },
              { num: '06', title: '50% & 80% Milestones', desc: 'Continued, staged development of the entire ecosystem. The client maintains complete ownership of all developed assets at every stage.' },
              { num: '07', title: 'Handover & Growth Management', desc: 'Core infrastructure is launched. From here, we focus on driving scale, managing the campaigns, and optimizing the newly built growth engine.' }
            ].map((stage, i) => (
              <FadeIn key={stage.num} delay={i * 0.1} direction="up" className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <span className={styles.markerDot}></span>
                  {i < 6 && <div className={styles.markerLine}></div>}
                </div>
                <div className={styles.timelineContent}>
                  <Typography variant="caption" className={styles.stageNum}>Stage {stage.num}</Typography>
                  <Typography variant="h4" className={styles.stageTitle}>{stage.title}</Typography>
                  <Typography variant="p" className={styles.stageDesc}>{stage.desc}</Typography>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
