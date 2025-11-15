"use client";

import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useUserStore } from "@/store";
import { useEffect } from "react";

export function DashboardHeader() {
  const { address } = useAccount();
  const { setWalletAddress } = useUserStore();

  useEffect(() => {
    setWalletAddress(address ?? null);
  }, [address, setWalletAddress]);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#234836] px-4 sm:px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-6 text-primary">
          <Shield />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          BetHandball
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="#"
          >
            Matches
          </a>
          <a className="text-primary text-sm font-bold leading-normal" href="#">
            Dashboard
          </a>
          <a
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="#"
          >
            Leaderboard
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <ConnectButton />
          <Image
            src="/placeholder.svg"
            alt="User avatar"
            width={40}
            height={40}
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          />
        </div>
      </div>
    </header>
  );
}
