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
          <div className={styles.casesGrid}>
            {[
              { 
                link: '/case-studies/saas-startup-transformation',
                metric: '3x Leads', 
                metricLabel: 'Pipeline Growth',
                client: 'SaaS Startup', 
                title: 'Operational scaling for a high-growth platform.', 
                tags: ['CRM Implementation', 'Funnel Design', 'Brand Architecture'] 
              },
              { 
                link: '/case-studies/sattvahar-digital-foundation',
                metric: 'Platform Live', 
                metricLabel: 'Digital Infrastructure',
                client: 'Sattvahar', 
                title: 'Building a premium digital foundation and user experience.', 
                tags: ['UX Design', 'Performance Optimization', 'Brand Storytelling'] 
              }
            ].map((study, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <Link href={study.link} className={styles.caseCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.metricBlock}>
                      <Typography variant="h3" className={styles.metricValue}>{study.metric}</Typography>
                      <Typography variant="caption" className={styles.metricLabel}>{study.metricLabel}</Typography>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <Typography variant="caption" className={styles.clientName}>{study.client}</Typography>
                    <Typography variant="h4" className={styles.caseTitle}>{study.title}</Typography>
                    <div className={styles.tagsGrid}>
                      {study.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
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
