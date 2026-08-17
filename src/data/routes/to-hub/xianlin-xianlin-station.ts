import type { RouteEntry } from "../../../types";

export const xianlinXianlinStation: RouteEntry = {
  originId: "xianlin",
  destId: "xianlin-station",
  day: [
    {
      nodes: [
        { id: "nju-south-xl", name: "南京大学南门（地铁中心站方向）" },
        { id: "xln-bus-xl", name: "仙林高铁站公交站（智谷大道）" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "nju-south-xl",
          toNodeId: "xln-bus-xl",
          mode: "bus",
          duration: "20",
          lineName: "仙林动态公交",
          lineKey: "nj-bus",
          firstDeparture: "06:00",
          lastDeparture: "20:00",
          tips: "无固定班次，须在微信小程序“优点出行”的“动态公交”栏目预约",
        },
      ],
      cost: "3",
      hours: "0.5",
    },
  ],
  night: [],
};
