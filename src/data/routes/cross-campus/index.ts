import type { RouteData } from "../../../types";
import { STATIONS } from "../../stations";
import { gulouXianlin } from "./gulou-xianlin";
import { xianlinGulou } from "./xianlin-gulou";
import { gulouPukou } from "./gulou-pukou";
import { pukouGulou } from "./pukou-gulou";
import { xianlinPukou } from "./xianlin-pukou";
import { pukouXianlin } from "./pukou-xianlin";

const routes = [
  gulouXianlin,
  xianlinGulou,
  gulouPukou,
  pukouGulou,
  xianlinPukou,
  pukouXianlin,
];

const uniqueIds = (ids: string[]) =>
  [...new Set(ids)].map((id) => ({ id, name: STATIONS[id]?.name ?? id }));

export const crossCampusData: RouteData = {
  origins: uniqueIds(routes.map((r) => r.originId)),
  destinations: uniqueIds(routes.map((r) => r.destId)),
  routes,
};
