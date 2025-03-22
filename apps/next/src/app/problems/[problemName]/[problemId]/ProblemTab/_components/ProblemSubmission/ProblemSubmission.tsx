"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Skeleton from "@/components/Skeleton/Skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@dspcoder/ui/components/ui/Tabs";
import { useQuery } from "@tanstack/react-query";
import type { SubmitQuestionType } from "@/types/Problem";
import { useSession } from "next-auth/react";
import {
  currentProblemAtom,
  selectedLanguageAtom,
  useAtom,
} from "@dspcoder/jotai";
import http_client from "@/app/api/client";
import { SubmissionStatusCard } from "./status-card";
import { TestCaseResults } from "./test-case-results";
import { MemoryProfile } from "./memory-profile";
import { CacheProfile } from "./cache-profile";

const ProblemSubmission = () => {
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const submittedFromUrl = searchParams.get("submitted") === "true";

  const [submitted, setSubmitted] = useState(submittedFromUrl);
  const [selectedLanguage] = useAtom(selectedLanguageAtom);
  const [currentProblem] = useAtom(currentProblemAtom);
  const [activeTab, setActiveTab] = useState("results");

  const {
    data: submissionData,
    isLoading,
    isError,
    refetch,
  } = useQuery<SubmitQuestionType>({
    queryKey: ["submission-data", currentProblem, selectedLanguage, submitted],
    queryFn: async () => {
      const resp = (await http_client.post("/api/submit_question", {
        username: session?.user?.name,
        question_id: currentProblem,
        lang: selectedLanguage,
        profile: "true",
      })) as SubmitQuestionType;

      return resp;
    },
    retry: (failureCount, error: any) => {
      return failureCount < 3;
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (submitted) {
      refetch();
    }
  }, [submitted, refetch]);

  useEffect(() => {
    const newSubmitted = searchParams.get("submitted") === "true";

    if (newSubmitted) {
      setSubmitted(true);
    }
  }, [searchParams]);

  if (isLoading) {
    return <Skeleton className="h-96" />;
  }
  if (!submissionData) return null;

  const { output } = submissionData.response;
  const parsedOutput = typeof output === "string" ? JSON.parse(output) : output;

  const { metadata, test_cases } = parsedOutput;

  const passedTestCases = Object.values(test_cases).filter(
    (tc: any) => tc.status === "PASS"
  ).length;
  const totalTestCases = Object.keys(test_cases).length;

  return (
    <div className="space-y-6 text-white min-w-[430px]">
      <SubmissionStatusCard
        metadata={metadata}
        passedTestCases={passedTestCases}
        totalTestCases={totalTestCases}
      />

      <Tabs
        defaultValue="results"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 mb-4 bg-darkish_100 border border-gray-700">
          <TabsTrigger
            value="results"
            className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-white"
          >
            Test Results
          </TabsTrigger>
          <TabsTrigger
            value="memory"
            className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-white"
          >
            Memory Profile
          </TabsTrigger>
          <TabsTrigger
            value="cache"
            className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-white"
          >
            Cache Profile
          </TabsTrigger>
        </TabsList>

        <TabsContent value="results" className="mt-0">
          <TestCaseResults
            testCases={test_cases}
            passedTestCases={passedTestCases}
            totalTestCases={totalTestCases}
          />
        </TabsContent>

        <TabsContent value="memory" className="mt-0">
          <MemoryProfile memStat={metadata.mem_stat} />
        </TabsContent>

        <TabsContent value="cache" className="mt-0">
          <CacheProfile cacheProfile={metadata.mem_stat.cache_profile} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProblemSubmission;
