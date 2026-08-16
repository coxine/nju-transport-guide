import type { RouteEntry } from "../../../types";

export const suzhouCampusSuzhouXinquStation: RouteEntry = {
  originId: "suzhou-campus",
  destId: "suzhou-xinqu-station",
  day: [
    {
      nodes: [
        { id: "nju-su", name: "南京大学东" },
        { id: "sxq-su", name: "苏州新区火车站" },
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
      ],
      cost: "2",
      hours: "1",
    },
  ],
  night: [],
};
