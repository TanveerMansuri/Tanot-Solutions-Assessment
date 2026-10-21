"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import Link from "next/link";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  children?: ReactNode;
  className?: string;
}

export function DropdownMenu({ label, items, className }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={cn("relative inline-block text-left", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[17px] font-semibold text-[#172033] hover:text-[#168BCB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200 text-[#172033]",
            isOpen && "rotate-180 text-[#168BCB]"
          )}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 w-64 rounded-2xl border border-zinc-200/90 bg-white/98 p-2.5 shadow-xl backdrop-blur-md"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-3.5 py-2.5 text-sm text-[#172033] hover:bg-blue-50 hover:text-[#168BCB]"
            >
              <div className="font-semibold">{item.label}</div>
              {item.description && <div className="text-xs text-zinc-500">{item.description}</div>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
