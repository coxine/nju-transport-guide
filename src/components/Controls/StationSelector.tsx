import type { StationOption } from "../../types";

interface StationSelectorProps {
  label: string;
  options: StationOption[];
  selectedId: string | null;
  onChange: (id: string) => void;
  activeClass: string;
}

export function StationSelector({
  label,
  options,
  selectedId,
  onChange,
  activeClass,
}: StationSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
        {label}
      </span>
      <div className="flex gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedId === option.id
                ? `${activeClass} text-white shadow-md`
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}
