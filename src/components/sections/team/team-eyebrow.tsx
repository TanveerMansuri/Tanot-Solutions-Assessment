import { cn } from "@/lib/utils";

export interface TeamEyebrowProps {
  className?: string;
}

export function TeamEyebrow({ className }: TeamEyebrowProps) {
  return (
    <div className={cn("flex w-full items-center justify-center gap-3 sm:gap-4", className)}>
      <div
        aria-hidden="true"
        className="h-[1px] w-8 sm:w-10 bg-gradient-to-r from-transparent via-[#76B0EB] to-[#168BCB]"
      />
      <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#168BCB] select-none">
        MEET OUR TEAM
      </span>
      <div
        aria-hidden="true"
        className="h-[1px] w-8 sm:w-10 bg-gradient-to-l from-transparent via-[#76B0EB] to-[#168BCB]"
      />
    </div>
  );
}
