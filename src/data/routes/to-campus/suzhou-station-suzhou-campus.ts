import type { RouteEntry } from "../../../types";

export const suzhouStationSuzhouCampus: RouteEntry = {
  originId: "suzhou-station",
  destId: "suzhou-campus",
  day: [
    {
      nodes: [
        { id: "sz-su", name: "苏州火车站" },
        { id: "sj-su", name: "苏锦" },
        { id: "sxq-su", name: "苏州新区火车站" },
        { id: "nju-su", name: "南京大学东" },
      ],
      paths: [
        {
          id: "su21",
          fromNodeId: "sz-su",
          toNodeId: "sj-su",
          mode: "metro",
          duration: "2",
          stopCount: "1",
          direction: "龙道浜",
          lineName: "4号线",
          lineKey: "su-line-4",
          firstDeparture: "06:22",
          lastDeparture: "23:09（周一-四）/ 23:46（周五-日）",
        },
        {
          id: "su22",
          fromNodeId: "sj-su",
          toNodeId: "sxq-su",
          mode: "metro",
          duration: "19",
          stopCount: "9",
          direction: "苏州新区火车站",
          lineName: "6号线",
          lineKey: "su-line-6",
          firstDeparture: "06:29",
          lastDeparture: "23:09（周一-四）/ 23:39（周五-日）",
          tips: "从2号口出站并穿过地道，步行约10-15分钟",
        },
        {
          id: "su23",
          fromNodeId: "sxq-su",
          toNodeId: "nju-su",
          mode: "tram",
          duration: "47",
          stopCount: "13",
          direction: "南京大学东",
          lineName: "有轨电车2号线",
          lineKey: "su-tram-2",
          firstDeparture: "05:42",
          lastDeparture: "22:30",
        },
      ],
      cost: "5",
      hours: "1.5",
      alerts: [
        {
          type: "info",
          message: "苏州校区夜间无公共交通运行，建议打车出行。",
        },
      ],
    },
  ],
  night: [],
};
