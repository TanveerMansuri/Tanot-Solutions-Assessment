import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { GrowthChartIllustration } from "./growth-chart-illustration";

export interface SeoCtaBackgroundProps {
  children?: ReactNode;
  className?: string;
  cardClassName?: string;
}

export function SeoCtaBackground({ children, className, cardClassName }: SeoCtaBackgroundProps) {
  return (
    <section
      aria-label="SEO and Link Building Service CTA"
      className={cn(
        "relative w-full overflow-hidden pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20",
        "bg-[linear-gradient(110deg,#EAF5FF_0%,#DFF0FF_55%,#F5FAFF_100%)]",
        className
      )}
    >
      {/* Outer section decorative subtle circular shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-[-8%] -z-0 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#BAE6FD]/40 to-[#7DD3FC]/15 blur-3xl select-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 right-[-6%] -z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[#BAE6FD]/45 to-[#38BDF8]/15 blur-3xl select-none"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1664px] px-4 sm:px-8 xl:px-16">
        {/* Main Blue Gradient Card */}
        <div
          className={cn(
            "relative w-full overflow-hidden",
            "rounded-[24px] sm:rounded-[30px] lg:rounded-[36px]",
            "bg-[linear-gradient(90deg,#0562D9_0%,#0575E8_42%,#0789F5_72%,#0798F8_100%)]",
            "shadow-[0_12px_44px_rgba(5,98,217,0.24)]",
            "min-h-[330px] sm:min-h-[350px] lg:min-h-[360px]",
            cardClassName
          )}
        >
          {/* Card Translucent Arcs & Circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -left-20 h-[360px] w-[360px] sm:h-[440px] sm:w-[440px] rounded-full border border-white/[0.12] bg-white/[0.04] select-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-12 -left-10 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] rounded-full border border-white/[0.08] bg-white/[0.02] select-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-10 sm:right-24 h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] rounded-full border border-white/[0.12] bg-white/[0.04] select-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 right-[-40px] sm:right-[-20px] h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] rounded-full border border-white/[0.14] bg-white/[0.05] select-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-4 sm:right-16 h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] rounded-full border border-white/[0.10] select-none"
          />

          {/* Dotted Patterns */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 right-8 sm:top-8 sm:right-14 h-20 w-32 sm:h-24 sm:w-40 opacity-40 select-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.9) 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-5 left-6 sm:bottom-7 sm:left-12 h-16 w-24 sm:h-20 sm:w-28 opacity-30 select-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.85) 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Growth Chart Illustration */}
          <GrowthChartIllustration />

          {/* Future Content Layer Container */}
          <div className="relative z-20 w-full h-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
