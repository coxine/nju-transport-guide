import type { RouteEntry } from "../../../types";

export const suzhouXinquStationSuzhouCampus: RouteEntry = {
  originId: "suzhou-xinqu-station",
  destId: "suzhou-campus",
  day: [
    {
      nodes: [
        { id: "sxq-su", name: "苏州新区火车站" },
        { id: "nju-su", name: "南京大学东" },
      ],
      paths: [
        {
          id: "su1",
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
      cost: "2",
      hours: "1",
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
