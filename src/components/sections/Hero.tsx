"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as const;

const NOISE_SVG =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>'
  );

// ─── Animation Variants ───────────────────────────────────────────────────────

const stagger: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: EASE },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function BackgroundLayers() {
  return (
    <>
      {/* Warm amber glow centred behind the phone */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 68% 50%, rgba(255,185,0,0.22) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.06, 1], opacity: [1, 0.85, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft top-left cool contrast accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 10% 20%, rgba(200,220,255,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Vertical vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.3) 100%)",
        }}
      />

      {/* Noise grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `url("${NOISE_SVG}")`, backgroundSize: "200px" }}
      />
    </>
  );
}

function PhoneGlowLayers() {
  return (
    <>
      {/* Large outer bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-50 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,190,0,0.28) 0%, rgba(255,160,0,0.1) 45%, transparent 70%)",
        }}
      />

      {/* Tight inner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[15%] -z-10 rounded-full opacity-60 blur-[40px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,200,50,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Ground contact shadow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-3/4 -translate-x-1/2 translate-y-4 rounded-full opacity-30 blur-2xl"
        style={{
          background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
        }}
      />
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isDesktop = useRef(true);

  const spring = { damping: 25, stiffness: 160 };
  const smoothX = useSpring(mouseX, spring);
  const smoothY = useSpring(mouseY, spring);

  const rotateY = useTransform(smoothX, [-1, 1], [-10, 8]);
  const rotateX = useTransform(smoothY, [-1, 1], [4, -8]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDesktop.current) return;
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };

    const onResize = () => {
      isDesktop.current = window.innerWidth >= 768;
      if (!isDesktop.current) { mouseX.set(0); mouseY.set(0); }
    };

    onResize();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(160deg, #ffffff 0%, #fdfcf7 40%, #f8f5e8 100%)" }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      <BackgroundLayers />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1340px] flex-col items-center gap-8 px-6 pt-10 md:flex-row md:gap-6 md:pt-0">

        {/* ── Left: Copy ───────────────────────────────────────────────────── */}
        <div className="flex-[0_0_48%] text-center md:text-left md:pr-6">
          <motion.p
            className="mb-5 inline-block rounded-full bg-[var(--color-hero-eyebrow)]/12 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-hero-eyebrow)]"
            custom={0} initial="hidden" animate="visible" variants={stagger}
          >
            One Partner. Complete Growth.
          </motion.p>

          <motion.h1
            className="text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-[var(--color-hero-text)]"
            custom={1} initial="hidden" animate="visible" variants={stagger}
          >
            Your brand growth engine,{" "}
            <span className="relative inline-block">
              built for scale.
              {/* Underline accent */}
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[var(--color-hero-accent)]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-7 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-hero-muted)] md:mx-0"
            custom={2} initial="hidden" animate="visible" variants={stagger}
          >
            Technology, marketing, and creative in one team. We help businesses
            in Pune and India go from invisible to unmissable.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:items-start"
            custom={3} initial="hidden" animate="visible" variants={stagger}
          >
            <Link href="#get-started">
              <motion.span
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[var(--color-hero-accent)] px-8 py-4 text-[0.95rem] font-semibold text-[var(--color-ink)] shadow-[0_12px_36px_rgba(245,197,24,0.38)]"
                whileHover={{ scale: 1.05, boxShadow: "0 18px 48px rgba(245,197,24,0.5)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                Get started
                <motion.span
                  aria-hidden
                  className="inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.span>
            </Link>

            <Link href="#features">
              <motion.span
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/10 px-7 py-4 text-[0.95rem] font-medium text-[var(--color-hero-text)] hover:border-black/20 hover:bg-black/[0.03]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                See our work
              </motion.span>
            </Link>
          </motion.div>

          {/* Social proof / trust strip + logo row */}
          <motion.div
            className="mt-8 flex flex-col items-center gap-3 md:items-start"
            custom={4} initial="hidden" animate="visible" variants={stagger}
          >
            <p className="text-xs font-medium text-[var(--color-hero-muted)]">
              Trusted by 50+ brands across India
            </p>
            {/* Replace with <Image> or <img> pointing to client logos; keep grayscale/opacity for subtlety */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start" aria-hidden>
              {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map((name) => (
                <div
                  key={name}
                  className="flex h-8 items-center px-3 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-hero-muted)] opacity-50 grayscale"
                >
                  {name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right: Phone ─────────────────────────────────────────────────── */}
        <div
          className="relative flex flex-1 items-center justify-center md:justify-end md:items-center"
          style={{ perspective: "1100px" }}
        >
          {/* Atmosphere layers (positioned relative to this container) */}
          <div className="relative flex items-center justify-center">
            <PhoneGlowLayers />

            {/* 3-D tilt wrapper */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -18, 0],
                rotateZ: [0, 0.8, -0.6, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2, ease: EASE },
                scale:   { duration: 0.75, delay: 0.2, ease: EASE },
                y:       { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {/* The phone image — large & proud (no glass/reflection overlay), 1.5x size, shifted ~20% left toward center */}
              <div
                className="relative w-full -translate-x-[20%]"
                style={{
                  width: "clamp(450px, 84vw, 960px)",
                  filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.16)) drop-shadow(0 12px 28px rgba(0,0,0,0.1)) drop-shadow(0 80px 120px -20px rgba(0,0,0,0.12))",
                }}
              >
                <Image
                  src="/images/Hero-section-Photoroom.png"
                  alt="Atfro growth dashboard"
                  width={960}
                  height={960}
                  className="h-auto w-full object-contain"
                  priority
                  sizes="(max-width: 768px) 90vw, 960px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
