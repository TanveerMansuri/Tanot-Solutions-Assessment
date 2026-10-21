export function AndManyMoreFooter() {
  return (
    <div className="mt-9 flex items-center justify-center gap-3.5 text-[15px] sm:text-[17px] font-semibold text-[#475F7D] select-none">
      <div
        aria-hidden="true"
        className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#CBDDF0]"
      />
      <div className="flex items-center -space-x-1.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EA4335] text-[11px] font-bold text-white shadow-xs">
          f
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FBBC05] text-[11px] font-bold text-white shadow-xs">
          ★
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0284C7] text-[11px] font-bold text-white shadow-xs">
          M
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0F172A] text-[11px] font-bold text-white shadow-xs">
          +
        </span>
      </div>
      <span className="text-zinc-500 font-normal">and many more.</span>
      <div
        aria-hidden="true"
        className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#CBDDF0]"
      />
    </div>
  );
}
