import { useMemo } from "react";
import type { RouteVariant } from "../types";
import { routeData } from "../data/routes";

export function useRoute(originId: string, destId: string, isNight: boolean) {
  return useMemo(() => {
    const entry = routeData.routes.find(
      (r) => r.originId === originId && r.destId === destId,
    );

    const variants: RouteVariant[] = isNight
      ? (entry?.night ?? [])
      : (entry?.day ?? []);

    return {
      entry: entry ?? null,
      variants,
      isNight,
    };
  }, [originId, destId, isNight]);
}
