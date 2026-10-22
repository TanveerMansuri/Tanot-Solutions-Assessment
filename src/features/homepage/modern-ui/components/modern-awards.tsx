import Image from "next/image";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { AWARDS_DATA } from "@/components/sections/awards/awards-data";
import { cn } from "@/lib/utils";

export function ModernAwardsSection({ className }: { className?: string }) {
  return (
    <section
      id="awards"
      aria-label="Awards and Recognition"
      className={cn("relative w-full overflow-hidden bg-white pt-12 pb-16 sm:pb-24", className)}
    >
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-[960px]">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#267C6B]/40 to-[#267C6B]" />
            <span className="text-[12px] sm:text-[13.5px] font-bold uppercase tracking-[0.14em] text-[#267C6B] select-none">
              AWARDS &amp; RECOGNITION
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent via-[#267C6B]/40 to-[#267C6B]" />
          </div>

          <Heading
            level={2}
            className="mt-4 sm:mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold tracking-tight text-[#123C3A] leading-[1.14]"
          >
            <span>Recognized For Excellence in </span>
            <span className="bg-gradient-to-r from-[#123C3A] via-[#267C6B] to-[#267C6B] bg-clip-text text-transparent">
              SEO, Link Building, and Organic Growth
            </span>
          </Heading>

          <Text className="mt-4 sm:mt-5 text-[16px] sm:text-[19px] lg:text-[20px] font-normal text-[#637773] leading-[1.5]">
            Industry leaders trust our methods and our results speak for themselves through top
            agency awards.
          </Text>
        </div>

        <div className="mt-10 sm:mt-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {AWARDS_DATA.map((award) => (
              <div
                key={award.id}
                className="flex h-full flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-5 rounded-[16px] border border-[#D7E5DE] bg-white p-4 sm:p-5 shadow-[0_2px_12px_rgba(18,60,58,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-[#267C6B] hover:shadow-[0_8px_24px_rgba(38,124,107,0.08)]"
              >
                <div className="relative flex h-[100px] sm:h-[110px] w-[110px] sm:w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-[10px]">
                  <Image
                    src={award.imageSrc}
                    alt={award.imageAlt}
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center text-left">
                  <h3 className="text-[15.5px] sm:text-[16.5px] font-bold tracking-tight text-[#123C3A] leading-snug">
                    {award.title}
                  </h3>
                  <div aria-hidden="true" className="my-2 h-[2px] w-8 rounded-full bg-[#267C6B]" />
                  <p className="text-[13px] sm:text-[13.5px] font-normal leading-[1.55] text-[#637773]">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
