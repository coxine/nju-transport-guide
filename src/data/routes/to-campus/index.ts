import type { RouteData } from "../../../types";
import { STATIONS } from "../../stations";
import { nanjingSouthXianlin } from "./nanjing-south-xianlin";
import { nanjingSouthGulou } from "./nanjing-south-gulou";
import { lukouAirportXianlin } from "./lukou-airport-xianlin";
import { lukouAirportGulou } from "./lukou-airport-gulou";

const routes = [
  nanjingSouthXianlin,
  nanjingSouthGulou,
  lukouAirportXianlin,
  lukouAirportGulou,
];

const uniqueIds = (ids: string[]) =>
  [...new Set(ids)].map((id) => ({ id, name: STATIONS[id]?.name ?? id }));

export const toCampusData: RouteData = {
  origins: uniqueIds(routes.map((r) => r.originId)),
  destinations: uniqueIds(routes.map((r) => r.destId)),
  routes,
};
