import type { RouteEntry } from "../../../types";

export const nanjingSouthXianlin: RouteEntry = {
  originId: "nanjing-south",
  destId: "xianlin",
  day: [
    {
      nodes: [
        { id: "la-gl", name: "南京南站" },
        { id: "ns-lagl", name: "大行宫" },
        { id: "glz-lagl", name: "南大仙林校区" },
        { id: "glcampus-lagl", name: "仙林校区南门" },
      ],
      paths: [
        {
          id: "pl1",
          fromNodeId: "la-gl",
          toNodeId: "ns-lagl",
          mode: "metro",
          duration: "18",
          stopCount: "8",
          direction: "林场",
          lineName: "3号线",
          lineKey: "nj-line-3",
          firstDeparture: "06:00",
          lastDeparture: "23:29（周日-四）/ 23:49（周五-六）",
          tips: "最快换乘车门：29号",
        },
        {
          id: "pl2",
          fromNodeId: "ns-lagl",
          toNodeId: "glz-lagl",
          mode: "metro",
          duration: "31",
          stopCount: "13",
          direction: "经天路",
          lineName: "2号线",
          lineKey: "nj-line-2",
          firstDeparture: "06:15",
          lastDeparture: "23:35（周日-四）/ 00:05（周五-六）",
        },
        {
          id: "pl3",
          fromNodeId: "glz-lagl",
          toNodeId: "glcampus-lagl",
          mode: "walk",
          duration: "3-5",
          tips: "出站后穿过地下通道，即可到达仙林校区南门",
        },
      ],
      cost: "6",
      hours: "1",
      alerts: [
        {
          type: "info",
          message:
            "从南京南站到仙林大学城，亦有南京公交开行的定制直达公交H46/47路，班次较少，可在微信小程序“优点出行“的“校园巴士”栏目预约。",
        },
      ],
    },
  ],
  night: [
    {
      nodes: [
        { id: "ns-lagl", name: "南京南站" },
        { id: "lpl-lagl", name: "南京站·南广场东" },
        { id: "glz-lagl", name: "南大仙林校区" },
      ],
      paths: [
        {
          id: "pgn0",
          fromNodeId: "ns-lagl",
          toNodeId: "lpl-lagl",
          mode: "bus",
          duration: "38",
          stopCount: "23",
          direction: "南京站·南广场东",
          lineName: "Y8路",
          lineKey: "nj-bus",
          firstDeparture: "22:30",
          lastDeparture: "03:30",
          tips: "约60分钟一班",
        },
        {
          id: "pgn1",
          fromNodeId: "lpl-lagl",
          toNodeId: "glz-lagl",
          mode: "bus",
          duration: "45",
          stopCount: "28",
          direction: "经天路地铁站西",
          lineName: "Y34路",
          lineKey: "nj-bus",
          firstDeparture: "00:20",
          lastDeparture: "06:00",
          tips: "约50分钟一班",
        },
      ],
      cost: "4",
      hours: "2",
    },
  ],
};
