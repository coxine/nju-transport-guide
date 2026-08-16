import type { RouteEntry } from "../../../types";

export const pukouNanjingStation: RouteEntry = {
  originId: "pukou",
  destId: "nanjing-station",
  day: [
    {
      nodes: [
        { id: "pkcampus-pk", name: "浦口校区" },
        { id: "gx-pk", name: "高新路·新科一路" },
        { id: "dc-pk", name: "东大成贤学院" },
        { id: "ns-pk", name: "南京站" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "pkcampus-pk",
          toNodeId: "gx-pk",
          mode: "walk",
          duration: "5",
        },
        {
          id: "p2",
          fromNodeId: "gx-pk",
          toNodeId: "dc-pk",
          mode: "bus",
          duration: "6",
          stopCount: "3-4",
          lineName: "503路/636路/664路/D4路",
          lineKey: "nj-bus",
        },
        {
          id: "p3",
          fromNodeId: "dc-pk",
          toNodeId: "ns-pk",
          mode: "metro",
          duration: "19",
          stopCount: "7",
          direction: "秣陵/胜太西路",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "05:56",
          lastDeparture: "23:06（周日-四）/ 23:36（周五-六）",
        },
      ],
      cost: "6-7",
      hours: "1",
    },
  ],
  night: [
    {
      nodes: [
        { id: "pkcampus-pk", name: "浦口校区" },
        { id: "lh-pk", name: "六合大道·沿江" },
        { id: "nsn-pk", name: "南京站·南广场西" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "pkcampus-pk",
          toNodeId: "lh-pk",
          mode: "walk",
          duration: "26",
          tips: "沿学府路向东直行，在六合大道右拐，骑行约10分钟",
        },
        {
          id: "p2",
          fromNodeId: "lh-pk",
          toNodeId: "nsn-pk",
          mode: "bus",
          duration: "31",
          stopCount: "12",
          direction: "南京站·南广场西",
          lineName: "Y26路",
          lineKey: "nj-bus",
          firstDeparture: "23:00",
          lastDeparture: "03:30",
          tips: "约90分钟一班",
        },
      ],
      cost: "2",
      hours: "1",
    },
  ],
};
