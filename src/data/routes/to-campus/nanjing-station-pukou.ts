import type { RouteEntry } from "../../../types";

export const nanjingStationPukou: RouteEntry = {
  originId: "nanjing-station",
  destId: "pukou",
  day: [
    {
      nodes: [
        { id: "ns-pk", name: "南京站" },
        { id: "dc-pk", name: "东大成贤学院" },
        { id: "gx-pk", name: "高新路·新科一路" },
        { id: "pkcampus-pk", name: "浦口校区" },
      ],
      paths: [
        {
          id: "pnp1",
          fromNodeId: "ns-pk",
          toNodeId: "dc-pk",
          mode: "metro",
          duration: "19",
          stopCount: "7",
          direction: "林场",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "06:00",
          lastDeparture: "23:59（周日-四）/ 00:19（周五-六）",
        },
        {
          id: "pnp3",
          fromNodeId: "dc-pk",
          toNodeId: "gx-pk",
          mode: "bus",
          duration: "6",
          stopCount: "3-4",
          lineName: "503路/531路/636路/664路/D4路",
          lineKey: "nj-bus",
        },
        {
          id: "pnp4",
          fromNodeId: "gx-pk",
          toNodeId: "pkcampus-pk",
          mode: "walk",
          duration: "5",
        },
      ],
      cost: "6-7",
      hours: "1",
    },
  ],
  night: [
    {
      nodes: [
        { id: "ns-lagl", name: "南京站" },
        { id: "nsn-pk", name: "南京站·南广场西" },
        { id: "lh-pk", name: "六合大道·沿江" },
        { id: "pkcampus-pk", name: "浦口校区" },
      ],
      paths: [
        {
          id: "pgn0",
          fromNodeId: "ns-lagl",
          toNodeId: "nsn-pk",
          mode: "walk",
          duration: "5",
          tips: "从南京站南广场出站后，向西步行至公交站",
        },
        {
          id: "pnn1",
          fromNodeId: "nsn-pk",
          toNodeId: "lh-pk",
          mode: "bus",
          duration: "31",
          stopCount: "12",
          direction: "葛塘公交总站",
          lineName: "Y26路",
          lineKey: "nj-bus",
          firstDeparture: "00:30",
          lastDeparture: "05:00",
          tips: "约90分钟一班",
        },
        {
          id: "pnn2",
          fromNodeId: "lh-pk",
          toNodeId: "pkcampus-pk",
          mode: "walk",
          duration: "26",
          tips: "沿六合大道向前直行，在学府路左拐\n骑行约10分钟",
        },
      ],
      cost: "2",
      hours: "1",
    },
  ],
};
