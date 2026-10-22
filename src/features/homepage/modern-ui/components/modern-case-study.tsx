import Image from "next/image";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { cn } from "@/lib/utils";

import { ModernCaseStudyDetails } from "./modern-case-study-details";

export interface ModernCaseStudyProps {
  className?: string;
}

export function ModernCaseStudySection({ className }: ModernCaseStudyProps) {
  return (
    <section
      id="case-study"
      aria-label="Featured Case Study"
      className={cn("relative w-full overflow-hidden bg-white pt-12 pb-16 sm:pb-24", className)}
    >
      <Container className="relative z-10 flex flex-col items-start max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left max-w-[980px]">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#267C6B]/40 to-[#267C6B]" />
            <span className="text-[12.5px] sm:text-[14px] font-bold uppercase tracking-[0.14em] text-[#267C6B] select-none">
              CASE STUDY &bull; HR COMPANY
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent via-[#267C6B]/40 to-[#267C6B]" />
          </div>

          <Heading
            level={2}
            className="mt-4 sm:mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold tracking-tight text-[#123C3A] leading-[1.14]"
          >
            <span>How Tanot Solutions Helped an HR Company Go From </span>
            <span className="bg-gradient-to-r from-[#123C3A] via-[#267C6B] to-[#267C6B] bg-clip-text text-transparent">
              Zero to 6,200 Monthly Organic Visitors
            </span>
          </Heading>
        </div>

        <div className="mt-10 sm:mt-12 grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="relative flex h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[490px] w-full items-center justify-center overflow-hidden rounded-[16px] border border-[#D7E5DE] bg-white p-2.5 sm:p-3 shadow-[0_8px_32px_rgba(18,60,58,0.06)]">
              <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[#F7FAF7]">
                <Image
                  src="/images/case-study-dashboard.png"
                  alt="HR company SEO growth dashboard analytics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          <ModernCaseStudyDetails />
        </div>
      </Container>
    </section>
  );
}
