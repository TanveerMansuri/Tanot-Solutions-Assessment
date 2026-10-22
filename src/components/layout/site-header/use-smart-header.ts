"use client";

import { useEffect, useRef, useState } from "react";

export interface UseSmartHeaderOptions {
  topThreshold?: number; // Distance from top where header is always visible (default: 10)
  hideThreshold?: number; // Minimum scroll down before hiding (default: 100)
  scrollUpDelta?: number; // Minimum upward scroll delta to trigger reveal (default: 8)
  pauseAutoCollapse?: boolean; // Pause auto-hiding when menu or drawer is open
}

/**
 * Custom hook for smart auto-hiding header behavior:
 * - Always visible when scrollY <= topThreshold
 * - Hides when scrolling down past hideThreshold
 * - Reveals on meaningful upward scroll (delta >= scrollUpDelta)
 * - Remains visible if paused (e.g. navigation dropdown or mobile menu is open)
 */
export function useSmartHeader({
  topThreshold = 10,
  hideThreshold = 100,
  scrollUpDelta = 8,
  pauseAutoCollapse = false,
}: UseSmartHeaderOptions = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const upScrollAccumulatorRef = useRef(0);

  useEffect(() => {
    // Sync initial scroll on mount
    lastScrollYRef.current = typeof window !== "undefined" ? Math.max(0, window.scrollY || document.documentElement.scrollTop) : 0;

    function handleScroll() {
      const currentScrollY = Math.max(0, window.scrollY || document.documentElement.scrollTop);
      const prevScrollY = lastScrollYRef.current;
      const diff = currentScrollY - prevScrollY;

      // If mobile drawer is open, stay visible
      if (pauseAutoCollapse) {
        setIsVisible(true);
        lastScrollYRef.current = currentScrollY;
        upScrollAccumulatorRef.current = 0;
        return;
      }

      // 1. Always visible at the top of the page
      if (currentScrollY <= topThreshold) {
        setIsVisible(true);
        upScrollAccumulatorRef.current = 0;
      }
      // 2. Scrolling DOWN
      else if (diff > 0) {
        upScrollAccumulatorRef.current = 0;
        // Hide only beyond the minimum hide threshold
        if (currentScrollY > hideThreshold) {
          setIsVisible(false);
        }
      }
      // 3. Scrolling UP
      else if (diff < 0) {
        upScrollAccumulatorRef.current += Math.abs(diff);
        if (upScrollAccumulatorRef.current >= scrollUpDelta) {
          setIsVisible(true);
        }
      }

      lastScrollYRef.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [topThreshold, hideThreshold, scrollUpDelta, pauseAutoCollapse]);

  return isVisible;
}
