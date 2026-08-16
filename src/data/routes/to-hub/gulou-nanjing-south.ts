import type { RouteEntry } from "../../../types";

export const gulouNanjingSouth: RouteEntry = {
  originId: "gulou",
  destId: "nanjing-south",
  day: [
    {
      nodes: [
        { id: "glz-gl", name: "鼓楼/珠江路" },
        { id: "ns-gl", name: "南京南站" },
      ],
      paths: [
        {
          id: "p2",
          fromNodeId: "glz-gl",
          toNodeId: "ns-gl",
          mode: "metro",
          duration: "21-25",
          stopCount: "9-10",
          direction: "中国药科大学/河定桥",
          lineName: "1号线",
          lineKey: "nj-line-1",
          firstDeparture: "05:53",
          lastDeparture: "23:30（周日-四）/ 23:52（周五-六）",
        },
      ],
      cost: "4",
      hours: "0.75",
    },
  ],
  night: [
    {
      nodes: [
        { id: "glz-lagl", name: "鼓楼医院/中山路·珠江路南" },
        { id: "ns-lagl", name: "南京南站" },
      ],
      paths: [
        {
          id: "p2",
          fromNodeId: "glz-lagl",
          toNodeId: "ns-lagl",
          mode: "bus",
          duration: "30-33",
          stopCount: "16-17",
          direction: "南京南站",
          lineName: "Y16路",
          lineKey: "nj-bus",
          firstDeparture: "00:10",
          lastDeparture: "05:30",
          tips: "约20-25分钟一班",
        },
      ],
      cost: "2",
      hours: "1",
    },
  ],
};
