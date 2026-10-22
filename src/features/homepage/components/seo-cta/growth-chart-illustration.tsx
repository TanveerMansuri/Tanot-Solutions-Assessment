import { cn } from "@/lib/utils";

export interface GrowthChartIllustrationProps {
  className?: string;
}

export function GrowthChartIllustration({ className }: GrowthChartIllustrationProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute bottom-0 right-4 sm:right-8 lg:right-12 z-0 flex items-end select-none opacity-90",
        className
      )}
    >
      <div className="relative flex items-end gap-1.5 sm:gap-2 lg:gap-2.5 pb-0">
        {/* 6 Vertical Growth Bars */}
        <div className="w-2.5 sm:w-3.5 lg:w-4 h-6 sm:h-8 lg:h-10 rounded-t-[3px] sm:rounded-t-[4px] bg-gradient-to-t from-white/[0.18] to-[#93D5FF]/40 border-t border-x border-white/20" />
        <div className="w-2.5 sm:w-3.5 lg:w-4 h-9 sm:h-12 lg:h-15 rounded-t-[3px] sm:rounded-t-[4px] bg-gradient-to-t from-white/[0.22] to-[#93D5FF]/45 border-t border-x border-white/25" />
        <div className="w-2.5 sm:w-3.5 lg:w-4 h-13 sm:h-17 lg:h-21 rounded-t-[3px] sm:rounded-t-[4px] bg-gradient-to-t from-white/[0.26] to-[#93D5FF]/50 border-t border-x border-white/30" />
        <div className="w-2.5 sm:w-3.5 lg:w-4 h-18 sm:h-23 lg:h-28 rounded-t-[3px] sm:rounded-t-[4px] bg-gradient-to-t from-white/[0.30] to-[#BAE6FD]/60 border-t border-x border-white/35" />
        <div className="w-2.5 sm:w-3.5 lg:w-4 h-23 sm:h-29 lg:h-36 rounded-t-[3px] sm:rounded-t-[4px] bg-gradient-to-t from-white/[0.35] to-[#E0F2FE]/75 border-t border-x border-white/40" />
        <div className="w-2.5 sm:w-3.5 lg:w-4 h-29 sm:h-37 lg:h-46 rounded-t-[3px] sm:rounded-t-[4px] bg-gradient-to-t from-white/[0.42] to-white/90 border-t border-x border-white/50 shadow-[0_0_12px_rgba(255,255,255,0.25)]" />

        {/* Rising Upward Curve SVG Arrow */}
        <svg
          aria-hidden="true"
          viewBox="0 0 160 110"
          className="absolute -top-10 -left-5 sm:-top-14 sm:-left-7 lg:-top-16 lg:-left-8 h-26 w-34 sm:h-34 sm:w-42 lg:h-40 lg:w-48 overflow-visible pointer-events-none select-none"
        >
          <defs>
            <linearGradient id="chartArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
            <filter id="arrowGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FFFFFF" floodOpacity="0.35" />
            </filter>
          </defs>

          <path
            d="M 6 92 C 45 88, 85 70, 142 16"
            fill="none"
            stroke="url(#chartArrowGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#arrowGlow)"
          />

          <path
            d="M 126 14 L 146 13 L 144 33"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#arrowGlow)"
          />
        </svg>
      </div>
    </div>
  );
}
