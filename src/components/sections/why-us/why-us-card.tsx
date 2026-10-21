import type { WhyUsBenefit } from "./why-us-data";

export interface WhyUsCardProps {
  benefit: WhyUsBenefit;
}

export function WhyUsCard({ benefit }: WhyUsCardProps) {
  const { title, description, icon } = benefit;

  return (
    <div className="flex h-full flex-col justify-start rounded-[20px] sm:rounded-[22px] border border-[#DEECF8] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(20,45,75,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(20,45,75,0.08)] hover:border-[#CFE2F4]">
      {/* Pale-blue Icon container */}
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EBF5FE] text-[#168BCB] border border-[#D5E9FA]">
        {icon}
      </div>

      {/* Title & Description */}
      <div className="mt-4 flex flex-col text-left">
        <h3 className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[#102544] leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-[13.5px] sm:text-[14px] font-normal leading-[1.6] text-[#4F647E]">
          {description}
        </p>
      </div>
    </div>
  );
}
