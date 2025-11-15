import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
}

export function StatCard({ title, value, change, changeType }: StatCardProps) {
  const changeColor =
    changeType === "increase"
      ? "text-[#0bda46]"
      : changeType === "decrease"
      ? "text-[#fa5538]"
      : "text-white/70";

  return (
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#32674d] bg-[#1a3a2b]/30">
      <p className="text-white text-base font-medium leading-normal">{title}</p>
      <p className="text-white tracking-light text-2xl font-bold leading-tight">
        {value}
      </p>
      <p className={`${changeColor} text-base font-medium leading-normal flex items-center gap-1`}>
        {changeType === "increase" && <ArrowUpward className="text-lg" />}
        {changeType === "decrease" && <ArrowDownward className="text-lg" />}
        {change}
      </p>
    </div>
  );
}
