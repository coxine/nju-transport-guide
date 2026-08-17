import type { RouteEntry } from "../../../types";

export const suzhouCampusXianlin: RouteEntry = {
  originId: "suzhou-campus",
  destId: "xianlin",
  day: [
    {
      nodes: [
        { id: "szcampus-szn", name: "苏州校区" },
        { id: "szstation-szn", name: "苏州/苏州新区站" },
        { id: "njstation-szn", name: "南京/南京南站" },
        { id: "xianlin-szn", name: "仙林校区" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "szcampus-szn",
          toNodeId: "szstation-szn",
          mode: "city",
          lineKey: "city",
          tips: "可参考本指南的学校→枢纽章节",
        },
        {
          id: "p2",
          fromNodeId: "szstation-szn",
          toNodeId: "njstation-szn",
          mode: "train",
          duration: "60-90",
          lineName: "高铁",
          lineKey: "train",
          tips: "优先选择从苏州新区、苏州站出发的列车\n切勿选择从苏州南、太仓、太仓南、常熟、张家港、盛泽出发的列车",
        },
        {
          id: "p3",
          fromNodeId: "njstation-szn",
          toNodeId: "xianlin-szn",
          mode: "city",
          lineKey: "city",
          tips: "可参考本指南的枢纽→学校章节",
        },
      ],
      cost: "100+",
      hours: "3-3.5",
    },
  ],
  night: [],
};
