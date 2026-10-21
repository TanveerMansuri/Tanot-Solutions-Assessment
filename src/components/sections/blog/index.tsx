import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";


import { BlogCarousel } from "./blog-carousel";
import { BlogHeader } from "./blog-header";

export interface BlogSectionProps {
  className?: string;
}

export function BlogSection({ className }: BlogSectionProps) {
  return (
    <section
      id="blog"
      aria-label="Latest SEO and Link Building Insights"
      className={cn("relative w-full pt-14 pb-16 sm:pb-24 overflow-hidden", className)}
    >
      {/* Decorative dot grid background accent on top-left, matching the FAQ and site aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-6 sm:left-12 -z-10 h-44 w-44 opacity-40 select-none"
        style={{
          backgroundImage: "radial-gradient(#93c5fd 2px, transparent 2px)",
          backgroundSize: "18px 18px",
        }}
      />

      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header: Centered Eyebrow, Main Heading, Supporting Description */}
        <BlogHeader />

        {/* 3-Card Responsive Grid with Navigation Arrows & Pagination Dots */}
        <div className="mt-10 sm:mt-12 w-full max-w-[1240px]">
          <BlogCarousel />
        </div>

        {/* View All Articles Centered CTA Button */}
        <div className="mt-9 sm:mt-10 flex justify-center">
          <ButtonLink
            href="#blog"
            variant="primary"
            size="lg"
            className="h-[50px] sm:h-[54px] rounded-[12px] bg-[#0284C7] hover:bg-[#0369A1] px-7 sm:px-8 text-[15.5px] sm:text-[16px] font-semibold text-white shadow-[0_4px_14px_rgba(2,132,199,0.25)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.35)] transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4 stroke-[2.4] shrink-0" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
