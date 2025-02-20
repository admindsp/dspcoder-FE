"use client";

import { useContainer } from "@/contenxt/ContainerProvider";
import { useSession } from "next-auth/react";
import React from "react";

import GithubLogin from "@/components/AuthPopupContent/GithubLogin";
import ProblemCodeEditorLoader from "./_components/ProblemCodeEditorLoader";
import { containerProblemPathAtom, useAtom } from "@dspcoder/jotai";
import ProblemsNavbar from "@/components/ProblemsNavbar/ProblemsNavbar";

const ProblemCodeEditor = () => {
  const { containerUrl, isLoading, isSuccess } = useContainer();
  const { status } = useSession();

  if (status === "unauthenticated")
    return (
      <div className="flex-grow h-full flex flex-col items-center justify-center text-white gap-4">
        <p className="text-lg font-bold">Kindly Login to view your editor.</p>
        <GithubLogin />
      </div>
    );
  if (status === "authenticated" && isLoading)
    return (
      <div className="flex-grow h-full flex items-center justify-center">
        <ProblemCodeEditorLoader />
      </div>
    );

  return (
    <div className="flex flex-col h-full">
      <ProblemsNavbar />
      <div className="flex-grow overflow-hidden">
        <iframe
          src={""}
          className="w-full h-full"
          frameBorder="0"
          title="Code Editor"
        ></iframe>
      </div>
    </div>
  );
};

export default ProblemCodeEditor;
