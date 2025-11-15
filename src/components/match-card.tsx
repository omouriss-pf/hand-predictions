import Image from "next/image";

interface Team {
  name: string;
  logo: string;
}

interface Odds {
  win1: number;
  draw: number;
  win2: number;
}

interface MatchCardProps {
  league: string;
  datetime: string;
  team1: Team;
  team2: Team;
  odds: Odds;
  selected?: boolean;
}

export function MatchCard({
  league,
  datetime,
  team1,
  team2,
  odds,
  selected = false,
}: MatchCardProps) {
  const cardClasses = `flex flex-col gap-4 rounded-lg bg-[#234836]/40 p-5 border transition-all ${
    selected
      ? "border-primary/50 ring-2 ring-primary/30"
      : "border-transparent hover:border-primary/50"
  }`;

  return (
    <div className={cardClasses}>
      <div className="flex justify-between items-center text-xs text-[#92c9ad]">
        <span>{league}</span>
        <span>{datetime}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={team1.logo}
            alt={`${team1.name} Logo`}
            width={40}
            height={40}
            className="bg-white/10 rounded-full p-1 object-contain"
          />
          <span className="text-white font-bold text-lg">{team1.name}</span>
        </div>
        <span className="text-[#92c9ad] text-sm">vs</span>
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-lg">{team2.name}</span>
          <Image
            src={team2.logo}
            alt={`${team2.name} Logo`}
            width={40}
            height={40}
            className="bg-white/10 rounded-full p-1 object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-2">
        <button className="group flex flex-col items-center justify-center gap-1 rounded-md bg-[#32674d]/50 p-3 text-center transition-colors hover:bg-primary/20">
          <span className="text-xs text-[#92c9ad] group-hover:text-primary">
            Win 1
          </span>
          <span className="text-white font-bold text-lg">{odds.win1}</span>
        </button>
        <button className={`group flex flex-col items-center justify-center gap-1 rounded-md p-3 text-center transition-colors ${selected ? "bg-primary/20 ring-2 ring-primary/80" : "bg-[#32674d]/50 hover:bg-primary/20"}`}>
          <span className={`text-xs ${selected ? "text-primary" : "text-[#92c9ad] group-hover:text-primary"}`}>
            Draw
          </span>
          <span className="text-white font-bold text-lg">{odds.draw}</span>
        </button>
        <button className="group flex flex-col items-center justify-center gap-1 rounded-md bg-[#32674d]/50 p-3 text-center transition-colors hover:bg-primary/20">
          <span className="text-xs text-[#92c9ad] group-hover:text-primary">
            Win 2
          </span>
          <span className="text-white font-bold text-lg">{odds.win2}</span>
        </button>
      </div>
    </div>
  );
}
