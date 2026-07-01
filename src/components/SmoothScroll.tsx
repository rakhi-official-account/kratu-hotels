"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Disable browser scroll restoration & always start at top
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    // Initialize Lenis with optimized timing constants
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Force Lenis to start at top after initialization
    lenis.scrollTo(0, { immediate: true });

    // Notify ScrollTrigger on every Lenis scroll tick
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Integrate Lenis RAF requests inside GSAP's ticker loop
    const updateRaf = (time: number) => {
      lenis.raf(time * 1000); // Lenis expects milliseconds
    };
    gsap.ticker.add(updateRaf);

    // Disable lag smoothing to keep scroll scrubbing in perfect sync
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []);

  return <>{children}</>;
}
