import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Insights & Blog | ATFRO',
  description: 'Research, insights, and structural methodologies from the ATFRO team.',
  alternates: { canonical: 'https://atfro.com/blog' },
  openGraph: { url: 'https://atfro.com/blog', type: 'website' },
};

const blogPosts = [
  { slug: 'the-architecture-of-scale', title: 'The Architecture of Scale: Why Your Tech Stack is Bleeding Revenue', category: 'Technology & Ops', categorySlug: 'tech', date: 'March 10, 2026', readTime: '6 min read', excerpt: 'At ATFRO, we do not just build websites or set up CRMs. We architect centralized nervous systems that drive predictive revenue.' },
  { slug: 'positioning-over-tactics', title: 'Positioning Over Tactics: The Death of Generic B2B Marketing', category: 'Brand & Growth', categorySlug: 'brand', date: 'March 05, 2026', readTime: '5 min read', excerpt: 'If your brand looks, sounds, and acts like your competitors, you are competing purely on price. And competing on price is a race to the bottom.' },
  { slug: 'the-churn-paradox', title: 'The Churn Paradox: Why Onboarding is More Important Than Acquisition', category: 'Customer Success', categorySlug: 'success', date: 'February 28, 2026', readTime: '7 min read', excerpt: 'It costs significantly more to acquire a new customer than it does to retain an existing one. Stop pouring leads into a leaky bucket.' },
];

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;
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

      <section className="section sectionSoft">
        <div className="container">
          <FadeIn direction="up" delay={0.1}>
            <Link href={`/blog/${featured.slug}`} className={`${styles.blogCard} ${styles.blogCardFeatured} ${styles[`stripe_${featured.categorySlug}`]}`}>
              <div className={styles.cardHeader}>
                <Typography variant="caption" className={styles.category}>{featured.category}</Typography>
                <span className={styles.metaRight}><Typography variant="caption" className={styles.date}>{featured.date}</Typography> · <span className={styles.readTime}>{featured.readTime}</span></span>
              </div>
              <Typography variant="h2" className={styles.titleFeatured}>{featured.title}</Typography>
              <Typography variant="p" className={styles.excerpt}>{featured.excerpt}</Typography>
              <span className={styles.readMore}>Read Article <span className={styles.readMoreArrow}>→</span></span>
            </Link>
          </FadeIn>
          <div className={styles.blogGrid}>
            {rest.map((post, index) => (
              <FadeIn key={post.slug} delay={(index + 2) * 0.1} direction="up">
                <Link href={`/blog/${post.slug}`} className={`${styles.blogCard} ${styles[`stripe_${post.categorySlug}`]}`}>
                  <div className={styles.cardHeader}>
                    <Typography variant="caption" className={styles.category}>{post.category}</Typography>
                    <span className={styles.metaRight}><Typography variant="caption" className={styles.date}>{post.date}</Typography> · <span className={styles.readTime}>{post.readTime}</span></span>
                  </div>
                  <Typography variant="h3" className={styles.title}>{post.title}</Typography>
                  <Typography variant="p" className={styles.excerpt}>{post.excerpt}</Typography>
                  <span className={styles.readMore}>Read Article <span className={styles.readMoreArrow}>→</span></span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="h3">Apply these insights to your business.</Typography>
            <Typography variant="p" className="ctaText">
              Our team turns research into systems. Start with a diagnostic audit and a clear roadmap.
            </Typography>
            <div className="actions">
              <Link href="/contact" tabIndex={-1}>
                <Button variant="primary" size="lg">Start Your Transformation</Button>
              </Link>
              <Link href="/process" tabIndex={-1}>
                <Button variant="outline" size="lg">View Our Process</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
