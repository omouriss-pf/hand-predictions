"use client";
import prediction from "@/data/prediction.json";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function PredictionSlip() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-background-light dark:bg-[#121212] shadow-2xl overflow-hidden border border-white/10">
        {/* Header */}
        <div className="p-5 border-b border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-white text-xl font-bold">Your Bet Slip</h2>
            <button className="text-gray-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <div className="p-5 space-y-6">
          {/* Match Card */}
          <div className="flex gap-4 bg-transparent justify-between items-start">
            <div className="flex items-start gap-4 flex-grow">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[60px]"
                data-alt={`Abstract gradient representing ${prediction.match.team1} vs ${prediction.match.team2} match`}
                style={{
                  backgroundImage: `url("${prediction.match.image}")`,
                }}
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal">
                  {prediction.match.team1} vs {prediction.match.team2}
                </p>
                <p className="text-gray-400 text-sm font-normal leading-normal">
                  Your Prediction: {prediction.prediction}
                </p>
                <p className="text-gray-400 text-sm font-normal leading-normal">
                  Bet Type: {prediction.betType}
                </p>
              </div>
            </div>
            <button className="shrink-0 text-gray-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl">
                delete
              </span>
            </button>
          </div>
          {/* Divider */}
          <div className="border-b border-white/10"></div>
          {/* Wager Configuration */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Token Selector */}
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-sm font-medium pb-2">
                Choose Token
              </p>
              <select
                className="form-select w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/20 bg-[#1E1E1E] h-14 placeholder:text-gray-400 p-3 text-base font-normal leading-normal appearance-none bg-no-repeat bg-right-4"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1uGLtK8A9WcpZ8TKOiuX3LPV-535_eZdGi7GjSnENw5KzRPKT0x-or-Ga9xP6wNJHi5-gCHa0Ns3ZV5Ei7mbksAPCI42qx9l46K8_jiaHejcaUORrlQn8ASXTIlSzRMPRS6BiMwUCofCtkJiAaTBoSspdkA6ehIimTtpcTXeH_9bmiv9jiu3zMk5vV-WIdBY2Pz18dW7X6lzpOtwIRMDegigByTthl_rACb5e8pyyU0Nbl-LmhYzkHInlSRpjORu-2TNs9SNABqQ")',
                }}
              >
                <option>ETH</option>
                <option>BTC</option>
                <option>USDC</option>
              </select>
            </label>
            {/* Amount Input */}
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-sm font-medium pb-2">
                Enter Amount
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/20 bg-[#1E1E1E] h-14 placeholder:text-gray-400 p-3 text-base font-normal leading-normal border-r-0"
                  placeholder="0.00"
                  value=""
                />
                <button className="text-primary flex border border-white/20 bg-[#1E1E1E] items-center justify-center px-4 rounded-r-lg border-l-0 text-sm font-bold hover:bg-primary/10 transition-colors">
                  MAX
                </button>
              </div>
            </label>
          </div>
          {/* Summary Section */}
          <div className="p-4 bg-[#1E1E1E] rounded-lg">
            <div className="flex justify-between gap-x-6 py-1.5">
              <p className="text-gray-400 text-sm font-normal">
                Stake Amount
              </p>
              <p className="text-white text-sm font-medium text-right">
                0.00 ETH
              </p>
            </div>
            <div className="flex justify-between gap-x-6 py-1.5">
              <p className="text-gray-400 text-sm font-normal">
                Potential Winnings
              </p>
              <p className="text-white text-sm font-medium text-right">
                0.00 ETH
              </p>
            </div>
            <div className="flex justify-between gap-x-6 py-1.5">
              <p className="text-gray-400 text-sm font-normal">
                Network Fees (est.)
              </p>
              <p className="text-white text-sm font-medium text-right">
                ~0.001 ETH
              </p>
            </div>
          </div>
        </div>
        {/* Footer with CTA */}
        <div className="p-5 border-t border-white/10">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button
                          onClick={openConnectModal}
                          type="button"
                          className="w-full bg-primary text-black font-bold py-4 px-6 rounded-lg text-base flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(19,236,128,0.4)]"
                        >
                          <span className="material-symbols-outlined">
                            account_balance_wallet
                          </span>
                          Connect Wallet to Place Bet
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button
                          onClick={openChainModal}
                          type="button"
                          className="w-full bg-red-500 text-white font-bold py-4 px-6 rounded-lg text-base flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
                        >
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="w-full bg-primary text-black font-bold py-4 px-6 rounded-lg text-base flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(19,236,128,0.4)]"
                      >
                        Place Bet
                      </button>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </div>
  );
}
