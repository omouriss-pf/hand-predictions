"use client";
import { useStore } from "@/store";

export interface Match {
  id: number;
  league: string;
  datetime: string;
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  odds: {
    win1: number;
    draw: number;
    win2: number;
  };
}

export default function MatchCard({ match }: { match: Match }) {
  const { addBet } = useStore();

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-[#234836]/40 p-5 border border-transparent hover:border-primary/50 transition-all">
      <div className="flex justify-between items-center text-xs text-[#92c9ad]">
        <span>{match.league}</span>
        <span>{match.datetime}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 bg-white/10 rounded-full p-1 object-contain"
            alt={`${match.team1.name} Team Logo`}
            src={match.team1.logo}
          />
          <span className="text-white font-bold text-lg">
            {match.team1.name}
          </span>
        </div>
        <span className="text-[#92c9ad] text-sm">vs</span>
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-lg">
            {match.team2.name}
          </span>
          <img
            className="h-10 w-10 bg-white/10 rounded-full p-1 object-contain"
            alt={`${match.team2.name} Team Logo`}
            src={match.team2.logo}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-2">
        <button
          className="group flex flex-col items-center justify-center gap-1 rounded-md bg-[#32674d]/50 p-3 text-center transition-colors hover:bg-primary/20"
          onClick={() =>
            addBet({ match, prediction: "Win 1", odds: match.odds.win1 })
          }
        >
          <span className="text-xs text-[#92c9ad] group-hover:text-primary">
            Win 1
          </span>
          <span className="text-white font-bold text-lg">
            {match.odds.win1}
          </span>
        </button>
        <button
          className="group flex flex-col items-center justify-center gap-1 rounded-md bg-[#32674d]/50 p-3 text-center transition-colors hover:bg-primary/20"
          onClick={() =>
            addBet({ match, prediction: "Draw", odds: match.odds.draw })
          }
        >
          <span className="text-xs text-[#92c9ad] group-hover:text-primary">
            Draw
          </span>
          <span className="text-white font-bold text-lg">
            {match.odds.draw}
          </span>
        </button>
        <button
          className="group flex flex-col items-center justify-center gap-1 rounded-md bg-[#32674d]/50 p-3 text-center transition-colors hover:bg-primary/20"
          onClick={() =>
            addBet({ match, prediction: "Win 2", odds: match.odds.win2 })
          }
        >
          <span className="text-xs text-[#92c9ad] group-hover:text-primary">
            Win 2
          </span>
          <span className="text-white font-bold text-lg">
            {match.odds.win2}
          </span>
        </button>
      </div>
    </div>
  );
}
