import type { AlertInfo } from "../../types";
import {
  RiAlertLine,
  RiInformationLine,
  RiLightbulbLine,
} from "@remixicon/react";

const alertStyles: Record<
  AlertInfo["type"],
  {
    bg: string;
    border: string;
    text: string;
    nightBg: string;
    nightBorder: string;
    nightText: string;
  }
> = {
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    text: "text-amber-800",
    nightBg: "bg-amber-900/30",
    nightBorder: "border-amber-700",
    nightText: "text-amber-300",
  },
  info: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary-dark",
    nightBg: "bg-primary/20",
    nightBorder: "border-primary/40",
    nightText: "text-primary/80",
  },
  tip: {
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    text: "text-emerald-800",
    nightBg: "bg-emerald-900/30",
    nightBorder: "border-emerald-700",
    nightText: "text-emerald-300",
  },
};

function AlertIcon({ type }: { type: AlertInfo["type"] }) {
  switch (type) {
    case "warning":
      return <RiAlertLine size={14} className="shrink-0" />;
    case "info":
      return <RiInformationLine size={14} className="shrink-0" />;
    case "tip":
      return <RiLightbulbLine size={14} className="shrink-0" />;
  }
}

interface AlertCardProps {
  alert: AlertInfo;
  isNight: boolean;
}

export function AlertCard({ alert, isNight }: AlertCardProps) {
  const style = alertStyles[alert.type];

  return (
    <div
      className={`rounded-lg border px-3 py-2 text-[14px] ${
        isNight
          ? `${style.nightBg} ${style.nightBorder} ${style.nightText}`
          : `${style.bg} ${style.border} ${style.text}`
      }`}
    >
      <span className="mr-1.5 inline-flex align-middle">
        <AlertIcon type={alert.type} />
      </span>
      {alert.message}
    </div>
  );
}
