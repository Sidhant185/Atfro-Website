import React from "react";
import Link from "next/link";
import { Typography } from "@/components/Typography/Typography";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              AT<span>FRO</span>
            </Link>
            <Typography variant="p" className={styles.brandText}>
              Architecting Transformations For Robust Outcomes. The brand that builds brands.
            </Typography>
          </div>

          {/* Links Column */}
          <div className={styles.linksCol}>
            <Typography variant="h6" className={styles.colTitle}>Platform</Typography>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Our Systems</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <Typography variant="h6" className={styles.colTitle}>Company</Typography>
            <ul className={styles.linkList}>
              <li><Link href="/founders">Founders</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
             <Typography variant="h6" className={styles.colTitle}>Contact</Typography>
             <ul className={styles.linkList}>
              <li><a href="mailto:hello@atfro.in">hello@atfro.in</a></li>
              <li>India • Global Remote</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <Typography variant="caption" className={styles.copyright}>
            &copy; {new Date().getFullYear()} ATFRO. All rights reserved.
          </Typography>
          <div className={styles.legal}>
            <Typography variant="caption">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Typography>
            <Typography variant="caption">
              <Link href="/terms-of-service">Terms of Service</Link>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
