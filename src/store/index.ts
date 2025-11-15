import { create } from "zustand";
import { Match } from "@/components/MatchCard";

interface Bet {
  match: Match;
  prediction: "Win 1" | "Draw" | "Win 2";
  odds: number;
}

interface BetSlipState {
  bets: Bet[];
  address: string | null;
  addBet: (bet: Bet) => void;
  removeBet: (betId: number) => void;
  setAddress: (address: string) => void;
}

export const useStore = create<BetSlipState>((set) => ({
  bets: [],
  address: null,
  addBet: (bet) => set((state) => ({ bets: [...state.bets, bet] })),
  removeBet: (betId) =>
    set((state) => ({
      bets: state.bets.filter((b) => b.match.id !== betId),
    })),
  setAddress: (address) => set({ address }),
}));
