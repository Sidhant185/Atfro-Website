import { Typography } from '@/components/Typography/Typography';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Founders | ATFRO',
  description: 'Meet the architects behind ATFRO: Sidhant Pande, Shweta Ranjan, and Aayush Prakash.',
};

const founders = [
  {
    name: 'Sidhant Pande',
    role: 'Co-Founder',
    focus: 'Strategic Architecture & Technology',
    bio: 'Specializing in building scalable operational systems and digital infrastructure that allow businesses to eliminate bottlenecks and handle rapid growth.'
  },
  {
    name: 'Shweta Ranjan',
    role: 'Co-Founder',
    focus: 'Brand Positioning & Marketing',
    bio: 'Expert in developing cohesive brand narratives and targeted marketing funnels that convert attention into predictable revenue streams.'
  },
  {
    name: 'Aayush Prakash',
    role: 'Co-Founder',
    focus: 'Programs & Client Experience',
    bio: 'Focused on designing end-to-end customer journeys and retention programs that turn one-time buyers into long-term brand advocates.'
  }
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

      <section className="section">
        <div className="container">
          <div className={styles.foundersGrid}>
            {founders.map((founder, index) => (
              <FadeIn key={founder.name} delay={index * 0.1} direction="up" className={styles.founderCard}>
                <div className={styles.imagePlaceholder}>
                  <span>Image Coming Soon</span>
                </div>
                <div className={styles.founderInfo}>
                  <Typography variant="h3">{founder.name}</Typography>
                  <Typography variant="caption" className={styles.role}>{founder.role}</Typography>
                  <Typography variant="h6" className={styles.focus}>{founder.focus}</Typography>
                  <Typography variant="p" className={styles.bio}>{founder.bio}</Typography>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
