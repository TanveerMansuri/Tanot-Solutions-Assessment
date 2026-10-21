import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { Eyebrow } from "@/components/common/eyebrow";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { ClutchRating } from "@/components/sections/clutch-rating";

export function HeroContent() {
  return (
    <div className="flex w-full flex-col items-start text-left">
      <Eyebrow variant="badge">
        SEO &bull; AIO &bull; CONTENT MARKETING &bull; DIGITAL GROWTH
      </Eyebrow>

      <Heading
        level={1}
        className="mt-6 mb-0 text-[50px] sm:text-[60px] md:text-[74px] lg:text-[70px] font-bold tracking-[-1.8px] text-[#111827] leading-[1.05] max-w-[650px]"
      >
        <span className="block sm:inline lg:block">Get Found on </span>
        <span className="block sm:inline lg:block text-[#168BCB]">Google, AI Search, </span>
        <span className="block sm:inline lg:block">and Beyond.</span>
      </Heading>

      <Text className="mt-[28px] mb-0 max-w-[620px] text-[18px] sm:text-[18px] lg:text-[20px] font-normal text-[#657385] leading-[1.5]">
        Tanot Solutions helps your business grow with technical SEO, content marketing, and AI
        search optimization. We turn search visibility into qualified leads and measurable revenue
        growth.
      </Text>

      <div className="mt-[30px] flex w-full flex-col gap-5">
        <ClutchRating />

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          <ButtonLink
            href="#strategy"
            variant="primary"
            size="lg"
            className="h-[52px] sm:h-[56px] w-full rounded-[12px] border border-[#168BCB] bg-[#168BCB] px-4 text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(22,139,203,0.16)] hover:bg-[#1276AE] flex items-center justify-center gap-2.5"
          >
            <span className="whitespace-nowrap">Book a Free Strategy Call</span>
            <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
          </ButtonLink>
          <ButtonLink
            href="#case-studies"
            variant="outline"
            size="lg"
            className="h-[52px] sm:h-[56px] w-full rounded-[12px] border-2 border-[#168BCB] bg-white px-4 text-[16px] font-medium leading-[1.2] text-[#202A35] shadow-[0_2px_6px_rgba(15,23,42,0.04)] hover:bg-[#F8FBFF] flex items-center justify-center gap-2.5"
          >
            <span className="whitespace-nowrap">Explore Client Results</span>
            <ArrowRight className="h-[18px] w-[18px] shrink-0 text-[#168BCB]" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
