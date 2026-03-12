import { Typography } from '@/components/Typography/Typography';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Insights & Blog | ATFRO',
  description: 'Research, insights, and structural methodologies from the ATFRO team.',
};

const blogPosts = [
  {
    slug: 'the-architecture-of-scale',
    title: 'The Architecture of Scale: Why Your Tech Stack is Bleeding Revenue',
    category: 'Technology & Ops',
    date: 'March 10, 2026',
    excerpt: 'At ATFRO, we do not just build websites or set up CRMs. We architect centralized nervous systems that drive predictive revenue.',
  },
  {
    slug: 'positioning-over-tactics',
    title: 'Positioning Over Tactics: The Death of Generic B2B Marketing',
    category: 'Brand & Growth',
    date: 'March 05, 2026',
    excerpt: 'If your brand looks, sounds, and acts like your competitors, you are competing purely on price. And competing on price is a race to the bottom.',
  },
  {
    slug: 'the-churn-paradox',
    title: 'The Churn Paradox: Why Onboarding is More Important Than Acquisition',
    category: 'Customer Success',
    date: 'February 28, 2026',
    excerpt: 'It costs significantly more to acquire a new customer than it does to retain an existing one. Stop pouring leads into a leaky bucket.',
  }
];

export default function BlogIndexPage() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">Research & Methodologies</Typography>
            <Typography variant="h1">ATFRO Insights.</Typography>
            <Typography variant="p" className={styles.leadText}>
              We document our systems, our research, and the methodologies we use to scale businesses.
            </Typography>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.blogGrid}>
            {blogPosts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.1} direction="up">
                <Link href={`/blog/${post.slug}`} className={styles.blogCard}>
                  <div className={styles.cardHeader}>
                    <Typography variant="caption" className={styles.category}>{post.category}</Typography>
                    <Typography variant="caption" className={styles.date}>{post.date}</Typography>
                  </div>
                  <Typography variant="h3" className={styles.title}>{post.title}</Typography>
                  <Typography variant="p" className={styles.excerpt}>{post.excerpt}</Typography>
                  <span className={styles.readMore}>Read Article &rarr;</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
