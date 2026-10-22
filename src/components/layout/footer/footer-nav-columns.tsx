import Link from "next/link";

import type { FooterLinkItem } from "./footer-data";

export interface FooterNavColumnsProps {
  companyLinks: FooterLinkItem[];
  servicesLinks: FooterLinkItem[];
  resourcesLinks: FooterLinkItem[];
}

function Column({ title, links }: { title: string; links: FooterLinkItem[] }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-3.5">
      <h3 className="text-[15px] sm:text-[16px] font-semibold text-white tracking-tight">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5 sm:gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[13.5px] sm:text-[14px] text-sky-100/75 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterNavColumns({
  companyLinks,
  servicesLinks,
  resourcesLinks,
}: FooterNavColumnsProps) {
  return (
    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 lg:pl-10 lg:border-l lg:border-white/10">
      <Column title="Company" links={companyLinks} />
      <Column title="Services" links={servicesLinks} />
      <Column title="Resources" links={resourcesLinks} />
    </div>
  );
}
