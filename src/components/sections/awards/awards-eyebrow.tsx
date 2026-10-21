import { cn } from "@/lib/utils";

export interface AwardsEyebrowProps {
  className?: string;
}

export function AwardsEyebrow({ className }: AwardsEyebrowProps) {
  return (
    <div className={cn("flex w-full items-center justify-center gap-3 sm:gap-4", className)}>
      <div
        aria-hidden="true"
        className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#76B0EB] to-[#168BCB]"
      />
      <span className="text-[12px] sm:text-[13.5px] font-bold uppercase tracking-[0.14em] text-[#168BCB] select-none">
        AWARDS & RECOGNITION
      </span>
      <div
        aria-hidden="true"
        className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent via-[#76B0EB] to-[#168BCB]"
      />
    </div>
  );
}
