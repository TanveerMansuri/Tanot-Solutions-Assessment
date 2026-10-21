import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface ServiceBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function ServiceBadge({ children, icon, className }: ServiceBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-2xs backdrop-blur-xs",
        "dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300",
        className
      )}
    >
      {icon && <span className="text-blue-600 dark:text-blue-400">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
