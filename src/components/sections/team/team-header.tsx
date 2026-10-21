import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { TeamEyebrow } from "./team-eyebrow";

export interface TeamHeaderProps {
  className?: string;
}

export function TeamHeader({ className }: TeamHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center max-w-[800px] mx-auto", className)}>
      <TeamEyebrow />

      <Heading
        level={2}
        className="mt-4 sm:mt-5 text-[32px] sm:text-[42px] md:text-[46px] font-bold tracking-tight leading-[1.15] text-[#102544]"
      >
        <span>The team behind your </span>
        <span className="bg-gradient-to-r from-[#0877D1] via-[#168BCB] to-[#49B4F0] bg-clip-text text-transparent">
          results
        </span>
      </Heading>

      <Text className="mt-3.5 sm:mt-4 text-[14.5px] sm:text-[16px] font-normal leading-[1.6] text-[#475E7B] max-w-[640px]">
        A dedicated team of SEO specialists, content strategists, and link building experts working
        together to deliver measurable growth for your business.
      </Text>
    </div>
  );
}
