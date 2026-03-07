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

// ─── Motion config (single source of truth) ───────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as const;
const STAGGER_DELAY = 0.06;
const FLOAT_DURATION = 10;
const FLOAT_DURATION_Z = 14;
const FLOAT_Y_AMPLITUDE = 8;
const FLOAT_Z_AMPLITUDE = 0.3;

const NOISE_SVG =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>'
  );

// ─── Animation variants ──────────────────────────────────────────────────────

const stagger: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * STAGGER_DELAY, ease: EASE },
  }),
};

const trustReveal: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 3 * STAGGER_DELAY, ease: EASE },
  },
};

// ─── Parallax hook ───────────────────────────────────────────────────────────

function useParallaxRotation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isDesktop = useRef(true);

  const spring = { damping: 25, stiffness: 160 };
  const smoothX = useSpring(mouseX, spring);
  const smoothY = useSpring(mouseY, spring);

  const rotateY = useTransform(smoothX, [-1, 1], [-6, 5]);
  const rotateX = useTransform(smoothY, [-1, 1], [3, -5]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDesktop.current) return;
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };

    const onResize = () => {
      isDesktop.current = window.innerWidth >= 768;
      if (!isDesktop.current) {
        mouseX.set(0);
        mouseY.set(0);
      }
    };

    onResize();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [mouseX, mouseY]);

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return { rotateX, rotateY, onMouseLeave };
}

// ─── Background layers (breathing amber + vignette + noise) ──────────────────

function BackgroundLayers() {
  return (
    <>
      {/* Base gradient → yellow-200 / yellow-300 blend for warmer depth */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 48%, rgba(253,224,71,0.14) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 65% 50%, rgba(254,240,138,0.12) 0%, transparent 60%)",
        }}
        animate={{
          opacity: [1, 0.92, 1],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cool top-left accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 12% 18%, rgba(200,220,255,0.05) 0%, transparent 55%)",
        }}
      />

      {/* Vertical vignette — stronger so center feels brighter */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.3) 100%)",
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

// ─── Main component ──────────────────────────────────────────────────────────

export function Hero() {
  const { rotateX, rotateY, onMouseLeave } = useParallaxRotation();

  return (
    <section
      id="hero"
      className="relative z-10 h-screen w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #ffffff 0%, #fdfcf7 38%, #f8f5e8 72%, #faf9f6 100%)",
      }}
      onMouseLeave={onMouseLeave}
    >
      <BackgroundLayers />

      {/* Diagonal light streak for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "linear-gradient(125deg, transparent 0%, transparent 45%, rgba(255,248,220,0.4) 52%, transparent 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full min-h-0 max-w-[1340px] flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row md:gap-12 md:px-10 md:py-20">
        {/* Left: copy */}
        <div className="flex-[0_0_42%] text-center md:text-left md:pr-6">
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-hero-accent)] md:mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            Growth Partner for Ambitious Brands
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              className="text-[clamp(2.5rem,5.2vw,4.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--color-hero-text)]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, ease: EASE }}
            >
              Your brand growth engine,{" "}
              <span className="relative inline-block text-[var(--color-hero-text)]">
                built for scale.
              </span>
            </motion.h1>
          </div>
          <motion.span
            className="mt-2 block h-[3px] w-24 rounded-full bg-[var(--color-hero-accent)] md:mt-3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            style={{ transformOrigin: "left" }}
            aria-hidden
          />
          <motion.p
            className="mx-auto mt-6 max-w-md text-[1.06rem] leading-relaxed text-[var(--color-hero-muted)] md:mx-0 md:mt-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
          >
            Technology, marketing, and creative in one team. We help businesses
            in Pune and India go from invisible to unmissable.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          >
            <Link href="#get-started" className="focus:outline-none focus-visible:outline-none">
              <motion.span
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[var(--color-hero-accent)] px-8 py-4 text-[0.95rem] font-semibold text-[var(--color-ink)] shadow-[0_12px_36px_rgba(202,138,4,0.35)] focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 18px 48px rgba(202,138,4,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                Get started
                <motion.span
                  aria-hidden
                  className="inline-block"
                  initial={false}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  →
                </motion.span>
              </motion.span>
            </Link>
            <Link href="#features" className="focus:outline-none focus-visible:outline-none">
              <motion.span
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/10 px-7 py-4 text-[0.95rem] font-medium text-[var(--color-hero-text)] hover:border-black/25 hover:bg-black/[0.03] focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                See our work
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center gap-3 border-t border-black/5 pt-8 md:items-start md:pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: EASE }}
          >
            <p className="text-[13px] font-medium text-[var(--color-hero-muted)]">
              Trusted by 50+ brands across India
            </p>
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

        {/* Right: phone with 3D parallax + rim glow */}
        <div
          className="relative flex flex-[0_0_58%] items-center justify-center overflow-hidden md:justify-center"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            className="relative max-w-full"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -FLOAT_Y_AMPLITUDE, 0],
              rotateZ: [0, FLOAT_Z_AMPLITUDE, -FLOAT_Z_AMPLITUDE * 0.66, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.2, ease: EASE },
              scale: { duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
              y: {
                duration: FLOAT_DURATION,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotateZ: {
                duration: FLOAT_DURATION_Z,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div
              className="relative w-full max-w-full"
              style={{ width: "clamp(510px, 87vw, 1380px)" }}
            >
              <Image
                src="/images/Hero-section-1.png"
                alt="Atfro growth dashboard"
                width={1440}
                height={1440}
                className="relative h-auto w-full object-contain"
                priority
                sizes="(max-width: 768px) 88vw, 87vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 md:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden
      >
        <a
          href="#process"
          className="flex flex-col items-center gap-2 text-[var(--color-hero-muted)] transition-colors hover:text-[var(--color-hero-text)]"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-current">
              <path d="M10 4v12M6 12l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
