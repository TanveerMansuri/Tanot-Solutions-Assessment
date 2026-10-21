export function StatsBarDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      {/* Top-left soft translucent curved blue shapes */}
      <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-radial from-[#1E568A]/35 via-[#163D63]/20 to-transparent blur-xl" />
      <div className="absolute -left-8 -top-10 h-44 w-44 rounded-full border border-blue-400/15" />

      {/* Bottom-right soft translucent curved blue shapes */}
      <div className="absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-radial from-[#1E568A]/40 via-[#102A46]/20 to-transparent blur-xl" />
      <div className="absolute -right-10 -bottom-12 h-52 w-52 rounded-full border border-sky-400/20" />

      {/* Thin low-opacity circular outline near top-right */}
      <div className="absolute right-12 -top-14 h-36 w-36 rounded-full border border-blue-300/15" />
      <div className="absolute right-24 top-2 h-1.5 w-1.5 rounded-full bg-blue-300/30" />

      {/* Subtle curved line / arc near bottom-left */}
      <svg
        className="absolute -bottom-6 left-14 h-24 w-48 opacity-20 text-blue-300"
        viewBox="0 0 192 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 80C60 80 100 40 180 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Soft edge radial highlights */}
      <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-blue-400/10 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-blue-400/10 to-transparent" />
    </div>
  );
}
