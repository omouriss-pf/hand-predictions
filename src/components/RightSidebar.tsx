"use client";
import { useStore } from "@/store";

export default function RightSidebar() {
  const { bets, removeBet } = useStore();

  const totalStake = 0; // Replace with actual calculation
  const potentialWinnings = 0; // Replace with actual calculation

  return (
    <aside className="sticky top-[65px] h-[calc(100vh-65px)] w-80 flex-shrink-0 border-l border-l-[#234836] p-5 hidden xl:block">
      <div className="flex h-full flex-col justify-between rounded-lg bg-[#234836]/40 p-5">
        <div className="flex flex-col gap-6">
          <h3 className="text-white text-xl font-bold">Bet Slip</h3>
          <div className="flex flex-col gap-4">
            {bets.length === 0 ? (
              <p className="text-center text-sm text-[#92c9ad] py-4">
                Your bet slip is empty
              </p>
            ) : (
              bets.map((bet) => (
                <div
                  key={bet.match.id}
                  className="flex flex-col gap-2 rounded-md bg-[#32674d]/50 p-3"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-white text-sm">
                      {bet.match.team1.name} vs {bet.match.team2.name}
                    </p>
                    <button
                      className="text-[#92c9ad] hover:text-white transition-colors"
                      onClick={() => removeBet(bet.match.id)}
                    >
                      <span className="material-symbols-outlined !text-base">
                        close
                      </span>
                    </button>
                  </div>
                  <p className="text-[#92c9ad] text-xs">
                    Prediction:{" "}
                    <span className="text-primary font-medium">
                      {bet.prediction}
                    </span>
                  </p>
                  <p className="text-white font-bold text-right">{bet.odds}</p>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-t-[#32674d] pt-4">
          <div>
            <label
              className="block text-xs text-[#92c9ad] mb-1"
              htmlFor="stake"
            >
              Stake Amount
            </label>
            <div className="relative">
              <input
                className="w-full rounded-md border-none bg-[#102219] py-2 pl-3 pr-20 text-white placeholder:text-[#92c9ad]"
                id="stake"
                placeholder="0.00"
                type="text"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <select className="form-select h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-8 text-primary focus:ring-0">
                  <option>ETH</option>
                  <option>USDC</option>
                  <option>DAI</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#92c9ad]">Total Stake:</span>
            <span className="text-white font-medium">{totalStake.toFixed(2)} ETH</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#92c9ad]">Potential Winnings:</span>
            <span className="text-primary font-bold">
              {potentialWinnings.toFixed(2)} ETH
            </span>
          </div>
          <button
            className="w-full cursor-pointer items-center justify-center rounded-full h-12 px-4 bg-primary text-background-dark text-base font-bold tracking-[0.015em] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={bets.length === 0}
          >
            Place Bet
          </button>
        </div>
      </div>
    </aside>
  );
}
