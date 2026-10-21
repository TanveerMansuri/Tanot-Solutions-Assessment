import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { FeedbackCard } from "./feedback-card";
import { TestimonialsEyebrow } from "./testimonials-eyebrow";
import { VideoTestimonialCard } from "./video-testimonial-card";

export interface TestimonialsHeaderProps {
  className?: string;
}

export function TestimonialsHeader({ className }: TestimonialsHeaderProps) {
  return (
    <section
      className={cn("relative w-full overflow-hidden pt-12 pb-16 sm:pb-24 text-center", className)}
    >
      {/* Subtle decorative dot pattern & gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 sm:left-12 top-10 h-32 w-32 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#93c5fd 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 sm:right-12 top-10 h-32 w-32 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#93c5fd 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />

      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <TestimonialsEyebrow />

        <Heading
          level={2}
          className="mt-6 sm:mt-8 max-w-[1240px] text-center text-[34px] sm:text-[48px] md:text-[56px] lg:text-[66px] font-bold tracking-tight leading-[1.12] sm:leading-[1.12]"
        >
          <span className="block text-[#10284A]">Reviews From Businesses</span>
          <span className="mt-1 sm:mt-2 inline-block bg-gradient-to-r from-[#0878D1] to-[#35B5F2] bg-clip-text text-transparent">
            We&apos;ve Helped Grow
          </span>
        </Heading>

        <Text className="mt-4 sm:mt-5 max-w-[960px] text-center text-[16px] sm:text-[20px] lg:text-[24px] font-normal text-[#486487] leading-[1.5]">
          Don&apos;t take our word for it. Here&apos;s what clients say about working with Tanot
          Solutions.
        </Text>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 sm:mt-16 grid w-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            <VideoTestimonialCard />
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <FeedbackCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
