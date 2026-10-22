"use client";

import { useEffect, useRef } from "react";

export interface UseScrollHeaderOptions {
  headerHeight?: number; // Height of header in px (default: 82)
  topThreshold?: number; // Keep 100% visible if scrollY <= topThreshold (default: 10)
  pauseAutoCollapse?: boolean; // Pause when mobile drawer is open
}

/**
 * High-performance, buttery-smooth scroll-linked header translation.
 * Directly applies translateY(px) on the header DOM element using requestAnimationFrame,
 * providing progressive, continuous movement with zero React re-renders during scroll.
 */
export function useScrollHeader<T extends HTMLElement = HTMLElement>({
  headerHeight = 82,
  topThreshold = 10,
  pauseAutoCollapse = false,
}: UseScrollHeaderOptions = {}) {
  const headerRef = useRef<T>(null);
  const currentTranslateYRef = useRef(0);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    // Initialize position
    lastScrollYRef.current = Math.max(0, window.scrollY || document.documentElement.scrollTop);
    if (lastScrollYRef.current <= topThreshold || pauseAutoCollapse) {
      currentTranslateYRef.current = 0;
    }

    let rafId: number | null = null;

    function update() {
      const currentScrollY = Math.max(0, window.scrollY || document.documentElement.scrollTop);
      const diff = currentScrollY - lastScrollYRef.current;

      if (pauseAutoCollapse || currentScrollY <= topThreshold) {
        currentTranslateYRef.current = 0;
      } else {
        // As user scrolls down (diff > 0), translate upward (more negative)
        // As user scrolls up (diff < 0), translate downward (closer to 0)
        let nextTranslate = currentTranslateYRef.current - diff;
        if (nextTranslate > 0) nextTranslate = 0;
        if (nextTranslate < -headerHeight) nextTranslate = -headerHeight;
        currentTranslateYRef.current = nextTranslate;
      }

      if (el) {
        el.style.transform = `translate3d(0, ${currentTranslateYRef.current}px, 0)`;
      }

      lastScrollYRef.current = currentScrollY;
      rafId = null;
    }

    function onScroll() {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [headerHeight, topThreshold, pauseAutoCollapse]);

  return headerRef;
}
