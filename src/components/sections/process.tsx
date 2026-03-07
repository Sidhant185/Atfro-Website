"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "We analyse your brand",
    copy: "We dig into your audience, positioning, and market so every move is grounded in clarity. Understanding who you are and who you serve lets us avoid guesswork and build from a solid foundation.",
    icon: "analyse",
    word: "Analyse",
  },
  {
    num: "02",
    title: "We build the strategy",
    copy: "A single growth roadmap ties together channels, goals, and metrics—no scattered tactics. We align marketing, product, and sales so your team moves in one direction with clear priorities and milestones.",
    icon: "strategy",
    word: "Strategy",
  },
  {
    num: "03",
    title: "We execute",
    copy: "From campaigns to content to launches, we run the work so you can focus on the business. Our team handles day-to-day execution while you stay in the loop with regular updates and clear ownership.",
    icon: "execute",
    word: "Execute",
  },
  {
    num: "04",
    title: "We create the workflow",
    copy: "Systems and processes keep delivery predictable and scalable. We design workflows that reduce bottlenecks, improve handoffs, and make it easy to repeat what works as you grow.",
    icon: "workflow",
    word: "Workflow",
  },
  {
    num: "05",
    title: "We connect emotionally",
    copy: "Messaging and creative that resonate with your customers build lasting trust. We craft stories and visuals that feel authentic to your brand and turn audiences into advocates.",
    icon: "connect",
    word: "Connect",
  },
  {
    num: "06",
    title: "We build the tech",
    copy: "Websites, dashboards, and tools support your growth and convert. We build digital products that are fast, reliable, and tuned to your funnel—so your tech works as hard as your team.",
    icon: "tech",
    word: "Tech",
  },
] as const;

const SEGMENT = 1 / 6;
// Card is stuck from 200vh to 800vh of the 800vh wrapper → progress 0.25 to 1 (600vh stuck)
const STUCK_START = 200 / 800; // 0.25
const STUCK_RANGE = 600 / 800; // 0.75
const STUCK_SEG = STUCK_RANGE * SEGMENT; // 0.125 per step

export function Process() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Right column description parallax (stuck range only); zero when reduced motion
  const descY = useTransform(
    scrollYProgress,
    prefersReducedMotion ? [0, 1] : [STUCK_START, STUCK_START + 0.3, 1],
    prefersReducedMotion ? [0, 0] : [24, -20, -40]
  );
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
  const scaleBgStatic = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const contentScaleStatic = useTransform(scrollYProgress, [0, 1], [1, 1]);

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
  const stepYStatic = useTransform(scrollYProgress, [0, 1], [0, 0]);

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

  return (
    <div
      ref={wrapperRef}
      id="process"
      className="relative"
      style={{ height: "800vh" }}
    >
      {/* Transparent spacer: scroll through this while fixed Hero stays visible */}
      <div style={{ height: "100vh" }} aria-hidden />

      {/* Sticky section: fixed yellow gradient background */}
      <motion.section
        className="sticky top-0 z-20 h-screen overflow-hidden rounded-t-3xl border-t border-x border-black/[0.06] px-4 py-6 shadow-[0_-8px_32px_rgba(0,0,0,0.08),0_-2px_8px_rgba(0,0,0,0.04)] md:px-6 md:py-8"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(253,252,232,0.9), transparent 70%), linear-gradient(180deg, #fefce8 0%, #fdf8e7 40%, #fef9e0 100%)",
        }}
      >
        {/* Yellow/amber decorative mesh (scale only when motion allowed) */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 85% 20%, rgba(255,220,100,0.2) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 80% 40%, rgba(253,240,180,0.25) 0%, transparent 50%), radial-gradient(ellipse 50% 80% at 20% 80%, rgba(254,248,220,0.2) 0%, transparent 45%)",
            scale: prefersReducedMotion ? scaleBgStatic : scaleBg,
          }}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            background:
              "linear-gradient(135deg, rgba(253,248,230,0.8) 0%, transparent 40%, transparent 60%, rgba(254,250,235,0.6) 100%)",
          }}
          aria-hidden
        />
        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-[1180px] flex-col gap-12 rounded-2xl py-8 pt-8 md:flex-row md:items-center md:gap-16 md:py-12 md:pt-10"
          style={{
            opacity: descOpacity,
            scale: prefersReducedMotion ? contentScaleStatic : contentScale,
          }}
        >
          {/* Left column: heading + steps */}
          <div className="relative flex-[0_0_45%] text-[var(--color-ink)] md:pr-8">
            <div className="mb-12">
              <div
                className="mb-10 h-0.5 w-20 bg-[var(--color-hero-accent)]"
                aria-hidden
              />
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-hero-accent)]">
                How we work
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl lg:text-5xl">
                Our 6-step engine
              </h2>
            </div>

            <div className="relative">
              {/* Timeline spine */}
              <div
                className="absolute bottom-8 left-[1.125rem] top-8 w-px bg-black/10 md:left-[1.375rem]"
                aria-hidden
              />
              <ul className="relative space-y-6 md:space-y-10">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.li
                    key={step.num}
                    className="relative flex items-center gap-5 md:gap-8"
                    style={{
                      opacity: stepOpacities[i],
                      y: prefersReducedMotion ? stepYStatic : stepYs[i],
                    }}
                  >
                    {/* Step Node */}
                    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/5 bg-white shadow-sm md:h-11 md:w-11">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[var(--color-hero-accent)]/20"
                        style={{ opacity: stepOpacities[i] }}
                      />
                      <motion.div
                        className="h-2.5 w-2.5 rounded-full bg-[var(--color-hero-accent)] md:h-3 md:w-3"
                        style={{ opacity: stepOpacities[i] }}
                        aria-hidden
                      />
                    </div>

                    {/* Step Text */}
                    <div className="flex flex-col">
                      <span className="font-mono text-sm font-bold text-[var(--color-hero-accent)] md:text-base">
                        {step.num}
                      </span>
                      <span className="text-xl font-semibold tracking-tight text-[var(--color-ink)] md:text-2xl">
                        {step.title}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: step card with huge background text + copy */}
          <div className="relative flex flex-1 flex-col justify-center md:pl-4">
            <motion.div
              className="relative min-h-[340px] md:min-h-[440px]"
              style={{ y: descY }}
            >
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="absolute left-0 top-0 w-full"
                  style={{ opacity: descOpacities[i] }}
                >
                  <div className="relative w-full overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:p-12 lg:p-16">
                    {/* Huge background word */}
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 select-none text-[7rem] font-black leading-none text-black/[0.03] md:-right-12 md:-top-12 md:text-[10rem] lg:text-[14rem]"
                      aria-hidden
                    >
                      {step.word}
                    </div>

                    {/* Sub-mesh glow */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50"
                      style={{
                        background:
                          "radial-gradient(ellipse 80% 80% at 100% 0%, rgba(254,248,220,0.8) 0%, transparent 60%)",
                      }}
                      aria-hidden
                    />

                    <div className="relative z-10">
                      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-hero-accent)]/30 bg-[var(--color-hero-accent)]/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-[var(--color-ink)]">
                        <span className="text-[var(--color-hero-accent)]">
                          Phase {step.num}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-hero-accent)]" />
                        {step.word}
                      </div>

                      <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-4xl lg:text-5xl">
                        {step.title}
                      </h2>
                      <p className="text-lg leading-relaxed text-zinc-600 md:text-xl lg:text-2xl lg:leading-[1.7]">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Bottom block: scroll distance so card stays stuck and 6-step parallax runs */}
      <div style={{ height: "600vh" }} aria-hidden />
    </div>
  );
}
