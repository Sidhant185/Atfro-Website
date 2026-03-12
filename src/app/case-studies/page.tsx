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

      <section className={`${styles.casesSection} sectionDiagonal`}>
        <div className="container">
          <div className={styles.casesGrid}>
            {[
              { link: '/case-studies/saas-startup-transformation', metric: '3x Leads', metricLabel: 'Pipeline Growth', client: 'SaaS Startup', title: 'Operational scaling for a high-growth platform.', description: 'Unified CRM, funnel design, and brand architecture turned ad-hoc efforts into a repeatable pipeline.', tags: ['CRM Implementation', 'Funnel Design', 'Brand Architecture'] },
              { link: '/case-studies/sattvahar-digital-foundation', metric: 'Platform Live', metricLabel: 'Digital Infrastructure', client: 'Sattvahar', title: 'Building a premium digital foundation and user experience.', description: 'From positioning to UX and performance—one cohesive system for growth.', tags: ['UX Design', 'Performance Optimization', 'Brand Storytelling'] },
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
                    {study.description && <Typography variant="p" className={styles.caseDescription}>{study.description}</Typography>}
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

      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutCard}>
            <FadeIn direction="up">
              <Typography variant="caption" className={styles.aboutCaption}>Who We Are</Typography>
              <Typography variant="h2" className={styles.aboutTitle}>The Team Behind the Architecture.</Typography>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <Typography variant="p" className={styles.aboutLead}>
                ATFRO deploys a curated network of 20+ domain specialists, assembled per engagement.
              </Typography>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className={styles.disciplineBadges}>
              {['CRM Engineers', 'Growth Strategists', 'Brand Designers', 'Paid Media Specialists', 'SEO Architects', 'Conversion Copywriters', 'UX Designers', 'Marketing Automation', 'Tech Integrators', 'Analytics Engineers', 'Customer Success Leads', 'Content Strategists'].map((label) => (
                <span key={label} className={styles.disciplineBadge}>{label}</span>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container">
          <div className={styles.ctaInner}>
            <FadeIn direction="up">
              <Typography variant="h3">Does your startup need structured growth?</Typography>
              <Typography variant="p" className="ctaText">
                We build systems that deliver measurable outcomes. Start with a diagnostic audit.
              </Typography>
              <div className="actions">
                <Link href="/contact" tabIndex={-1}>
                  <Button variant="primary" size="lg">Start Your Transformation</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
