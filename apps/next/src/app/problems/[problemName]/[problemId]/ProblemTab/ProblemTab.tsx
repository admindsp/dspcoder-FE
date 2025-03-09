"use client";

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

import { useQuery } from "@tanstack/react-query";
import http_client from "@/app/api/client";
import { getProblemName } from "@/utils/getProblemName";
import { cookieUtils } from "@/utils/cookies";
import { useSession } from "next-auth/react";

import type { SetupUserCodeBaseType } from "@/types/Container";
import ProblemSkeleton from "./_components/ProlemSkeleton";
import {
  containerProblemPathAtom,
  currentProblemAtom,
  selectedLanguageAtom,
  useAtom,
} from "@dspcoder/jotai";

const ProblemSubmission = dynamic(
  () => import("./_components/ProblemSubmission"),
  {
    loading: () => <ProblemSkeleton />,
  }
);
const ProblemSolution = dynamic(() => import("./_components/ProblemSolution"), {
  loading: () => <ProblemSkeleton />,
});
const ProblemDiscussion = dynamic(
  () => import("./_components/ProblemDiscussion"),
  {
    loading: () => <ProblemSkeleton />,
  }
);
const ProblemDescription = dynamic(
  () => import("./_components/ProblemDescription"),
  {
    loading: () => <ProblemSkeleton />,
  }
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
  const [currentProblem, setCurrentProblem] = useAtom(currentProblemAtom);
  const { data, isLoading, isError } = useQuery<ProblemDescriptionResponseType>(
    {
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
          }
        );
        return response;
      },
      retry: (failureCount, error: any) => {
        return error?.response?.status !== 404 && failureCount < 3;
      },
    }
  );

  if (isLoading) {
    return (
      <div className="flex h-[200px] items-center justify-center">
        <ProblemSkeleton />
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
  if (problemData?.file_path) {
    setCurrentProblem(getProblemName(problemData.file_path));
  }

  return <TabContent tab={tab} problemData={problemData} />;
}

// Separate TabContent component with proper memoization
const TabContent = React.memo(({ tab, problemData }: TabContentProps) => {
  const [isWide, setIsWide] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerUrl = cookieUtils.getContainerUrl();
  const [, setContainerUrl] = useAtom(containerProblemPathAtom);
  const { data: sessionData } = useSession();
  const [currentProblem] = useAtom(currentProblemAtom);
  const [selectedLanguage] = useAtom(selectedLanguageAtom);

  const checkWidth = useCallback(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        setIsWide(containerRef.current!.offsetWidth >= 500);
      });
    }
  }, []);

  useEffect(() => {
    checkWidth();

    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [checkWidth]);

  const { data: setupCodeBaseData } = useQuery({
    queryKey: [
      "setup-code-base",
      sessionData?.user?.email,
      currentProblem,
      selectedLanguage,
    ],
    queryFn: async () => {
      try {
        const response = (await http_client.post("/api/setup_user_codebase", {
          username: sessionData?.user?.name,
          question_id: currentProblem,
          lang: selectedLanguage,
          original: "True",
        })) as SetupUserCodeBaseType;

        if (response.response) {
          cookieUtils.setContainerUrl(response.response);
          setContainerUrl(response.response);
        }
        return response;
      } catch (error) {
        console.error("Error setting up code base:", error);
        throw error;
      }
    },

    enabled: true,
  });

  const wrapClass = isWide ? "text-wrap" : "text-nowrap overflow-x-auto";

  const renderContent = () => {
    switch (tab) {
      case "submission":
        return <ProblemSubmission />;
      case "solution":
        return <ProblemSolution markdown={problemData?.solution} />;
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
