import Image from "next/image";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { FEATURED_LOGOS } from "@/components/sections/featured-on/featured-data";
import { cn } from "@/lib/utils";

export function ModernFeaturedOnSection({ className }: { className?: string }) {
  return (
    <section
      id="featured-on"
      aria-label="As Featured On"
      className={cn("relative w-full py-12 sm:py-16", className)}
    >
      <Container className="flex flex-col items-center text-center max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <Heading
          level={2}
          className="text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-tight text-[#123C3A] leading-tight"
        >
          As Featured On
        </Heading>

        <div className="mt-7 sm:mt-8 w-full max-w-[1100px] overflow-hidden relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-[#F7FAF7] to-transparent select-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-[#F7FAF7] to-transparent select-none"
          />

          <div className="animate-marquee flex items-center gap-4 sm:gap-5">
            <div className="flex shrink-0 items-center gap-4 sm:gap-5">
              {FEATURED_LOGOS.map((logo) => (
                <div
                  key={logo.id}
                  className="group relative flex h-[72px] sm:h-[78px] w-[180px] sm:w-[210px] shrink-0 items-center justify-center rounded-[16px] border border-[#D7E5DE] bg-white px-5 sm:px-6 py-2.5 shadow-[0_2px_8px_rgba(18,60,58,0.04)] select-none transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-[#267C6B]"
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={logo.imageSrc}
                      alt={`${logo.name} logo`}
                      fill
                      sizes="180px"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div aria-hidden="true" className="flex shrink-0 items-center gap-4 sm:gap-5">
              {FEATURED_LOGOS.map((logo) => (
                <div
                  key={`dup-${logo.id}`}
                  className="group relative flex h-[72px] sm:h-[78px] w-[180px] sm:w-[210px] shrink-0 items-center justify-center rounded-[16px] border border-[#D7E5DE] bg-white px-5 sm:px-6 py-2.5 shadow-[0_2px_8px_rgba(18,60,58,0.04)] select-none"
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={logo.imageSrc}
                      alt={`${logo.name} logo`}
                      fill
                      sizes="180px"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-9 flex items-center justify-center gap-3 sm:gap-3.5 text-[15px] sm:text-[17px] font-semibold text-[#637773] select-none">
          <div aria-hidden="true" className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D7E5DE]" />
          <div className="flex items-center -space-x-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EA4335] text-[11px] font-bold text-white shadow-xs">f</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FBBC05] text-[11px] font-bold text-white shadow-xs">★</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0284C7] text-[11px] font-bold text-white shadow-xs">M</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#123C3A] text-[11px] font-bold text-white shadow-xs">+</span>
          </div>
          <span className="text-[#637773] font-normal text-[15px] sm:text-[16.5px]">and many more.</span>
          <div aria-hidden="true" className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D7E5DE]" />
        </div>
      </Container>
    </section>
  );
}
