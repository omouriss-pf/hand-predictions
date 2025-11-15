import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MatchCard from "@/components/MatchCard";
import matches from "@/data/matches.json";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="flex flex-1">
          <LeftSidebar />
          <main className="flex-1 p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </main>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
