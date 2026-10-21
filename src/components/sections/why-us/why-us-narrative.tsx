import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

export interface WhyUsNarrativeProps {
  className?: string;
}

export function WhyUsNarrative({ className }: WhyUsNarrativeProps) {
  return (
    <div className={cn("flex flex-col justify-between h-full text-left", className)}>
      {/* Main Heading, Description, and CTA Button */}
      <div className="flex flex-col items-start max-w-[520px]">
        {/* Main Heading with two-part gradient */}
        <Heading
          level={2}
          className="text-left text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-bold tracking-tight leading-[1.12] text-[#102544]"
        >
          <span className="block">A growth partner,</span>
          <span className="bg-gradient-to-r from-[#0877D1] via-[#168BCB] to-[#49B4F0] bg-clip-text text-transparent">
            not another SEO
          </span>{" "}
          <span>agency.</span>
        </Heading>

        {/* Narrative Copy */}
        <Text className="mt-4 sm:mt-5 text-[15.5px] sm:text-[17px] font-normal leading-[1.65] text-[#475E7B]">
          Clients describe working with us as &ldquo;less like a vendor, more like a partner.&rdquo;
          Here&rsquo;s why they stay for 2+ years on average.
        </Text>

        {/* Primary CTA Button */}
        <div className="mt-6 sm:mt-8 w-full sm:w-auto">
          <ButtonLink
            href="#audit"
            variant="primary"
            size="lg"
            className="h-[50px] sm:h-[54px] w-full sm:w-auto rounded-[12px] border border-[#168BCB] bg-[#168BCB] px-6 sm:px-7 text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(22,139,203,0.16)] hover:bg-[#1276AE] flex items-center justify-center gap-2"
          >
            <span className="whitespace-nowrap">Talk to our team</span>
            <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
