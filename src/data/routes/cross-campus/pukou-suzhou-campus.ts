import type { RouteEntry } from "../../../types";

export const pukouSuzhouCampus: RouteEntry = {
  originId: "pukou",
  destId: "suzhou-campus",
  day: [
    {
      nodes: [
        { id: "pukou-njz", name: "浦口校区" },
        { id: "njstation-njz", name: "南京/南京南站" },
        { id: "szstation-njz", name: "苏州/苏州新区站" },
        { id: "szcampus-njz", name: "苏州校区" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "pukou-njz",
          toNodeId: "njstation-njz",
          mode: "city",
          lineKey: "city",
          tips: "可参考本指南的学校→枢纽章节",
        },
        {
          id: "p2",
          fromNodeId: "njstation-njz",
          toNodeId: "szstation-njz",
          mode: "train",
          duration: "60-90",
          lineName: "高铁",
          lineKey: "train",
          tips: "优先选择到站为苏州新区、苏州站的列车\n切勿选择到站为苏州南、太仓、太仓南、常熟、张家港、盛泽的列车",
        },
        {
          id: "p3",
          fromNodeId: "szstation-njz",
          toNodeId: "szcampus-njz",
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
