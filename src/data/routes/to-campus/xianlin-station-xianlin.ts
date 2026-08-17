import type { RouteEntry } from "../../../types";

export const xianlinStationXianlin: RouteEntry = {
  originId: "xianlin-station",
  destId: "xianlin",
  day: [
    {
      nodes: [
        { id: "xln-bus-xl2", name: "仙林高铁站公交站（智谷大道）" },
        { id: "nju-south-xl2", name: "南京大学南门（地铁中心站方向）" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "xln-bus-xl2",
          toNodeId: "nju-south-xl2",
          mode: "bus",
          duration: "20",
          lineName: "仙林动态公交",
          lineKey: "nj-bus",
          firstDeparture: "06:00",
          lastDeparture: "20:00",
          tips: "可在微信小程序“优点出行”的“动态公交”栏目预约",
        },
      ],
      cost: "3",
      hours: "0.5",
    },
  ],
  night: [],
};
