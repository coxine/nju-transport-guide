import type { RouteEntry } from "../../../types";

export const nanjingSouthGulou: RouteEntry = {
  originId: "nanjing-south",
  destId: "gulou",
  day: [
    {
      nodes: [
        { id: "ns-gl", name: "南京南站" },
        { id: "glz-gl", name: "鼓楼/珠江路" },
        { id: "glcampus-gl", name: "鼓楼校区" },
      ],
      paths: [
        {
          id: "pg1",
          fromNodeId: "ns-gl",
          toNodeId: "glz-gl",
          mode: "metro",
          duration: "21-25",
          stopCount: "9-10",
          direction: "八卦洲大桥南",
          lineName: "1号线",
          lineKey: "nj-line-1",
          firstDeparture: "06:15",
          lastDeparture: "23:55（周日-四）/ 23:58（周五-六）",
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
      cost: "4",
      hours: "0.75-1",
    },
  ],
  night: [
    {
      nodes: [
        { id: "ns-lagl", name: "南京南站" },
        { id: "glz-lagl", name: "中山路·珠江路南" },
        { id: "glcampus-lagl", name: "鼓楼校区南园" },
      ],
      paths: [
        {
          id: "pgn1",
          fromNodeId: "ns-lagl",
          toNodeId: "glz-lagl",
          mode: "bus",
          duration: "34",
          stopCount: "18",
          direction: "江边路总站",
          lineName: "Y16路",
          lineKey: "nj-bus",
          firstDeparture: "22:10",
          lastDeparture: "04:30",
          tips: "约20-25分钟一班",
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
      hours: "1",
    },
  ],
};
