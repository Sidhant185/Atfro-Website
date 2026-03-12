import { Typography } from '@/components/Typography/Typography';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

interface BlogPostProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params); // Next 15 awaits params
  // Placeholder metadata generation
  // In a real app, you would fetch post data based on the slug
  
  return {
    title: `${resolvedParams.slug.replace(/-/g, ' ')} | ATFRO Insights`,
    description: `Read the latest insights on ${resolvedParams.slug.replace(/-/g, ' ')} from ATFRO.`,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const resolvedParams = await Promise.resolve(params); // Next 15 awaits params
  
  return (
    <>
      <section className={styles.postHeader}>
        <div className="container">
          <FadeIn direction="up">
            <Link href="/blog" className={styles.backLink}>&larr; Back to Insights</Link>
            <div className={styles.meta}>
              <Typography variant="caption" className={styles.category}>Methodology</Typography>
              <Typography variant="caption" className={styles.date}>Published recently</Typography>
            </div>
            <Typography variant="h1" className={styles.title}>
               {resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Typography>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <article className={`container ${styles.postContent}`}>
          <FadeIn direction="up" delay={0.2}>
            <div className={styles.contentPlaceholder}>
              <Typography variant="p" className={styles.lead}>
                This is a placeholder for the dynamic blog content located at <code>/blog/{resolvedParams.slug}</code>.
              </Typography>
              
              <Typography variant="h3">The Future of Operational Scaling</Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
              
              <div className={styles.callout}>
                 <Typography variant="h4">Key Architecture Insight</Typography>
                 <Typography variant="p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Typography>
              </div>

               <Typography variant="p">
                Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </Typography>
            </div>
            
            <div className={styles.authorArea}>
               <div className={styles.authorAvatar}>AT</div>
               <div className={styles.authorInfo}>
                 <Typography variant="h6">ATFRO Research Team</Typography>
                 <Typography variant="caption">Strategy & Execution</Typography>
               </div>
            </div>
          </FadeIn>
        </article>
      </section>
    </>
  );
}
