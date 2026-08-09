export interface StationNode {
  id: string;
  name: string;
  tips?: string;
}

export interface PathSegment {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  mode: "metro" | "bus" | "walk";
  duration: number;
  stopCount?: number;
  direction?: string;
  lineName?: string;
  lineKey?: string;
  firstDeparture?: string;
  lastDeparture?: string;
  tips?: string;
}

export interface AlertInfo {
  type: "warning" | "info" | "tip";
  message: string;
}

export interface RouteVariant {
  nodes: StationNode[];
  paths: PathSegment[];
  alerts?: AlertInfo[];
  cost?: string;
}

export interface RouteEntry {
  originId: string;
  destId: string;
  day: RouteVariant[];
  night: RouteVariant[];
}

export interface StationOption {
  id: string;
  name: string;
}

export interface RouteData {
  origins: StationOption[];
  destinations: StationOption[];
  routes: RouteEntry[];
}
