import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { cn } from "@/lib/utils";

import { FeaturedLogosRow } from "./featured-logos-row";

export interface FeaturedOnSectionProps {
  className?: string;
}

export function FeaturedOnSection({ className }: FeaturedOnSectionProps) {
  return (
    <section
      id="featured-on"
      aria-label="As Featured On"
      className={cn("relative w-full py-12 sm:py-16", className)}
    >
      <Container className="flex flex-col items-center text-center max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Main Section Heading */}
        <Heading
          level={2}
          className="text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-tight text-[#102544] leading-tight"
        >
          As Featured On
        </Heading>

        {/* 5-Logo Horizontal Row / Responsive Grid */}
        <div className="mt-7 sm:mt-8 w-full max-w-[1100px]">
          <FeaturedLogosRow />
        </div>

        {/* Muted and many more text styled with color badges */}
        <div className="mt-8 sm:mt-9 flex items-center justify-center gap-3 sm:gap-3.5 text-[15px] sm:text-[17px] font-semibold text-[#475F7D] select-none">
          <div
            aria-hidden="true"
            className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#CBDDF0]"
          />
          <div className="flex items-center -space-x-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EA4335] text-[11px] font-bold text-white shadow-xs">
              f
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FBBC05] text-[11px] font-bold text-white shadow-xs">
              ★
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0284C7] text-[11px] font-bold text-white shadow-xs">
              M
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0F172A] text-[11px] font-bold text-white shadow-xs">
              +
            </span>
          </div>
          <span className="text-zinc-500 font-normal text-[15px] sm:text-[16.5px]">
            and many more.
          </span>
          <div
            aria-hidden="true"
            className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#CBDDF0]"
          />
        </div>
      </Container>
    </section>
  );
}
