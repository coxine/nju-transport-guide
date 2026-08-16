import type { RouteEntry } from "../../../types";

export const gulouNanjingStation: RouteEntry = {
  originId: "gulou",
  destId: "nanjing-station",
  day: [
    {
      nodes: [
        { id: "glz-gl", name: "鼓楼/珠江路" },
        { id: "ns-gl", name: "南京站" },
      ],
      paths: [
        {
          id: "p2",
          fromNodeId: "glz-gl",
          toNodeId: "ns-gl",
          mode: "metro",
          duration: "8-11",
          stopCount: "3-4",
          direction: "八卦洲大桥南",
          lineName: "1号线",
          lineKey: "nj-line-1",
          firstDeparture: "06:38",
          lastDeparture: "00:18（周日-四）/ 00:21（周五-六）",
        },
      ],
      cost: "2-3",
      hours: "0.5",
    },
  ],
  night: [
    {
      nodes: [
        { id: "glz-lagl", name: "鼓楼医院/中山路·珠江路北" },
        { id: "lpl-lagl", name: "龙蟠路·南京站西" },
        { id: "ns-lagl", name: "南京站" },
      ],
      paths: [
        {
          id: "p2",
          fromNodeId: "glz-lagl",
          toNodeId: "lpl-lagl",
          mode: "bus",
          duration: "12-15",
          stopCount: "7-8",
          direction: "南堡公园",
          lineName: "Y1路",
          lineKey: "nj-bus",
          firstDeparture: "23:10",
          lastDeparture: "05:25",
          tips: "约25-35分钟一班",
        },
        {
          id: "p3",
          fromNodeId: "lpl-lagl",
          toNodeId: "ns-lagl",
          mode: "walk",
          duration: "12",
          tips: "向东步行至南京站南广场",
        },
      ],
      cost: "2",
      hours: "0.5",
    },
  ],
};
