import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface FooterDecorativeRingsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Concentric circular arcs and corner rings matching the reference image.
 * Lower-left corner rings with subtle cyan/blue border glow.
 */
export function FooterDecorativeRings({ className, ...props }: FooterDecorativeRingsProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 select-none overflow-hidden", className)}
      {...props}
    >
      {/* Lower-left concentric arcs */}
      <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full border border-sky-400/[0.12]" />
      <div className="absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full border border-sky-400/[0.08]" />
      <div className="absolute -bottom-56 -left-56 h-[700px] w-[700px] rounded-full border border-sky-400/[0.05]" />

      {/* Subtle bottom-left atmospheric blue glow */}
      <div className="absolute -bottom-20 -left-20 h-[320px] w-[320px] rounded-full bg-sky-500/[0.06] blur-3xl" />

      {/* Subtle right-side atmospheric deep glow */}
      <div className="absolute -top-32 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#034488]/[0.15] blur-3xl" />
    </div>
  );
}
