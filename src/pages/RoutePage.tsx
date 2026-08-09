import { useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { RiEmotionSadLine } from "@remixicon/react";
import { StationSelector } from "../components/Controls/StationSelector";
import { DayNightToggle } from "../components/Controls/DayNightToggle";
import { SummaryCard } from "../components/RouteDisplay/SummaryCard";
import { Timeline } from "../components/RouteDisplay/Timeline";
import { useRoute } from "../hooks/useRoute";
import { useNightTheme } from "../hooks/useNightTheme";
import { routeData } from "../data/routes";

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

  const handleOriginChange = (id: string) => {
    setVariantIndex(0);
    navigate(`/route/${id}/${currentDestId}`);
  };

  const handleDestChange = (id: string) => {
    setVariantIndex(0);
    navigate(`/route/${currentOriginId}/${id}`);
  };

  const handleNightToggle = (night: boolean) => {
    setNightManual(night);
    setVariantIndex(0);
    setSearchParams(night ? { mode: "night" } : {});
  };

  const t = useNightTheme(isNight);

  return (
    <div className={`mx-auto min-h-svh max-w-md px-4 pb-8 ${t.bgColor}`}>
      <div className="sticky top-0 z-20 -mx-4 bg-inherit px-4 pt-4 pb-3">
        <div className="mb-4 flex items-center justify-between">
          <h1 className={`text-lg font-bold ${t.colorText}`}>NJU Transport</h1>
          <DayNightToggle isNight={isNight} onChange={handleNightToggle} />
        </div>

        <div
          className={`rounded-xl p-3 ${t.cardBg} shadow-sm ring-1 ${t.borderColor}`}
        >
          <div className="flex flex-col gap-3">
            <StationSelector
              label="出发地"
              options={routeData.origins}
              selectedId={currentOriginId}
              onChange={handleOriginChange}
              activeClass="bg-blue-600"
            />
            <StationSelector
              label="目的地"
              options={routeData.destinations}
              selectedId={currentDestId}
              onChange={handleDestChange}
              activeClass="bg-emerald-600"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        {!entry || variants.length === 0 ? (
          <div
            className={`rounded-xl p-8 text-center ${t.cardBg} ${t.colorMuted} shadow-sm ring-1 ${t.borderColor}`}
          >
            <RiEmotionSadLine size={36} className="mx-auto" />
            <p className="mt-2 text-sm">
              {isNight
                ? "该路线暂无夜间方案"
                : "暂无可用路线，请尝试其他起终点"}
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
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                      variantIndex === i
                        ? "bg-blue-600 text-white"
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
  );
}
