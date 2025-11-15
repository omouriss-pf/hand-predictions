interface BetInfoCardProps {
  bet: {
    team1: {
      name: string;
      logo: string;
    };
    team2: {
      name: string;
      logo: string;
    };
    betType: string;
    wager: string;
    payout: string;
    status: string;
    datetime: string;
  };
}

export default function BetInfoCard({ bet }: BetInfoCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-[#32674d] bg-[#1a3a2b]/30 p-4 hover:bg-[#234836]/50 transition-colors">
      <div className="flex w-full sm:w-2/5 items-center justify-between sm:justify-start gap-4">
        <div className="flex items-center gap-2">
          <img
            className="size-8 rounded-full"
            alt={`${bet.team1.name} team logo`}
            src={bet.team1.logo}
          />
          <span className="text-white font-bold">{bet.team1.name}</span>
        </div>
        <span className="text-[#92c9ad]">vs</span>
        <div className="flex items-center gap-2">
          <img
            className="size-8 rounded-full"
            alt={`${bet.team2.name} team logo`}
            src={bet.team2.logo}
          />
          <span className="text-white font-bold">{bet.team2.name}</span>
        </div>
      </div>
      <div className="hidden sm:flex flex-1 items-center justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-[#92c9ad] text-xs">Bet Type</p>
          <p className="text-white font-medium">{bet.betType}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#92c9ad] text-xs">Wager</p>
          <p className="text-white font-medium">{bet.wager}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#92c9ad] text-xs">Potential Payout</p>
          <p className="text-white font-medium">{bet.payout}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-yellow-400 bg-yellow-900/50 text-xs font-bold px-2 py-1 rounded-full">
            {bet.status}
          </p>
          <p className="text-[#92c9ad] text-xs mt-1">{bet.datetime}</p>
        </div>
      </div>
    </div>
  );
}
