import type { LabelHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  required?: boolean;
}

export function Label({ children, required, className, ...props }: LabelProps) {
  return (
    <label
      className={cn("block text-[14px] font-semibold text-[#202A35] leading-5", className)}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-1 text-red-500 font-semibold" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}
