import { Check } from "lucide-react";

import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { ModernGrowthChart } from "./modern-growth-chart";
import { ModernSeoCtaButtons } from "./modern-seo-cta-buttons";

const BENEFITS = [
  "No risk, no obligation",
  "Transparent reporting",
  "Real growth opportunities",
];

export function ModernSeoCtaSection({ className }: { className?: string }) {
  return (
    <section
      aria-label="SEO and Link Building Service CTA"
      className={cn(
        "relative w-full overflow-hidden pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 bg-[#F7FAF7]",
        className
      )}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1664px] px-4 sm:px-8 xl:px-16">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[36px]",
            "bg-[linear-gradient(90deg,#123C3A_0%,#18564F_50%,#267C6B_100%)]",
            "shadow-[0_12px_44px_rgba(18,60,58,0.24)] min-h-[330px] sm:min-h-[350px] lg:min-h-[360px]"
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -left-20 h-[360px] w-[360px] rounded-full border border-white/[0.12] bg-white/[0.04] select-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 right-[-40px] h-[380px] w-[380px] rounded-full border border-white/[0.14] bg-white/[0.05] select-none"
          />

          <ModernGrowthChart />

          <div className="relative z-20 w-full h-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-11">
              <div className="w-full lg:max-w-[62%] min-w-0 flex flex-col items-start text-left">
                <Heading
                  level={2}
                  className="text-[30px] sm:text-[38px] md:text-[42px] lg:text-[46px] font-bold text-white leading-[1.15] tracking-tight mb-3.5 sm:mb-4"
                >
                  <span className="block">Try Our SEO and Link Building</span>
                  <span className="block">
                    Service for <span className="text-[#DDF5E8]">30 Days</span> – Then
                  </span>
                  <span className="block">Choose to Stay</span>
                </Heading>

                <Text className="text-[15px] sm:text-[17px] lg:text-[19px] font-normal leading-[1.5] text-[#DDF5E8]/90 max-w-[700px] mb-5 sm:mb-6">
                  Get a clear strategy, measurable progress, and real results. No long-term
                  commitment required — just a chance to see the impact for yourself.
                </Text>

                <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-4 lg:gap-x-5 gap-y-2.5 text-white text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] font-semibold">
                  {BENEFITS.map((item, index) => (
                    <div key={item} className="flex items-center gap-x-4 shrink-0">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 lg:h-[26px] lg:w-[26px] shrink-0 items-center justify-center rounded-full bg-[#DDF5E8] text-[#123C3A] shadow-xs">
                          <Check className="h-3 w-3 lg:h-3.5 lg:w-3.5 stroke-[3]" />
                        </span>
                        <span className="leading-tight whitespace-nowrap">{item}</span>
                      </div>
                      {index < BENEFITS.length - 1 && (
                        <div aria-hidden="true" className="hidden lg:block h-5 w-[1px] bg-white/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <ModernSeoCtaButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
