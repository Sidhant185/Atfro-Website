import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn/FadeIn';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Start Transformation | ATFRO',
  description: 'Begin your transformation journey. Contact ATFRO to rebuild your operational systems and accelerate growth.',
};

const stats = [
  { value: '24–48h', label: 'Typical first response' },
  { value: 'Discovery-first', label: 'No hard sell' },
  { value: '100%', label: 'Structured process' },
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <Typography variant="caption">Contact Us</Typography>
          <Typography variant="h1">Start Your Transformation.</Typography>
          <Typography variant="p" className={styles.leadText}>
            We work with startups and established businesses seeking structured, repeatable growth. Fill out the form below to begin the Discovery process.
          </Typography>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} direction="up" delay={i * 0.1}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.formSection}`}>
        <div className="container">
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <Typography variant="h3">The Brand That Builds Brands.</Typography>
              <Typography variant="p">
                We act as a long-term strategic execution partner that studies your entire ecosystem and builds systems that work together. 
              </Typography>
              <div className={styles.contactDetails}>
                <div className={styles.detailBlock}>
                  <Typography variant="caption" className={styles.detailLabel}>Email</Typography>
                  <Typography variant="span" className={styles.detailValue}>hello@atfro.in</Typography>
                </div>
                <div className={styles.detailBlock}>
                  <Typography variant="caption" className={styles.detailLabel}>Location</Typography>
                  <Typography variant="span" className={styles.detailValue}>India • Global Remote</Typography>
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              {/* Note: This form is a frontend mockup for design purposes */}
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Work Email</label>
                  <input type="email" id="email" className={styles.input} placeholder="john@company.com" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>Company/Startup Name</label>
                  <input type="text" id="company" className={styles.input} placeholder="Acme Corp" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="revenue" className={styles.label}>Annual Revenue (Optional)</label>
                  <select id="revenue" className={styles.select}>
                    <option value="">Select an option</option>
                    <option value="pre-revenue">Pre-Revenue / Prototype</option>
                    <option value="under-50l">&lt; ₹50 Lakh</option>
                    <option value="50l-1cr">₹50 Lakh - ₹1 Cr</option>
                    <option value="1cr-10cr">₹1 Cr - ₹10 Cr</option>
                    <option value="10cr-100cr">₹10 Cr - ₹100 Cr</option>
                    <option value="over-100cr">&gt; ₹100 Cr</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Current Challenges & Goals</label>
                  <textarea id="message" className={styles.textarea} placeholder="Tell us about the friction points in your operations, marketing, or tech stack..." rows={5} required></textarea>
                </div>

                <Button variant="primary" size="lg" type="submit" className={styles.submitBtn}>
                  Request Discovery Call
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
