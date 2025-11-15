import DashboardHeader from "@/components/DashboardHeader";
import StatCard from "@/components/StatCard";
import Chart from "@/components/Chart";
import BetInfoCard from "@/components/BetInfoCard";
import dashboardData from "@/data/dashboard.json";

export default function DashboardPage() {
  const { stats, activeBets } = dashboardData;

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#11221a] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <DashboardHeader />
            <div className="flex flex-wrap justify-between gap-3 p-4 mt-6">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                Dashboard Overview
              </p>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
              <StatCard
                label="Total Net Profit/Loss"
                value={stats.netProfitLoss}
                change={stats.netProfitLossPercentage}
                changeType="positive"
              />
              <StatCard
                label="Total Wagered"
                value={stats.totalWagered}
                change={stats.totalWageredPercentage}
                changeType="positive"
              />
              <StatCard
                label="Win Rate"
                value={stats.winRate}
                change={stats.winRatePercentage}
                changeType="negative"
              />
              <StatCard
                label="Active Bets"
                value={stats.activeBets}
                change={stats.activeBetsChange}
              />
            </div>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <Chart />
            </div>
            <div className="pb-3 px-4">
              <div className="flex border-b border-[#32674d] gap-8">
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-white pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    Active Bets
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92c9ad] pb-[13px] pt-4 hover:border-b-primary/50 hover:text-white transition-colors"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Bet History
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4">
              {activeBets.map((bet) => (
                <BetInfoCard key={bet.id} bet={bet} />
              ))}
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-[#32674d] p-10 mt-4 text-center">
                <span className="material-symbols-outlined text-4xl text-[#92c9ad]">
                  sports_handball
                </span>
                <p className="text-white font-bold">
                  You have no other active bets.
                </p>
                <p className="text-[#92c9ad] text-sm max-w-xs">
                  Ready for the next match? Place a new bet to see it here.
                </p>
                <button className="flex mt-2 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-[#11221a] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                  <span className="truncate">Find a Match</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
