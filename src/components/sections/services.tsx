"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Minimalist SVG icon for service list items (refined dash)
function ServiceItemIcon({ theme }: { theme: "yellow" | "black" }) {
  const stroke = theme === "yellow" ? "var(--color-hero-accent)" : "rgba(255,255,255,0.9)";
  return (
    <span className="mt-0.5 shrink-0" aria-hidden>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8h8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

// Order: 1 Brand & Creative, 2 Organic Growth, 3 Growth & Performance, 4 Web & Digital, 5 Strategy, 6 Pricing
// Theme alternation: yellow (0), black (1), yellow (2), black (3), yellow (4), black (5)
const SERVICE_ITEMS = [
  {
    id: "brand-creative",
    title: "Brand & Creative",
    tagline: "Everything related to how the brand looks, sounds, and communicates.",
    purpose: "Create a strong brand presence and storytelling system.",
    services: [
      { name: "Branding", description: "Visual and verbal identity that sets you apart.", items: ["Brand identity", "Logo", "Colour palette", "Brand book", "Tone of voice guide"] },
      { name: "Content Creation", description: "Copy and scripts that convert and resonate.", items: ["Blogs", "Website copy", "Email copy", "Ad copy", "Scripts", "Brand messaging"] },
      { name: "Photography & Reels", description: "Visual content that stops the scroll.", items: ["Product shoots", "Brand shoots", "Packaging design", "Instagram reels", "YouTube shorts"] },
      { name: "Social & UGC", description: "Templates and user-generated content strategy.", items: ["Social media templates", "UGC strategy", "Creator briefs", "Content repurposing"] },
    ],
    theme: "yellow" as const,
  },
  {
    id: "organic-growth",
    title: "Organic Growth & Reputation",
    tagline: "Everything related to long-term organic visibility and brand perception.",
    purpose: "Build long-term brand authority and trust online.",
    services: [
      { name: "SEO", description: "Get found when it matters.", items: ["On-page SEO", "Technical SEO", "Keyword strategy", "Content optimisation", "Local SEO", "YouTube SEO"] },
      { name: "Social Media Management", description: "Consistent presence and community growth.", items: ["Content calendar", "Post creation", "Scheduling", "Community management", "Growth strategy", "Pinterest marketing"] },
      { name: "ORM (Online Reputation Management)", description: "Protect and strengthen how you're perceived.", items: ["Review management", "Brand monitoring", "Response strategy", "Crisis communication", "Sentiment analysis", "Review generation campaigns"] },
    ],
    theme: "black" as const,
  },
  {
    id: "growth-performance",
    title: "Growth & Performance Marketing",
    tagline: "Everything related to traffic acquisition and scaling revenue.",
    purpose: "Drive traffic, leads, and sales.",
    services: [
      { name: "Growth Marketing", description: "End-to-end funnel and channel strategy.", items: ["Full funnel strategy", "Channel mix planning", "Acquisition → retention framework", "Influencer partnerships", "Affiliate marketing"] },
      { name: "Ad Campaign Management", description: "Paid acquisition that pays back.", items: ["Meta Ads", "Google Ads", "Creative strategy", "Weekly optimisation", "Retargeting strategy", "A/B testing"] },
      { name: "Lead Generation", description: "Capture and nurture leads at scale.", items: ["Lead magnets", "Landing pages", "WhatsApp funnels", "Email funnels", "CRM setup"] },
    ],
    theme: "yellow" as const,
  },
  {
    id: "web-digital",
    title: "Web & Digital Infrastructure",
    tagline: "Everything related to the core digital foundation of the business.",
    purpose: "Build high-converting digital assets that capture and convert traffic.",
    services: [
      { name: "Website Development", description: "Fast, reliable sites that convert.", items: ["Custom websites", "Landing pages", "Mobile responsive design", "CMS integration", "Speed optimisation", "E-commerce development"] },
      { name: "Funnel & Tech", description: "Systems that scale with you.", items: ["Sales funnels", "Automated nurture sequences", "Conversion optimisation", "App development", "Analytics setup", "Hosting & maintenance"] },
    ],
    theme: "black" as const,
  },
  {
    id: "strategy-consulting",
    title: "Strategy & Business Consulting",
    tagline: "Everything related to high-level growth planning and decision making.",
    purpose: "Help businesses scale smarter with strategic direction.",
    services: [
      { name: "Business Growth Strategy", description: "Clarity and roadmap for what's next.", items: ["Competitor analysis", "Quarterly roadmap", "Founder strategy sessions", "Brand audit", "Market entry strategy", "Pricing strategy", "Investor pitch support"] },
    ],
    theme: "yellow" as const,
  },
  {
    id: "pricing",
    title: "Services start at just ₹8,000/month",
    tagline: "Transparent pricing. No hidden fees. Scale as you grow.",
    purpose: "",
    services: [],
    theme: "black" as const,
    isPricing: true,
    pricingDetails: {
      included: [
        "Dedicated account manager",
        "Monthly performance reports",
        "Priority support",
        "Unlimited revisions on creative",
        "Strategy call every sprint",
        "Access to shared dashboards",
      ],
      paymentTerms: "Monthly billing. No long-term lock-in. Pause or scale anytime.",
      valueProposition: "One partner for brand, marketing, and digital—so you can focus on running the business.",
    },
  },
];

const WRAPPER_VH = 1200;
const CURTAIN_OPEN_END = 0.03;
const CARD_RISE_DURATION = 0.065;
const getCardRiseStart = (i: number) => CURTAIN_OPEN_END + i * CARD_RISE_DURATION;
const getCardRiseEnd = (i: number) => getCardRiseStart(i) + CARD_RISE_DURATION * 0.7;
const getCardRiseMid = (i: number) => getCardRiseStart(i) + CARD_RISE_DURATION * 0.35;
const getCardCollapseEnd = (i: number) => getCardRiseStart(i + 1) + 0.008;
const getCardCollapseMid = (i: number) => (getCardRiseEnd(i) + getCardCollapseEnd(i)) / 2;

// Viewport: 0–10% gap below navbar, then 6 strips at 8% each = 48%, then 42% for quote + CTA
const HEADER_PCT = 10;
const STRIP_PCT = 8;
const NUM_STRIPS = 6;

export function Services() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const staticZero = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const staticZeroPx = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // —— Curtain: two black panels slide in from left and right with ghost "SERVICES" text ——
  const curtainLeftX = useTransform(
    scrollYProgress,
    [0, CURTAIN_OPEN_END],
    prefersReducedMotion ? ["0%", "0%"] : ["-100%", "0%"]
  );
  const curtainRightX = useTransform(
    scrollYProgress,
    [0, CURTAIN_OPEN_END],
    prefersReducedMotion ? ["0%", "0%"] : ["100%", "0%"]
  );

  // —— 6 service cards (Brand … Pricing): rise then collapse; strips start at 10% below navbar ——
  const card0RiseY = useTransform(scrollYProgress, [getCardRiseStart(0), getCardRiseMid(0), getCardRiseEnd(0)], ["100%", "22%", "0%"]);
  const card1RiseY = useTransform(scrollYProgress, [getCardRiseStart(1), getCardRiseMid(1), getCardRiseEnd(1)], ["100%", "22%", "0%"]);
  const card2RiseY = useTransform(scrollYProgress, [getCardRiseStart(2), getCardRiseMid(2), getCardRiseEnd(2)], ["100%", "22%", "0%"]);
  const card3RiseY = useTransform(scrollYProgress, [getCardRiseStart(3), getCardRiseMid(3), getCardRiseEnd(3)], ["100%", "22%", "0%"]);
  const card4RiseY = useTransform(scrollYProgress, [getCardRiseStart(4), getCardRiseMid(4), getCardRiseEnd(4)], ["100%", "22%", "0%"]);
  const card5RiseY = useTransform(scrollYProgress, [getCardRiseStart(5), getCardRiseMid(5), getCardRiseEnd(5)], ["100%", "22%", "0%"]);
  const cardRiseYs = [card0RiseY, card1RiseY, card2RiseY, card3RiseY, card4RiseY, card5RiseY];

  const card0Op = useTransform(scrollYProgress, [getCardRiseStart(0) - 0.01, getCardRiseStart(0), getCardCollapseEnd(0), getCardCollapseEnd(0) + 0.015], [0, 1, 1, 0]);
  const card1Op = useTransform(scrollYProgress, [getCardRiseStart(1) - 0.01, getCardRiseStart(1), getCardCollapseEnd(1), getCardCollapseEnd(1) + 0.015], [0, 1, 1, 0]);
  const card2Op = useTransform(scrollYProgress, [getCardRiseStart(2) - 0.01, getCardRiseStart(2), getCardCollapseEnd(2), getCardCollapseEnd(2) + 0.015], [0, 1, 1, 0]);
  const card3Op = useTransform(scrollYProgress, [getCardRiseStart(3) - 0.01, getCardRiseStart(3), getCardCollapseEnd(3), getCardCollapseEnd(3) + 0.015], [0, 1, 1, 0]);
  const card4Op = useTransform(scrollYProgress, [getCardRiseStart(4) - 0.01, getCardRiseStart(4), getCardCollapseEnd(4), getCardCollapseEnd(4) + 0.015], [0, 1, 1, 0]);
  const card5Op = useTransform(scrollYProgress, [getCardRiseStart(5) - 0.01, getCardRiseStart(5), getCardCollapseEnd(5), getCardCollapseEnd(5) + 0.015], [0, 1, 1, 0]);
  const cardOps = [card0Op, card1Op, card2Op, card3Op, card4Op, card5Op];

  const card0Top = useTransform(scrollYProgress, [getCardRiseEnd(0), getCardCollapseMid(0), getCardCollapseEnd(0)], [0, HEADER_PCT * 0.35, HEADER_PCT]);
  const card0Height = useTransform(scrollYProgress, [getCardRiseEnd(0), getCardCollapseMid(0), getCardCollapseEnd(0)], [100, STRIP_PCT + (100 - STRIP_PCT) * 0.65, STRIP_PCT]);
  const card1Top = useTransform(scrollYProgress, [getCardRiseEnd(1), getCardCollapseMid(1), getCardCollapseEnd(1)], [0, (HEADER_PCT + STRIP_PCT) * 0.35, HEADER_PCT + STRIP_PCT]);
  const card1Height = useTransform(scrollYProgress, [getCardRiseEnd(1), getCardCollapseMid(1), getCardCollapseEnd(1)], [100, STRIP_PCT + (100 - STRIP_PCT) * 0.65, STRIP_PCT]);
  const card2Top = useTransform(scrollYProgress, [getCardRiseEnd(2), getCardCollapseMid(2), getCardCollapseEnd(2)], [0, (HEADER_PCT + STRIP_PCT * 2) * 0.35, HEADER_PCT + STRIP_PCT * 2]);
  const card2Height = useTransform(scrollYProgress, [getCardRiseEnd(2), getCardCollapseMid(2), getCardCollapseEnd(2)], [100, STRIP_PCT + (100 - STRIP_PCT) * 0.65, STRIP_PCT]);
  const card3Top = useTransform(scrollYProgress, [getCardRiseEnd(3), getCardCollapseMid(3), getCardCollapseEnd(3)], [0, (HEADER_PCT + STRIP_PCT * 3) * 0.35, HEADER_PCT + STRIP_PCT * 3]);
  const card3Height = useTransform(scrollYProgress, [getCardRiseEnd(3), getCardCollapseMid(3), getCardCollapseEnd(3)], [100, STRIP_PCT + (100 - STRIP_PCT) * 0.65, STRIP_PCT]);
  const card4Top = useTransform(scrollYProgress, [getCardRiseEnd(4), getCardCollapseMid(4), getCardCollapseEnd(4)], [0, (HEADER_PCT + STRIP_PCT * 4) * 0.35, HEADER_PCT + STRIP_PCT * 4]);
  const card4Height = useTransform(scrollYProgress, [getCardRiseEnd(4), getCardCollapseMid(4), getCardCollapseEnd(4)], [100, STRIP_PCT + (100 - STRIP_PCT) * 0.65, STRIP_PCT]);
  const card5Top = useTransform(scrollYProgress, [getCardRiseEnd(5), getCardCollapseMid(5), getCardCollapseEnd(5)], [0, (HEADER_PCT + STRIP_PCT * 5) * 0.35, HEADER_PCT + STRIP_PCT * 5]);
  const card5Height = useTransform(scrollYProgress, [getCardRiseEnd(5), getCardCollapseMid(5), getCardCollapseEnd(5)], [100, STRIP_PCT + (100 - STRIP_PCT) * 0.65, STRIP_PCT]);

  const card0TopPct = useTransform(card0Top, (v) => `${v}%`);
  const card0HeightPct = useTransform(card0Height, (v) => `${v}%`);
  const card1TopPct = useTransform(card1Top, (v) => `${v}%`);
  const card1HeightPct = useTransform(card1Height, (v) => `${v}%`);
  const card2TopPct = useTransform(card2Top, (v) => `${v}%`);
  const card2HeightPct = useTransform(card2Height, (v) => `${v}%`);
  const card3TopPct = useTransform(card3Top, (v) => `${v}%`);
  const card3HeightPct = useTransform(card3Height, (v) => `${v}%`);
  const card4TopPct = useTransform(card4Top, (v) => `${v}%`);
  const card4HeightPct = useTransform(card4Height, (v) => `${v}%`);
  const card5TopPct = useTransform(card5Top, (v) => `${v}%`);
  const card5HeightPct = useTransform(card5Height, (v) => `${v}%`);
  const cardTopsPct = [card0TopPct, card1TopPct, card2TopPct, card3TopPct, card4TopPct, card5TopPct];
  const cardHeightsPct = [card0HeightPct, card1HeightPct, card2HeightPct, card3HeightPct, card4HeightPct, card5HeightPct];

  const strip0Vis = useTransform(scrollYProgress, [getCardRiseEnd(0), getCardCollapseEnd(0)], [0, 1]);
  const strip1Vis = useTransform(scrollYProgress, [getCardRiseEnd(1), getCardCollapseEnd(1)], [0, 1]);
  const strip2Vis = useTransform(scrollYProgress, [getCardRiseEnd(2), getCardCollapseEnd(2)], [0, 1]);
  const strip3Vis = useTransform(scrollYProgress, [getCardRiseEnd(3), getCardCollapseEnd(3)], [0, 1]);
  const strip4Vis = useTransform(scrollYProgress, [getCardRiseEnd(4), getCardCollapseEnd(4)], [0, 1]);
  const strip5Vis = useTransform(scrollYProgress, [getCardRiseEnd(5), getCardCollapseEnd(5)], [0, 1]);
  const stripVis = [strip0Vis, strip1Vis, strip2Vis, strip3Vis, strip4Vis, strip5Vis];

  const BOTTOM_SECTION_START = getCardCollapseEnd(5);
  const bottomSectionOpacity = useTransform(
    scrollYProgress,
    [BOTTOM_SECTION_START - 0.02, BOTTOM_SECTION_START + 0.03],
    [0, 1]
  );
  const bottomSectionY = useTransform(
    scrollYProgress,
    [BOTTOM_SECTION_START, BOTTOM_SECTION_START + 0.04],
    prefersReducedMotion ? [0, 0] : [40, 0]
  );

  return (
    <div
      ref={wrapperRef}
      id="services"
      className="relative"
      style={{ height: `${WRAPPER_VH}vh` }}
    >
      <motion.section
        className="sticky top-0 z-30 h-screen w-full overflow-hidden"
        aria-label="Services"
      >
        {/* Full-page black (always visible; curtain reveals it, cards cover it) */}
        <div
          className="absolute inset-0 z-10 bg-[var(--color-ink)]"
          aria-hidden
        />

        {/* Two black curtains from L/R with giant ghost "SERVICES" (Process-card style) */}
        <motion.div
          className="absolute inset-y-0 left-0 z-[22] flex w-1/2 items-center justify-end overflow-hidden bg-[var(--color-ink)]"
          style={{ x: curtainLeftX }}
          aria-hidden
        >
          <span
            className="select-none font-black leading-none text-white/[0.06]"
            style={{ fontSize: "clamp(4rem, 12vw, 12rem)" }}
          >
            SER
          </span>
        </motion.div>
        <motion.div
          className="absolute inset-y-0 left-1/2 z-[22] flex w-1/2 items-center justify-start overflow-hidden bg-[var(--color-ink)]"
          style={{ x: curtainRightX }}
          aria-hidden
        >
          <span
            className="select-none font-black leading-none text-white/[0.06]"
            style={{ fontSize: "clamp(4rem, 12vw, 12rem)" }}
          >
            VICES
          </span>
        </motion.div>

        {/* 6 service cards (Brand … Pricing): rise then collapse; strips at 10% below navbar */}
        {SERVICE_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            className="absolute left-0 right-0 z-[40] overflow-hidden rounded-t-2xl border-t border-x shadow-[0_-20px_40px_rgba(0,0,0,0.2)]"
            style={{
              zIndex: 40 + i,
              top: prefersReducedMotion ? `${HEADER_PCT + i * STRIP_PCT}%` : cardTopsPct[i],
              height: prefersReducedMotion ? `${STRIP_PCT}%` : cardHeightsPct[i],
              y: prefersReducedMotion ? staticZero : cardRiseYs[i],
              opacity: cardOps[i],
              background: item.theme === "yellow" ? "linear-gradient(180deg, var(--color-yellow-50) 0%, var(--color-yellow-100) 100%)" : "#0A0A0A",
              color: item.theme === "yellow" ? "var(--color-ink)" : "#fff",
              borderColor: item.theme === "yellow" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="h-full overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              style={{ minHeight: 0 }}
            >
              <div className="mx-auto max-w-4xl px-6 pt-24 pb-24 md:px-12 md:pt-28 md:pb-28">
                {item.isPricing && "pricingDetails" in item && item.pricingDetails ? (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                      hidden: {},
                    }}
                    className="space-y-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between md:gap-8">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-hero-accent)]">Transparent pricing</p>
                        <h3 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                          ₹8,000<span className="text-2xl font-semibold text-white/70 md:text-3xl">/month</span>
                        </h3>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{item.tagline}</p>
                      </div>
                      <motion.a
                        href="#contact"
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-hero-accent)] px-8 py-4 text-base font-bold tracking-tight text-[var(--color-ink)] shadow-[0_4px_20px_rgba(202,138,4,0.35)] md:mt-0 md:py-5 md:px-10 md:text-lg"
                        whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(202,138,4,0.45)" }}
                        whileTap={{ scale: 0.98 }}
                        variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
                      >
                        Book a Call
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                          <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.a>
                    </div>
                    <p className="max-w-2xl border-l-4 border-[var(--color-hero-accent)]/50 pl-5 text-sm font-medium italic leading-relaxed text-white/80 md:pl-6 md:text-base">
                      {item.pricingDetails.valueProposition}
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {item.pricingDetails.included.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                        >
                          <span className="mt-0.5 text-[var(--color-hero-accent)]" aria-hidden>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                          <span className="text-sm font-medium text-white/90">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-white/60 md:text-sm">{item.pricingDetails.paymentTerms}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
                      hidden: {},
                    }}
                    className="space-y-8"
                  >
                    <motion.div
                      variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 14 } }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex items-baseline gap-4"
                    >
                      <span
                        className={`font-mono text-4xl font-black tabular-nums md:text-5xl ${item.theme === "yellow" ? "text-[var(--color-yellow-600)]/30" : "text-white/20"}`}
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                          {item.title}
                        </h3>
                        <p className={`mt-1 max-w-2xl text-base leading-relaxed md:text-lg ${item.theme === "yellow" ? "text-zinc-600" : "text-white/80"}`}>
                          {item.tagline}
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
                      variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } }, hidden: {} }}
                    >
                      {item.services.map((svc) => (
                        <motion.div
                          key={svc.name}
                          variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className={`rounded-2xl border p-5 backdrop-blur-md md:p-6 ${
                            item.theme === "yellow"
                              ? "border-black/5 bg-black/[0.03]"
                              : "border-white/10 bg-white/5"
                          }`}
                        >
                          <h4 className="font-semibold uppercase tracking-wider text-[var(--color-yellow-600)] md:text-sm">
                            {svc.name}
                          </h4>
                          {"description" in svc && svc.description && (
                            <p className={`mt-1 text-xs leading-relaxed ${item.theme === "yellow" ? "text-zinc-600" : "text-white/70"}`}>
                              {svc.description}
                            </p>
                          )}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {svc.items.map((bullet) => (
                              <span
                                key={bullet}
                                className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                                  item.theme === "yellow"
                                    ? "bg-[var(--color-yellow-200)]/50 text-zinc-800"
                                    : "bg-white/10 text-white/90"
                                }`}
                              >
                                {bullet}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                    {item.purpose && (
                      <motion.div
                        variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className={`flex gap-4 border-l-4 pl-5 md:pl-6 ${
                          item.theme === "yellow" ? "border-[var(--color-yellow-500)]/40 text-zinc-600" : "border-[var(--color-hero-accent)]/50 text-white/80"
                        }`}
                      >
                        <p className="text-sm font-medium italic leading-relaxed md:text-base">
                          {item.purpose}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Strips 0–5: Brand … Pricing */}
        {SERVICE_ITEMS.map((item, i) => (
          <motion.div
            key={`strip-${item.id}`}
            className="absolute left-0 right-0 z-[35] flex items-center justify-between border-b px-6 md:px-10"
            style={{
              top: `${HEADER_PCT + i * STRIP_PCT}%`,
              height: `${STRIP_PCT}%`,
              minHeight: "48px",
              opacity: stripVis[i],
              background: item.theme === "yellow" ? "linear-gradient(180deg, var(--color-yellow-100) 0%, var(--color-yellow-50) 100%)" : "#0A0A0A",
              color: item.theme === "yellow" ? "var(--color-ink)" : "#fff",
              borderColor: item.theme === "yellow" ? "var(--color-yellow-300)" : "rgba(255,255,255,0.08)",
              pointerEvents: "none",
            }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm font-medium tabular-nums opacity-60 md:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
                {item.title}
              </h3>
            </div>
            <span className="opacity-40" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </motion.div>
        ))}

        {/* Bottom 42%: quote + CTA after all cards collapse */}
        <motion.div
          className="absolute left-0 right-0 z-[38] flex items-center justify-between gap-8 px-6 md:px-12 lg:px-16"
          style={{
            top: `${HEADER_PCT + NUM_STRIPS * STRIP_PCT}%`,
            height: `${100 - (HEADER_PCT + NUM_STRIPS * STRIP_PCT)}%`,
            minHeight: "200px",
            opacity: bottomSectionOpacity,
            y: prefersReducedMotion ? 0 : bottomSectionY,
          }}
        >
          <blockquote className="max-w-2xl md:max-w-3xl">
            <p className="text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl lg:leading-snug">
              Every brand has a story. We make sure the world hears it.
            </p>
          </blockquote>
          <div className="shrink-0">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-hero-accent)] px-8 py-4 text-base font-bold tracking-tight text-[var(--color-ink)] shadow-[0_4px_20px_rgba(202,138,4,0.35)] md:py-5 md:px-10 md:text-lg"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(202,138,4,0.45)" }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Call
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.section>

      <div style={{ height: `${WRAPPER_VH - 100}vh` }} aria-hidden />
    </div>
  );
}
