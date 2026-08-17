import type { RouteEntry } from "../../../types";

export const pukouXianlin: RouteEntry = {
  originId: "pukou",
  destId: "xianlin",
  day: [
    {
      nodes: [
        { id: "pkcampus-canteen", name: "浦口校区第十五食堂" },
        { id: "fym-pkxl", name: "国际学院（逸夫楼C区）南侧" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "pkcampus-canteen",
          toNodeId: "fym-pkxl",
          mode: "bus",
          duration: "45",
          direction: "仙林校区",
          lineName: "南大仙浦班车",
          lineKey: "nju-bus",
          tips: "发车时间：07:30 12:45 16:30",
        },
      ],
      hours: "0.75",
      cost: "4",
      alerts: [
        {
          type: "info",
          message:
            "班车仅在学期内工作日运行，考试周可能减班。\n若出发时间无班车，可参考方案2，利用地铁前往仙林校区。",
        },
      ],
    },
    {
      nodes: [
        { id: "pkcampus-pkxl", name: "浦口校区" },
        { id: "gx-pkxl", name: "高新路·新科一路" },
        { id: "dc-pkxl", name: "东大成贤学院" },
        { id: "dxg-pkxl", name: "大行宫" },
        { id: "glz-pkxl", name: "南大仙林校区" },
        { id: "glcampus-pkxl", name: "仙林校区南门" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "pkcampus-pkxl",
          toNodeId: "gx-pkxl",
          mode: "walk",
          duration: "5",
        },
        {
          id: "p2",
          fromNodeId: "gx-pkxl",
          toNodeId: "dc-pkxl",
          mode: "bus",
          duration: "6",
          stopCount: "3-4",
          lineName: "503路/636路/664路/D4路",
          lineKey: "nj-bus",
        },
        {
          id: "p3",
          fromNodeId: "dc-pkxl",
          toNodeId: "dxg-pkxl",
          mode: "metro",
          duration: "29",
          stopCount: "11",
          direction: "秣陵/胜太西路",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "05:56",
          lastDeparture: "23:06（周日-四）/ 23:36（周五-六）",
        },
        {
          id: "p4",
          fromNodeId: "dxg-pkxl",
          toNodeId: "glz-pkxl",
          mode: "metro",
          duration: "31",
          stopCount: "13",
          direction: "经天路",
          lineName: "2号线",
          lineKey: "nj-line-2",
          firstDeparture: "06:13",
          lastDeparture: "23:35（周日-四）/ 00:05（周五-六）",
        },
        {
          id: "p5",
          fromNodeId: "glz-pkxl",
          toNodeId: "glcampus-pkxl",
          mode: "walk",
          duration: "3-5",
        },
      ],
      cost: "10-11",
      hours: "1.5",
    },
  ],
  night: [],
};
