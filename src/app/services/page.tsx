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
    id: 'technology',
    number: '01',
    title: 'Technology Infrastructure',
    description: 'The operational backbone. We build the systems required to handle volume without manual friction.',
    href: '/services/technology',
  },
  {
    id: 'growth',
    number: '02',
    title: 'Growth & Marketing',
    description: 'Replacing sporadic activity with reliable, predictable systems for lead generation and acquisition.',
    href: '/services/growth',
  },
  {
    id: 'brand',
    number: '03',
    title: 'Brand Positioning',
    description: 'The foundation of credibility. We ensure your market understands exactly why you are the superior choice.',
    href: '/services/brand',
  },
  {
    id: 'programs',
    number: '04',
    title: 'Programs & Experience',
    description: 'Delivering at scale. We design operational frameworks for customer engagement and retention.',
    href: '/services/programs',
  },
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

      <section className={styles.cardsSection}>
        <div className="container">
          <div className={styles.cardGrid}>
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.id} delay={i * 0.1}>
                <Link href={pillar.href} className={styles.serviceCard}>
                  <span className={styles.cardNumber}>{pillar.number}</span>
                  <Typography variant="h3" className={styles.cardTitle}>{pillar.title}</Typography>
                  <Typography variant="p" className={styles.cardDesc}>{pillar.description}</Typography>
                  <span className={styles.learnMore}>Learn More &rarr;</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className={`ctaSection ${styles.ctaSection}`}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="h3">How do these systems apply to your business?</Typography>
            <Typography variant="p" className="ctaText">
              Review our 7-stage process to see exactly how we diagnose, build, and deploy these architectures.
            </Typography>
            <div className="actions">
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
