import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StationSelector } from "../components/Controls/StationSelector";
import { routeData } from "../data/routes";

export function HomePage() {
  const [originId, setOriginId] = useState<string | null>(null);
  const [destId, setDestId] = useState<string | null>(null);
  const navigate = useNavigate();

  const canSearch = originId && destId;

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">NJU Transport</h1>
        <p className="mt-2 text-sm text-gray-500">南京大学新生交通指南</p>
      </div>

      <div className="flex w-full flex-col gap-6">
        <StationSelector
          label="出发地"
          options={routeData.origins}
          selectedId={originId}
          onChange={setOriginId}
          activeClass="bg-blue-600"
        />
        <StationSelector
          label="目的地"
          options={routeData.destinations}
          selectedId={destId}
          onChange={setDestId}
          activeClass="bg-emerald-600"
        />

        <button
          disabled={!canSearch}
          onClick={() => navigate(`/route/${originId}/${destId}`)}
          className={`mt-2 w-full rounded-xl py-3 text-sm font-semibold transition-all ${
            canSearch
              ? "bg-blue-600 text-white shadow-md hover:bg-blue-700 active:scale-[0.98]"
              : "cursor-not-allowed bg-gray-200 text-gray-400"
          }`}
        >
          查询路线
        </button>
      </div>
    </div>
  );
}
