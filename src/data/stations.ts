interface StationMeta {
  name: string;
  category: "hub" | "campus";
}

export const STATIONS: Record<string, StationMeta> = {
  "nanjing-south": { name: "南京南站", category: "hub" },
  "lukou-airport": { name: "禄口机场", category: "hub" },
  xianlin: { name: "仙林校区", category: "campus" },
  gulou: { name: "鼓楼校区", category: "campus" },
};
