import type { RouteEntry } from "../../../types";

export const xianlinNanjingSouth: RouteEntry = {
  originId: "xianlin",
  destId: "nanjing-south",
  day: [
    {
      nodes: [
        { id: "glcampus-lagl", name: "仙林校区南门" },
        { id: "glz-lagl", name: "南大仙林校区" },
        { id: "ns-lagl", name: "大行宫" },
        { id: "la-gl", name: "南京南站" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "glcampus-lagl",
          toNodeId: "glz-lagl",
          mode: "walk",
          duration: "3-5",
        },
        {
          id: "p2",
          fromNodeId: "glz-lagl",
          toNodeId: "ns-lagl",
          mode: "metro",
          duration: "31",
          stopCount: "13",
          direction: "鱼嘴",
          lineName: "2号线",
          lineKey: "nj-line-2",
          firstDeparture: "06:02",
          lastDeparture: "23:02（周日-四）/ 23:32（周五-六）",
        },
        {
          id: "p3",
          fromNodeId: "ns-lagl",
          toNodeId: "la-gl",
          mode: "metro",
          duration: "18",
          stopCount: "8",
          direction: "秣陵/胜太西路",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "06:00",
          lastDeparture: "23:36（周日-四）/ 00:06（周五-六）",
        },
      ],
      cost: "6",
      hours: "1",
      alerts: [
        {
          type: "info",
          message:
            "从仙林大学城到南京南站，亦有南京公交开行的定制直达公交H46/47路，班次较少，可在微信小程序“优点出行“的“校园巴士”栏目预约。",
        },
      ],
    },
  ],
  night: [
    {
      nodes: [
        { id: "glcampus-lagl", name: "仙林校区南门" },

        { id: "glz-lagl", name: "南大仙林校区" },
        { id: "lpl-lagl", name: "南京站·南广场东" },
        { id: "ns-lagl", name: "南京南站" },
      ],
      paths: [
        {
          id: "p0",
          fromNodeId: "glcampus-lagl",
          toNodeId: "glz-lagl",
          mode: "walk",
          duration: "2",
          tips: "公交站在校门左侧，无需穿越地道",
        },
        {
          id: "p1",
          fromNodeId: "glz-lagl",
          toNodeId: "lpl-lagl",
          mode: "bus",
          duration: "45",
          stopCount: "28",
          direction: "南京站·南广场东",
          lineName: "Y34路",
          lineKey: "nj-bus",
          firstDeparture: "22:30",
          lastDeparture: "04:50",
          tips: "约50分钟一班",
        },
        {
          id: "p2",
          fromNodeId: "lpl-lagl",
          toNodeId: "ns-lagl",
          mode: "bus",
          duration: "38",
          stopCount: "22",
          direction: "南京南站",
          lineName: "Y8路",
          lineKey: "nj-bus",
          firstDeparture: "23:30",
          lastDeparture: "04:30",
          tips: "约60分钟一班",
        },
      ],
      cost: "4",
      hours: "2",
    },
  ],
};
