import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { BlogEyebrow } from "./blog-eyebrow";

export interface BlogHeaderProps {
  className?: string;
}

export function BlogHeader({ className }: BlogHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center max-w-[860px] mx-auto", className)}>
      {/* Centered Eyebrow: LATEST INSIGHTS */}
      <BlogEyebrow />

      {/* Main Heading with Highlighted Accent Text */}
      <Heading
        level={2}
        className="mt-4 sm:mt-5 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold tracking-tight text-[#0F172A] leading-[1.14]"
      >
        <span>Latest </span>
        <span className="bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
          SEO &amp; link building
        </span>{" "}
        <span>insights</span>
      </Heading>

      {/* Supporting Description */}
      <Text className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16.5px] font-normal leading-[1.65] text-[#475E7B] max-w-[680px]">
        Actionable tips, strategies, and case studies to help you grow your organic visibility,
        attract qualified leads, and stay ahead in the ever-changing search landscape.
      </Text>
    </div>
  );
}
