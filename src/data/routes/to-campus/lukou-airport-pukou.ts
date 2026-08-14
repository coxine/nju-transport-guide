import type { RouteEntry } from "../../../types";

export const lukouAirportPukou: RouteEntry = {
  originId: "lukou-airport",
  destId: "pukou",
  day: [
    {
      nodes: [
        { id: "la-lapk", name: "禄口机场" },
        { id: "ns-lapk", name: "南京南站" },
        { id: "dc-lapk", name: "东大成贤学院" },
        { id: "gx-lapk", name: "高新路·新科一路" },
        { id: "pkcampus-lapk", name: "浦口校区" },
      ],
      paths: [
        {
          id: "lapk1",
          fromNodeId: "la-lapk",
          toNodeId: "ns-lapk",
          mode: "metro",
          duration: "36",
          stopCount: "7",
          direction: "南京南站",
          lineName: "S1号线",
          lineKey: "nj-line-s1",
          firstDeparture: "06:00",
          lastDeparture: "22:42",
          tips: "南京南站换乘通道较长，建议预留充足换乘时间",
        },
        {
          id: "lapk2",
          fromNodeId: "ns-lapk",
          toNodeId: "dc-lapk",
          mode: "metro",
          duration: "47",
          stopCount: "19",
          direction: "林场",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "06:00",
          lastDeparture: "23:29（周日-四）/ 23:49（周五-六）",
        },
        {
          id: "pnp3",
          fromNodeId: "dc-lapk",
          toNodeId: "gx-lapk",
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
      cost: "12-13",
      hours: "2",
      alerts: [
        {
          type: "info",
          message:
            "禄口机场距浦口校区较远，地铁S1号线末班较早（22:42），夜间公共交通换乘不便，建议直接打车或乘坐网约车前往。",
        },
      ],
    },
  ],
  night: [],
};
