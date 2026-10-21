import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

import { StatCard } from "./stat-card";
import { StatsBarDecorations } from "./stats-bar-decorations";
import { STATS_ITEMS } from "./stats-data";

export interface StatsBarProps {
  className?: string;
}

export function StatsBar({ className }: StatsBarProps) {
  return (
    <section className={cn("relative z-20 w-full pt-2 pb-10 sm:pb-14", className)}>
      <Container className="max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-gradient-to-r from-[#102A46] via-[#163D63] to-[#102A46] p-6 sm:p-8 lg:px-10 lg:py-7 shadow-[0_12px_36px_rgba(10,34,58,0.32)] border border-[#1E568A]/30">
          <StatsBarDecorations />

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between lg:gap-8">
            {STATS_ITEMS.map((item, index) => (
              <StatCard key={item.id} item={item} showDivider={index < STATS_ITEMS.length - 1} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
