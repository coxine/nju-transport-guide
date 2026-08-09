import type { RouteVariant } from "../../types";
import { useNightTheme } from "../../hooks/useNightTheme";

interface SummaryCardProps {
  variant: RouteVariant;
  isNight: boolean;
}

export function SummaryCard({ variant, isNight }: SummaryCardProps) {
  const totalDuration = variant.paths.reduce((s, p) => s + p.duration, 0);
  const totalStops = variant.paths.reduce((s, p) => s + (p.stopCount ?? 0), 0);

  const t = useNightTheme(isNight);

  return (
    <div
      className={`rounded-xl ${t.cardBg} p-4 shadow-sm ring-1 ${t.borderColor}`}
    >
      <div className="flex items-center">
        <div className="flex flex-1 items-center justify-center gap-1">
          <span className={`text-[28px] font-bold ${t.colorText}`}>
            {totalDuration}
          </span>
          <span className={`text-[16px] ${t.colorSecondary}`}>分钟</span>
        </div>
        <div className={`h-10 w-px ${t.dividerColor}`} />
        <div className="flex flex-1 items-center justify-center gap-1">
          <span className={`text-[28px] font-bold ${t.colorText}`}>
            {totalStops}
          </span>
          <span className={`text-[16px] ${t.colorSecondary}`}>站</span>
        </div>
        {variant.cost && (
          <>
            <div className={`h-10 w-px ${t.dividerColor}`} />
            <div className="flex flex-1 items-center justify-center gap-1">
              <span className={`text-[28px] font-bold ${t.colorText}`}>
                {variant.cost}
              </span>
              <span className={`text-[16px] ${t.colorSecondary}`}>元</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
