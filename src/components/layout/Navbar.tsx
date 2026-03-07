"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NAV_LINKS = [
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function NavLinkItem({
  label,
  href,
  active,
  onClick,
}: {
  label: string;
  href: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative py-2 text-sm font-medium text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded px-1"
    >
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute bottom-0 left-1 right-1 h-0.5 bg-[var(--color-hero-accent)]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      {label}
    </Link>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
        aria-hidden
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 200 }}
        className="fixed top-0 right-0 z-50 h-full w-[min(100vw,300px)] border-l border-black/5 bg-white/95 shadow-2xl backdrop-blur-xl md:hidden"
      >
        <div className="flex h-16 items-center justify-end px-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-[var(--color-hero-muted)] hover:bg-black/5 hover:text-[var(--color-hero-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)]"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 pb-10">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.href + link.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-[15px] font-medium text-[var(--color-hero-text)] hover:bg-[var(--color-hero-accent)]/10"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 pt-6 border-t border-black/5"
          >
            <Link
              href="#get-started"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-hero-accent)] py-3.5 text-[15px] font-semibold text-[var(--color-ink)] shadow-[0_4px_20px_rgba(202,138,4,0.35)] hover:shadow-[0_6px_24px_rgba(202,138,4,0.4)] transition-shadow"
            >
              Book a Demo
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
}

const TOP_STRIP_HEIGHT = 80;
const HEADER_HEIGHT = 64;
const AT_TOP_THRESHOLD = 50;
// Approximate section boundaries (vh): hero ~100, process ~900, then services
const HERO_VH = 100;
const PROCESS_VH = 900;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topHover, setTopHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState<"process" | "services" | null>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
    setIsAtTop(latest < AT_TOP_THRESHOLD);
    const vh = typeof window !== "undefined" ? window.innerHeight : 800;
    const heroEnd = HERO_VH * vh;
    const processEnd = heroEnd + PROCESS_VH * vh;
    if (latest < heroEnd * 0.5) setActiveSection(null);
    else if (latest < processEnd * 0.5) setActiveSection("process");
    else setActiveSection("services");
  });

  useEffect(() => {
    const check = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const visible = isAtTop || topHover || isMobile;

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 z-[60]"
        style={{ height: visible ? TOP_STRIP_HEIGHT + HEADER_HEIGHT : TOP_STRIP_HEIGHT }}
        aria-hidden
        onMouseEnter={() => setTopHover(true)}
        onMouseLeave={() => setTopHover(false)}
      />
      <motion.header
        initial={false}
        animate={{ y: visible ? 0 : -HEADER_HEIGHT }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`sticky top-0 z-50 border-b ${
          scrolled
            ? "border-black/5 bg-white/70 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "border-transparent bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="section-content flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[1.25rem] font-bold tracking-tight text-[var(--color-hero-text)] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 rounded-md"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--color-hero-accent)]" aria-hidden />
            Atfro
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLinkItem
                key={link.href + link.label}
                label={link.label}
                href={link.href}
                active={
                  (link.label === "Process" && activeSection === "process") ||
                  (link.label === "Services" && activeSection === "services") ||
                  (link.label === "Pricing" && activeSection === "services")
                }
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#get-started"
              className="hidden items-center gap-2 rounded-full bg-[var(--color-hero-accent)] px-6 py-2.5 text-sm font-semibold text-[var(--color-ink)] shadow-[0_4px_20px_rgba(202,138,4,0.32)] transition-all hover:scale-[1.02] hover:shadow-[0_6px_28px_rgba(202,138,4,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 md:inline-flex"
            >
              Book a Demo
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-hero-text)] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] md:hidden"
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16M4 12h16M4 19h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
