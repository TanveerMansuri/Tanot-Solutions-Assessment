import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

import { TeamGrid } from "./team-grid";
import { TeamHeader } from "./team-header";

export interface TeamSectionProps {
  className?: string;
}

export function TeamSection({ className }: TeamSectionProps) {
  return (
    <section
      id="team"
      aria-label="Meet Our Team"
      className={cn("relative w-full overflow-hidden bg-white pt-12 pb-16 sm:pb-24", className)}
    >
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <TeamHeader />

        {/* 4-Member Responsive Team Grid */}
        <div className="mt-10 sm:mt-12 w-full">
          <TeamGrid />
        </div>
      </Container>
    </section>
  );
}
