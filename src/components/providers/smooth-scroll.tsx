"use client";

import { ReactLenis } from "lenis/react";

const LENIS_OPTIONS = {
  lerp: 0.08,
  duration: 1.0,
  autoRaf: true,
};

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
