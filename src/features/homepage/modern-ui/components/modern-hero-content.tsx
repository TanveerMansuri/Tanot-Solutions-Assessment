import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { ClutchRating } from "@/components/sections/clutch-rating";

export function ModernHeroContent() {
  return (
    <div className="flex w-full flex-col items-start text-left">
      <span className="inline-flex items-center justify-center rounded-[999px] bg-[#DDF5E8] px-4 py-2 text-[14px] sm:text-[15px] font-semibold text-[#123C3A] leading-[1.4] tracking-wide select-none">
        SEO &bull; AIO &bull; CONTENT MARKETING &bull; DIGITAL GROWTH
      </span>

      <Heading
        level={1}
        className="mt-6 mb-0 text-[48px] sm:text-[58px] md:text-[72px] lg:text-[68px] font-bold tracking-[-1.8px] text-[#123C3A] leading-[1.05] max-w-[650px]"
      >
        <span className="block sm:inline lg:block">Get Found on </span>
        <span className="block sm:inline lg:block bg-gradient-to-r from-[#123C3A] via-[#267C6B] to-[#267C6B] bg-clip-text text-transparent">
          Google, AI Search,{" "}
        </span>
        <span className="block sm:inline lg:block">and Beyond.</span>
      </Heading>

      <Text className="mt-[28px] mb-0 max-w-[620px] text-[18px] sm:text-[18px] lg:text-[20px] font-normal text-[#637773] leading-[1.5]">
        Tanot Solutions helps your business grow with technical SEO, content marketing, and AI
        search optimization. We turn search visibility into qualified leads and measurable revenue
        growth.
      </Text>

      <div className="mt-[30px] flex w-full flex-col gap-5">
        <ClutchRating className="border-[#D7E5DE] focus-visible:ring-[#267C6B]" />

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          <Link
            href="#strategy"
            className="h-[52px] sm:h-[56px] w-full rounded-[12px] bg-[#267C6B] hover:bg-[#123C3A] px-4 text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(38,124,107,0.2)] flex items-center justify-center gap-2.5 transition-colors"
          >
            <span className="whitespace-nowrap">Book a Free Strategy Call</span>
            <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
          </Link>
          <Link
            href="#case-studies"
            className="h-[52px] sm:h-[56px] w-full rounded-[12px] border-2 border-[#267C6B] bg-white px-4 text-[16px] font-medium leading-[1.2] text-[#123C3A] shadow-[0_2px_6px_rgba(18,60,58,0.04)] hover:bg-[#DDF5E8]/30 flex items-center justify-center gap-2.5 transition-colors"
          >
            <span className="whitespace-nowrap">Explore Client Results</span>
            <ArrowRight className="h-[18px] w-[18px] shrink-0 text-[#267C6B]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
