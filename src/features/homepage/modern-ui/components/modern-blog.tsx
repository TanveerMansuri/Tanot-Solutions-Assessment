import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { ModernBlogCarousel } from "./modern-blog-carousel";

export function ModernBlogSection({ className }: { className?: string }) {
  return (
    <section
      id="blog"
      aria-label="Latest SEO and Link Building Insights"
      className={cn("relative w-full pt-14 pb-16 sm:pb-24 overflow-hidden", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-6 sm:left-12 -z-10 h-44 w-44 opacity-40 select-none"
        style={{
          backgroundImage: "radial-gradient(#267C6B 2px, transparent 2px)",
          backgroundSize: "18px 18px",
        }}
      />

      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-[960px]">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-10 bg-gradient-to-r from-transparent via-[#267C6B]/40 to-[#267C6B]" />
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#267C6B] select-none">
              LATEST INSIGHTS
            </span>
            <div className="h-[1px] w-8 sm:w-10 bg-gradient-to-l from-transparent via-[#267C6B]/40 to-[#267C6B]" />
          </div>

          <Heading
            level={2}
            className="mt-4 sm:mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold tracking-tight text-[#123C3A] leading-[1.14]"
          >
            <span>Actionable Strategies to </span>
            <span className="bg-gradient-to-r from-[#123C3A] via-[#267C6B] to-[#267C6B] bg-clip-text text-transparent">
              Scale Your Search Revenue
            </span>
          </Heading>

          <Text className="mt-4 sm:mt-5 text-[16px] sm:text-[19px] lg:text-[20px] font-normal text-[#637773] leading-[1.5]">
            Practical guides, case studies, and modern search insights written directly by our
            senior practitioners.
          </Text>
        </div>

        <div className="mt-10 sm:mt-12 w-full max-w-[1240px]">
          <ModernBlogCarousel />
        </div>

        <div className="mt-9 sm:mt-10 flex justify-center">
          <Link
            href="#blog"
            className="h-[50px] sm:h-[54px] rounded-[12px] bg-[#267C6B] hover:bg-[#123C3A] px-7 sm:px-8 text-[15.5px] sm:text-[16px] font-semibold text-white shadow-[0_4px_14px_rgba(38,124,107,0.25)] transition-all flex items-center justify-center gap-2"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4 stroke-[2.4] shrink-0" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
