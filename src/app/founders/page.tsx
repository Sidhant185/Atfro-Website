import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Founders | ATFRO',
  description: 'Meet the architects behind ATFRO: Sidhant Pande, Shweta Ranjan, and Aayush Prakash.',
};

const teamStats = [
  { value: '15+', label: 'Years combined experience' },
  { value: '50+', label: 'Projects delivered' },
  { value: '4', label: 'Pillars of architecture' },
];

const founders = [
  {
    name: 'Sidhant Pande',
    role: 'Co-Founder',
    focus: 'Strategic Architecture & Technology',
    bio: 'Specializing in building scalable operational systems and digital infrastructure that allow businesses to eliminate bottlenecks and handle rapid growth.',
    accent: 'tech',
    achievement: 'Architected CRM and data pipelines for high-growth SaaS and D2C brands.',
  },
  {
    name: 'Shweta Ranjan',
    role: 'Co-Founder',
    focus: 'Brand Positioning & Marketing',
    bio: 'Expert in developing cohesive brand narratives and targeted marketing funnels that convert attention into predictable revenue streams.',
    accent: 'brand',
    achievement: 'Led positioning and funnel design for B2B and consumer brands.',
  },
  {
    name: 'Aayush Prakash',
    role: 'Co-Founder',
    focus: 'Programs & Client Experience',
    bio: 'Focused on designing end-to-end customer journeys and retention programs that turn one-time buyers into long-term brand advocates.',
    accent: 'experience',
    achievement: 'Designed onboarding and retention programs across tech and retail.',
  },
];

export default function FoundersPage() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">Leadership</Typography>
            <Typography variant="h1">The Architects.</Typography>
            <Typography variant="p" className={styles.leadText}>
              ATFRO was founded by a multi-disciplinary team combining expertise in operations, marketing, and customer experience. We build what we design.
            </Typography>
          </FadeIn>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {teamStats.map((stat, i) => (
              <FadeIn key={stat.label} direction="up" delay={i * 0.1}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="container">
          <div className={styles.foundersGrid}>
            {founders.map((founder, index) => (
              <FadeIn key={founder.name} delay={index * 0.1} direction="up">
                <div className={`${styles.founderCard} ${styles[`accent_${founder.accent}`]}`}>
                  <div className={styles.imagePlaceholder}>
                    <span>Image Coming Soon</span>
                  </div>
                  <div className={styles.founderInfo}>
                    <Typography variant="h3">{founder.name}</Typography>
                    <Typography variant="caption" className={styles.role}>{founder.role}</Typography>
                    <Typography variant="h6" className={styles.focus}>{founder.focus}</Typography>
                    <Typography variant="p" className={styles.bio}>{founder.bio}</Typography>
                    <p className={styles.achievement}>{founder.achievement}</p>
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
            <Typography variant="h3">Build with the architects.</Typography>
            <Typography variant="p" className="ctaText">
              Ready to transform your operations? We deploy the right team for your engagement.
            </Typography>
            <div className="actions">
              <Link href="/contact" tabIndex={-1}>
                <Button variant="primary" size="lg">Get in Touch</Button>
              </Link>
              <Link href="/case-studies" tabIndex={-1}>
                <Button variant="outline" size="lg">See Our Work</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
