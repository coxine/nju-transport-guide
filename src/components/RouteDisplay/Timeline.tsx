import type { RouteVariant } from "../../types";
import type { TimelinePosition } from "./TimelineNode";
import { useNightTheme } from "../../hooks/useNightTheme";
import { TimelineNode } from "./TimelineNode";
import { AlertCard } from "./AlertCard";

interface TimelineProps {
  variant: RouteVariant;
  isNight: boolean;
}

function getPosition(i: number, total: number): TimelinePosition {
  if (i === 0) return "start";
  if (i === total - 1) return "end";
  return "intermediate";
}

export function Timeline({ variant, isNight }: TimelineProps) {
  const { nodes, paths, alerts } = variant;
  const t = useNightTheme(isNight);

  return (
    <div
      className={`rounded-xl ${t.cardBg} p-4 shadow-sm ring-1 ${t.borderColor}`}
    >
      {alerts && alerts.length > 0 && (
        <div className="mb-4 flex flex-col gap-2">
          {alerts.map((alert, i) => (
            <AlertCard key={i} alert={alert} isNight={isNight} />
          ))}
        </div>
      )}

      <div>
        {nodes.map((node, i) => {
          const position = getPosition(i, nodes.length);
          const prevPath = i > 0 ? paths[i - 1] : null;
          const nextPath = i < paths.length ? paths[i] : null;

          return (
            <TimelineNode
              key={node.id}
              node={node}
              prevPath={prevPath}
              nextPath={nextPath}
              position={position}
              isNight={isNight}
            />
          );
        })}
      </div>
    </div>
  );
}
