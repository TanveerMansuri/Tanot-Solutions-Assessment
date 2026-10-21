import { cn } from "@/lib/utils";

import { FeaturedLogoCard } from "./featured-card";
import { FEATURED_LOGOS } from "./featured-data";

export interface FeaturedLogosRowProps {
  className?: string;
}

export function FeaturedLogosRow({ className }: FeaturedLogosRowProps) {
  return (
    <div className={cn("relative w-full overflow-hidden py-2", className)}>
      {/* Subtle edge blur/fade gradient to integrate seamlessly with the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-[#F0F7FF] to-transparent select-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-[#F0F7FF] to-transparent select-none"
      />

      <div className="animate-marquee flex items-center gap-4 sm:gap-5">
        {/* Primary logo sequence */}
        <div className="flex shrink-0 items-center gap-4 sm:gap-5">
          {FEATURED_LOGOS.map((logo) => (
            <FeaturedLogoCard key={logo.id} logo={logo} />
          ))}
        </div>

        {/* First duplicate sequence for seamless looping */}
        <div aria-hidden="true" className="flex shrink-0 items-center gap-4 sm:gap-5">
          {FEATURED_LOGOS.map((logo) => (
            <FeaturedLogoCard key={`dup1-${logo.id}`} logo={logo} />
          ))}
        </div>

        {/* Second duplicate sequence to ensure wide screen coverage */}
        <div aria-hidden="true" className="flex shrink-0 items-center gap-4 sm:gap-5">
          {FEATURED_LOGOS.map((logo) => (
            <FeaturedLogoCard key={`dup2-${logo.id}`} logo={logo} />
          ))}
        </div>

        {/* Third duplicate sequence for ultra-wide screens */}
        <div aria-hidden="true" className="flex shrink-0 items-center gap-4 sm:gap-5">
          {FEATURED_LOGOS.map((logo) => (
            <FeaturedLogoCard key={`dup3-${logo.id}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}
