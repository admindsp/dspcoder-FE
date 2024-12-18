import React from "react";

import ProblemSubmission from "./_components/ProblemSubmission";
import ProblemSolution from "./_components/ProblemSolution";
import ProblemDiscussion from "./_components/ProblemDiscussion";

import { ProblemType } from "@/types/Problem";
import ProblemDescription from "./_components/ProblemDescription";

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

  if (tab === "submission") return <ProblemSubmission />;
  if (tab === "solution") return <ProblemSolution />;
  if (tab === "discussion") return <ProblemDiscussion />;
  return (
    <ProblemDescription
      markdown={problemData.readme}
      problemData={problemData}
    />
  );
}
