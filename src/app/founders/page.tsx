import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Founders | ATFRO',
  description: 'Meet the architects behind ATFRO: Sidhant Pande, Shweta Ranjan, and Aayush Prakash.',
  alternates: { canonical: 'https://atfro.com/founders' },
  openGraph: { url: 'https://atfro.com/founders', type: 'website' },
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
    bio: 'Sidhant works at the intersection of technology, systems architecture, and organizational strategy. His work focuses on designing scalable systems that help companies transition from fragmented operations to structured, high-performance environments capable of sustaining long-term growth. With a background in software development, automation systems, and digital infrastructure, he combines technical depth with strategic thinking—building integrated frameworks that connect technology, marketing systems, brand positioning, and operational workflows into a unified architecture.',
    accent: 'tech',
    achievement: 'Helps ambitious companies move beyond ad-hoc growth toward intentionally designed organizations where systems, people, and strategy operate in alignment.',
    links: {
      portfolio: 'https://sidhantpande.in/',
      linkedin: 'https://www.linkedin.com/in/sidhantpande',
    },
  },
  {
    name: 'Shweta Ranjan',
    role: 'Co-Founder',
    focus: 'Strategic Programs & Engagement',
    bio: 'Shweta focuses on designing strategic programs, engagement frameworks, and experiential initiatives that support meaningful organizational transformation. Her work explores how teams, leaders, and organizations interact with systems, ideas, and growth environments. She contributes to shaping initiatives that translate high-level transformation strategies into structured experiences for organizations and leadership teams, emphasizing clarity, collaboration, and intentional design in how organizations approach change and development.',
    accent: 'brand',
    achievement: 'Brings a human-centered dimension to organizational architecture, ensuring structural improvements remain aligned with how teams operate and evolve.',
    links: {
      portfolio: 'https://iamshwetaranjan.in/',
      linkedin: 'https://www.linkedin.com/in/iamshwetaranjan/',
    },
  },
  {
    name: 'Aayush Prakash',
    role: 'Co-Founder',
    focus: 'Executive Operations & Business Development',
    bio: 'Aayush contributes to executive operations and business development initiatives, supporting strategic outreach, partnerships, and ecosystem engagement. His work focuses on connecting organizations, founders, and business communities with transformation initiatives that help companies build stronger operational and growth foundations. He supports relationship development, strategic conversations, and collaborative opportunities that expand the reach of transformation architecture.',
    accent: 'experience',
    achievement: 'Builds connections between ambitious organizations and structured transformation frameworks designed to improve systems, strategy, and long-term outcomes.',
    links: {
      linkedin: 'https://www.linkedin.com/in/aayush-prakash-0356bb372/',
    },
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
                    {founder.links && (
                      <div className={styles.founderLinks}>
                        {founder.links.portfolio && (
                          <a href={founder.links.portfolio} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
                            Portfolio
                          </a>
                        )}
                        <a href={founder.links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
                          LinkedIn
                        </a>
                      </div>
                    )}
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
