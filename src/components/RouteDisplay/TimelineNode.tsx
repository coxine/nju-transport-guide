import type { StationNode, PathSegment } from "../../types";
import { getLineColor, getLineTextColor } from "../../data/lines";
import { RiTrainLine, RiBusLine, RiWalkLine } from "@remixicon/react";

export type TimelinePosition = "start" | "end" | "intermediate";

interface TimelineNodeProps {
  node: StationNode;
  prevPath: PathSegment | null;
  nextPath: PathSegment | null;
  position: TimelinePosition;
  isNight: boolean;
}

const NODE_SIZE = 20;
const ICON_TOP = 2;

function NodeIcon({ position }: { position: TimelinePosition }) {
  switch (position) {
    case "start":
    case "end":
      return (
        <div
          className="relative z-10 border-3 border-black bg-white"
          style={{ width: NODE_SIZE, height: NODE_SIZE }}
        />
      );
    case "intermediate":
      return (
        <div
          className="relative z-10 rounded-full border-3 border-black bg-white"
          style={{
            width: NODE_SIZE,
            height: NODE_SIZE,
          }}
        />
      );
  }
}

function iconCenterY(): number {
  return ICON_TOP + NODE_SIZE / 2;
}

function LineSegment({
  top,
  bottom,
  color,
}: {
  top: number | string;
  bottom: number | string;
  color: string;
}) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2"
      style={{
        top: typeof top === "number" ? `${top}px` : top,
        bottom: typeof bottom === "number" ? `${bottom}px` : bottom,
        borderLeft: `8px solid ${color}`,
      }}
    />
  );
}

function resolvePathColor(path: PathSegment): string {
  return getLineColor(path.lineKey);
}

function modeLabel(mode: PathSegment["mode"]): string {
  switch (mode) {
    case "metro":
      return "地铁";
    case "bus":
      return "公交";
    case "walk":
      return "步行";
  }
}

function ModeIcon({ mode }: { mode: PathSegment["mode"] }) {
  const cls = "shrink-0 text-gray-500";
  const MODE_ICON_SIZE = 24;
  switch (mode) {
    case "metro":
      return <RiTrainLine size={MODE_ICON_SIZE} className={cls} />;
    case "bus":
      return <RiBusLine size={MODE_ICON_SIZE} className={cls} />;
    case "walk":
      return <RiWalkLine size={MODE_ICON_SIZE} className={cls} />;
  }
}

function PathInfo({ path, isNight }: { path: PathSegment; isNight: boolean }) {
  const lineColor = resolvePathColor(path);
  const lineTextColor = getLineTextColor(path.lineKey);
  const colorMuted = isNight ? "text-night-text" : "text-gray-400";
  const colorSecondary = isNight ? "text-night-text" : "text-gray-500";

  return (
    <div className="pt-2">
      <div className="flex items-center gap-2">
        <ModeIcon mode={path.mode} />
        <span
          className="rounded px-1.5 py-0.5 text-[12px] font-medium"
          style={{ backgroundColor: lineColor, color: lineTextColor }}
        >
          {path.lineName ?? modeLabel(path.mode)}
        </span>
      </div>
      <div className="flex items-center gap-1 mt-1">
        {path.direction && (
          <span className={`text-[14px] ${colorSecondary}`}>
            {path.direction}方向
          </span>
        )}
        {path.firstDeparture && path.lastDeparture && (
          <span className={`text-[14px] ${colorMuted}`}>
            首班 {path.firstDeparture} 末班 {path.lastDeparture}
          </span>
        )}
      </div>
      <div
        className={`mt-0.5 flex items-center gap-1 text-[14px] ${colorSecondary}`}
      >
        {path.stopCount != null && (
          <>
            <span>{path.stopCount}站</span>
            <span className={`${colorMuted}`}>|</span>
          </>
        )}
        <span>{path.duration}分钟</span>
      </div>
      {path.tips && (
        <p className="mt-1 text-[14px] text-amber-600">{path.tips}</p>
      )}
    </div>
  );
}

export function TimelineNode({
  node,
  prevPath,
  nextPath,
  position,
  isNight,
}: TimelineNodeProps) {
  const colorText = isNight ? "text-night-text-h" : "text-gray-900";
  const centerY = iconCenterY();

  return (
    <div className="flex items-start gap-4">
      <div className="relative flex w-8 shrink-0 justify-center self-stretch">
        {prevPath && (
          <LineSegment
            top={0}
            bottom={`calc(100% - ${centerY}px)`}
            color={resolvePathColor(prevPath)}
          />
        )}
        {nextPath && (
          <LineSegment
            top={centerY}
            bottom={0}
            color={resolvePathColor(nextPath)}
          />
        )}
        <div style={{ marginTop: ICON_TOP }}>
          <NodeIcon position={position} />
        </div>
      </div>
      <div className="min-w-0 flex-1 pb-3">
        <span className={`text-[18px] font-semibold ${colorText}`}>
          {node.name}
        </span>
        {node.tips && (
          <p className="mt-1 text-[14px] text-amber-600">{node.tips}</p>
        )}
        {nextPath && <PathInfo path={nextPath} isNight={isNight} />}
      </div>
    </div>
  );
}
