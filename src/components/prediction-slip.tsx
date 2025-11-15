"use client";

import { X, Trash2, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useBetSlipStore, useUserStore } from "@/store";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface PredictionSlipProps {
  match: {
    team1: string;
    team2: string;
    image: string;
  };
  prediction: string;
  betType: string;
}

export function PredictionSlip({
  match,
  prediction,
  betType,
}: PredictionSlipProps) {
  const { addBet } = useBetSlipStore();
  const { walletAddress } = useUserStore();

  const handlePlaceBet = () => {
    addBet({
      id: Date.now(),
      match: `${match.team1} vs ${match.team2}`,
      prediction,
      odds: 2.5, // Example odds
    });
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-background-light dark:bg-[#121212] shadow-2xl overflow-hidden border border-white/10">
      {/* Header */}
      <div className="p-5 border-b border-white/10">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-xl font-bold">Your Bet Slip</h2>
          <button className="text-gray-400 hover:text-white transition-colors">
            <X />
          </button>
        </div>
      </div>
      <div className="p-5 space-y-6">
        {/* Match Card */}
        <div className="flex gap-4 bg-transparent justify-between items-start">
          <div className="flex items-start gap-4 flex-grow">
            <Image
              src={match.image}
              alt={`${match.team1} vs ${match.team2} match image`}
              width={60}
              height={60}
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            />
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal">
                {match.team1} vs {match.team2}
              </p>
              <p className="text-gray-400 text-sm font-normal leading-normal">
                Your Prediction: {prediction}
              </p>
              <p className="text-gray-400 text-sm font-normal leading-normal">
                Bet Type: {betType}
              </p>
            </div>
          </div>
          <button className="shrink-0 text-gray-400 hover:text-white transition-colors">
            <Trash2 className="text-xl" />
          </button>
        </div>
        {/* Divider */}
        <div className="border-b border-white/10"></div>
        {/* Wager Configuration */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Token Selector */}
          <div className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-sm font-medium pb-2">Choose Token</p>
            <Select>
              <SelectTrigger className="w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/20 bg-[#1E1E1E] h-14 placeholder:text-gray-400 p-3 text-base font-normal leading-normal">
                <SelectValue placeholder="ETH" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="btc">BTC</SelectItem>
                <SelectItem value="usdc">USDC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Amount Input */}
          <div className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-sm font-medium pb-2">Enter Amount</p>
            <div className="flex w-full flex-1 items-stretch rounded-lg">
              <Input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/20 bg-[#1E1E1E] h-14 placeholder:text-gray-400 p-3 text-base font-normal leading-normal border-r-0"
                placeholder="0.00"
              />
              <Button
                variant="outline"
                className="text-primary flex border border-white/20 bg-[#1E1E1E] items-center justify-center px-4 rounded-r-lg border-l-0 text-sm font-bold hover:bg-primary/10 transition-colors"
              >
                MAX
              </Button>
            </div>
          </div>
        </div>
        {/* Summary Section */}
        <div className="p-4 bg-[#1E1E1E] rounded-lg">
          <div className="flex justify-between gap-x-6 py-1.5">
            <p className="text-gray-400 text-sm font-normal">Stake Amount</p>
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
        {walletAddress ? (
          <Button
            className="w-full bg-primary text-black font-bold py-4 px-6 rounded-lg text-base flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(19,236,128,0.4)] h-14"
            onClick={handlePlaceBet}
          >
            Place Bet
          </Button>
        ) : (
          <ConnectButton.Custom>
            {({ openConnectModal }) => (
              <Button
                className="w-full bg-primary text-black font-bold py-4 px-6 rounded-lg text-base flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(19,236,128,0.4)] h-14"
                onClick={openConnectModal}
              >
                <Wallet />
                Connect Wallet to Place Bet
              </Button>
            )}
          </ConnectButton.Custom>
        )}
      </div>
    </div>
  );
}
