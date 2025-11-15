"use client";

import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function LeftSidebar() {
  return (
    <aside className="sticky top-[65px] h-[calc(100vh-65px)] w-72 flex-shrink-0 border-r border-r-[#234836] p-4 hidden lg:block">
      <div className="flex h-full flex-col gap-6">
        <div className="px-0 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#92c9ad]" />
            <Input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-0 border-none bg-[#234836] focus:border-none h-12 placeholder:text-[#92c9ad] px-4 pl-10 text-base font-normal leading-normal"
              placeholder="Search teams"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap px-1">
          <Button
            variant="default"
            className="h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-4 text-background-dark text-sm font-bold leading-normal"
          >
            Today
          </Button>
          <Button
            variant="ghost"
            className="h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#234836] pl-4 pr-4 text-white text-sm font-medium leading-normal hover:bg-primary/30"
          >
            Tomorrow
          </Button>
          <Button
            variant="ghost"
            className="h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#234836] pl-4 pr-4 text-white text-sm font-medium leading-normal hover:bg-primary/30"
          >
            This Week
          </Button>
        </div>
        <div className="flex flex-col p-2">
          <Accordion type="multiple" defaultValue={["leagues"]}>
            <AccordionItem value="leagues" className="border-t border-t-[#32674d]">
              <AccordionTrigger className="flex cursor-pointer list-none items-center justify-between gap-6 py-2 text-white text-sm font-medium leading-normal">
                Leagues
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3">
                  <Checkbox id="champions-league" className="bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50" />
                  <label htmlFor="champions-league" className="text-[#92c9ad] text-sm cursor-pointer">
                    Champions League
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="bundesliga" className="bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50" />
                  <label htmlFor="bundesliga" className="text-[#92c9ad] text-sm cursor-pointer">
                    Bundesliga
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="lnh-division-1" className="bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50" />
                  <label htmlFor="lnh-division-1" className="text-[#92c9ad] text-sm cursor-pointer">
                    LNH Division 1
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="competitions" className="border-t border-t-[#32674d]">
              <AccordionTrigger className="flex cursor-pointer list-none items-center justify-between gap-6 py-2 text-white text-sm font-medium leading-normal">
                Competitions
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3">
                  <Checkbox id="ehf-european-cup" className="bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50" />
                  <label htmlFor="ehf-european-cup" className="text-[#92c9ad] text-sm cursor-pointer">
                    EHF European Cup
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="world-championship" className="bg-[#234836] border-[#32674d] rounded-sm text-primary focus:ring-primary/50" />
                  <label htmlFor="world-championship" className="text-[#92c9ad] text-sm cursor-pointer">
                    World Championship
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </aside>
  );
}
