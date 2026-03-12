import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Case Studies & About | ATFRO',
  description: 'Learn how ATFRO transforms SaaS startups into structured, scalable growth operations.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">Our Work</Typography>
            <Typography variant="h1">Real Operations.<br/>Real Growth.</Typography>
            <Typography variant="p" className={styles.leadText}>
              Strategy without execution is just theory. We build systems that deliver measurable outcomes.
            </Typography>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption" className={styles.featuredLabel}>Featured Transformation</Typography>
            <Typography variant="h2" className={styles.featuredTitle}>SaaS Startup Scaling Engine</Typography>
          </FadeIn>

          <div className={styles.metricsGrid}>
            <FadeIn delay={0.1} direction="up" className={styles.metricCard}>
              <Typography variant="h2" className={styles.metricValue}>3x</Typography>
              <Typography variant="p" className={styles.metricLabel}>Increase in Qualified Lead Volume</Typography>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" className={styles.metricCard}>
              <Typography variant="h2" className={styles.metricValue}>-40%</Typography>
              <Typography variant="p" className={styles.metricLabel}>Reduction in Early Customer Churn</Typography>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" className={styles.metricCard}>
              <Typography variant="h2" className={styles.metricValue}>100%</Typography>
              <Typography variant="p" className={styles.metricLabel}>Visibility into Sales Pipeline</Typography>
            </FadeIn>
          </div>

          <div className={styles.storyGrid}>
            <FadeIn direction="up" className={styles.storyBlock}>
              <Typography variant="h3">The Friction</Typography>
              <Typography variant="p" className={styles.storyText}>
                A SaaS startup with a technically brilliant product hit a growth ceiling. Lead generation was sporadic, the sales pipeline was invisible, and manual onboarding was causing high early churn.
              </Typography>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className={styles.storyBlock}>
              <Typography variant="h3">The Architecture</Typography>
              <ul className={styles.visualList}>
                <li><strong>Tech:</strong> Custom CRM & fully automated follow-up workflows.</li>
                <li><strong>Marketing:</strong> Targeted Paid Ads + SEO Content Strategy.</li>
                <li><strong>Brand:</strong> Re-positioned messaging to stand out from generic competitors.</li>
                <li><strong>Experience:</strong> Redesigned onboarding flow to reduce Time-to-Value.</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">Who We Are</Typography>
            <Typography variant="h2">The Team Behind the Architecture.</Typography>
          </FadeIn>

           <FadeIn direction="up" delay={0.2}>
            <Typography variant="p" className={styles.aboutText}>
              We operate on two core principles: Research-Driven Thinking and Execution-Focused Delivery. ATFRO is a consulting firm that studies deeply, an agency that designs precisely, and a technology partner that builds operational infrastructure.
            </Typography>
          </FadeIn>

          <div className={styles.statsGrid}>
            <FadeIn direction="left" delay={0.3} className={styles.statBox}>
              <Typography variant="h2">₹50L+</Typography>
              <Typography variant="caption">Ideal Target Revenue</Typography>
            </FadeIn>
            <FadeIn direction="right" delay={0.4} className={styles.statBox}>
              <Typography variant="h2">7</Typography>
              <Typography variant="caption">Stages of Transformation</Typography>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="h3">Does your startup need structured growth?</Typography>
            <div className={styles.actions}>
              <Link href="/contact" tabIndex={-1}>
                <Button variant="primary" size="lg">Start Your Transformation</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
