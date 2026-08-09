import { RiSunLine, RiMoonLine } from "@remixicon/react";

interface DayNightToggleProps {
  isNight: boolean;
  onChange: (isNight: boolean) => void;
}

export function DayNightToggle({ isNight, onChange }: DayNightToggleProps) {
  return (
    <button
      onClick={() => onChange(!isNight)}
      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
        isNight ? "bg-indigo-900" : "bg-amber-400"
      }`}
      aria-label={isNight ? "切换至日间模式" : "切换至夜间模式"}
    >
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm shadow-md transition-transform ${
          isNight ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {isNight ? <RiMoonLine size={14} /> : <RiSunLine size={14} />}
      </span>
    </button>
  );
}
