export default function LeftSidebar() {
  return (
    <aside className="sticky top-[65px] h-[calc(100vh-65px)] w-72 flex-shrink-0 border-r border-r-[#234836] p-4 hidden lg:block">
      <div className="flex h-full flex-col gap-6">
        <div className="px-0 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-full h-full">
              <div className="text-[#92c9ad] flex border-none bg-[#234836] items-center justify-center pl-4 rounded-l-full border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-0 border-none bg-[#234836] focus:border-none h-full placeholder:text-[#92c9ad] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                placeholder="Search teams"
                value=""
              />
            </div>
          </label>
        </div>
        <div className="flex gap-2 flex-wrap px-1">
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-4">
            <p className="text-background-dark text-sm font-bold leading-normal">
              Today
            </p>
          </div>
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#234836] pl-4 pr-4 hover:bg-primary/30 transition-colors">
            <p className="text-white text-sm font-medium leading-normal">
              Tomorrow
            </p>
          </div>
          <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#234836] pl-4 pr-4 hover:bg-primary/30 transition-colors">
            <p className="text-white text-sm font-medium leading-normal">
              This Week
            </p>
          </div>
        </div>
        <div className="flex flex-col p-2">
          <details
            className="flex flex-col border-t border-t-[#32674d] py-2 group"
            open
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
              <p className="text-white text-sm font-medium leading-normal">
                Leagues
              </p>
              <div className="text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="flex flex-col gap-3 pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="form-checkbox bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50"
                  type="checkbox"
                />
                <span className="text-[#92c9ad] text-sm">
                  Champions League
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="form-checkbox bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50"
                  type="checkbox"
                />
                <span className="text-[#92c9ad] text-sm">Bundesliga</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="form-checkbox bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50"
                  type="checkbox"
                />
                <span className="text-[#92c9ad] text-sm">LNH Division 1</span>
              </label>
            </div>
          </details>
          <details className="flex flex-col border-t border-t-[#32674d] py-2 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
              <p className="text-white text-sm font-medium leading-normal">
                Competitions
              </p>
              <div className="text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="flex flex-col gap-3 pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="form-checkbox bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50"
                  type="checkbox"
                />
                <span className="text-[#92c9ad] text-sm">
                  EHF European Cup
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="form-checkbox bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50"
                  type="checkbox"
                />
                <span className="text-[#92c9ad] text-sm">
                  World Championship
                </span>
              </label>
            </div>
          </details>
        </div>
      </div>
    </aside>
  );
}
