"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "We analyse your brand",
    copy: "We dig into your audience, positioning, and market so every move is grounded in clarity. Understanding who you are and who you serve lets us avoid guesswork and build from a solid foundation.",
  },
  {
    num: "02",
    title: "We build the strategy",
    copy: "A single growth roadmap ties together channels, goals, and metrics—no scattered tactics. We align marketing, product, and sales so your team moves in one direction with clear priorities and milestones.",
  },
  {
    num: "03",
    title: "We execute",
    copy: "From campaigns to content to launches, we run the work so you can focus on the business. Our team handles day-to-day execution while you stay in the loop with regular updates and clear ownership.",
  },
  {
    num: "04",
    title: "We create the workflow",
    copy: "Systems and processes keep delivery predictable and scalable. We design workflows that reduce bottlenecks, improve handoffs, and make it easy to repeat what works as you grow.",
  },
  {
    num: "05",
    title: "We connect emotionally",
    copy: "Messaging and creative that resonate with your customers build lasting trust. We craft stories and visuals that feel authentic to your brand and turn audiences into advocates.",
  },
  {
    num: "06",
    title: "We build the tech",
    copy: "Websites, dashboards, and tools support your growth and convert. We build digital products that are fast, reliable, and tuned to your funnel—so your tech works as hard as your team.",
  },
] as const;

const SEGMENT = 1 / 6;
// Card is stuck from 200vh to 800vh of the 800vh wrapper → progress 0.25 to 1 (600vh stuck)
const STUCK_START = 200 / 800; // 0.25
const STUCK_RANGE = 600 / 800; // 0.75
const STUCK_SEG = STUCK_RANGE * SEGMENT; // 0.125 per step

export function Process() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Right column description parallax (stuck range only)
  const descY = useTransform(scrollYProgress, [STUCK_START, STUCK_START + 0.3, 1], [24, -20, -40]);
  const descOpacity = useTransform(
    scrollYProgress,
    [STUCK_START, STUCK_START + 0.08, 0.92, 1],
    [0.7, 1, 1, 0.7]
  );

  const scaleBg = useTransform(scrollYProgress, [STUCK_START, 1], [0.98, 1.02]);
  const contentScale = useTransform(
    scrollYProgress,
    [STUCK_START, STUCK_START + 0.15],
    [0.98, 1]
  );

  // Step 0–5: opacity and y (stuck range); inactive steps dimmed to 0.25
  const step0Opacity = useTransform(
    scrollYProgress,
    [STUCK_START - 0.05, STUCK_START, STUCK_START + STUCK_SEG * 0.5, STUCK_START + STUCK_SEG, STUCK_START + STUCK_SEG + 0.05],
    [0.25, 0.85, 1, 0.85, 0.25]
  );
  const step0Y = useTransform(
    scrollYProgress,
    [STUCK_START, STUCK_START + STUCK_SEG * 0.5, STUCK_START + STUCK_SEG],
    [8, 0, -4]
  );
  const step1Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG - 0.05, STUCK_START + STUCK_SEG, STUCK_START + STUCK_SEG * 1.5, STUCK_START + STUCK_SEG * 2, STUCK_START + STUCK_SEG * 2 + 0.05],
    [0.25, 0.85, 1, 0.85, 0.25]
  );
  const step1Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG, STUCK_START + STUCK_SEG * 1.5, STUCK_START + STUCK_SEG * 2],
    [8, 0, -4]
  );
  const step2Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 2 - 0.05, STUCK_START + STUCK_SEG * 2, STUCK_START + STUCK_SEG * 2.5, STUCK_START + STUCK_SEG * 3, STUCK_START + STUCK_SEG * 3 + 0.05],
    [0.25, 0.85, 1, 0.85, 0.25]
  );
  const step2Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 2, STUCK_START + STUCK_SEG * 2.5, STUCK_START + STUCK_SEG * 3],
    [8, 0, -4]
  );
  const step3Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 3 - 0.05, STUCK_START + STUCK_SEG * 3, STUCK_START + STUCK_SEG * 3.5, STUCK_START + STUCK_SEG * 4, STUCK_START + STUCK_SEG * 4 + 0.05],
    [0.25, 0.85, 1, 0.85, 0.25]
  );
  const step3Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 3, STUCK_START + STUCK_SEG * 3.5, STUCK_START + STUCK_SEG * 4],
    [8, 0, -4]
  );
  const step4Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 4 - 0.05, STUCK_START + STUCK_SEG * 4, STUCK_START + STUCK_SEG * 4.5, STUCK_START + STUCK_SEG * 5, STUCK_START + STUCK_SEG * 5 + 0.05],
    [0.25, 0.85, 1, 0.85, 0.25]
  );
  const step4Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 4, STUCK_START + STUCK_SEG * 4.5, STUCK_START + STUCK_SEG * 5],
    [8, 0, -4]
  );
  const step5Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 5 - 0.05, STUCK_START + STUCK_SEG * 5, STUCK_START + STUCK_SEG * 5.5, 1, 1.05],
    [0.25, 0.85, 1, 0.85, 0.25]
  );
  const step5Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 5, STUCK_START + STUCK_SEG * 5.5, 1],
    [8, 0, -4]
  );

  const stepOpacities = [step0Opacity, step1Opacity, step2Opacity, step3Opacity, step4Opacity, step5Opacity];
  const stepYs = [step0Y, step1Y, step2Y, step3Y, step4Y, step5Y];

  // Description block opacity per step (stuck range; keyframes for 800vh)
  const desc0Opacity = useTransform(
    scrollYProgress,
    [STUCK_START - 0.03, STUCK_START + 0.02, STUCK_START + STUCK_SEG - 0.02, STUCK_START + STUCK_SEG + 0.03],
    [0, 1, 1, 0]
  );
  const desc1Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG - 0.03, STUCK_START + STUCK_SEG + 0.02, STUCK_START + STUCK_SEG * 2 - 0.02, STUCK_START + STUCK_SEG * 2 + 0.03],
    [0, 1, 1, 0]
  );
  const desc2Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 2 - 0.03, STUCK_START + STUCK_SEG * 2 + 0.02, STUCK_START + STUCK_SEG * 3 - 0.02, STUCK_START + STUCK_SEG * 3 + 0.03],
    [0, 1, 1, 0]
  );
  const desc3Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 3 - 0.03, STUCK_START + STUCK_SEG * 3 + 0.02, STUCK_START + STUCK_SEG * 4 - 0.02, STUCK_START + STUCK_SEG * 4 + 0.03],
    [0, 1, 1, 0]
  );
  const desc4Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 4 - 0.03, STUCK_START + STUCK_SEG * 4 + 0.02, STUCK_START + STUCK_SEG * 5 - 0.02, STUCK_START + STUCK_SEG * 5 + 0.03],
    [0, 1, 1, 0]
  );
  const desc5Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 5 - 0.03, STUCK_START + STUCK_SEG * 5 + 0.02, 1 - 0.02, 1.03],
    [0, 1, 1, 0]
  );
  const descOpacities = [desc0Opacity, desc1Opacity, desc2Opacity, desc3Opacity, desc4Opacity, desc5Opacity];

  // Card shadow subtle pulse with scroll (for right-side description card)
  const cardShadowBlur = useTransform(scrollYProgress, [STUCK_START, STUCK_START + 0.15, 0.85, 1], [12, 28, 28, 12]);
  const cardBoxShadow = useTransform(
    cardShadowBlur,
    (v) => `inset 0 0 0 1px rgba(255,255,255,0.8), 0 20px ${v}px -12px rgba(0,0,0,0.08)`
  );

  return (
    <div
      ref={wrapperRef}
      id="process"
      className="relative"
      style={{ height: "800vh" }}
    >
      {/* Transparent spacer: scroll through this while fixed Hero stays visible */}
      <div style={{ height: "100vh" }} aria-hidden />

      {/* Sticky card: slides up from bottom and covers Hero (z-20) */}
      <section
        className="sticky top-0 z-20 h-screen overflow-hidden rounded-t-3xl border-t border-x border-black/[0.06] px-4 py-6 shadow-[0_-8px_32px_rgba(0,0,0,0.08),0_-2px_8px_rgba(0,0,0,0.04)] md:px-6 md:py-8"
        style={{ background: "linear-gradient(180deg, #fdfcf9 0%, #f5f3ef 100%)" }}
      >
        {/* Cool-toned mesh + subtle amber accent */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 85% 20%, rgba(255,200,80,0.12) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 80% 40%, rgba(200,220,255,0.28) 0%, transparent 50%), radial-gradient(ellipse 50% 80% at 20% 80%, rgba(230,240,255,0.22) 0%, transparent 45%)",
            scale: scaleBg,
          }}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            background:
              "linear-gradient(135deg, rgba(240,245,255,0.6) 0%, transparent 40%, transparent 60%, rgba(235,242,255,0.5) 100%)",
          }}
          aria-hidden
        />
        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-[1180px] flex-col gap-12 rounded-2xl py-8 md:flex-row md:items-center md:gap-16 md:py-12"
          style={{ opacity: descOpacity, scale: contentScale }}
        >
          {/* Left column: label + steps (number | dot | title) */}
          <div className="relative flex-[0_0_45%] md:pr-8">
            <div className="mb-10 h-0.5 w-20 bg-gradient-to-r from-[var(--color-hero-accent)] to-transparent" />
            <p className="mb-10 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]/70">
              How we work
            </p>
            {/* Timeline spine: more visible + short accent segment at top */}
            <div
              className="absolute left-[3.25rem] top-[4.5rem] h-4 w-px bg-[var(--color-hero-accent)]/50"
              aria-hidden
            />
            <div
              className="absolute left-[3.25rem] top-[5.75rem] bottom-0 w-px bg-black/15"
              aria-hidden
            />
            <ul className="space-y-8 md:space-y-10">
              {PROCESS_STEPS.map((step, i) => (
                <motion.li
                  key={step.num}
                  className="grid grid-cols-[3rem_0.5rem_1fr] items-baseline gap-2 md:gap-3"
                  style={{ opacity: stepOpacities[i], y: stepYs[i] }}
                >
                  <span className="font-mono text-3xl font-bold tabular-nums text-[var(--color-hero-accent)] md:text-4xl">
                    {step.num}
                  </span>
                  <span className="flex justify-center">
                    <motion.span
                      className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-hero-accent)] shadow-[0_0_12px_var(--color-hero-accent)] md:h-3 md:w-3"
                      style={{ opacity: stepOpacities[i] }}
                      aria-hidden
                    />
                  </span>
                  <span className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] md:text-3xl">
                    {step.title}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right column: premium step card with strong contrast and accent */}
          <div className="relative flex flex-1 flex-col justify-center md:pl-4">
            <motion.div
              className="relative min-h-[140px] md:min-h-[180px]"
              style={{ y: descY }}
            >
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="absolute left-0 top-0 w-full"
                  style={{ opacity: descOpacities[i] }}
                >
                  <motion.div
                    className="relative w-full overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:rounded-3xl md:p-16 md:shadow-xl"
                    style={{
                      borderLeftWidth: "3px",
                      borderLeftColor: "var(--color-hero-accent)",
                      boxShadow: cardBoxShadow,
                    }}
                  >
                    {/* Subtle mesh behind copy */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        background:
                          "radial-gradient(ellipse 100% 80% at 100% 0%, rgba(220,235,255,0.5) 0%, transparent 50%), radial-gradient(ellipse 60% 100% at 0% 100%, rgba(250,248,240,0.4) 0%, transparent 50%)",
                      }}
                      aria-hidden
                    />
                    <p className="relative z-10 text-xl leading-[1.6] text-[var(--color-hero-muted)] md:text-2xl md:leading-relaxed">
                      {step.copy}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bottom block: scroll distance so card stays stuck and 6-step parallax runs */}
      <div style={{ height: "600vh" }} aria-hidden />
    </div>
  );
}
