"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useStore } from "@/store";
import { useEffect } from "react";

export default function Header() {
  const { address, isConnected } = useAccount();
  const { setAddress } = useStore();

  useEffect(() => {
    if (isConnected && address) {
      setAddress(address);
    }
  }, [address, isConnected, setAddress]);

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#234836] bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-8 md:px-10">
      <div className="flex items-center gap-4 text-white">
        <div className="size-6 text-primary">
          <span className="material-symbols-outlined !text-3xl">shield</span>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
          HandballBet
        </h2>
      </div>
      <div className="hidden items-center gap-9 md:flex">
        <a
          className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
          href="/"
        >
          Matches
        </a>
        <a
          className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
          href="#"
        >
          My Bets
        </a>
        <a
          className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
          href="/dashboard"
        >
          Dashboard
        </a>
      </div>
      <div className="flex items-center gap-4">
        <ConnectButton />
        <button className="md:hidden text-white">
          <span className="material-symbols-outlined !text-2xl">menu</span>
        </button>
      </div>
    </header>
  );
}
