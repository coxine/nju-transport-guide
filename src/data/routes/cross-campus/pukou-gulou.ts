import type { RouteEntry } from "../../../types";

export const pukouGulou: RouteEntry = {
  originId: "pukou",
  destId: "gulou",
  day: [
    {
      nodes: [
        { id: "pkcampus-bus", name: "浦口校区第十五食堂" },
        { id: "fym-pkgl", name: "费彝民楼北门广场" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "pkcampus-bus",
          toNodeId: "fym-pkgl",
          mode: "bus",
          duration: "45",
          direction: "费彝民楼北门广场",
          lineName: "南大鼓浦班车",
          lineKey: "nju-bus",
          tips: "发车时间：07:30 08:30 12:45 15:00 16:15",
        },
      ],
      hours: "0.75",
      cost: "4",
      alerts: [
        {
          type: "info",
          message:
            "班车仅在学期内工作日运行，考试周可能减班。\n若出发时间无班车，可参考方案2，利用地铁前往鼓楼校区。",
        },
      ],
    },
    {
      nodes: [
        { id: "pkcampus-pkgl", name: "浦口校区" },
        { id: "gx-pkgl", name: "高新路·新科一路" },
        { id: "dc-pkgl", name: "东大成贤学院" },
        { id: "ns-pkgl", name: "南京站" },
        { id: "glz-pkgl", name: "鼓楼/珠江路" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "pkcampus-pkgl",
          toNodeId: "gx-pkgl",
          mode: "walk",
          duration: "5",
        },
        {
          id: "p2",
          fromNodeId: "gx-pkgl",
          toNodeId: "dc-pkgl",
          mode: "bus",
          duration: "6",
          stopCount: "3-4",
          lineName: "503路/636路/664路/D4路",
          lineKey: "nj-bus",
        },
        {
          id: "p3",
          fromNodeId: "dc-pkgl",
          toNodeId: "ns-pkgl",
          mode: "metro",
          duration: "19",
          stopCount: "7",
          direction: "秣陵/胜太西路",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "05:56",
          lastDeparture: "23:06（周日-四）/ 23:36（周五-六）",
        },
        {
          id: "p4",
          fromNodeId: "ns-pkgl",
          toNodeId: "glz-pkgl",
          mode: "metro",
          duration: "8-11",
          stopCount: "3-4",
          direction: "中国药科大学/河定桥",
          lineName: "1号线",
          lineKey: "nj-line-1",
          firstDeparture: "05:46",
          lastDeparture: "23:39（周日-四）/ 23:45（周五-六）",
        },
      ],
      cost: "8-9",
      hours: "1",
    },
  ],
  night: [],
};
