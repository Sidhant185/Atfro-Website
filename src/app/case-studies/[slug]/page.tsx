import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  return {
    title: `${resolvedParams.slug.replace(/-/g, ' ')} | ATFRO Case Studies`,
  };
}

const caseStudyData: Record<string, any> = {
  'saas-startup-transformation': {
    title: 'SaaS Startup Transformation',
    client: 'Growth-stage SaaS startup',
    challenge: 'A technically strong product struggling to translate product capability into consistent market traction.',
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

      <section className="section">
        <article className={`container ${styles.postContent}`}>
          {data.sections.map((section: any, idx: number) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
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
        </article>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
           <Typography variant="h3">Ready for your transformation?</Typography>
           <div className={styles.actions}>
             <Link href="/contact" tabIndex={-1}>
               <Button variant="primary" size="lg">Start Building</Button>
             </Link>
           </div>
        </div>
      </section>
    </>
  );
}
