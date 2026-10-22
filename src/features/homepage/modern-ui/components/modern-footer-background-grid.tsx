import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function ModernFooterBackgroundGrid({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 select-none overflow-hidden", className)}
      {...props}
    >
      <div
        className="absolute inset-0 block sm:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(221, 245, 232, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(221, 245, 232, 0.12) 1px, transparent 1px),
            linear-gradient(to right, rgba(221, 245, 232, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(221, 245, 232, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 48px 48px, 8px 8px, 8px 8px",
        }}
      />
      <div
        className="absolute inset-0 hidden sm:block lg:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(221, 245, 232, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(221, 245, 232, 0.12) 1px, transparent 1px),
            linear-gradient(to right, rgba(221, 245, 232, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(221, 245, 232, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px, 56px 56px, 8px 8px, 8px 8px",
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(221, 245, 232, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(221, 245, 232, 0.12) 1px, transparent 1px),
            linear-gradient(to right, rgba(221, 245, 232, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(221, 245, 232, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px, 64px 64px, 8px 8px, 8px 8px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#123C3A] to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
