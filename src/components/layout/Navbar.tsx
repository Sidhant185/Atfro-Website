"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const RESOURCES_LINKS = [
  { label: "Blog", href: "#blog" },
  { label: "Resources", href: "#resources" },
];

type NavLink = { label: string; href: string };

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5L6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dropdown(props: {
  label: string;
  links: NavLink[];
  onClose: () => void;
}) {
  const { label, links, onClose } = props;
  const [open, setOpen] = useState(false);

  const menuList = open ? (
    <ul
      className="absolute top-full left-0 z-50 mt-2 min-w-[160px] rounded-xl border border-[var(--color-hero-border)] bg-white/95 py-1.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] backdrop-blur-sm"
      role="menu"
    >
      {links.map((item: NavLink) => (
        <li key={item.href} role="none">
          <Link
            href={item.href}
            role="menuitem"
            className="block px-4 py-2.5 text-sm text-[var(--color-hero-muted)] transition-colors hover:bg-[var(--color-hero-accent)]/10 hover:text-[var(--color-hero-text)]"
            onClick={onClose}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        onClose();
      }}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 rounded-md px-1 py-0.5"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown open={open} />
      </button>
      {menuList}
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
        aria-hidden
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 z-50 h-full w-[min(100vw,320px)] border-l border-[var(--color-hero-border)] bg-white shadow-2xl md:hidden">
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
        <nav className="flex flex-col gap-1 px-4 pb-8">
          <Link
            href="#features"
            onClick={onClose}
            className="rounded-lg px-4 py-3 text-[15px] font-medium text-[var(--color-hero-text)] hover:bg-black/5"
          >
            Features
          </Link>
          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-hero-muted)]">
            Company
          </div>
          {COMPANY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-4 py-2.5 pl-6 text-[15px] text-[var(--color-hero-muted)] hover:bg-black/5 hover:text-[var(--color-hero-text)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-hero-muted)]">
            Resources
          </div>
          {RESOURCES_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-4 py-2.5 pl-6 text-[15px] text-[var(--color-hero-muted)] hover:bg-black/5 hover:text-[var(--color-hero-text)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#pricing"
            onClick={onClose}
            className="rounded-lg px-4 py-3 text-[15px] font-medium text-[var(--color-hero-text)] hover:bg-black/5"
          >
            Pricing
          </Link>
          <div className="my-4 border-t border-[var(--color-hero-border)]" />
          <Link
            href="#login"
            onClick={onClose}
            className="rounded-lg px-4 py-3 text-[15px] text-[var(--color-hero-muted)] hover:bg-black/5"
          >
            Login
          </Link>
          <Link
            href="#get-started"
            onClick={onClose}
            className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--color-hero-accent)] py-3.5 text-[15px] font-semibold text-[var(--color-ink)] shadow-[0_4px_14px_rgba(245,197,24,0.35)] transition-all hover:bg-[var(--color-hero-accent-hover)] hover:shadow-[0_6px_20px_rgba(245,197,24,0.4)]"
          >
            Book a Demo
            <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </>
  );
}

const EASE_NAV = [0.22, 1, 0.36, 1] as const;
const TOP_STRIP_HEIGHT = 80;
const HEADER_HEIGHT = 64;

const AT_TOP_THRESHOLD = 50;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topHover, setTopHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
    setIsAtTop(latest < AT_TOP_THRESHOLD);
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
      {/* Hover zone: top strip + header when visible; cursor here reveals navbar (desktop only) */}
      <div
        className="fixed left-0 right-0 top-0 z-[60]"
        style={{ height: visible ? TOP_STRIP_HEIGHT + HEADER_HEIGHT : TOP_STRIP_HEIGHT }}
        aria-hidden
        onMouseEnter={() => setTopHover(true)}
        onMouseLeave={() => setTopHover(false)}
      />
      <motion.header
        initial={false}
        animate={{ y: visible ? "0%" : "-100%" }}
        transition={{ duration: 0.35, ease: EASE_NAV }}
        className={`sticky top-0 z-50 border-b ${
          scrolled
            ? "border-[var(--color-hero-border)] bg-white shadow-sm backdrop-blur-md"
            : "border-transparent bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="section-content flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[var(--color-hero-text)] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 rounded-md"
          >
            Atfro
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="relative text-sm font-medium text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 rounded-md px-1 after:absolute after:bottom-0 after:left-1 after:right-1 after:h-0.5 after:scale-x-0 after:bg-[var(--color-hero-accent)] after:transition-transform after:content-[''] hover:after:scale-x-100"
            >
              Features
            </Link>
            <Dropdown label="Company" links={COMPANY_LINKS} onClose={() => {}} />
            <Dropdown label="Resources" links={RESOURCES_LINKS} onClose={() => {}} />
            <Link
              href="#pricing"
              className="relative text-sm font-medium text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 rounded-md px-1 after:absolute after:bottom-0 after:left-1 after:right-1 after:h-0.5 after:scale-x-0 after:bg-[var(--color-hero-accent)] after:transition-transform after:content-[''] hover:after:scale-x-100"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#login"
              className="hidden text-sm font-medium text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 rounded-md px-3 py-2 md:block"
            >
              Login
            </Link>
            <Link
              href="#get-started"
              className={`hidden items-center gap-2 rounded-full bg-[var(--color-hero-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-all hover:scale-[1.02] hover:bg-[var(--color-hero-accent-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 md:inline-flex ${
                scrolled
                  ? "shadow-[0_4px_14px_rgba(245,197,24,0.38)] hover:shadow-[0_6px_20px_rgba(245,197,24,0.45)]"
                  : "shadow-[0_2px_10px_rgba(245,197,24,0.3)] hover:shadow-[0_4px_16px_rgba(245,197,24,0.4)]"
              }`}
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
