import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

type BlogBlock = { type: string; text?: string };
type BlogPost = { title: string; author?: string; date?: string; category?: string; datePublished?: string; content?: BlogBlock[] };

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const post = blogData[resolvedParams.slug];
  if (!post) return { title: "Post | ATFRO Insights" };
  const title = post.title;
  const description =
    post.content?.find((b: BlogBlock) => b.type === "p")?.text?.slice(0, 160) + "…" ||
    "ATFRO insights on transformation architecture, growth, and operations.";
  const url = `https://atfro.com/blog/${resolvedParams.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { url, title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

const blogData: Record<string, BlogPost> = {
  'the-architecture-of-scale': {
    title: 'The Architecture of Scale: Why Your Tech Stack is Bleeding Revenue',
    author: 'Sidhant (Tech Lead & Founder)',
    date: 'March 10, 2026',
    category: 'Technology & Operations',
    content: [
      {
        type: 'h2',
        text: 'The Illusion of "More Tools"'
      },
      {
        type: 'p',
        text: 'Most growth-stage startups hit a technical plateau. Not because their engineering team is incapable, but because their operational technology stack is fragmented. Founders often try to solve business problems by subscribing to more SaaS products: a new CRM, another analytics tool, a secondary email automation suite.'
      },
      {
        type: 'p',
        text: 'This is the exact opposite of what scales a business. Adding disjointed tools without a unified architectural strategy creates data silos, manual coordination friction, and ultimately, it bleeds revenue. When your sales team cannot see the marketing touchpoints, and your customer success team is flying blind, the system is fundamentally broken.'
      },
      {
        type: 'h2',
        text: 'The Centralized Nervous System'
      },
      {
        type: 'p',
        text: 'At ATFRO, we do not just "build websites" or "set up CRMs." We architect centralized nervous systems. Every piece of data from a user landing on a webpage to closing a deal to renewing their subscription must flow through a single, intelligent pipeline.'
      },
      {
        type: 'p',
        text: 'When we audit a new client, the first thing we look for is API friction. Are your leads being manually routed? Is your onboarding triggering automatically based on payment gateways? True scale requires the complete eradication of manual data entry.'
      },
      {
        type: 'h2',
        text: 'Building for the Next Stage'
      },
      {
        type: 'p',
        text: 'If you want to move from 10 customers to 1,000, your technology infrastructure must be invisible. It must operate silently in the background, reliably predicting outcomes and attributing revenue perfectly. Stop buying tools. Start architecting systems.'
      }
    ]
  },
  'positioning-over-tactics': {
    title: 'Positioning Over Tactics: The Death of Generic B2B Marketing',
    author: 'Shweta (Brand & Marketing Director)',
    date: 'March 05, 2026',
    category: 'Brand & Growth',
    content: [
      {
        type: 'h2',
        text: 'The Noise of the Modern Internet'
      },
      {
        type: 'p',
        text: 'B2B marketing has become an echo chamber. Everyone is publishing the same generic "SEO-optimized" blog posts, running the same LinkedIn ad templates, and sending the same cold email sequences. The tactical playbook is exhausted.'
      },
      {
        type: 'p',
        text: 'If your brand looks, sounds, and acts like your competitors, you are competing purely on price. And competing on price is a race to the bottom.'
      },
      {
        type: 'h2',
        text: 'Brand as a Differentiator'
      },
      {
        type: 'p',
        text: 'Positioning is the act of deciding exactly who you are, who you serve, and critically, who you do NOT serve. A strong brand is polarizing. It actively turns away the wrong prospects while magnetically attracting ideal clients.'
      },
      {
        type: 'p',
        text: 'At ATFRO, we force our clients to undergo a rigorous brand audit before we spend a single dollar on paid acquisition. We refine the core narrative: What is the undeniable truth of your product? Why does it exist? How does it actually make the user\'s life better?'
      },
      {
        type: 'h2',
        text: 'Execution Means Nothing Without Message'
      },
      {
        type: 'p',
        text: 'You can have the most sophisticated marketing funnel in the world, with perfect tracking and massive budget. But if the messaging fails to resonate on a human, emotional level, the funnel will fail. Lead with emotion, justify with logic, and position with unwavering clarity.'
      }
    ]
  },
  'the-churn-paradox': {
    title: 'The Churn Paradox: Why Onboarding is More Important Than Acquisition',
    author: 'Aayush (Operations & Customer Experience)',
    date: 'February 28, 2026',
    category: 'Customer Success',
    content: [
      {
        type: 'h2',
        text: 'The Cost of a Leaky Bucket'
      },
      {
        type: 'p',
        text: 'It costs significantly more to acquire a new customer than it does to retain an existing one. Yet, companies spend 90% of their energy on marketing and sales, and only 10% on the post-purchase experience. This is the churn paradox.'
      },
      {
        type: 'p',
        text: 'If your business operates like a leaky bucket, pouring more water (leads) into the top will simply waste resources. You must fix the leaks first.'
      },
      {
        type: 'h2',
        text: 'Time-to-Value (TTV)'
      },
      {
        type: 'p',
        text: 'The critical metric in customer retention is Time-to-Value. How quickly does a new user experience the core benefit of your product after signing up? If the onboarding process is complex, manual, or confusing, user motivation drops off a cliff.'
      },
      {
        type: 'p',
        text: 'We design automated onboarding sequences that guide the user to an "Aha!" moment as rapidly as possible. We map the friction points and systematically remove them through UI improvements and automated educational sequences.'
      },
      {
        type: 'h2',
        text: 'Proactive Over Reactive'
      },
      {
        type: 'p',
        text: 'Exceptional retention is proactive. It anticipates user confusion before it happens. By architecting proper feedback loops and monitoring usage analytics, you can automatically intervene when a user shows signs of slipping away, turning a potential churn into a loyal advocate.'
      }
    ]
  }
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const post = blogData[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  const articleUrl = `https://atfro.com/blog/${resolvedParams.slug}`;
  const datePublished = post.datePublished ?? "2026-03-01";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: { "@type": "Organization", name: "ATFRO" },
    datePublished,
    dateModified: datePublished,
    url: articleUrl,
    publisher: { "@type": "Organization", name: "ATFRO", url: "https://atfro.com" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className={styles.article}>
        <section className={styles.postHeader}>
          <div className="container">
            <FadeIn direction="up">
              <Link href="/blog" className={styles.backLink}>&larr; Back to Insights</Link>
              <div className={styles.meta}>
                <Typography variant="caption" className={styles.category}>{post.category}</Typography>
                <Typography variant="caption" className={styles.date}>{post.date}</Typography>
              </div>
              <Typography variant="h1" className={styles.title}>{post.title}</Typography>
              
              <div className={styles.authorBox}>
                <div className={styles.authorAvatar}></div>
                <Typography variant="p" className={styles.authorName}>Written by <strong>{post.author}</strong></Typography>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className={`section ${styles.postBodyWrapper}`} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className={`container ${styles.postContent}`}>
            {(() => {
              const content = post.content ?? [];
              const tocItems = content.filter((b: BlogBlock) => b.type === 'h2').map((b: BlogBlock) => ({
                text: b.text ?? '',
                id: (b.text ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
              }));
              return (
                <>
                  {tocItems.length > 0 && (
                    <nav className={styles.toc} aria-label="Table of contents">
                      <div className={styles.tocTitle}>On this page</div>
                      <ul className={styles.tocList}>
                        {tocItems.map((item: { text: string; id: string }) => (
                          <li key={item.id}>
                            <a href={`#${item.id}`}>{item.text}</a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}
                  {content.map((block: BlogBlock, idx: number) => {
                    if (block.type === 'h2') {
                      const text = block.text ?? '';
                      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                      return (
                        <FadeIn key={idx} direction="up" delay={idx * 0.05}>
                          <h2 id={id} className={styles.heading2}>{text}</h2>
                        </FadeIn>
                      );
                    }
                    return (
                      <FadeIn key={idx} direction="up" delay={idx * 0.05}>
                        <Typography variant="p" className={styles.paragraph}>{block.text ?? ''}</Typography>
                      </FadeIn>
                    );
                  })}
                </>
              );
            })()}
          </div>
        </section>
      </article>

      <section className="ctaSection">
        <div className="container">
           <Typography variant="h3">Want to apply these systems to your business?</Typography>
           <Typography variant="p" className="ctaText">
             Our team turns insights into systems. Start with a diagnostic audit and a clear roadmap.
           </Typography>
           <div className="actions">
             <Link href="/contact" tabIndex={-1}>
               <Button variant="primary" size="lg">Discuss a Partnership</Button>
             </Link>
           </div>
        </div>
      </section>
    </>
  );
}
