import type { StationOption } from "../../types";

interface StationSelectorProps {
  label: string;
  options: StationOption[];
  selectedId: string | null;
  onChange: (id: string) => void;
  activeClass: string;
  disabledIds?: Set<string>;
}

export function StationSelector({
  label,
  options,
  selectedId,
  onChange,
  activeClass,
  disabledIds,
}: StationSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isDisabled = disabledIds?.has(option.id) ?? false;
          return (
            <button
              key={option.id}
              disabled={isDisabled}
              onClick={() => onChange(option.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedId === option.id
                  ? `${activeClass} text-white shadow-md`
                  : isDisabled
                    ? "cursor-not-allowed bg-gray-100 text-gray-300"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
