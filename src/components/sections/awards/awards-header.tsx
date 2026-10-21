import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { AwardsEyebrow } from "./awards-eyebrow";

export interface AwardsHeaderProps {
  className?: string;
}

export function AwardsHeader({ className }: AwardsHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center max-w-[820px] mx-auto", className)}>
      <AwardsEyebrow />

      <Heading
        level={2}
        className="mt-4 sm:mt-5 text-[32px] sm:text-[42px] md:text-[48px] font-bold tracking-tight leading-[1.15] text-[#102544]"
      >
        <span>The Industry’s Top-Rated </span>
        <span className="bg-gradient-to-r from-[#0877D1] via-[#168BCB] to-[#49B4F0] bg-clip-text text-transparent">
          SEO Agency
        </span>
      </Heading>

      <Text className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16.5px] font-normal leading-[1.6] text-[#475E7B] max-w-[680px]">
        Our work has been recognized by leading platforms and industry bodies for delivering
        measurable results, innovation, and client success.
      </Text>
    </div>
  );
}
