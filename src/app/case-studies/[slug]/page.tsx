import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

type CaseStudySection = { heading: string; content: string[] };

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  return {
    title: `${resolvedParams.slug.replace(/-/g, ' ')} | ATFRO Case Studies`,
  };
}

type CaseStudyData = {
  title: string;
  client?: string;
  challenge?: string;
  metrics?: Array<{ value: string; label: string; sub?: string }>;
  timeline?: Array<{ phase: string; desc: string }>;
  sections?: CaseStudySection[];
  testimonial?: string;
  testimonialRole?: string;
};
const caseStudyData: Record<string, CaseStudyData> = {
  'saas-startup-transformation': {
    title: 'SaaS Startup Transformation',
    client: 'Growth-stage SaaS startup',
    challenge: 'A technically strong product struggling to translate product capability into consistent market traction.',
    metrics: [
      { value: '3x', label: 'Lead pipeline growth', sub: 'Structured funnels' },
      { value: 'Centralized', label: 'CRM & visibility', sub: 'From manual tracking' },
      { value: 'Founder time', label: 'Freed for product', sub: 'Less manual ops' },
    ],
    timeline: [
      { phase: 'Weeks 1–2', desc: 'Diagnostic audit across funnels, brand, and tech stack.' },
      { phase: 'Weeks 3–4', desc: 'Strategy formulation and 4-pillar roadmap.' },
      { phase: 'Months 2–3', desc: 'CRM implementation, lead routing, and dashboards.' },
      { phase: 'Ongoing', desc: 'Campaign management and optimization.' },
    ],
    testimonial: 'ATFRO gave us a single source of truth for every lead. We went from spreadsheets to a real pipeline in weeks.',
    testimonialRole: 'Founder, SaaS Startup',
    sections: [
      {
        heading: 'Initial Challenges',
        content: [
          'During early discovery conversations, several key operational and growth challenges became apparent:',
          '1. Unstructured Marketing Presence: Marketing efforts were sporadic and lacked a long-term strategy.',
          '2. Undefined Sales Pipeline: Lead handling relied heavily on manual communication. No centralized tracking system.',
          '3. Fragmented Brand Narrative: Messaging varied across platforms making it difficult for prospects to understand benefits.',
          '4. Lack of Operational Systems: Internal coordination relied on manual channels rather than structured dashboards.'
        ]
      },
      {
        heading: 'ATFRO Diagnostic Audit',
        content: [
          'ATFRO conducted a detailed Diagnostic Audit to study the organization:',
          '• Product positioning in the SaaS market',
          '• Competitor landscape and messaging strategies',
          '• Current marketing channels and performance',
          '• Sales process and lead handling systems'
        ]
      },
      {
        heading: 'ATFRO Intervention (4-Pillar Architecture)',
        content: [
          'We designed and implemented a comprehensive transformation plan.',
          'Technology Infrastructure: Built CRM to track leads, automated follow-up workflows, and created data analytics dashboards.',
          'Growth & Marketing Systems: Developed a content strategy, ran targeted paid campaigns, and designed lead generation funnels.',
          'Brand & Positioning: Defined the core problem, clarified value proposition, and aligned product communication.',
          'Programs & Experience: Restructured onboarding and built feedback loops for retention.'
        ]
      },
      {
        heading: 'Outcomes',
        content: [
          'Within months, the startup experienced meaningful operational improvements.',
          '• Improved Lead Generation: Structured funnels attracted more relevant prospects.',
          '• Clearer Sales Visibility: CRM dashboards highlighted conversion bottlenecks.',
          '• Founder Focus: Operational systems reduced manual workload, allowing founders to focus on product innovation.'
        ]
      }
    ]
  },
  'sattvahar-digital-foundation': {
    title: 'Sattvahar — Website Development & Digital Foundation',
    client: 'Sattvahar (sattvahar.in)',
    challenge: 'Establishing a strong digital presence to represent the brand online and serve as a foundation for future growth.',
    metrics: [
      { value: 'Live', label: 'Digital presence', sub: 'Brand platform' },
      { value: 'Optimized', label: 'Performance & UX', sub: 'Mobile-first' },
      { value: 'Scalable', label: 'Foundation ready', sub: 'Future marketing' },
    ],
    timeline: [
      { phase: 'Discovery', desc: 'Brand philosophy, audience, and product mapping.' },
      { phase: 'Architecture', desc: 'Information structure and page hierarchy.' },
      { phase: 'Design & Build', desc: 'Visual design, responsive UX, and performance optimization.' },
      { phase: 'Launch', desc: 'Go-live and handover for future marketing.' },
    ],
    testimonial: 'The site now truly reflects who we are. Clean, calm, and ready to grow with us.',
    testimonialRole: 'Sattvahar Team',
    sections: [
      {
        heading: 'Initial Challenges',
        content: [
          'During early research, several areas of opportunity were identified:',
          '• Limited Digital Presence: The brand needed a primary digital touchpoint.',
          '• Brand Communication: The philosophy behind Sattvahar needed to be communicated clearly.',
          '• User Experience: The platform needed frictionless discovery of products.',
          '• Scalability: Architecture required support for future marketing integrations.'
        ]
      },
      {
        heading: 'Website Architecture',
        content: [
          'ATFRO designed an architecture organizing information logically. Key elements included:',
          '• Clear homepage storytelling',
          '• Product discovery sections',
          '• Brand philosophy and values',
          '• Contact and engagement points'
        ]
      },
      {
        heading: 'Design & Performance Optimization',
        content: [
          'The design focused on simplicity and clarity. We ensured the website felt calm, natural, and aligned with their philosophy.',
          '• Clean, intuitive navigation and mobile responsive layout',
          '• Optimized loading performance and structured pages',
          '• Content and visuals structured to highlight natural food values'
        ]
      },
      {
        heading: 'Outcomes',
        content: [
          'The website now serves as the official digital presence of Sattvahar.',
          '• Provides a clear platform presenting the brand.',
          '• Delivers an accessible interface for visitors.',
          '• Acts as a scalable foundation for future marketing initiatives.'
        ]
      }
    ]
  }
};

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const data = caseStudyData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  const metrics = data.metrics || [];

  return (
    <>
      <section className={styles.postHeader}>
        <div className="container">
          <FadeIn direction="up">
            <Link href="/case-studies" className={styles.backLink}>&larr; Back to Case Studies</Link>
            <div className={styles.meta}>
              <Typography variant="caption" className={styles.category}>Client: {data.client}</Typography>
            </div>
            <Typography variant="h1" className={styles.title}>{data.title}</Typography>
            <Typography variant="p" className={styles.lead}>{data.challenge}</Typography>
          </FadeIn>
        </div>
      </section>

      {metrics.length > 0 && (
        <section className={styles.metricsHero}>
          <div className="container">
            <div className={styles.metricsGrid}>
              {metrics.map((m: { value: string; label: string; sub?: string }, i: number) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{m.value}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                    <span className={styles.metricSub}>{m.sub ?? ''}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
        <article className={`container ${styles.postContent}`}>
          {data.timeline && data.timeline.length > 0 && (
            <FadeIn direction="up" delay={0.05}>
              <div className={styles.contentBlock}>
                <Typography variant="h3" className={styles.sectionHeading}>Project timeline</Typography>
                <div className={styles.timeline}>
                  {data.timeline.map((item: { phase: string; desc: string }, i: number) => (
                    <div key={i} className={styles.timelineItem}>
                      <div className={styles.timelinePhase}>{item.phase}</div>
                      <div className={styles.timelineDesc}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
          {(data.sections ?? []).map((section: CaseStudySection, idx: number) => (
            <FadeIn key={idx} direction="up" delay={(idx + 1) * 0.1}>
              <div className={styles.contentBlock}>
                <Typography variant="h3" className={styles.sectionHeading}>{section.heading}</Typography>
                {section.content.map((para: string, pIdx: number) => (
                  <Typography key={pIdx} variant="p" className={para.startsWith('•') || para.startsWith('1.') ? styles.listItem : styles.paragraph}>
                    {para}
                  </Typography>
                ))}
              </div>
            </FadeIn>
          ))}
          {data.testimonial && (
            <FadeIn direction="up" delay={0.2}>
              <div className={styles.contentBlock}>
                <Typography variant="h3" className={styles.sectionHeading}>What the client said</Typography>
                <blockquote className={styles.testimonial}>
                  &ldquo;{data.testimonial}&rdquo;
                  {data.testimonialRole && <div className={styles.testimonialAttribution}>— {data.testimonialRole}</div>}
                </blockquote>
              </div>
            </FadeIn>
          )}
        </article>
      </section>

      <section className="ctaSection">
        <div className="container">
           <Typography variant="h3">Ready for your transformation?</Typography>
           <Typography variant="p" className="ctaText">
             We build systems that deliver measurable outcomes. Start with a diagnostic audit.
           </Typography>
           <div className="actions">
             <Link href="/contact" tabIndex={-1}>
               <Button variant="primary" size="lg">Start Building</Button>
             </Link>
           </div>
        </div>
      </section>
    </>
  );
}
