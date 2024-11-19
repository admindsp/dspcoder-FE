"use client";

import { useContainer } from "@/contenxt/ContainerProvider";
import { useSession } from "next-auth/react";
import React from "react";

import GithubLogin from "@/components/AuthPopupContent/GithubLogin";
import ProblemCodeEditorLoader from "./_components/ProblemCodeEditorLoader";

type Props = {};

const ProblemCodeEditor = (props: Props) => {
  const { containerDetails, isLoading, isSuccess } = useContainer();
  const { status } = useSession();
  const path = "http://" + containerDetails?.default_folder_path;

  return (
    <div className="flex flex-col h-full">
      {status === "authenticated" && isLoading && (
        <div className="flex-grow flex items-center justify-center">
          <ProblemCodeEditorLoader />
        </div>
      )}

      {status === "authenticated" && !isLoading && (
        <div className="flex-grow flex">
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
