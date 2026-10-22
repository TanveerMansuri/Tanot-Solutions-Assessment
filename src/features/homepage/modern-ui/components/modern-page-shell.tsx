import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface ModernPageShellProps {
  children: ReactNode;
  className?: string;
}

export function ModernPageShell({ children, className }: ModernPageShellProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col overflow-x-hidden",
        "bg-[#F7FAF7] text-[#263B39]",
        className
      )}
    >
      {/* Decorative Mint & Teal subtle glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
      >
        <div
          className="absolute top-20 left-8 h-40 w-40 opacity-40 sm:left-12"
          style={{
            backgroundImage: "radial-gradient(#267C6B 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute top-96 right-6 h-52 w-32 opacity-40 sm:right-10"
          style={{
            backgroundImage: "radial-gradient(#267C6B 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-[#DDF5E8]/60 blur-3xl" />
        <div className="absolute top-[35%] -left-40 h-[500px] w-[500px] rounded-full bg-[#DDF5E8]/40 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[15%] h-[400px] w-[600px] rounded-full bg-[#DDF5E8]/35 blur-3xl" />
      </div>

      {children}
    </div>
  );
}
