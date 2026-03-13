'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const SITE_URL = 'https://atfro.com';
const navLinks = [
  { name: 'Home', href: `${SITE_URL}/` },
  { name: 'Services', href: `${SITE_URL}/services` },
  { name: 'Process', href: `${SITE_URL}/process` },
  { name: 'Case Studies', href: `${SITE_URL}/case-studies` },
  { name: 'Insights', href: `${SITE_URL}/blog` },
  { name: 'Contact', href: `${SITE_URL}/contact` },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes (deferred to avoid synchronous setState in effect)
  useEffect(() => {
    const t = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href={`${SITE_URL}/`} className={styles.logo}>
            AT<span>FRO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`${styles.navLink} ${pathname === (link.href.replace(SITE_URL, '') || '/') || (link.href.startsWith(`${SITE_URL}/blog`) && pathname.startsWith('/blog')) ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href={`${SITE_URL}/contact`} className={styles.ctaButton}>
              Start Transformation
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === (link.href.replace(SITE_URL, '') || '/') || (link.href.startsWith(`${SITE_URL}/blog`) && pathname.startsWith('/blog')) ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href={`${SITE_URL}/contact`} 
            className={styles.mobileCtaButton}
            onClick={() => setIsOpen(false)}
          >
            Start Transformation
          </Link>
        </div>
      </div>
    </>
  );
};
