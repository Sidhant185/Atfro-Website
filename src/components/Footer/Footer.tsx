import React from "react";
import Link from "next/link";
import { Typography } from "@/components/Typography/Typography";
import styles from "./Footer.module.css";

const SITE_URL = "https://atfro.com";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href={`${SITE_URL}/`} className={styles.logo}>
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
              <li><Link href={`${SITE_URL}/`}>Home</Link></li>
              <li><Link href={`${SITE_URL}/services`}>Our Systems</Link></li>
              <li><Link href={`${SITE_URL}/process`}>Process</Link></li>
              <li><Link href={`${SITE_URL}/case-studies`}>Case Studies</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <Typography variant="h6" className={styles.colTitle}>Company</Typography>
            <ul className={styles.linkList}>
              <li><Link href={`${SITE_URL}/founders`}>Founders</Link></li>
              <li><Link href={`${SITE_URL}/blog`}>Blog</Link></li>
              <li><Link href={`${SITE_URL}/contact`}>Contact</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
             <Typography variant="h6" className={styles.colTitle}>Contact</Typography>
             <ul className={styles.linkList}>
              <li><a href="mailto:hello@atfro.com">hello@atfro.com</a></li>
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
              <Link href={`${SITE_URL}/privacy-policy`}>Privacy Policy</Link>
            </Typography>
            <Typography variant="caption">
              <Link href={`${SITE_URL}/terms-of-service`}>Terms of Service</Link>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
