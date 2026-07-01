"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Center coordinates
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      // Dot follows immediately
      gsap.to(dot, { x, y, duration: 0 });
      // Ring trails with smooth power easing
      gsap.to(ring, { x, y, duration: 0.35, ease: "power3.out" });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Dynamic scale expansions on mouse hover
    const onMouseEnterInteractive = () => {
      gsap.to(ring, {
        scale: 1.8,
        borderColor: "#D4AF37", // Warm Gold
        backgroundColor: "rgba(212, 175, 55, 0.08)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(236, 234, 226, 0.4)", // Muted Warm White
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
      });
    };

    // Attach mouse listeners to interactive tags
    const updateInteractiveListeners = () => {
      const elements = document.querySelectorAll(
        'a, button, select, input, textarea, [role="button"], .interactive-hover'
      );
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };

    updateInteractiveListeners();

    // Re-bind listeners on DOM modifications (hydration, pages rendering)
    const observer = new MutationObserver(updateInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      const elements = document.querySelectorAll(
        'a, button, select, input, textarea, [role="button"], .interactive-hover'
      );
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      />
      <div
        ref={cursorRingRef}
        className="custom-cursor fixed top-0 left-0 w-10 h-10 border border-cream/40 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      />
    </>
  );
}
