"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { IconButton } from "@/components/common/icon-button";

export interface MobileNavigationProps {
  onOpenChange?: (open: boolean) => void;
}

export function MobileNavigation({ onOpenChange }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onOpenChange?.(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onOpenChange]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Reviews", href: "#reviews" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="md:hidden">
      <IconButton
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((prev) => !prev)}
        variant="ghost"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </IconButton>

      {isOpen && (
        <div className="fixed inset-x-0 top-[82px] bottom-0 z-50 flex flex-col bg-white/98 p-6 backdrop-blur-xl dark:bg-zinc-950/98 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-zinc-800 hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <ButtonLink
              href="#audit"
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => setIsOpen(false)}
            >
              Get Free Audit
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
