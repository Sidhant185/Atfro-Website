import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Systems & Deliverables | ATFRO',
  description: 'Explore the 4-Pillar Architecture: Tech Infrastructure, Growth & Marketing, Brand Positioning, and Programs & Experience.',
};

const pillars = [
  {
    id: 'tech',
    number: '01',
    title: 'Technology Infrastructure',
    description: 'The operational backbone. We build the systems required to handle volume without manual friction.',
    deliverables: [
      'Custom CRM implementation and data migration',
      'Automated lead routing and follow-up workflows',
      'Dynamic performance and analytics dashboards',
      'API integrations between fragmented software tools'
    ]
  },
  {
    id: 'growth',
    number: '02',
    title: 'Growth & Marketing',
    description: 'Replacing sporadic activity with reliable, predictable systems for lead generation and acquisition.',
    deliverables: [
      'End-to-end conversion funnel architecture',
      'Targeted paid advertising strategies using audience segmentation',
      'Technical SEO and organic content roadmaps',
      'Automated email nurture sequences'
    ]
  },
  {
    id: 'brand',
    number: '03',
    title: 'Brand Positioning',
    description: 'The foundation of credibility. We ensure your market understands exactly why you are the superior choice.',
    deliverables: [
      'Differentiated market positioning strategy',
      'Conversion-optimized website design and development',
      'Core brand messaging and sales narratives',
      'Visual identity and brand architecture systems'
    ]
  },
  {
    id: 'experience',
    number: '04',
    title: 'Programs & Experience',
    description: 'Delivering at scale. We design operational frameworks for customer engagement and retention.',
    deliverables: [
      'Automated customer onboarding workflows',
      'Customer success frameworks to reduce churn',
      'Long-term loyalty and client retention programs',
      'Referral and advocacy loop design'
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">What We Deliver</Typography>
            <Typography variant="h1">The 4-Pillar<br/>Architecture.</Typography>
            <Typography variant="p" className={styles.leadText}>
              Rather than applying pre-designed packages, we design custom systems based on your diagnostic audit across four core areas.
            </Typography>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.systemsContainer}>
            {pillars.map((pillar) => (
              <div key={pillar.id} className={styles.systemRow}>
                <FadeIn direction="right" delay={0.1} className={styles.systemMeta}>
                  <div className={styles.stickyMeta}>
                    <Typography variant="caption" className={styles.systemNum}>{pillar.number}</Typography>
                    <Typography variant="h2" className={styles.systemTitle}>{pillar.title}</Typography>
                  </div>
                </FadeIn>
                
                <FadeIn direction="left" delay={0.2} className={styles.systemContent}>
                  <Typography variant="p" className={styles.systemDesc}>{pillar.description}</Typography>
                  
                  <div className={styles.deliverablesBox}>
                     <Typography variant="h4" className={styles.deliverablesTitle}>Tangible Deliverables</Typography>
                     <ul className={styles.featureList}>
                      {pillar.deliverables.map((feature, i) => (
                        <li key={i}>
                          <span className={styles.checkIcon}>&rsaquo;</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="h3">How do these systems apply to your business?</Typography>
            <Typography variant="p" className={styles.ctaText}>
              Review our 7-stage process to see exactly how we diagnose, build, and deploy these architectures.
            </Typography>
            <div className={styles.actions}>
              <Link href="/process" tabIndex={-1}>
                <Button variant="primary" size="lg">View The Process</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
