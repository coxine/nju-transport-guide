import type { RouteEntry } from "../../../types";

export const gulouLukouAirport: RouteEntry = {
  originId: "gulou",
  destId: "lukou-airport",
  day: [
    {
      nodes: [
        { id: "glz-lagl", name: "鼓楼/珠江路" },
        { id: "ns-lagl", name: "南京南站" },
        { id: "la-gl", name: "禄口机场" },
      ],
      paths: [
        {
          id: "p2",
          fromNodeId: "glz-lagl",
          toNodeId: "ns-lagl",
          mode: "metro",
          duration: "21-25",
          stopCount: "9-10",
          direction: "八卦洲大桥南/河定桥",
          lineName: "1号线",
          lineKey: "nj-line-1",
          firstDeparture: "05:53",
          lastDeparture: "23:30（周日-四）/ 23:52（周五-六）",
          tips: "南京南站换乘通道较长，步行约8-10分钟",
        },
        {
          id: "p3",
          fromNodeId: "ns-lagl",
          toNodeId: "la-gl",
          mode: "metro",
          duration: "36",
          stopCount: "7",
          direction: "空港新城江宁",
          lineName: "S1号线",
          lineKey: "nj-line-s1",
          firstDeparture: "06:00",
          lastDeparture: "22:40（周日-四）/ 23:00（周五-六）",
        },
      ],
      cost: "8",
      hours: "1.5-2",
    },
  ],
  night: [],
};
