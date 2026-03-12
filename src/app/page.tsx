import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Redesigned Hero: Centered, Minimal, High-Impact Typography */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <FadeIn direction="up" delay={0.1}>
              <Typography variant="caption" className={styles.heroCaption}>
                Operations • Growth • Brand
              </Typography>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <Typography variant="h1" className={styles.heroTitle}>
                The Brand That <br />
                <span className={styles.heroHighlight}>Builds Brands.</span>
              </Typography>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <Typography variant="p" className={styles.heroText}>
                We transform fragmented startups into scalable leaders by architecting integrated systems that handle operations, marketing, and the customer experience.
              </Typography>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.6}>
              <div className={styles.heroActions}>
                <Link href="/contact" tabIndex={-1}>
                  <Button variant="primary" size="lg">Start Transformation</Button>
                </Link>
                <Link href="/case-studies" tabIndex={-1}>
                  <Button variant="outline" size="lg">See Our Work</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Redesigned Problem Section: Bento Box Style */}
      <section className="section">
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">The Problem</Typography>
            <Typography variant="h2" className={styles.bentoTitle}>Fragmented systems stall great ideas.</Typography>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.1} className={`${styles.bentoCard} ${styles.bentoLarge}`}>
              <Typography variant="h3">The Growth Bottleneck</Typography>
              <Typography variant="p">Brilliant products often fail because the internal pipeline—sales, marketing, customer support—is disconnected and relies on manual effort.</Typography>
            </FadeIn>
            
            <FadeIn delay={0.2} className={styles.bentoCard} direction="left">
               <div className={styles.iconBox}>A</div>
               <Typography variant="h4">Lost Leads</Typography>
               <Typography variant="p">Unstructured pipelines let qualified prospects slip away.</Typography>
            </FadeIn>
            
             <FadeIn delay={0.3} className={styles.bentoCard} direction="left">
               <div className={styles.iconBox}>B</div>
               <Typography variant="h4">Brand Confusion</Typography>
               <Typography variant="p">Inconsistent messaging confuses your target market.</Typography>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className={`section ${styles.pillarsSection}`}>
        <div className="container">
          <FadeIn direction="up">
            <Typography variant="caption">Our Framework</Typography>
            <Typography variant="h2" className={styles.pillarsTitle}>
              What We Deliver
            </Typography>
          </FadeIn>
          
          <div className={styles.pillarsGrid}>
            {[
              { num: '01', title: 'Tech Infrastructure', desc: 'Custom CRMs, automated lead routing, and dynamic performance dashboards.' },
              { num: '02', title: 'Growth & Marketing', desc: 'High-converting funnels, SEO content strategies, and targeted paid acquisition.' },
              { num: '03', title: 'Brand Positioning', desc: 'Differentiated messaging, conversion-optimized design, and clear value propositions.' },
              { num: '04', title: 'Programs & Experience', desc: 'Automated onboarding flows and retention systems that reduce early churn.' }
            ].map((pillar, i) => (
              <FadeIn key={pillar.num} delay={i * 0.1} direction="up">
                <div className={styles.pillarCard}>
                  <Typography variant="caption" className={styles.pillarNum}>{pillar.num}</Typography>
                  <Typography variant="h4">{pillar.title}</Typography>
                  <Typography variant="p" className={styles.pillarText}>{pillar.desc}</Typography>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.6}>
            <div className={styles.pillarsAction}>
               <Link href="/services" tabIndex={-1}>
                  <Button variant="secondary" size="lg">Explore the Architecture</Button>
                </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
