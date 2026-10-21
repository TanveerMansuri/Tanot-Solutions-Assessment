import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { FounderActions } from "./founder-actions";
import { FounderEyebrow } from "./founder-eyebrow";

export interface FounderDetailsProps {
  className?: string;
}

export function FounderDetails({ className }: FounderDetailsProps) {
  return (
    <div className={cn("flex flex-col items-start text-left max-w-[620px]", className)}>
      <FounderEyebrow />

      {/* Main Heading */}
      <Heading
        level={2}
        className="mt-4 sm:mt-5 text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight leading-[1.18] text-[#102544]"
      >
        <span>Hi, I&apos;m Renu. I built Tanot Solutions to make SEO </span>
        <span className="bg-gradient-to-r from-[#0877D1] via-[#168BCB] to-[#49B4F0] bg-clip-text text-transparent">
          accountable.
        </span>
      </Heading>

      {/* Narrative Paragraphs */}
      <div className="mt-4 sm:mt-5 space-y-4 text-[14.5px] sm:text-[15.5px] font-normal leading-[1.65] text-[#475E7B]">
        <Text>
          For over 11 years, I&apos;ve helped brands grow through search, from early-stage startups
          to global enterprises. Along the way, I saw how easily businesses lose trust in SEO: vague
          reports, guaranteed #1 rankings that never happen, cheap spammy links that lead to
          penalties, and agencies that disappear once the contract is signed.
        </Text>
        <Text>
          I founded Tanot Solutions in 2020 to change that, with honest strategy, ethical practices,
          and complete transparency at every step.
        </Text>
      </div>

      {/* Founder Signoff */}
      <div className="mt-5 sm:mt-6 flex flex-col text-left">
        <span className="text-[16px] sm:text-[17px] font-bold text-[#102544]">Renu Sharma</span>
        <span className="text-[13.5px] sm:text-[14px] font-medium text-[#64748B]">
          Founder &amp; Head of SEO Strategy
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 sm:mt-7 w-full">
        <FounderActions />
      </div>
    </div>
  );
}
