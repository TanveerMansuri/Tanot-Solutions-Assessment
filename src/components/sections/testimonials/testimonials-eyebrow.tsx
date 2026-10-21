import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

export interface TestimonialsEyebrowProps {
  className?: string;
}

export function TestimonialsEyebrow({ className }: TestimonialsEyebrowProps) {
  return (
    <div className={cn("flex w-full items-center justify-center gap-4 sm:gap-6", className)}>
      <div
        aria-hidden="true"
        className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-r from-transparent via-[#C3DCF7] to-[#A3CDF8]"
      />
      <span className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9ECFF] px-4 py-1.5 sm:px-5 sm:py-2 text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#168BCB] leading-[24px] select-none shadow-[0_1px_2px_rgba(22,139,203,0.06)]">
        <Sparkles className="h-4 w-4 fill-[#168BCB] text-[#168BCB]" />
        <span>CLIENT SUCCESS STORIES</span>
      </span>
      <div
        aria-hidden="true"
        className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-l from-transparent via-[#C3DCF7] to-[#A3CDF8]"
      />
    </div>
  );
}
