interface StatCardProps {
  label: string;
  value: string;
  change: string;
  changeType?: "positive" | "negative" | "neutral";
}

export default function StatCard({
  label,
  value,
  change,
  changeType = "neutral",
}: StatCardProps) {
  const changeColor =
    changeType === "positive"
      ? "text-[#0bda46]"
      : changeType === "negative"
      ? "text-[#fa5538]"
      : "text-white/70";
  const arrow =
    changeType === "positive"
      ? "arrow_upward"
      : changeType === "negative"
      ? "arrow_downward"
      : null;

  return (
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#32674d] bg-[#1a3a2b]/30">
      <p className="text-white text-base font-medium leading-normal">{label}</p>
      <p className="text-white tracking-light text-2xl font-bold leading-tight">
        {value}
      </p>
      <p
        className={`${changeColor} text-base font-medium leading-normal flex items-center gap-1`}
      >
        {arrow && <span className="material-symbols-outlined text-lg">{arrow}</span>}
        {change}
      </p>
    </div>
  );
}
