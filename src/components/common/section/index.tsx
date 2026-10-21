import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
}

export function Section({ children, id, className, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative w-full py-12 sm:py-16 lg:py-20", className)}
      {...props}
    >
      {children}
    </section>
  );
}
