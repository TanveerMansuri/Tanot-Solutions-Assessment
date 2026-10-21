import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

import { FaqAccordion } from "./faq-accordion";
import { FaqContent } from "./faq-content";

export interface FaqSectionProps {
  className?: string;
}

export function FaqSection({ className }: FaqSectionProps) {
  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className={cn("relative w-full py-16 sm:py-24 overflow-hidden", className)}
    >
      <Container className="relative z-10 max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          {/* Left Column: Heading, Copy, CTA, Trust Checkmarks */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <FaqContent />
          </div>

          {/* Right Column: FAQ Accordion Cards */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <FaqAccordion />
          </div>
        </div>
      </Container>
    </section>
  );
}
