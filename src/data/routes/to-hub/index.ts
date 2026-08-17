import type { RouteData } from "../../../types";
import { STATIONS } from "../../stations";
import { xianlinNanjingSouth } from "./xianlin-nanjing-south";
import { xianlinNanjingStation } from "./xianlin-nanjing-station";
import { xianlinLukouAirport } from "./xianlin-lukou-airport";
import { gulouNanjingSouth } from "./gulou-nanjing-south";
import { gulouNanjingStation } from "./gulou-nanjing-station";
import { gulouLukouAirport } from "./gulou-lukou-airport";
import { pukouNanjingSouth } from "./pukou-nanjing-south";
import { pukouNanjingStation } from "./pukou-nanjing-station";
import { pukouLukouAirport } from "./pukou-lukou-airport";
import { suzhouCampusSuzhouXinquStation } from "./suzhou-campus-suzhou-xinqu-station";
import { suzhouCampusSuzhouStation } from "./suzhou-campus-suzhou-station";
import { suzhouCampusSuzhouNorthStation } from "./suzhou-campus-suzhou-north-station";
import { xianlinXianlinStation } from "./xianlin-xianlin-station";

const routes = [
  xianlinNanjingSouth,
  xianlinNanjingStation,
  xianlinLukouAirport,
  gulouNanjingSouth,
  gulouNanjingStation,
  gulouLukouAirport,
  pukouNanjingSouth,
  pukouNanjingStation,
  pukouLukouAirport,
  suzhouCampusSuzhouXinquStation,
  suzhouCampusSuzhouStation,
  suzhouCampusSuzhouNorthStation,
  xianlinXianlinStation,
];

const uniqueIds = (ids: string[]) =>
  [...new Set(ids)].map((id) => ({ id, name: STATIONS[id]?.name ?? id }));

export const toHubData: RouteData = {
  origins: uniqueIds(routes.map((r) => r.originId)),
  destinations: uniqueIds(routes.map((r) => r.destId)),
  routes,
};
