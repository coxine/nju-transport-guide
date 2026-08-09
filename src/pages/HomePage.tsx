import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { StationSelector } from "../components/Controls/StationSelector";
import { sceneRouteData, type QueryScene } from "../data/routes";

const scenes: { key: QueryScene; label: string }[] = [
  { key: "to-campus", label: "枢纽 → 学校" },
  { key: "to-hub", label: "学校 → 枢纽" },
  { key: "cross-campus", label: "跨校区出行" },
];

export function HomePage() {
  const [scene, setScene] = useState<QueryScene>("to-campus");
  const [originId, setOriginId] = useState<string | null>(null);
  const [destId, setDestId] = useState<string | null>(null);
  const [isNight, setIsNight] = useState(new Date().getHours() < 6);
  const navigate = useNavigate();

  const { originOptions, destOptions } = useMemo(() => {
    const data = sceneRouteData[scene];
    return {
      originOptions: data.origins,
      destOptions: data.destinations,
    };
  }, [scene]);

  const canSearch = originId && destId;

  const handleSceneChange = (key: QueryScene) => {
    setScene(key);
    setOriginId(null);
    setDestId(null);
  };

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">NJU 新生交通指南</h1>
      </div>

      <div className="mb-6 flex w-full gap-1 rounded-xl bg-gray-100 p-1">
        {scenes.map((s) => (
          <button
            key={s.key}
            onClick={() => handleSceneChange(s.key)}
            className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${
              scene === s.key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="flex w-full flex-col gap-6">
        <StationSelector
          label="出发地"
          options={originOptions}
          selectedId={originId}
          onChange={setOriginId}
          activeClass="bg-primary"
        />
        <StationSelector
          label="目的地"
          options={destOptions}
          selectedId={destId}
          onChange={setDestId}
          activeClass="bg-primary"
        />

        <label className="flex items-center gap-2 py-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isNight}
            onChange={(e) => setIsNight(e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          <span className="text-sm font-medium text-gray-700">
            查看夜间方案
          </span>
        </label>

        <button
          disabled={!canSearch}
          onClick={() =>
            navigate(
              `/route/${originId}/${destId}${isNight ? "?mode=night" : ""}`,
            )
          }
          className={`mt-2 w-full rounded-xl py-3 text-sm font-semibold transition-all ${
            canSearch
              ? "bg-primary text-white shadow-md hover:bg-primary-dark active:scale-[0.98]"
              : "cursor-not-allowed bg-gray-200 text-gray-400"
          }`}
        >
          查询路线
        </button>
      </div>
    </div>
  );
}
