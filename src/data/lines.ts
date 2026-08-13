interface LineInfo {
  name: string;
  color: string;
  textColor: string;
  mode: "metro" | "bus";
}

export const LINES: Record<string, LineInfo> = {
  "nj-line-1": {
    name: "1号线",
    color: "#009ACE",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-2": {
    name: "2号线",
    color: "#A6093D",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-3": {
    name: "3号线",
    color: "#009A44",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-4": {
    name: "4号线",
    color: "#7D55C7",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-5": {
    name: "5号线",
    color: "#F2DA51",
    textColor: "#1A1A1A",
    mode: "metro",
  },
  "nj-line-6": {
    name: "6号线",
    color: "#4BBBB4",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-7": {
    name: "7号线",
    color: "#4A7729",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-8": {
    name: "8号线",
    color: "#93282C",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-9": {
    name: "9号线",
    color: "#FA4616",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-10": {
    name: "10号线",
    color: "#B9975B",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-11": {
    name: "11号线",
    color: "#EF426F",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-s1": {
    name: "S1号线",
    color: "#4BBBB4",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-s2": {
    name: "S2号线",
    color: "#93282C",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-s3": {
    name: "S3号线",
    color: "#BA84AC",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-s4": {
    name: "S4号线",
    color: "#FF631B",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-s5": {
    name: "S5号线",
    color: "#F2DF67",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-s6": {
    name: "S6号线",
    color: "#C98BDB",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-s7": {
    name: "S7号线",
    color: "#B46B7A",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-s8": {
    name: "S8号线",
    color: "#FF8000",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-line-s9": {
    name: "S9号线",
    color: "#FFC600",
    textColor: "#FFFFFF",
    mode: "metro",
  },
  "nj-bus": {
    name: "南京公交",
    color: "#F2943C",
    textColor: "#FFFFFF",
    mode: "bus",
  },
};

export function getLineColor(lineKey?: string): string {
  return lineKey ? (LINES[lineKey]?.color ?? "#707378") : "#707378";
}

export function getLineTextColor(lineKey?: string): string {
  return lineKey ? (LINES[lineKey]?.textColor ?? "#FFFFFF") : "#FFFFFF";
}
