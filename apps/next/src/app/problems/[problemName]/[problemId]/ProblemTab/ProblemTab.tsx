import React from "react";
import dynamic from "next/dynamic";
import { ProblemType } from "@/types/Problem";
import ClientWrapper from "./ClientWrapper";

const ProblemSubmission = dynamic(
  () => import("./_components/ProblemSubmission")
);
const ProblemSolution = dynamic(() => import("./_components/ProblemSolution"));
const ProblemDiscussion = dynamic(
  () => import("./_components/ProblemDiscussion")
);
const ProblemDescription = dynamic(
  () => import("./_components/ProblemDescription")
);

type ProblemTabProps = {
  tab: string;
  problemData: ProblemType;
};

export default function ProblemTab({ tab, problemData }: ProblemTabProps) {
  return (
    <ClientWrapper problemData={problemData}>
      <TabContent tab={tab} problemData={problemData} />
    </ClientWrapper>
  );
}

const TabContent = React.memo(({ tab, problemData }: ProblemTabProps) => {
  switch (tab) {
    case "submission":
      return <ProblemSubmission />;
    case "solution":
      return <ProblemSolution />;
    case "discussion":
      return <ProblemDiscussion />;
    default:
      return (
        <ProblemDescription
          markdown={problemData?.readme ?? ""}
          problemData={problemData}
        />
      );
  }
});

TabContent.displayName = "TabContent";
