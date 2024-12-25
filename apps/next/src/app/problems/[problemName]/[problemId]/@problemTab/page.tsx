import React from "react";

import ProblemSubmission from "./_components/ProblemSubmission";
import ProblemSolution from "./_components/ProblemSolution";
import ProblemDiscussion from "./_components/ProblemDiscussion";

import { ProblemType } from "@/types/Problem";
import ProblemDescription from "./_components/ProblemDescription";
import ClientWrapper from "./ClientWrapper";

type Props = {
  params: {
    problemName: string;
    problemId: string;
  };
  searchParams: {
    tab: string;
  };
};

async function fetchProblemData(problemId: string): Promise<ProblemType> {
  const response = await fetch(
    `http://127.0.0.1:8080/api/problems/get-problem-description?id=${problemId}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch problem data: ${response.statusText}`);
  }

  return await response.json();
}

export default async function ProblemTab({ params, searchParams }: Props) {
  const { tab } = searchParams;
  const { problemId } = params;
  const problemData = await fetchProblemData(problemId);

  let content = null;
  if (tab === "submission") content = <ProblemSubmission />;
  if (tab === "solution") content = <ProblemSolution />;
  if (tab === "discussion") content = <ProblemDiscussion />;
  else
    content = (
      <ProblemDescription
        markdown={problemData.readme}
        problemData={problemData}
      />
    );
  return <ClientWrapper problemData={problemData}>{content}</ClientWrapper>;
}
