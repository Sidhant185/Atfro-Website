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
      {/* Base gradient → amber radial (breathing scale + opacity) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 48%, rgba(255,190,0,0.12) 0%, transparent 60%)",
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
    <div
      className="fixed inset-0 z-[10] h-screen w-full"
      aria-hidden={false}
    >
      <section
        className="relative h-full min-h-screen overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #ffffff 0%, #fdfcf7 40%, #f8f5e8 70%, #faf9f6 100%)",
        }}
        onMouseLeave={onMouseLeave}
      >
        <BackgroundLayers />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1340px] flex-col items-center justify-center gap-8 px-8 py-12 md:flex-row md:gap-10 md:px-10 md:py-14">
          {/* ── HeroCopy: left column ─────────────────────────────────────── */}
          <div className="flex-[0_0_40%] text-center md:text-left md:pl-0 md:pr-8">
            {/* Headline with mask reveal */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[var(--color-hero-text)]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                Your brand growth engine,{" "}
                <span className="relative inline-block">
                  built for scale.
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[var(--color-hero-accent)]"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
                  />
                </span>
              </motion.h1>
            </div>

            <motion.p
              className="mx-auto mt-7 max-w-md text-[1.08rem] leading-relaxed text-[var(--color-hero-muted)] md:mx-0"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              Technology, marketing, and creative in one team. We help
              businesses in Pune and India go from invisible to unmissable.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:items-start"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <Link href="#get-started" className="focus:outline-none focus-visible:outline-none">
                <motion.span
                  className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[var(--color-hero-accent)] px-8 py-4 text-[0.95rem] font-semibold text-[var(--color-ink)] shadow-[0_12px_36px_rgba(245,197,24,0.38)] focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 18px 48px rgba(245,197,24,0.5)",
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

            {/* Trust strip — slightly larger label, subtle y reveal */}
            <motion.div
              className="mt-8 flex flex-col items-center gap-3 md:items-start"
              initial="hidden"
              animate="visible"
              variants={trustReveal}
            >
              <p className="text-[13px] font-medium text-[var(--color-hero-muted)]">
                Trusted by 50+ brands across India
              </p>
              <div
                className="flex flex-wrap items-center justify-center gap-6 md:justify-start"
                aria-hidden
              >
                {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map(
                  (name) => (
                    <div
                      key={name}
                      className="flex h-8 items-center px-3 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-hero-muted)] opacity-50 grayscale"
                    >
                      {name}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* ── HeroVisual: right column (phone) ────────────────────────────── */}
          <div
            className="relative flex flex-[0_0_60%] items-center justify-center overflow-hidden md:justify-center"
            style={{ perspective: "1100px" }}
          >
            <div className="relative flex max-w-full items-center justify-center">
              <motion.div
                className="max-w-full"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -FLOAT_Y_AMPLITUDE, 0],
                  rotateZ: [0, FLOAT_Z_AMPLITUDE, -FLOAT_Z_AMPLITUDE * 0.66, 0],
                }}
                transition={{
                  opacity: { duration: 0.65, delay: 0.15, ease: EASE },
                  scale: { duration: 0.6, delay: 0.15, ease: EASE },
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
                  style={{ width: "clamp(380px, 60vw, 960px)" }}
                >
                  <Image
                    src="/images/Hero-section-1.png"
                    alt="Atfro growth dashboard"
                    width={960}
                    height={960}
                    className="h-auto w-full object-contain"
                    priority
                    sizes="(max-width: 768px) 90vw, 60vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
