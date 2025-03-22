"use client";
import React from "react";
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
import {
  BuildQuestionType,
  RunQuestionType,
  SubmitQuestionType,
} from "@/types/Problem";
import { profile } from "console";
import Logo from "../Navbar/Logo";
import Link from "next/link";
import { Code, Play, Send } from "lucide-react";
import AuthenticatedSection from "../Navbar/AuthenticatedSection";
import { useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleRun = async () => {
    try {
      const resp = (await http_client.post("/api/run_question", {
        username: session?.user?.name,
        question_id: currentProblem,
        lang: selectedLanguage,
        profile: "true",
      })) as RunQuestionType;
    } catch (err) {
      console.error(err);
    }
  };

  const updateTabParam = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("tab", "submission");
    newSearchParams.set("submitted", "true");
    router.replace(`?${newSearchParams.toString()}`);
  };

  const handleSubmit = async () => {
    updateTabParam();
  };

  const handleBuild = async () => {
    try {
      const resp = (await http_client.post("/api/build_question", {
        username: session?.user?.name,
        question_id: currentProblem,
        lang: selectedLanguage,
      })) as BuildQuestionType;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-[#0e0e0f] z-50 border-b border-zinc-800 text-white py-2 px-4 flex justify-between items-center overflow-hidden h-12 sticky top-0">
      <div className="flex items-center gap-6">
        <Link className="flex gap-2 items-center" href="/">
          <Logo />
        </Link>

        <div className="h-6 border-l border-[#2B2B2B]" />

        <Link
          href="/problems"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
        >
          Problems
        </Link>
      </div>

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

        <div>
          <Select
            defaultValue={selectedLanguage}
            onValueChange={(value) => setSelectedLanguage(value)}
          >
            <SelectTrigger className="w-[120px] bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 outline-none border-none ring-0 focus:ring-0">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="ring-0 focus:ring-0 outline-none border-none">
              <SelectItem value="c">C</SelectItem>
              <SelectItem value="cpp">CPP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <AuthenticatedSection />
      </div>
    </nav>
  );
};

export default ProblemsNavbar;
