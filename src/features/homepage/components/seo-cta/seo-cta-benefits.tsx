import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SeoCtaBenefitsProps {
  className?: string;
}

const BENEFITS = [
  "No risk, no obligation",
  "Transparent reporting",
  "Real growth opportunities",
];

export function SeoCtaBenefits({ className }: SeoCtaBenefitsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap lg:flex-nowrap items-center gap-x-4 lg:gap-x-5 xl:gap-x-6 gap-y-2.5",
        "text-white text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] font-semibold",
        className
      )}
    >
      {BENEFITS.map((item, index) => (
        <div key={item} className="flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-6 shrink-0">
          <div className="flex items-center gap-2 lg:gap-2.5">
            {/* Circular Check Badge */}
            <span className="flex h-5 w-5 sm:h-6 sm:w-6 lg:h-[26px] lg:w-[26px] shrink-0 items-center justify-center rounded-full bg-[#DDF2FF] text-[#075FCB] shadow-xs">
              <Check className="h-3 w-3 lg:h-3.5 lg:w-3.5 stroke-[3]" />
            </span>
            <span className="leading-tight whitespace-nowrap">{item}</span>
          </div>

          {/* Vertical divider between benefit indicators on larger viewports */}
          {index < BENEFITS.length - 1 && (
            <div
              aria-hidden="true"
              className="hidden lg:block h-5 w-[1px] bg-white/30"
            />
          )}
        </div>
      ))}
    </div>
  );
}
