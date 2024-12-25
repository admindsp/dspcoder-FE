"use client";

import { useContainer } from "@/contenxt/ContainerProvider";
import { useSession } from "next-auth/react";
import React from "react";

import GithubLogin from "@/components/AuthPopupContent/GithubLogin";
import ProblemCodeEditorLoader from "./_components/ProblemCodeEditorLoader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@dspcoder/ui/components/ui/select";
import { containerProblemPathAtom, useAtom } from "@dspcoder/jotai";

type Props = {
  params: {
    problemName: string;
    problemId: string;
  };
  searchParams: {
    tab: string;
  };
};

const ProblemCodeEditor = async ({ params, searchParams }: Props) => {
  const { problemId } = params;
  // const problemData = await fetchProblemData(problemId);
  console.log("Problem id", problemId);
  const { containerDetails, isLoading, isSuccess } = useContainer();
  const { status } = useSession();
  const [containerProblemPath] = useAtom(containerProblemPathAtom);
  let path = "http://" + containerDetails?.default_folder_path;
  if (containerProblemPath) path = containerProblemPath;

  return (
    <div className="flex flex-col h-full">
      {status === "authenticated" && isLoading && (
        <div className="flex-grow flex items-center justify-center">
          <ProblemCodeEditorLoader />
        </div>
      )}

      {status === "authenticated" && !isLoading && (
        <div className="relative flex-grow">
          <Select defaultValue="C">
            <SelectTrigger className="max-w-[100px] bg-white text-black h-[24px] z-50 w-full absolute right-2 top-10 ">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="C" className="h-[24px]">
                C
              </SelectItem>
            </SelectContent>
          </Select>

          <iframe
            src={path}
            className="w-full h-full"
            frameBorder="0"
            title="Code Editor"
          ></iframe>
        </div>
      )}

      {status === "unauthenticated" && (
        <div className="flex-grow flex flex-col items-center justify-center text-white gap-4">
          <p className="text-lg font-bold">Kindly Login to view your editor.</p>
          <GithubLogin />
        </div>
      )}
    </div>
  );
};

export default ProblemCodeEditor;
