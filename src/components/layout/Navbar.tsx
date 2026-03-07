"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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

function Dropdown(props: {
  label: string;
  links: NavLink[];
  onClose: () => void;
}) {
  const { label, links, onClose } = props;
  const [open, setOpen] = useState(false);

  const menuList = open ? (
    <ul
      className="absolute top-full left-0 z-50 mt-1 min-w-[140px] rounded-lg border border-[var(--color-hero-border)] bg-[var(--color-hero-bg)] py-1 shadow-lg"
      role="menu"
    >
      {links.map((item: NavLink) => (
        <li key={item.href} role="none">
          <Link
            href={item.href}
            role="menuitem"
            className="block px-4 py-2 text-sm text-[var(--color-hero-muted)] hover:bg-black/5 hover:text-[var(--color-hero-text)]"
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
        className="flex items-center gap-1 text-sm text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)]"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <span className={open ? "inline-block rotate-180 transition-transform" : "inline-block transition-transform"}>
          &#9660;
        </span>
      </button>
      {menuList}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    const scrollOpts: AddEventListenerOptions = { passive: true };
    window.addEventListener("scroll", onScroll, scrollOpts);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--color-hero-border)] transition-[background-color,backdrop-filter] duration-200 ${
        scrolled
          ? "bg-[var(--color-hero-bg)]/98 backdrop-blur-md"
          : "bg-[var(--color-hero-bg)]/95 backdrop-blur-sm"
      }`}
    >
      <div className="section-content flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-[var(--color-hero-text)]"
        >
          Atfro
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)]"
          >
            Features
          </Link>
          <Dropdown
            label="Company"
            links={COMPANY_LINKS}
            onClose={() => {}}
          />
          <Dropdown
            label="Resources"
            links={RESOURCES_LINKS}
            onClose={() => {}}
          />
          <Link
            href="#pricing"
            className="text-sm text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)]"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#login"
            className="text-sm text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)]"
          >
            Login
          </Link>
          <Link
            href="#get-started"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--color-hero-accent)] bg-[var(--color-hero-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-all hover:bg-[var(--color-hero-accent-hover)] hover:border-[var(--color-hero-accent-hover)]"
          >
            Book a Demo
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
