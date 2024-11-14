import React from "react";

import ProblemSubmission from "./_components/ProblemSubmission";
import ProblemSolution from "./_components/ProblemSolution";
import ProblemDiscussion from "./_components/ProblemDiscussion";
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

export default async function ProblemTab({ params, searchParams }: Props) {
  const { tab } = searchParams;

  if (tab === "submission") return <ProblemSubmission />;
  if (tab === "solution") return <ProblemSolution />;
  if (tab === "discussion") return <ProblemDiscussion />;
  return <ProblemDescription />;
}
