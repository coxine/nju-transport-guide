import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { StationSelector } from "../components/Controls/StationSelector";
import { DayNightToggle } from "../components/Controls/DayNightToggle";
import { routeData } from "../data/routes";
import { STATIONS } from "../data/stations";

type QueryScene = "to-campus" | "to-hub" | "cross-campus";

const scenes: { key: QueryScene; label: string }[] = [
  { key: "to-campus", label: "去学校" },
  { key: "to-hub", label: "去枢纽" },
  { key: "cross-campus", label: "跨校区" },
];

function filterByCategory(ids: string[], category: "hub" | "campus") {
  return ids.filter((id) => STATIONS[id]?.category === category);
}

export function HomePage() {
  const [scene, setScene] = useState<QueryScene>("to-campus");
  const [originId, setOriginId] = useState<string | null>(null);
  const [destId, setDestId] = useState<string | null>(null);
  const [isNight, setIsNight] = useState(new Date().getHours() < 6);
  const navigate = useNavigate();

  const { origins, destinations } = useMemo(() => {
    switch (scene) {
      case "to-campus":
        return {
          origins: filterByCategory(
            routeData.origins.map((o) => o.id),
            "hub",
          ),
          destinations: filterByCategory(
            routeData.destinations.map((d) => d.id),
            "campus",
          ),
        };
      case "to-hub":
        return {
          origins: filterByCategory(
            routeData.origins.map((o) => o.id),
            "campus",
          ),
          destinations: filterByCategory(
            routeData.destinations.map((d) => d.id),
            "hub",
          ),
        };
      case "cross-campus":
        return {
          origins: filterByCategory(
            routeData.origins.map((o) => o.id),
            "campus",
          ),
          destinations: filterByCategory(
            routeData.destinations.map((d) => d.id),
            "campus",
          ),
        };
    }
  }, [scene]);

  const originOptions = routeData.origins.filter((o) => origins.includes(o.id));
  const destOptions = routeData.destinations.filter((d) =>
    destinations.includes(d.id),
  );

  const canSearch = originId && destId;

  const handleSceneChange = (key: QueryScene) => {
    setScene(key);
    setOriginId(null);
    setDestId(null);
  };

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">NJU Transport</h1>
        <p className="mt-2 text-sm text-gray-500">南京大学新生交通指南</p>
      </div>

      <div className="mb-6 flex w-full items-center justify-center">
        <DayNightToggle isNight={isNight} onChange={setIsNight} />
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

        <button
          disabled={!canSearch}
          onClick={() => navigate(`/route/${originId}/${destId}`)}
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
