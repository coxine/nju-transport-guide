import type { RouteEntry } from "../../../types";

export const gulouPukou: RouteEntry = {
  originId: "gulou",
  destId: "pukou",
  day: [
    {
      nodes: [
        { id: "fym-glpk", name: "费彝民楼北门广场" },
        { id: "pkcampus-bus", name: "浦口校区" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "fym-glpk",
          toNodeId: "pkcampus-bus",
          mode: "bus",
          duration: "45",
          direction: "浦口校区",
          lineName: "南大鼓浦班车",
          lineKey: "nju-bus",
          tips: "发车时间：13:00 16:30 19:00 21:30 22:00",
        },
      ],
      hours: "0.75",
      cost: "4",
      alerts: [
        {
          type: "info",
          message:
            "班车仅限周一-周五运行。\n若出发时间无班车，可参考方案2，利用地铁前往浦口校区。",
        },
      ],
    },
    {
      nodes: [
        { id: "glz-glpk", name: "鼓楼/珠江路" },
        { id: "ns-glpk", name: "南京站" },
        { id: "dc-glpk", name: "东大成贤学院" },
        { id: "gx-glpk", name: "高新路·新科一路" },
        { id: "pkcampus-glpk", name: "浦口校区" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "glz-glpk",
          toNodeId: "ns-glpk",
          mode: "metro",
          duration: "8-11",
          stopCount: "3-4",
          direction: "八卦洲大桥南",
          lineName: "1号线",
          lineKey: "nj-line-1",
          firstDeparture: "06:38",
          lastDeparture: "00:18（周日-四）/ 00:21（周五-六）",
        },
        {
          id: "p2",
          fromNodeId: "ns-glpk",
          toNodeId: "dc-glpk",
          mode: "metro",
          duration: "19",
          stopCount: "7",
          direction: "林场",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "06:00",
          lastDeparture: "23:59（周日-四）/ 00:19（周五-六）",
          tips: "从3号口出站，向前步行至公交站",
        },
        {
          id: "p3",
          fromNodeId: "dc-glpk",
          toNodeId: "gx-glpk",
          mode: "bus",
          duration: "6",
          stopCount: "3-4",
          lineName: "503路/531路/636路/664路/D4路",
          lineKey: "nj-bus",
        },
        {
          id: "p4",
          fromNodeId: "gx-glpk",
          toNodeId: "pkcampus-glpk",
          mode: "walk",
          duration: "5",
        },
      ],
      cost: "7-8",
      hours: "1",
    },
  ],
  night: [],
};
