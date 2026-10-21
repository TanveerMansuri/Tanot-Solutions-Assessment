import { Container } from "@/components/common/container";

export function DesignTokensPreview() {
  return (
    <div className="border-t border-zinc-200/80 bg-white/70 py-6 backdrop-blur-xs">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-zinc-600">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-zinc-900">Font Family</span>
            <span className="font-semibold text-zinc-800 text-sm">Inter</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-zinc-900">Text Sizes</span>
            <div className="flex gap-4 text-[11px]">
              <span>H1: 48px / 700</span>
              <span>Body: 17px / 400</span>
              <span>H2: 32px / 700</span>
              <span>Small: 14px / 500</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-zinc-900">Colors</span>
            <div className="flex items-center gap-3 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-[#168BCB]" />
                <span>Primary #168BCB</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-[#202A35]" />
                <span>Text Primary #202A35</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-[#657385]" />
                <span>Text Secondary #657385</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-zinc-900">Spacing (8px)</span>
            <div className="flex gap-1.5 text-[10px] font-mono">
              <span className="border border-zinc-300 rounded px-1 py-0.5">8</span>
              <span className="border border-zinc-300 rounded px-1 py-0.5">16</span>
              <span className="border border-zinc-300 rounded px-1 py-0.5">24</span>
              <span className="border border-zinc-300 rounded px-1 py-0.5">32</span>
              <span className="border border-zinc-300 rounded px-1 py-0.5">48</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-zinc-900">Radius</span>
            <div className="flex gap-1.5 text-[10px] font-mono">
              <span className="border border-zinc-300 rounded px-1 py-0.5">12</span>
              <span className="border border-zinc-300 rounded px-1 py-0.5">16</span>
              <span className="border border-zinc-300 rounded px-1 py-0.5">24</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
