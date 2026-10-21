import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function DecorativeBackground({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      {...props}
    >
      <div
        className="absolute top-20 left-8 h-40 w-40 opacity-70 sm:left-12"
        style={{
          backgroundImage: "radial-gradient(#93c5fd 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div
        className="absolute top-80 right-6 h-52 w-32 opacity-70 sm:right-10"
        style={{
          backgroundImage: "radial-gradient(#93c5fd 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#BAE6FD]/40 to-[#7DD3FC]/20 blur-3xl" />
      <div className="absolute top-[35%] -left-40 h-[500px] w-[500px] rounded-full bg-[#E0F2FE]/60 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[15%] h-[400px] w-[600px] rounded-full bg-[#BAE6FD]/30 blur-3xl" />
    </div>
  );
}
