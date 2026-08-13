import type { RouteEntry } from "../../../types";

export const nanjingStationGulou: RouteEntry = {
  originId: "nanjing-station",
  destId: "gulou",
  day: [
    {
      nodes: [
        { id: "ns-gl", name: "南京站" },
        { id: "glz-gl", name: "鼓楼/珠江路" },
        { id: "glcampus-gl", name: "鼓楼校区" },
      ],
      paths: [
        {
          id: "pg1",
          fromNodeId: "ns-gl",
          toNodeId: "glz-gl",
          mode: "metro",
          duration: "8-11",
          stopCount: "3-4",
          direction: "中国药科大学/河定桥",
          lineName: "1号线",
          lineKey: "nj-line-1",
          firstDeparture: "05:46",
          lastDeparture: "23:39（周日-四）/ 23:45（周五-六）",
          tips: "前往北园请在鼓楼站下车，前往南园请在珠江路站下车",
        },
        {
          id: "pg2",
          fromNodeId: "glz-gl",
          toNodeId: "glcampus-gl",
          mode: "walk",
          duration: "3-5",
          tips: "往南园：珠江路1号口出站，沿广州路步行即可抵达广州路门\n往北园：鼓楼5号口出站，沿北京西路步行可抵达北京西路门；在天津路左拐即可抵达天津路门",
        },
      ],
      cost: "2-3",
      hours: "0.5",
    },
  ],
  night: [
    {
      nodes: [
        { id: "ns-lagl", name: "南京站" },
        { id: "lpl-lagl", name: "龙蟠路·南京站西" },
        { id: "glz-lagl", name: "中山路·珠江路北" },
        { id: "glcampus-lagl", name: "鼓楼校区南园" },
      ],
      paths: [
        {
          id: "pgn0",
          fromNodeId: "ns-lagl",
          toNodeId: "lpl-lagl",
          mode: "walk",
          duration: "12",
          tips: "从南京站南广场出站后，沿龙蟠路向西步行至公交站",
        },
        {
          id: "pgn1",
          fromNodeId: "lpl-lagl",
          toNodeId: "glz-lagl",
          mode: "bus",
          duration: "15",
          stopCount: "8",
          direction: "太平南路·夫子庙",
          lineName: "Y1路",
          lineKey: "nj-bus",
          firstDeparture: "22:20",
          lastDeparture: "04:40",
          tips: "约25-35分钟一班",
        },
        {
          id: "pgn2",
          fromNodeId: "glz-lagl",
          toNodeId: "glcampus-lagl",
          mode: "walk",
          duration: "5",
        },
      ],
      cost: "2",
      hours: "0.5",
    },
  ],
};
