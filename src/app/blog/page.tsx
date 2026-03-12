import { Typography } from '@/components/Typography/Typography';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Insights & Blog | ATFRO',
  description: 'Research, insights, and structural methodologies from the ATFRO team.',
};

// Placeholder for future CMS integration
const blogPosts = [
  {
    slug: 'why-startups-fail-at-scale',
    title: 'Why Startups Fail at Scale (And How to Fix It)',
    category: 'Operations',
    date: 'March 15, 2026',
    excerpt: 'A deep dive into the operational bottlenecks that prevent product-market fit from translating into sustainable revenue growth.',
  },
  {
    slug: 'the-end-of-growth-hacks',
    title: 'The End of "Growth Hacks": Building Predictable Funnels',
    category: 'Marketing',
    date: 'March 02, 2026',
    excerpt: 'Why tacticals tricks no longer work and how to build a unified system that generates high-quality leads consistently.',
  },
  {
    slug: 'architecting-brand-credibility',
    title: 'Architecting Brand Credibility in B2B SaaS',
    category: 'Brand',
    date: 'February 18, 2026',
    excerpt: 'How to position your technical product so that non-technical decision-makers understand the ultimate business value.',
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
