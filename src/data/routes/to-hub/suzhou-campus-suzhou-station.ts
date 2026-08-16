import type { RouteEntry } from "../../../types";

export const suzhouCampusSuzhouStation: RouteEntry = {
  originId: "suzhou-campus",
  destId: "suzhou-station",
  day: [
    {
      nodes: [
        { id: "nju-su", name: "南京大学东" },
        { id: "sxq-su", name: "苏州新区火车站" },
        { id: "sj-su", name: "苏锦" },
        { id: "sz-su", name: "苏州火车站" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "nju-su",
          toNodeId: "sxq-su",
          mode: "tram",
          duration: "47",
          stopCount: "13",

          direction: "苏州新区火车站",
          lineName: "有轨电车2号线",
          lineKey: "su-tram-2",
          firstDeparture: "05:47",
          lastDeparture: "22:00",
        },
        {
          id: "p2",
          fromNodeId: "sxq-su",
          toNodeId: "sj-su",
          mode: "metro",
          duration: "19",
          stopCount: "9",
          direction: "桑田岛",
          lineName: "6号线",
          lineKey: "su-line-6",
          firstDeparture: "05:40",
          lastDeparture: "22:20（周一-四）/ 22:45（周五-日）",
        },
        {
          id: "p3",
          fromNodeId: "sj-su",
          toNodeId: "sz-su",
          mode: "metro",
          duration: "2",
          stopCount: "1",
          direction: "同里",
          lineName: "4号线",
          lineKey: "su-line-4",
          firstDeparture: "05:41",
          lastDeparture: "22:38（周一-四）/ 23:32（周五-日）",
        },
      ],
      cost: "5",
      hours: "1.5",
    },
  ],
  night: [],
};
