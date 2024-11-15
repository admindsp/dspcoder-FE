import React from "react";

import { Play, Code, Send } from "lucide-react";
import { Button } from "@dspcoder/ui/components/ui/button";
import { tv } from "tailwind-variants";
import { cn } from "@dspcoder/ui/lib/utils";

export const buttonStyles = tv({
  base: "",
  slots: {
    Icon: "mr-1 h-4 w-4",
    Run: "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 hover:text-white font-bold",
    Compile:
      "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 hover:text-white font-bold",
    Submit: "bg-green-700 text-white hover:bg-green-800 font-bold",
  },
});

const ProblemsNavbar = () => {
  const { Icon, Run, Compile, Submit } = buttonStyles();
  return (
    <nav className="bg-[#0e0e0f] z-50 border-b border-zinc-800 text-white py-2 px-4 flex justify-between items-center overflow-hidden h-12 sticky top-0">
      <div className="flex justify-center items-center gap-4 flex-1">
        <Button variant="outline" size="sm" className={cn(Run())}>
          <Play className={cn(Icon())} />
          Run
        </Button>
        <Button variant="outline" size="sm" className={cn(Compile())}>
          <Code className={cn(Icon())} />
          Compile
        </Button>
        <Button variant="default" size="sm" className={cn(Submit())}>
          <Send className={cn(Icon())} />
          Submit
        </Button>
      </div>
    </nav>
  );
};

export default ProblemsNavbar;
