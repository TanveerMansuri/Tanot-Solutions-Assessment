import type { MetricItem } from "./case-study-data";

export interface MetricCardProps {
  metric: MetricItem;
}

export function MetricCard({ metric }: MetricCardProps) {
  const { label, value, leftIcon, rightIcon } = metric;

  return (
    <div className="flex h-[72px] sm:h-[80px] w-full items-center justify-between rounded-[20px] sm:rounded-[22px] border border-[#DEECF8] bg-white px-4 sm:px-6 shadow-[0_4px_20px_rgba(20,45,75,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,45,75,0.07)]">
      {/* Left Icon + Label & Value info */}
      <div className="flex min-w-0 items-center gap-3.5 sm:gap-4">
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EBF5FE] text-[#168BCB] border border-[#D5E9FA]">
          {leftIcon}
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[13px] sm:text-[14px] font-medium text-[#4B6382]">{label}</span>
          <span className="text-[18px] sm:text-[22px] font-extrabold tracking-tight text-[#0080E6] mt-0.5">
            {value}
          </span>
        </div>
      </div>

      {/* Right Trend Icon */}
      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#F3F8FD] text-[#168BCB]">
        {rightIcon}
      </div>
    </div>
  );
}
