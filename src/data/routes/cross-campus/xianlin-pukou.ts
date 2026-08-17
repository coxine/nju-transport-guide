import type { RouteEntry } from "../../../types";

export const xianlinPukou: RouteEntry = {
  originId: "xianlin",
  destId: "pukou",
  day: [
    {
      nodes: [
        { id: "fym-glpk", name: "国际学院（逸夫楼C区）南侧" },
        { id: "pkcampus-bus", name: "浦口校区第十五食堂" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "fym-glpk",
          toNodeId: "pkcampus-bus",
          mode: "bus",
          duration: "45",
          direction: "浦口校区",
          lineName: "南大仙浦班车",
          lineKey: "nju-bus",
          tips: "发车时间：13:00 19:00 21:30",
        },
      ],
      hours: "0.75",
      cost: "4",
      alerts: [
        {
          type: "info",
          message:
            "班车仅在学期内工作日运行，考试周可能减班。\n若出发时间无班车，可参考方案2，利用地铁前往浦口校区。",
        },
      ],
    },
    {
      nodes: [
        { id: "glcampus-xlpk", name: "仙林校区南门" },
        { id: "glz-xlpk", name: "南大仙林校区" },
        { id: "dxg-xlpk", name: "大行宫" },
        { id: "dc-xlpk", name: "东大成贤学院" },
        { id: "gx-xlpk", name: "高新路·新科一路" },
        { id: "pkcampus-xlpk", name: "浦口校区" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "glcampus-xlpk",
          toNodeId: "glz-xlpk",
          mode: "walk",
          duration: "3-5",
        },
        {
          id: "p2",
          fromNodeId: "glz-xlpk",
          toNodeId: "dxg-xlpk",
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
          fromNodeId: "dxg-xlpk",
          toNodeId: "dc-xlpk",
          mode: "metro",
          duration: "29",
          stopCount: "11",
          direction: "林场",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "06:00",
          lastDeparture: "23:47（周日-四）/ 00:07（周五-六）",
        },
        {
          id: "p4",
          fromNodeId: "dc-xlpk",
          toNodeId: "gx-xlpk",
          mode: "bus",
          duration: "6",
          stopCount: "3-4",
          lineName: "503路/531路/636路/664路/D4路",
          lineKey: "nj-bus",
          tips: "从3号口出站，向前步行至公交站",
        },
        {
          id: "p5",
          fromNodeId: "gx-xlpk",
          toNodeId: "pkcampus-xlpk",
          mode: "walk",
          duration: "5",
        },
      ],
      cost: "10-11",
      hours: "1.5",
    },
  ],
  night: [],
};
