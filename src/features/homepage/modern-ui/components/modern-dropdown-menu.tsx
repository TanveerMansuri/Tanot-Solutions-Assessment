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

export interface ModernDropdownMenuProps {
  label: string;
  items: DropdownItem[];
  children?: ReactNode;
  className?: string;
}

export function ModernDropdownMenu({ label, items, className }: ModernDropdownMenuProps) {
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
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[17px] font-semibold text-[#123C3A] hover:text-[#267C6B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#267C6B] transition-colors"
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200 text-[#123C3A]",
            isOpen && "rotate-180 text-[#267C6B]"
          )}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 w-64 rounded-2xl border border-[#D7E5DE] bg-white/98 p-2.5 shadow-xl backdrop-blur-md"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-3.5 py-2.5 text-sm text-[#123C3A] hover:bg-[#DDF5E8]/60 hover:text-[#267C6B] transition-colors"
            >
              <div className="font-semibold">{item.label}</div>
              {item.description && <div className="text-xs text-[#637773]">{item.description}</div>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
