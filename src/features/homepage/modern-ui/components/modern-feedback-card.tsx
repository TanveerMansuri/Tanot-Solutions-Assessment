import { Quote, Star, TrendingUp } from "lucide-react";

export function ModernFeedbackCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-[24px] border border-[#D7E5DE] bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(18,60,58,0.06)]">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[#F59E0B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#F59E0B] stroke-[#F59E0B]" />
            ))}
          </div>
          <Quote className="h-10 w-10 text-[#267C6B]/40 rotate-180 stroke-[1.5]" />
        </div>
        <p className="mt-5 text-left text-[17px] sm:text-[18.5px] lg:text-[19px] font-medium leading-[1.6] text-[#263B39]">
          &ldquo;After we started link building with Tanot Solutions, they helped our CRM&apos;s
          high-converting product page rank higher with an impressive{" "}
          <span className="inline-block rounded-md bg-[#DDF5E8] px-2 py-0.5 font-bold text-[#123C3A]">
            80% increase in traffic
          </span>{" "}
          and an equally exceptional{" "}
          <span className="inline-block rounded-md bg-[#DDF5E8] px-2 py-0.5 font-bold text-[#123C3A]">
            80% increase in
          </span>{" "}
          the total number of{" "}
          <span className="inline-block rounded-md bg-[#DDF5E8] px-2 py-0.5 font-bold text-[#123C3A]">
            sign-ups
          </span>{" "}
          every day.&rdquo;
        </p>
      </div>
      <div className="my-6 h-[1px] w-full bg-[#D7E5DE]" />
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
          <div className="flex h-12 w-12 shrink-0 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-br from-[#267C6B] to-[#123C3A] text-white font-bold text-base shadow-sm ring-2 ring-[#DDF5E8]">
            SD
          </div>
          <div className="flex min-w-0 flex-col text-left">
            <span className="truncate text-[16px] sm:text-[18px] font-bold text-[#123C3A]">
              Sandeep Das
            </span>
            <span className="truncate text-[12px] sm:text-[13.5px] text-[#637773] font-normal">
              Marketing Manager, CRM SaaS Company
            </span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5 rounded-xl border border-[#D7E5DE] bg-[#DDF5E8]/40 px-3 py-1.5 sm:px-3.5 sm:py-2 select-none shadow-xs">
          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#267C6B] stroke-[2.4]" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[15px] sm:text-[17px] font-bold text-[#267C6B]">80%</span>
            <span className="text-[9.5px] sm:text-[11px] font-semibold text-[#637773] mt-0.5">
              Traffic Growth
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
