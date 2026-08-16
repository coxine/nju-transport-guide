import type { RouteEntry } from "../../../types";

export const gulouXianlin: RouteEntry = {
  originId: "gulou",
  destId: "xianlin",
  day: [
    {
      nodes: [
        { id: "zjl-glxl", name: "珠江路" },
        { id: "xjk-glxl", name: "新街口" },
        { id: "xlcampus-glxl", name: "南大仙林校区" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "zjl-glxl",
          toNodeId: "xjk-glxl",
          mode: "metro",
          duration: "3",
          stopCount: "1",
          direction: "中国药科大学/河定桥",
          lineName: "1号线",
          lineKey: "nj-line-1",
          firstDeparture: "05:54",
          lastDeparture: "23:48（周日-四）/ 23:54（周五-六）",
        },
        {
          id: "p2",
          fromNodeId: "xjk-glxl",
          toNodeId: "xlcampus-glxl",
          mode: "metro",
          duration: "33",
          stopCount: "14",
          direction: "经天路",
          lineName: "2号线",
          lineKey: "nj-line-2",
          firstDeparture: "06:11",
          lastDeparture: "23:33（周日-四）/ 00:03（周五-六）",
        },
      ],
      cost: "6",
      hours: "0.75-1",
      alerts: [
        {
          type: "info",
          message: "从南园出发请参考方案1，从北园出发请参考方案2",
        },
      ],
    },
    {
      nodes: [
        { id: "ynl-glxl", name: "云南路/鼓楼" },
        { id: "jml-glxl", name: "金马路" },
        { id: "xlcampus-glxl2", name: "南大仙林校区" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "ynl-glxl",
          toNodeId: "jml-glxl",
          mode: "metro",
          duration: "22-25",
          stopCount: "8-9",
          direction: "仙林湖/东流",
          lineName: "4号线",
          lineKey: "nj-line-4",
          firstDeparture: "06:04",
          lastDeparture: "23:04（周日-四）/ 23:34（周五-六）",
        },
        {
          id: "p2",
          fromNodeId: "jml-glxl",
          toNodeId: "xlcampus-glxl2",
          mode: "metro",
          duration: "12",
          stopCount: "5",
          direction: "经天路",
          lineName: "2号线",
          lineKey: "nj-line-2",
          firstDeparture: "06:03",
          lastDeparture: "23:55（周日-四）/ 00:25（周五-六）",
        },
      ],
      cost: "6",
      hours: "0.75",
    },
  ],
  night: [],
};
