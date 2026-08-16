import type { RouteEntry } from "../../../types";

export const pukouNanjingSouth: RouteEntry = {
  originId: "pukou",
  destId: "nanjing-south",
  day: [
    {
      nodes: [
        { id: "pkcampus-nspk", name: "浦口校区" },
        { id: "gx-nspk", name: "高新路·新科一路" },
        { id: "dc-nspk", name: "东大成贤学院站" },
        { id: "ns-nspk", name: "南京南站" },
      ],
      paths: [
        {
          id: "p1",
          fromNodeId: "pkcampus-nspk",
          toNodeId: "gx-nspk",
          mode: "walk",
          duration: "5",
        },
        {
          id: "p2",
          fromNodeId: "gx-nspk",
          toNodeId: "dc-nspk",
          mode: "bus",
          duration: "6",
          stopCount: "3-4",
          lineName: "503路/531路/636路/664路/D4路",
          lineKey: "nj-bus",
        },
        {
          id: "p3",
          fromNodeId: "dc-nspk",
          toNodeId: "ns-nspk",
          mode: "metro",
          duration: "47",
          stopCount: "19",
          direction: "秣陵/胜太西路",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "05:56",
          lastDeparture: "23:06（周日-四）/ 23:36（周五-六）",
        },
      ],
      cost: "8-9",
      hours: "1.5",
    },
  ],
  night: [],
};
