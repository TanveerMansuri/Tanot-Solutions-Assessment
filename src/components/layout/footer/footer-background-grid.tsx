import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface FooterBackgroundGridProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Two-layer stitched tech grid background for the Tanot Solutions footer.
 *
 * Layer 1 (Primary Highlighted Grid):
 * - ~64px × 64px on desktop, ~56px on tablet, ~48px on mobile
 * - 1px lines using rgba(65, 145, 220, 0.13)
 *
 * Layer 2 (Fine Internal Micro-Grid):
 * - ~8px × 8px on desktop/tablet, ~6px on mobile
 * - Subtle lines using rgba(100, 170, 225, 0.035)
 */
export function FooterBackgroundGrid({ className, ...props }: FooterBackgroundGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 select-none overflow-hidden", className)}
      {...props}
    >
      {/*
        Mobile Grid (< 640px):
        Primary: 48px × 48px with rgba(65, 145, 220, 0.13)
        Micro: 8px × 8px with rgba(100, 170, 225, 0.035)
      */}
      <div
        className="absolute inset-0 block sm:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(65, 145, 220, 0.13) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(65, 145, 220, 0.13) 1px, transparent 1px),
            linear-gradient(to right, rgba(100, 170, 225, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 170, 225, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 48px 48px, 8px 8px, 8px 8px",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0",
        }}
      />

      {/*
        Tablet Grid (640px - 1024px):
        Primary: 56px × 56px with rgba(65, 145, 220, 0.13)
        Micro: 8px × 8px with rgba(100, 170, 225, 0.035)
      */}
      <div
        className="absolute inset-0 hidden sm:block lg:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(65, 145, 220, 0.13) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(65, 145, 220, 0.13) 1px, transparent 1px),
            linear-gradient(to right, rgba(100, 170, 225, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 170, 225, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px, 56px 56px, 8px 8px, 8px 8px",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0",
        }}
      />

      {/*
        Desktop Grid (>= 1024px):
        Primary: 64px × 64px with rgba(65, 145, 220, 0.13)
        Micro: 8px × 8px with rgba(100, 170, 225, 0.035)
      */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(65, 145, 220, 0.13) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(65, 145, 220, 0.13) 1px, transparent 1px),
            linear-gradient(to right, rgba(100, 170, 225, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 170, 225, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px, 64px 64px, 8px 8px, 8px 8px",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0",
        }}
      />

      {/* Subtle top edge gradient fade for seamless integration */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#021838] to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
