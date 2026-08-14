import type { RouteData } from "../../../types";
import { STATIONS } from "../../stations";
import { nanjingSouthXianlin } from "./nanjing-south-xianlin";
import { nanjingSouthGulou } from "./nanjing-south-gulou";
import { nanjingStationXianlin } from "./nanjing-station-xianlin";
import { nanjingStationGulou } from "./nanjing-station-gulou";
import { lukouAirportXianlin } from "./lukou-airport-xianlin";
import { lukouAirportGulou } from "./lukou-airport-gulou";
import { lukouAirportPukou } from "./lukou-airport-pukou";
import { nanjingStationPukou } from "./nanjing-station-pukou";

const routes = [
  nanjingSouthXianlin,
  nanjingSouthGulou,
  nanjingStationXianlin,
  nanjingStationGulou,
  lukouAirportXianlin,
  lukouAirportGulou,
  lukouAirportPukou,
  nanjingStationPukou,
];

const uniqueIds = (ids: string[]) =>
  [...new Set(ids)].map((id) => ({ id, name: STATIONS[id]?.name ?? id }));

export const toCampusData: RouteData = {
  origins: uniqueIds(routes.map((r) => r.originId)),
  destinations: uniqueIds(routes.map((r) => r.destId)),
  routes,
};
