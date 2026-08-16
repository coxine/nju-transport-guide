import { useState, useMemo } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { RiEmotionSadLine, RiArrowLeftLine } from "@remixicon/react";
import { DayNightToggle } from "../components/Controls/DayNightToggle";
import { SummaryCard } from "../components/RouteDisplay/SummaryCard";
import { Timeline } from "../components/RouteDisplay/Timeline";
import { useRoute } from "../hooks/useRoute";
import { useNightTheme } from "../hooks/useNightTheme";
import { STATIONS } from "../data/stations";

function isNightByDefault(): boolean {
  return new Date().getHours() < 6;
}

export function RoutePage() {
  const { originId, destId } = useParams<{
    originId: string;
    destId: string;
  }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentOriginId = originId ?? "";
  const currentDestId = destId ?? "";

  const [nightManual, setNightManual] = useState<boolean | null>(null);

  const nightFromUrl = searchParams.get("mode") === "night";
  const isNight = (() => {
    if (nightManual !== null) return nightManual;
    if (nightFromUrl) return true;
    return isNightByDefault();
  })();

  const { entry, variants } = useRoute(currentOriginId, currentDestId, isNight);

  const [variantIndex, setVariantIndex] = useState(0);
  const currentVariant = variants[variantIndex] ?? null;

  const originName = useMemo(
    () => STATIONS[currentOriginId]?.name ?? currentOriginId,
    [currentOriginId],
  );
  const destName = useMemo(
    () => STATIONS[currentDestId]?.name ?? currentDestId,
    [currentDestId],
  );

  const handleNightToggle = (night: boolean) => {
    setNightManual(night);
    setVariantIndex(0);
    setSearchParams(night ? { mode: "night" } : {});
  };

  const t = useNightTheme(isNight);

  return (
    <div className={`min-h-svh ${t.bgColor}`}>
      <div className={`sticky top-0 z-20 ${t.bgColor} pb-3`}>
        <div className="mx-auto max-w-md px-4 pt-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className={`flex items-center gap-1 text-sm font-medium ${t.colorSecondary}`}
            >
              <RiArrowLeftLine size={16} />
              返回
            </button>
            <div className="flex items-center gap-2">
              <span className={`font-semibold ${t.colorText} text-[18px]`}>
                {originName} → {destName}
              </span>
              {isNight ? (
                <span className="rounded bg-indigo-900 px-1.5 py-0.5 text-[14px] font-medium text-indigo-200">
                  夜间
                </span>
              ) : (
                <span className="rounded bg-amber-400 px-1.5 py-0.5 text-[14px] font-medium text-gray-700">
                  日间
                </span>
              )}
            </div>
            <DayNightToggle isNight={isNight} onChange={handleNightToggle} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 pb-8">
        <div className="mt-4">
          {!entry || variants.length === 0 ? (
            <div
              className={`rounded-xl p-8 text-center ${t.cardBg} ${t.colorMuted} shadow-sm ring-1 ${t.borderColor}`}
            >
              <RiEmotionSadLine size={36} className="mx-auto" />
              <p className="mt-2 text-[18px]">
                由于换乘次数较多或路程耗时较长，暂无合适的公共交通路线方案，建议打车出行。
              </p>
            </div>
          ) : (
            <>
              {variants.length > 1 && (
                <div className="mb-3 flex gap-2">
                  {variants.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setVariantIndex(i)}
                      className={`rounded-full px-3 py-1 text-[14px] font-medium transition-all ${
                        variantIndex === i
                          ? "bg-primary text-white"
                          : `${t.cardBg} ${t.colorSecondary} ring-1 ${t.borderColor}`
                      }`}
                    >
                      方案 {i + 1}
                    </button>
                  ))}
                </div>
              )}

              {currentVariant && (
                <div className="flex flex-col gap-3">
                  <SummaryCard variant={currentVariant} isNight={isNight} />
                  <Timeline variant={currentVariant} isNight={isNight} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
