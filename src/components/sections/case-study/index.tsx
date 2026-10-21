import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

import { CaseStudyDetails } from "./case-study-details";
import { CaseStudyHeader } from "./case-study-header";
import { CaseStudyImage } from "./case-study-image";

export interface CaseStudySectionProps {
  className?: string;
  imageSrc?: string;
}

export function CaseStudySection({ className, imageSrc }: CaseStudySectionProps) {
  return (
    <section
      id="case-study"
      aria-label="Featured Case Study"
      className={cn("relative w-full overflow-hidden pt-12 pb-16 sm:pb-24", className)}
    >
      <Container className="relative z-10 flex flex-col items-start max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header with Eyebrow and Two-Part Gradient Heading */}
        <CaseStudyHeader />

        {/* Two-Column Layout: Left Analytics Screenshot & Right Narrative/Metrics/CTAs */}
        <div className="mt-10 sm:mt-12 grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7 flex flex-col h-full">
            <CaseStudyImage src={imageSrc} />
          </div>

          <div className="lg:col-span-5 flex flex-col h-full">
            <CaseStudyDetails />
          </div>
        </div>
      </Container>
    </section>
  );
}
