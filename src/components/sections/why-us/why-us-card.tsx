import type { WhyUsBenefit } from "./why-us-data";

export interface WhyUsCardProps {
  benefit: WhyUsBenefit;
}

export function WhyUsCard({ benefit }: WhyUsCardProps) {
  const { title, description, icon } = benefit;

  return (
    <div className="flex flex-col justify-start rounded-[18px] sm:rounded-[20px] border border-[#DEECF8] bg-white p-4 sm:p-5 shadow-[0_4px_16px_rgba(20,45,75,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(20,45,75,0.07)] hover:border-[#CFE2F4]">
      {/* Pale-blue Icon container */}
      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EBF5FE] text-[#168BCB] border border-[#D5E9FA]">
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
