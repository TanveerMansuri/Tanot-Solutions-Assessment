import type { ReactNode } from "react";

import { DecorativeBackground } from "@/components/layout/decorative-background";
import { cn } from "@/lib/utils";

export interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col overflow-x-hidden",
        "bg-[linear-gradient(110deg,#EEF7FF_0%,#E6F3FF_55%,#DCEEFF_100%)]",
        className
      )}
    >
      <DecorativeBackground />
      {children}
    </div>
  );
}
