import type { RouteData, StationOption } from "../../types";
import { STATIONS } from "../stations";
import { nanjingSouthXianlin } from "./nanjing-south-xianlin";
import { nanjingSouthGulou } from "./nanjing-south-gulou";
import { lukouAirportXianlin } from "./lukou-airport-xianlin";
import { lukouAirportGulou } from "./lukou-airport-gulou";

const allRoutes = [
  nanjingSouthXianlin,
  nanjingSouthGulou,
  lukouAirportXianlin,
  lukouAirportGulou,
];

const uniqueIds = (ids: string[]): StationOption[] =>
  [...new Set(ids)].map((id) => ({ id, name: STATIONS[id]?.name ?? id }));

export const routeData: RouteData = {
  origins: uniqueIds(allRoutes.map((r) => r.originId)),
  destinations: uniqueIds(allRoutes.map((r) => r.destId)),
  routes: allRoutes,
};
