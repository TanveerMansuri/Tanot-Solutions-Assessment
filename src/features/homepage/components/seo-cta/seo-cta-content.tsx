import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { SeoCtaBenefits } from "./seo-cta-benefits";

export interface SeoCtaContentProps {
  className?: string;
}

export function SeoCtaContent({ className }: SeoCtaContentProps) {
  return (
    <div className={cn("flex flex-col items-start text-left w-full min-w-0", className)}>
      {/* 3-Line Heading with Highlighted 30 Days Accent */}
      <Heading
        level={2}
        className={cn(
          "text-[30px] sm:text-[38px] md:text-[42px] lg:text-[46px]",
          "font-bold text-white leading-[1.15] tracking-tight",
          "mb-3.5 sm:mb-4"
        )}
      >
        <span className="block">Try Our SEO and Link Building</span>
        <span className="block">
          Service for <span className="text-[#38BDF8]">30 Days</span> – Then
        </span>
        <span className="block">Choose to Stay</span>
      </Heading>

      {/* Supporting Description Directly Below */}
      <Text
        className={cn(
          "text-[15px] sm:text-[17px] lg:text-[19px]",
          "font-normal leading-[1.5] text-[#D8EAFF]",
          "max-w-[700px] mb-5 sm:mb-6"
        )}
      >
        Get a clear strategy, measurable progress, and real results. No long-term
        commitment required — just a chance to see the impact for yourself.
      </Text>

      {/* Benefit Indicators Row Below Description */}
      <div className="w-full">
        <SeoCtaBenefits />
      </div>
    </div>
  );
}
