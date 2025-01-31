import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import type { ProblemType } from "@/types/Problem";
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
  const [isWide, setIsWide] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const checkWidth = useCallback(() => {
    if (containerRef.current) {
      const newIsWide = containerRef.current.offsetWidth >= 500;
      setIsWide((prevIsWide) => {
        if (prevIsWide !== newIsWide) {
          return newIsWide;
        }
        return prevIsWide;
      });
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      resizeTimerRef.current = setTimeout(checkWidth, 0);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [checkWidth]);

  const wrapClass = isWide ? "text-wrap" : "text-nowrap overflow-x-auto";

  const renderContent = () => {
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
  };

  return (
    <div
      ref={containerRef}
      className={`w-full h-[calc(100vh-50px)] overflow-y-auto bg-darkish_100 p-6 ${wrapClass}`}
    >
      {renderContent()}
    </div>
  );
});

TabContent.displayName = "TabContent";
