import type { ReactNode } from "react";

import Link from "next/link";

import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

import { Text } from "@/components/common/text";

interface Metric {
  id: string;
  label: string;
  value: string;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
}

const METRICS: Metric[] = [
  {
    id: "visitors",
    label: "Total Monthly Visitors",
    value: "0 to 6,200/mo",
    leftIcon: <Users className="h-5 w-5 text-[#267C6B]" />,
    rightIcon: <BarChart3 className="h-5 w-5 text-[#267C6B]" />,
  },
  {
    id: "leads",
    label: "Inbound Leads & Signups",
    value: "+340% Growth",
    leftIcon: <TrendingUp className="h-5 w-5 text-[#267C6B]" />,
    rightIcon: <TrendingUp className="h-5 w-5 text-[#267C6B]" />,
  },
  {
    id: "keywords",
    label: "Top 3 Ranking Keywords",
    value: "84 High-Intent Terms",
    leftIcon: <BarChart3 className="h-5 w-5 text-[#267C6B]" />,
    rightIcon: <BarChart3 className="h-5 w-5 text-[#267C6B]" />,
  },
];

export function ModernCaseStudyDetails() {
  return (
    <div className="lg:col-span-5 flex flex-col justify-between gap-5 sm:gap-6 text-left">
      <Text className="text-[15.5px] sm:text-[17px] font-normal leading-[1.65] text-[#263B39]">
        Starting from a domain with almost no authority, we built a steady flow of niche-relevant
        editorial links with required technical SEO and content changes and the traffic tanked up
        from zero to 6200 visitors in 8 months.
      </Text>

      <div className="flex flex-col gap-3 sm:gap-3.5 w-full">
        {METRICS.map((metric) => (
          <div
            key={metric.id}
            className="flex h-[72px] sm:h-[80px] w-full items-center justify-between rounded-[16px] border border-[#D7E5DE] bg-white px-4 sm:px-6 shadow-[0_4px_20px_rgba(18,60,58,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#267C6B]"
          >
            <div className="flex min-w-0 items-center gap-3.5 sm:gap-4">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#DDF5E8] text-[#267C6B] border border-[#D7E5DE]">
                {metric.leftIcon}
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[13px] sm:text-[14px] font-medium text-[#637773]">
                  {metric.label}
                </span>
                <span className="text-[18px] sm:text-[22px] font-extrabold tracking-tight text-[#123C3A] mt-0.5">
                  {metric.value}
                </span>
              </div>
            </div>
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#DDF5E8]/50 text-[#267C6B]">
              {metric.rightIcon}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full pt-1">
        <Link
          href="#case-study-details"
          className="h-[52px] sm:h-[56px] w-full sm:flex-1 rounded-[12px] bg-[#267C6B] hover:bg-[#123C3A] px-4 text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(38,124,107,0.16)] flex items-center justify-center gap-2 transition-colors"
        >
          <span className="whitespace-nowrap">Read full case study</span>
          <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
        </Link>
        <Link
          href="#case-studies"
          className="h-[52px] sm:h-[56px] w-full sm:flex-1 rounded-[12px] border-2 border-[#267C6B] bg-white px-4 text-[16px] font-medium leading-[1.2] text-[#123C3A] shadow-[0_2px_6px_rgba(18,60,58,0.04)] hover:bg-[#DDF5E8]/30 flex items-center justify-center gap-2 transition-colors"
        >
          <span className="whitespace-nowrap">All Case Studies</span>
          <ArrowRight className="h-[18px] w-[18px] shrink-0 text-[#267C6B]" />
        </Link>
      </div>
    </div>
  );
}
