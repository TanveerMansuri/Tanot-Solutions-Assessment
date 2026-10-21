import { Check } from "lucide-react";

export interface ServiceBenefitsProps {
  benefits: string[];
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 sm:gap-y-4 pt-1">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 shrink-0 items-center justify-center rounded-full bg-[#E5F3FD] text-[#0D87DA] shadow-2xs">
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </span>
          <span className="text-[14.5px] sm:text-[15px] font-medium text-[#2C3E55]">{benefit}</span>
        </div>
      ))}
    </div>
  );
}
