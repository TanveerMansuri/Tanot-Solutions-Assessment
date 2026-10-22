import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SeoCtaButtonsProps {
  className?: string;
  bookCallHref?: string;
  contactUsHref?: string;
}

export function SeoCtaButtons({
  className,
  bookCallHref = "#audit",
  contactUsHref = "#contact",
}: SeoCtaButtonsProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 lg:gap-[18px] w-full lg:w-auto shrink-0",
        className
      )}
    >
      {/* Primary White Button with Dark Navy Text */}
      <Link
        href={bookCallHref}
        className={cn(
          "inline-flex items-center justify-center gap-3",
          "h-[54px] sm:h-[62px] lg:h-[68px] w-full sm:w-[210px] lg:w-[228px]",
          "rounded-[16px] bg-white text-[#09264D] text-[16px] sm:text-[18px] lg:text-[19px] font-bold",
          "shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-[#F8FAFC] hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)]",
          "transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
        )}
      >
        <span>Book a Call</span>
        <ArrowRight className="h-4.5 w-4.5 lg:h-5 lg:w-5 stroke-[2.5] text-[#09264D]" />
      </Link>

      {/* Secondary Transparent Button with White Border & White Text */}
      <Link
        href={contactUsHref}
        className={cn(
          "inline-flex items-center justify-center gap-3",
          "h-[54px] sm:h-[62px] lg:h-[68px] w-full sm:w-[210px] lg:w-[224px]",
          "rounded-[16px] border-2 border-[#D7ECFF] bg-white/[0.04] text-white text-[16px] sm:text-[18px] lg:text-[19px] font-bold",
          "backdrop-blur-xs hover:bg-white/15 hover:border-white",
          "transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
        )}
      >
        <span>Contact Us</span>
        <ArrowRight className="h-4.5 w-4.5 lg:h-5 lg:w-5 stroke-[2.5] text-white" />
      </Link>
    </div>
  );
}
