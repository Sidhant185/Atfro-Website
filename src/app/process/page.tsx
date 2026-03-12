import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Process | ATFRO',
  description: 'The ATFRO 7-Stage Client Transformation Process.',
};

const stages = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'Every engagement begins with a discovery conversation. We discuss your business overview, challenges, and goals to determine if a deeper partnership is genuinely valuable.'
  },
  {
    num: '02',
    title: 'Surface Audit Report',
    desc: 'An initial high-level review of your operations, market presence, and growth opportunities. We introduce the option of a deeper Diagnostic Audit.'
  },
  {
    num: '03',
    title: 'Diagnostic Audit',
    desc: 'Our core research phase. We conduct a detailed study of your business ecosystem—analyzing operations, marketing, brand, and competitive landscape.'
  },
  {
    num: '04',
    title: 'Strategic Diagnostic Presentation',
    desc: 'We present a detailed strategic roadmap covering the core pillars, alongside a customized transformation proposal and structured payment plan.'
  },
  {
    num: '05',
    title: 'Execution Begins',
    desc: 'Work begins within the first week. We collaborate through weekly progress discussions, monthly strategic reviews, and continuous feedback loops.'
  },
  {
    num: '06',
    title: 'Development Phase & Milestones',
    desc: 'Core systems are built and implemented over 3-4 months with specific checkpoints at 25%, 50%, and 80% to ensure alignment and satisfaction.'
  },
  {
    num: '07',
    title: 'Final Delivery',
    desc: 'All systems are integrated and handed over. An optional service agreement secures ongoing monthly support, optimization, and management.'
  }
];

export default function ProcessPage() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <Typography variant="caption">Methodology</Typography>
          <Typography variant="h1">The Transformation Process.</Typography>
          <Typography variant="p" className={styles.leadText}>
            A structured, multi-stage engagement process designed to ensure that every client receives a custom solution tailored to the realities of their organization.
          </Typography>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.timeline}>
            {stages.map((stage) => (
              <div key={stage.num} className={styles.timelineItem}>
                <div className={styles.timelineNumber}>{stage.num}</div>
                <div className={styles.timelineContent}>
                  <Typography variant="h3">{stage.title}</Typography>
                  <Typography variant="p">{stage.desc}</Typography>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.milestonesSection}>
            <Typography variant="caption">Evaluation Checkpoints</Typography>
            <Typography variant="h2" className={styles.milestonesTitle}>Milestone-Based Progress</Typography>
            <div className={styles.milestonesGrid}>
              <div className={styles.milestoneCard}>
                <Typography variant="h4">25% Complete</Typography>
                <Typography variant="p">Progress review. If satisfied, 20% setup fee is paid. If exiting, you retain the diagnostic report.</Typography>
              </div>
              <div className={styles.milestoneCard}>
                <Typography variant="h4">50% Complete</Typography>
                <Typography variant="p">Halfway review. Exiting clients receive a 50% refund and retain legal ownership of partially developed systems.</Typography>
              </div>
              <div className={styles.milestoneCard}>
                <Typography variant="h4">80% Complete</Typography>
                <Typography variant="p">Near completion check. Clients who exit receive a 30% refund and retain all developed assets.</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <Typography variant="h3">Explore Our Work</Typography>
          <div className={styles.actions}>
            <Link href="/case-studies" tabIndex={-1}>
              <Button variant="secondary" size="lg">View Case Studies</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
