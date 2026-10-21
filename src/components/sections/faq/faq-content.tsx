import { ArrowRight, Check } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

export interface FaqContentProps {
  className?: string;
}

const TRUST_BENEFITS = [
  "No obligation",
  "Actionable roadmap",
  "1:1 strategy call",
];

export function FaqContent({ className }: FaqContentProps) {
  return (
    <div className={cn("relative flex flex-col items-start text-left", className)}>
      {/* Decorative dot grid background accent on top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -left-8 -z-10 h-36 w-36 opacity-45 select-none"
        style={{
          backgroundImage: "radial-gradient(#93c5fd 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* FAQ Pill Badge */}
      <div className="inline-flex items-center justify-center rounded-[10px] bg-[#D8EDFD] px-3.5 py-1 text-[13px] font-bold tracking-wide text-[#0284C7] shadow-xs select-none">
        FAQ
      </div>

      {/* Main Heading */}
      <Heading
        level={2}
        className="mt-5 text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold tracking-tight text-[#0F172A] leading-[1.14] max-w-[500px]"
      >
        Questions to ask before hiring an SEO agency
      </Heading>

      {/* Supporting Copy 1 */}
      <Text className="mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#475E7B] max-w-[460px]">
        Can&rsquo;t find your answer? We&rsquo;re happy to walk you through it on a quick call.
      </Text>

      {/* Supporting Copy 2 */}
      <div className="mt-5 flex flex-col text-[#475E7B] max-w-[460px]">
        <span className="text-[14.5px] sm:text-[15.5px] font-medium text-[#334155]">
          Still deciding?
        </span>
        <Text className="mt-1.5 text-[14.5px] sm:text-[15.5px] font-normal leading-[1.6] text-[#475E7B]">
          Get a free, no-obligation audit showing your website&rsquo;s current position and a
          step-by-step roadmap to 2X your traffic and leads.
        </Text>
      </div>

      {/* Prominent Blue CTA Button */}
      <div className="mt-7 w-full sm:w-auto">
        <ButtonLink
          href="#audit"
          variant="primary"
          size="lg"
          className="h-[52px] w-full sm:w-auto rounded-[12px] bg-[#0284C7] hover:bg-[#0369A1] px-6 sm:px-7 text-[15.5px] sm:text-[16px] font-semibold text-white shadow-[0_4px_14px_rgba(2,132,199,0.25)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.35)] transition-all flex items-center justify-center gap-2.5 active:scale-[0.99]"
        >
          <span>Claim your free SEO growth plan</span>
          <ArrowRight className="h-4 w-4 stroke-[2.4] shrink-0" />
        </ButtonLink>
      </div>

      {/* Three Trust Checkmarks Row */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5 text-[13px] sm:text-[13.5px] font-medium text-[#475569]">
        {TRUST_BENEFITS.map((item) => (
          <div key={item} className="flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#BAE6FD] text-[#0284C7]">
              <Check className="h-2.5 w-2.5 stroke-[3]" />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
