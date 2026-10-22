import Link from "next/link";

import { Container } from "@/components/common/container";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

import { FooterBackgroundGrid } from "./footer-background-grid";
import { COMPANY_LINKS, RESOURCES_LINKS, SERVICES_LINKS } from "./footer-data";
import { FooterDecorativeRings } from "./footer-decorative-rings";
import { FooterNavColumns } from "./footer-nav-columns";
import { LinkedInIcon, TwitterXIcon, YouTubeIcon } from "./footer-social-icons";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      aria-label="Site Footer"
      className={cn(
        "relative w-full overflow-hidden text-white",
        "bg-[linear-gradient(180deg,#021838_0%,#010E24_100%)]",
        className
      )}
    >
      <FooterBackgroundGrid />
      <FooterDecorativeRings />

      <Container className="relative z-10 pt-16 sm:pt-20 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16">
          {/* Left Column: Brand, Mission, Socials */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <Logo className="brightness-125" />
            <p className="mt-4 text-[13.5px] sm:text-[14px] leading-relaxed text-sky-100/75 max-w-[340px]">
              We help businesses grow with technical SEO, content marketing, AI search optimization,
              and high-quality link building.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0E356A]/70 text-sky-200 border border-sky-400/20 hover:bg-[#134484] hover:text-white transition-all"
              >
                <LinkedInIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com"
                aria-label="X / Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0E356A]/70 text-sky-200 border border-sky-400/20 hover:bg-[#134484] hover:text-white transition-all"
              >
                <TwitterXIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0E356A]/70 text-sky-200 border border-sky-400/20 hover:bg-[#134484] hover:text-white transition-all"
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

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-100/60">
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
