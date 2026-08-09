import type { RouteVariant } from "../../types";
import { useNightTheme } from "../../hooks/useNightTheme";

interface SummaryCardProps {
  variant: RouteVariant;
  isNight: boolean;
}

function computeTransferCount(variant: RouteVariant): number {
  let transfers = 0;
  for (let i = 1; i < variant.paths.length; i++) {
    if (
      variant.paths[i].mode !== variant.paths[i - 1].mode &&
      variant.paths[i].mode !== "walk" &&
      variant.paths[i - 1].mode !== "walk"
    ) {
      transfers++;
    }
  }
  return transfers;
}

export function SummaryCard({ variant, isNight }: SummaryCardProps) {
  const totalDuration = variant.paths.reduce((s, p) => s + p.duration, 0);
  const totalStops = variant.paths.reduce((s, p) => s + (p.stopCount ?? 0), 0);
  const transfers = computeTransferCount(variant);

  const t = useNightTheme(isNight);

  return (
    <div
      className={`rounded-xl ${t.cardBg} p-4 shadow-sm ring-1 ${t.borderColor}`}
    >
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center gap-1">
          <span className={`text-2xl font-bold ${t.colorText}`}>
            {totalDuration}
          </span>
          <span className={`text-xs ${t.colorSecondary}`}>分钟</span>
        </div>
        <div className={`h-10 w-px ${t.dividerColor}`} />
        <div className="flex flex-col items-center gap-1">
          <span className={`text-2xl font-bold ${t.colorText}`}>
            {totalStops}
          </span>
          <span className={`text-xs ${t.colorSecondary}`}>站</span>
        </div>
        <div className={`h-10 w-px ${t.dividerColor}`} />
        <div className="flex flex-col items-center gap-1">
          <span className={`text-2xl font-bold ${t.colorText}`}>
            {transfers}
          </span>
          <span className={`text-xs ${t.colorSecondary}`}>次换乘</span>
        </div>
      </div>
    </div>
  );
}
