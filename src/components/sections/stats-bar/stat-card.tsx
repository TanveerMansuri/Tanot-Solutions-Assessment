import type { StatItem } from "./types";

export interface StatCardProps {
  item: StatItem;
  showDivider?: boolean;
}

export function StatCard({ item, showDivider }: StatCardProps) {
  return (
    <div className="relative flex items-center justify-between gap-3 sm:gap-4 flex-1 min-w-0">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#18A058] shadow-[0_4px_12px_rgba(24,160,88,0.35)] ring-2 ring-[#22C55E]/30 transition-transform duration-200 motion-safe:hover:scale-105">
          {item.icon}
        </div>
        <div className="flex flex-col text-left min-w-0">
          <span className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold tracking-tight text-white leading-tight">
            {item.value}
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-blue-100/90 leading-tight">
            {item.label}
          </span>
        </div>
      </div>

      {showDivider && (
        <div
          aria-hidden="true"
          className="hidden lg:block h-10 w-[1px] bg-gradient-to-b from-transparent via-blue-300/25 to-transparent ml-auto"
        />
      )}
    </div>
  );
}
