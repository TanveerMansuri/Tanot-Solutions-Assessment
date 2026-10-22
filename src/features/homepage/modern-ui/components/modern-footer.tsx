import Link from "next/link";

import { Container } from "@/components/common/container";
import {
  COMPANY_LINKS,
  RESOURCES_LINKS,
  SERVICES_LINKS,
} from "@/components/layout/footer/footer-data";
import { FooterDecorativeRings } from "@/components/layout/footer/footer-decorative-rings";
import { FooterNavColumns } from "@/components/layout/footer/footer-nav-columns";
import {
  LinkedInIcon,
  TwitterXIcon,
  YouTubeIcon,
} from "@/components/layout/footer/footer-social-icons";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

import { ModernFooterBackgroundGrid } from "./modern-footer-background-grid";

export function ModernFooter({ className }: { className?: string }) {
  return (
    <footer
      aria-label="Site Footer"
      className={cn(
        "relative w-full overflow-hidden text-white",
        "bg-[linear-gradient(180deg,#123C3A_0%,#0D302E_100%)]",
        className
      )}
    >
      <ModernFooterBackgroundGrid />
      <FooterDecorativeRings />

      <Container className="relative z-10 pt-16 sm:pt-20 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16">
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <Logo className="brightness-125" />
            <p className="mt-4 text-[13.5px] sm:text-[14px] leading-relaxed text-[#DDF5E8]/80 max-w-[340px]">
              We help businesses grow with technical SEO, content marketing, AI search optimization,
              and high-quality link building.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#18564F] text-[#DDF5E8] border border-[#267C6B]/40 hover:bg-[#267C6B] hover:text-white transition-all"
              >
                <LinkedInIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com"
                aria-label="X / Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#18564F] text-[#DDF5E8] border border-[#267C6B]/40 hover:bg-[#267C6B] hover:text-white transition-all"
              >
                <TwitterXIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#18564F] text-[#DDF5E8] border border-[#267C6B]/40 hover:bg-[#267C6B] hover:text-white transition-all"
              >
                <YouTubeIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <FooterNavColumns
            companyLinks={COMPANY_LINKS}
            servicesLinks={SERVICES_LINKS}
            resourcesLinks={RESOURCES_LINKS}
          />
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DDF5E8]/60">
          <p>© 2026 Tanot Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/20">|</span>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span aria-hidden="true" className="text-white/20">|</span>
            <Link href="#sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
