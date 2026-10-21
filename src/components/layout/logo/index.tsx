import type { HTMLAttributes } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

export interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ href = "/", size = "md", className, ...props }: LogoProps) {
  const sizes = {
    sm: "gap-2",
    md: "gap-2.5",
    lg: "gap-3",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg",
        sizes[size],
        className
      )}
      {...props}
    >
      <svg
        className="h-8 w-auto sm:h-9"
        viewBox="0 0 160 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M48 30C36 30 26 40 26 55C26 70 36 80 48 80C60 80 70 70 80 55C90 40 100 30 112 30C124 30 134 40 134 55C134 70 124 80 112 80C100 80 90 70 80 55C70 40 60 30 48 30Z"
          stroke="url(#infinity_grad)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="48" cy="22" r="9" fill="#84CC16" />
        <defs>
          <linearGradient
            id="infinity_grad"
            x1="20"
            y1="55"
            x2="140"
            y2="55"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#84CC16" />
            <stop offset="0.5" stopColor="#06B6D4" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[17px] font-bold tracking-tight text-[#0091FF] sm:text-[19px]">
          Tanot
        </span>
        <span className="text-[17px] font-bold tracking-tight text-[#0091FF] sm:text-[19px]">
          Solutions
        </span>
      </div>
    </Link>
  );
}
