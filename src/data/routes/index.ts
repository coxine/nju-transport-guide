import type { RouteData } from "../../types";
import { toCampusData } from "./to-campus";
import { toHubData } from "./to-hub";
import { crossCampusData } from "./cross-campus";

export { toCampusData, toHubData, crossCampusData };

export type QueryScene = "to-campus" | "to-hub" | "cross-campus";

export const sceneRouteData: Record<QueryScene, RouteData> = {
  "to-campus": toCampusData,
  "to-hub": toHubData,
  "cross-campus": crossCampusData,
};

export function getScene(originId: string, destId: string): QueryScene | null {
  for (const key of Object.keys(sceneRouteData) as QueryScene[]) {
    if (
      sceneRouteData[key].routes.some(
        (r) => r.originId === originId && r.destId === destId,
      )
    ) {
      return key;
    }
  }
  return null;
}

const uniqueIds = (ids: string[]) => [...new Set(ids)];
import { STATIONS } from "../stations";
const toOptions = (ids: string[]) =>
  uniqueIds(ids).map((id) => ({ id, name: STATIONS[id]?.name ?? id }));

const allRoutes = [
  ...toCampusData.routes,
  ...toHubData.routes,
  ...crossCampusData.routes,
];

export const routeData: RouteData = {
  origins: toOptions(allRoutes.map((r) => r.originId)),
  destinations: toOptions(allRoutes.map((r) => r.destId)),
  routes: allRoutes,
};
