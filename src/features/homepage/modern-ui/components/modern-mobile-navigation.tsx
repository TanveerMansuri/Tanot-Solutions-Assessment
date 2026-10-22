"use client";

import { useEffect, useState, useSyncExternalStore } from "react";


import Link from "next/link";

import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";

import { ButtonLink } from "@/components/common/button-link";
import { IconButton } from "@/components/common/icon-button";

const emptySubscribe = () => () => {};

export interface ModernMobileNavigationProps {
  onOpenChange?: (open: boolean) => void;
}

export function ModernMobileNavigation({ onOpenChange }: ModernMobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

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
        className="text-[#123C3A] hover:bg-[#DDF5E8]/60"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </IconButton>

      {isOpen && mounted && createPortal(
        <div
          className="fixed inset-x-0 top-[82px] bottom-0 z-[9999] flex flex-col bg-white p-6 shadow-2xl border-t border-[#D7E5DE] overflow-y-auto"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-[#123C3A] hover:bg-[#DDF5E8]/60 hover:text-[#267C6B] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 border-t border-[#D7E5DE] pt-6">
            <ButtonLink
              href="#audit"
              size="lg"
              fullWidth
              onClick={() => setIsOpen(false)}
              className="bg-[#267C6B] hover:bg-[#123C3A] text-white"
            >
              Get Free Audit
            </ButtonLink>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
