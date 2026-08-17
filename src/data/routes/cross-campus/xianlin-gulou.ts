import type { RouteEntry } from "../../../types";

export const xianlinGulou: RouteEntry = {
  originId: "xianlin",
  destId: "gulou",
  day: [
    {
      nodes: [
        { id: "xlcampus-xlgl", name: "南大仙林校区" },
        { id: "xjk-xlgl", name: "新街口" },
        { id: "zjl-xlgl", name: "珠江路" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "xlcampus-xlgl",
          toNodeId: "xjk-xlgl",
          mode: "metro",
          duration: "33",
          stopCount: "14",
          direction: "鱼嘴",
          lineName: "2号线",
          lineKey: "nj-line-2",
          firstDeparture: "06:02",
          lastDeparture: "23:02（周日-四）/ 23:32（周五-六）",
        },
        {
          id: "p2",
          fromNodeId: "xjk-xlgl",
          toNodeId: "zjl-xlgl",
          mode: "metro",
          duration: "3",
          stopCount: "1",
          direction: "八卦洲大桥南",
          lineName: "1号线",
          lineKey: "nj-line-1",
          firstDeparture: "06:36",
          lastDeparture: "00:16（周日-四）/ 00:19（周五-六）",
        },
      ],
      cost: "6",
      hours: "0.75-1",
      alerts: [
        {
          type: "info",
          message: "前往南园请参考方案1，前往北园请参考方案2",
        },
      ],
    },
    {
      nodes: [
        { id: "xlcampus-xlgl2", name: "南大仙林校区" },
        { id: "jml-xlgl", name: "金马路" },
        { id: "ynl-xlgl", name: "云南路/鼓楼" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "xlcampus-xlgl2",
          toNodeId: "jml-xlgl",
          mode: "metro",
          duration: "12",
          stopCount: "5",
          direction: "鱼嘴",
          lineName: "2号线",
          lineKey: "nj-line-2",
          firstDeparture: "06:02",
          lastDeparture: "23:02（周日-四）/ 23:32（周五-六）",
        },
        {
          id: "p2",
          fromNodeId: "jml-xlgl",
          toNodeId: "ynl-xlgl",
          mode: "metro",
          duration: "22-25",
          stopCount: "8-9",
          direction: "龙江",
          lineName: "4号线",
          lineKey: "nj-line-4",
          firstDeparture: "06:17",
          lastDeparture: "23:17",
        },
      ],
      cost: "6",
      hours: "0.75",
    },
  ],
  night: [],
};
