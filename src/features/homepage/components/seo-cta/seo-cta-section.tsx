import { cn } from "@/lib/utils";

import { SeoCtaButtons } from "./seo-cta-buttons";
import { SeoCtaContent } from "./seo-cta-content";
import { SeoCtaBackground } from "./SeoCtaBackground";

export interface SeoCtaSectionProps {
  className?: string;
}

export function SeoCtaSection({ className }: SeoCtaSectionProps) {
  return (
    <SeoCtaBackground className={className}>
      <div
        className={cn(
          "flex flex-col lg:flex-row lg:items-center lg:justify-between",
          "gap-8 lg:gap-8 xl:gap-10 px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-11"
        )}
      >
        {/* Left Side: 3-Line Heading, Description, Benefit Indicators */}
        <div className="w-full lg:max-w-[62%] min-w-0">
          <SeoCtaContent />
        </div>

        {/* Right Side: Primary and Secondary CTA Buttons */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end shrink-0">
          <SeoCtaButtons />
        </div>
      </div>
    </SeoCtaBackground>
  );
}
