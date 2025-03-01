import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
} from "react";
import dynamic from "next/dynamic";
import type {
  ProblemDescriptionResponseType,
  ProblemType,
} from "@/types/Problem";
import ClientWrapper from "./ClientWrapper";
import { useQuery } from "@tanstack/react-query";
import http_client from "@/app/api/client";

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
  params: {
    problemName: string;
    problemId: string;
  };
  searchParams: {
    tab: string;
  };
};

type TabContentProps = {
  tab: string;
  problemData: ProblemType;
};

export default function ProblemTab({
  tab,
  params,
  searchParams,
}: ProblemTabProps) {
  const { data, isLoading, isError, error, refetch } =
    useQuery<ProblemDescriptionResponseType>({
      queryKey: ["problem-data", params?.problemId],
      queryFn: async () => {
        if (!params?.problemId) {
          throw new Error("Problem ID is required");
        }

        const response = await http_client.get<ProblemDescriptionResponseType>(
          "/api/get_problem_description",
          {
            params: {
              problem_id: params.problemId,
            },
          },
        );
        return response;
      },
      retry: (failureCount, error: any) => {
        return error?.response?.status !== 404 && failureCount < 3;
      },
    });

  if (isLoading) {
    return (
      <div className="flex h-[200px] items-center justify-center">
        <span className="text-white">Problem data is loading.</span>
      </div>
    );
  }

  if (isError) {
    return <div className="text-white">Error fetching problem data.</div>;
  }

  if (!data) {
    return <div className="text-white">Problem Data not found.</div>;
  }

  const { data: problemData } = data;
  console.log("PROBLEM DATA", problemData);
  return (
    <ClientWrapper problemData={problemData}>
      <TabContent tab={tab} problemData={problemData} />
    </ClientWrapper>
  );
}

const TabContent = React.memo(({ tab, problemData }: TabContentProps) => {
  const [isWide, setIsWide] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkWidth = useCallback(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        setIsWide(containerRef.current!.offsetWidth >= 500);
      });
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
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
            markdown={problemData?.readme ?? "Readme not loaded"}
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
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        {renderContent()}
      </Suspense>
    </div>
  );
});

TabContent.displayName = "TabContent";
