"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "We analyse your brand",
    copy: "We dig into your audience, positioning, and market so every move is grounded in clarity.",
  },
  {
    num: "02",
    title: "We build the strategy",
    copy: "A single growth roadmap that ties together channels, goals, and metrics—no scattered tactics.",
  },
  {
    num: "03",
    title: "We execute",
    copy: "From campaigns to content to launches, we run the work so you can focus on the business.",
  },
  {
    num: "04",
    title: "We create the workflow",
    copy: "Systems and processes that keep delivery predictable and scalable.",
  },
  {
    num: "05",
    title: "We connect emotionally",
    copy: "Messaging and creative that resonate with your customers and build lasting trust.",
  },
  {
    num: "06",
    title: "We build the tech",
    copy: "Websites, dashboards, and tools that support your growth and convert.",
  },
] as const;

const SEGMENT = 1 / 6;
// Card is stuck from 200vh to 500vh of the 500vh wrapper → progress 0.4 to 1
const STUCK_START = 0.4;
const STUCK_RANGE = 0.6;
const STUCK_SEG = STUCK_RANGE * SEGMENT; // 0.1 per step

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

  // Step 0–5: opacity and y (stuck range)
  const step0Opacity = useTransform(
    scrollYProgress,
    [STUCK_START - 0.05, STUCK_START, STUCK_START + STUCK_SEG * 0.5, STUCK_START + STUCK_SEG, STUCK_START + STUCK_SEG + 0.05],
    [0.4, 0.85, 1, 0.85, 0.4]
  );
  const step0Y = useTransform(
    scrollYProgress,
    [STUCK_START, STUCK_START + STUCK_SEG * 0.5, STUCK_START + STUCK_SEG],
    [8, 0, -4]
  );
  const step1Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG - 0.05, STUCK_START + STUCK_SEG, STUCK_START + STUCK_SEG * 1.5, STUCK_START + STUCK_SEG * 2, STUCK_START + STUCK_SEG * 2 + 0.05],
    [0.4, 0.85, 1, 0.85, 0.4]
  );
  const step1Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG, STUCK_START + STUCK_SEG * 1.5, STUCK_START + STUCK_SEG * 2],
    [8, 0, -4]
  );
  const step2Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 2 - 0.05, STUCK_START + STUCK_SEG * 2, STUCK_START + STUCK_SEG * 2.5, STUCK_START + STUCK_SEG * 3, STUCK_START + STUCK_SEG * 3 + 0.05],
    [0.4, 0.85, 1, 0.85, 0.4]
  );
  const step2Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 2, STUCK_START + STUCK_SEG * 2.5, STUCK_START + STUCK_SEG * 3],
    [8, 0, -4]
  );
  const step3Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 3 - 0.05, STUCK_START + STUCK_SEG * 3, STUCK_START + STUCK_SEG * 3.5, STUCK_START + STUCK_SEG * 4, STUCK_START + STUCK_SEG * 4 + 0.05],
    [0.4, 0.85, 1, 0.85, 0.4]
  );
  const step3Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 3, STUCK_START + STUCK_SEG * 3.5, STUCK_START + STUCK_SEG * 4],
    [8, 0, -4]
  );
  const step4Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 4 - 0.05, STUCK_START + STUCK_SEG * 4, STUCK_START + STUCK_SEG * 4.5, STUCK_START + STUCK_SEG * 5, STUCK_START + STUCK_SEG * 5 + 0.05],
    [0.4, 0.85, 1, 0.85, 0.4]
  );
  const step4Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 4, STUCK_START + STUCK_SEG * 4.5, STUCK_START + STUCK_SEG * 5],
    [8, 0, -4]
  );
  const step5Opacity = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 5 - 0.05, STUCK_START + STUCK_SEG * 5, STUCK_START + STUCK_SEG * 5.5, 1, 1.05],
    [0.4, 0.85, 1, 0.85, 0.4]
  );
  const step5Y = useTransform(
    scrollYProgress,
    [STUCK_START + STUCK_SEG * 5, STUCK_START + STUCK_SEG * 5.5, 1],
    [8, 0, -4]
  );

  const stepOpacities = [step0Opacity, step1Opacity, step2Opacity, step3Opacity, step4Opacity, step5Opacity];
  const stepYs = [step0Y, step1Y, step2Y, step3Y, step4Y, step5Y];

  // Description block opacity per step (stuck range)
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

  return (
    <div
      ref={wrapperRef}
      id="process"
      className="relative"
      style={{ height: "500vh" }}
    >
      {/* Transparent spacer: scroll through this while fixed Hero stays visible */}
      <div style={{ height: "100vh" }} aria-hidden />

      {/* Sticky card: slides up from bottom and covers Hero (z-20) */}
      <section
        className="sticky top-0 z-20 h-screen overflow-hidden rounded-t-3xl border-t border-x border-black/[0.06] bg-[var(--color-canvas)] px-4 py-6 shadow-[0_-8px_32px_rgba(0,0,0,0.08),0_-2px_8px_rgba(0,0,0,0.04)] md:px-6 md:py-8"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 75% 50%, rgba(245,197,24,0.4), transparent 60%)",
          }}
          aria-hidden
        />
        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-[1340px] flex-col gap-12 rounded-2xl bg-[var(--color-canvas)] py-8 md:flex-row md:items-center md:gap-16 md:py-12"
          style={{ opacity: descOpacity }}
        >
          {/* Left column: label + steps */}
          <div className="flex-[0_0_45%] md:pr-8">
            <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-hero-eyebrow)]">
              How we work
            </p>
            <ul className="space-y-6 md:space-y-8">
              {PROCESS_STEPS.map((step, i) => (
                <motion.li
                  key={step.num}
                  className="flex items-baseline gap-4"
                  style={{ opacity: stepOpacities[i], y: stepYs[i] }}
                >
                  <span className="font-mono text-sm font-bold text-[var(--color-hero-accent)]">
                    {step.num}
                  </span>
                  <span className="text-lg font-semibold text-[var(--color-ink)] md:text-xl">
                    {step.title}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right column: current step description */}
          <div className="relative flex flex-1 flex-col justify-center md:pl-4">
            <motion.div
              className="relative min-h-[120px] md:min-h-[140px]"
              style={{ y: descY }}
            >
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="absolute left-0 right-0 md:left-auto md:right-0 md:max-w-[52%]"
                  style={{ opacity: descOpacities[i] }}
                >
                  <p className="text-base leading-relaxed text-[var(--color-hero-muted)] md:text-lg">
                    {step.copy}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bottom block: scroll distance so card stays stuck and 6-step parallax runs */}
      <div style={{ height: "300vh" }} aria-hidden />
    </div>
  );
}
