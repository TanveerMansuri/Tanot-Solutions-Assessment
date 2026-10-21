import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { ServicesEyebrow } from "./services-eyebrow";

export interface ServicesSectionHeaderProps {
  className?: string;
}

export function ServicesSectionHeader({ className }: ServicesSectionHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center max-w-[840px] mx-auto", className)}>
      <ServicesEyebrow />

      <Heading
        level={2}
        className="mt-4 sm:mt-5 text-center text-[30px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold tracking-tight leading-[1.15]"
      >
        <span className="block text-[#102544]">SEO Services Built Around</span>
        <span className="mt-1 inline-block bg-gradient-to-r from-[#0877D1] via-[#168BCB] to-[#49B4F0] bg-clip-text text-transparent">
          Revenue, Not Vanity Metrics.
        </span>
      </Heading>

      <Text className="mt-4 sm:mt-5 max-w-[740px] text-center text-[15.5px] sm:text-[17px] lg:text-[18px] font-normal text-[#486487] leading-[1.6]">
        Choose one service or combine them. Every campaign is designed to build authority, attract
        high-intent traffic, and drive meaningful conversions.
      </Text>
    </div>
  );
}
