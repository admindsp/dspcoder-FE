"use client";
import React from "react";
import { Play, Code, Send } from "lucide-react";
import { Button } from "@dspcoder/ui/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@dspcoder/ui/components/ui/select";
import { tv } from "tailwind-variants";
import { cn } from "@dspcoder/ui/lib/utils";
import {
  currentProblemAtom,
  selectedLanguageAtom,
  useAtom,
} from "@dspcoder/jotai";
import http_client from "@/app/api/client";
import { useSession } from "next-auth/react";
import { RunQuestionType, SubmitQuestionType } from "@/types/Problem";
import { profile } from "console";

export const buttonStyles = tv({
  base: "",
  slots: {
    Icon: "mr-1 h-4 w-4",
    Run: "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 hover:text-white font-bold",
    Compile:
      "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 hover:text-white font-bold",
    Submit: "bg-green-800 text-white hover:bg-green-900 font-bold",
  },
});

const ProblemsNavbar = () => {
  const { Icon, Run, Compile, Submit } = buttonStyles();
  const [selectedLanguage, setSelectedLanguage] = useAtom(selectedLanguageAtom);
  const [currentProblem] = useAtom(currentProblemAtom);
  const { data: session } = useSession();

  const handleRun = async () => {
    try {
      const resp = (await http_client.post("/api/run_question", {
        username: session?.user?.name,
        question_id: currentProblem,
        lang: selectedLanguage,
        profile: "true",
      })) as RunQuestionType;
      console.log(resp);
      alert(resp.response.status);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    try {
      const resp = (await http_client.post("/api/submit_question", {
        username: session?.user?.name,
        question_id: currentProblem,
        lang: selectedLanguage,
        profile: "true",
      })) as SubmitQuestionType;
      console.log(resp);
      alert(resp.response.status +" | " + resp.response.output.details);
    } catch (err) {
      console.error(err);
    }
  };

  const handleBuild = async () => {
    try {
      const resp = await http_client.post("/api/build_question", {
        username: session?.user?.name,
        question_id: currentProblem,
        lang: selectedLanguage,
        profile: true,
      });
      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-[#0e0e0f] z-50 border-b border-zinc-800 text-white py-2 px-4 flex justify-between items-center overflow-hidden h-12 sticky top-0">
      <div className="flex items-center gap-4">
        <Button
          onClick={handleRun}
          variant="outline"
          size="sm"
          className={cn(Run())}
        >
          <Play className={cn(Icon())} />
          Run
        </Button>
        <Button
          onClick={handleBuild}
          variant="outline"
          size="sm"
          className={cn(Compile())}
        >
          <Code className={cn(Icon())} />
          Build
        </Button>
        <Button
          onClick={handleSubmit}
          variant="default"
          size="sm"
          className={cn(Submit())}
        >
          <Send className={cn(Icon())} />
          Submit
        </Button>
      </div>
      <div>
        <Select
          defaultValue={selectedLanguage}
          onValueChange={(value) => setSelectedLanguage(value)}
        >
          <SelectTrigger className="w-[120px] bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 outline-none border-none ring-0 focus:ring-0">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent className="ring-0 focus:ring-0 outline-none border-none">
            <SelectItem value="C">C</SelectItem>
            {/* <SelectItem value="cpp">C++</SelectItem> */}
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
};

export default ProblemsNavbar;
