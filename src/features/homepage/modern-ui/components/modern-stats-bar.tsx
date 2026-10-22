import { Container } from "@/components/common/container";
import { STATS_ITEMS } from "@/components/sections/stats-bar/stats-data";
import { cn } from "@/lib/utils";

export interface ModernStatsBarProps {
  className?: string;
}

export function ModernStatsBar({ className }: ModernStatsBarProps) {
  return (
    <section className={cn("relative z-20 w-full pt-2 pb-10 sm:pb-14", className)}>
      <Container className="max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-gradient-to-r from-[#123C3A] via-[#16504C] to-[#123C3A] p-6 sm:p-8 lg:px-10 lg:py-7 shadow-[0_12px_36px_rgba(18,60,58,0.32)] border border-[#267C6B]/30">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] select-none"
          >
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-radial from-[#267C6B]/35 via-[#123C3A]/20 to-transparent blur-xl" />
            <div className="absolute -left-8 -top-10 h-44 w-44 rounded-full border border-[#DDF5E8]/15" />
            <div className="absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-radial from-[#267C6B]/40 via-[#123C3A]/20 to-transparent blur-xl" />
            <div className="absolute -right-10 -bottom-12 h-52 w-52 rounded-full border border-[#DDF5E8]/20" />
            <div className="absolute right-12 -top-14 h-36 w-36 rounded-full border border-[#DDF5E8]/15" />
            <div className="absolute right-24 top-2 h-1.5 w-1.5 rounded-full bg-[#DDF5E8]/30" />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between lg:gap-8">
            {STATS_ITEMS.map((item, index) => (
              <div key={item.id} className="relative flex items-center justify-between gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#267C6B] shadow-[0_4px_12px_rgba(38,124,107,0.35)] ring-2 ring-[#DDF5E8]/30 transition-transform duration-200 motion-safe:hover:scale-105 text-white">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <span className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold tracking-tight text-white leading-tight">
                      {item.value}
                    </span>
                    <span className="text-[12px] sm:text-[13px] font-medium text-[#DDF5E8]/90 leading-tight">
                      {item.label}
                    </span>
                  </div>
                </div>
                {index < STATS_ITEMS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block h-10 w-[1px] bg-gradient-to-b from-transparent via-[#DDF5E8]/25 to-transparent ml-auto"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
