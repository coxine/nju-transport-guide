import { useMemo } from "react";

interface NightTheme {
  colorText: string;
  colorMuted: string;
  colorSecondary: string;
  bgColor: string;
  cardBg: string;
  borderColor: string;
  dividerColor: string;
}

export function useNightTheme(isNight: boolean): NightTheme {
  return useMemo(() => {
    if (isNight) {
      return {
        colorText: "text-night-text-h",
        colorMuted: "text-night-text",
        colorSecondary: "text-night-text",
        bgColor: "bg-night-bg",
        cardBg: "bg-night-card",
        borderColor: "ring-night-border",
        dividerColor: "bg-night-border",
      };
    }
    return {
      colorText: "text-gray-900",
      colorMuted: "text-gray-400",
      colorSecondary: "text-gray-500",
      bgColor: "bg-gray-50",
      cardBg: "bg-white",
      borderColor: "ring-gray-200",
      dividerColor: "bg-gray-200",
    };
  }, [isNight]);
}
