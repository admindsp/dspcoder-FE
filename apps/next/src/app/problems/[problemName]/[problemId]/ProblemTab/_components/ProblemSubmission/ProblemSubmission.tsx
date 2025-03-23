"use client";

import { useState } from "react";

import Skeleton from "@/components/Skeleton/Skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@dspcoder/ui/components/ui/tabs";

import { useSession } from "next-auth/react";

import { SubmissionStatusCard } from "./status-card";
import { TestCaseResults } from "./test-case-results";
import { MemoryProfile } from "./memory-profile";
import { CacheProfile } from "./cache-profile";
import { useSubmission } from "@/contenxt/SubmissionProvider";
import { SubmissionError } from "./submission-error";
import { UnauthenticatedError } from "./unauthenticated-error";

const ProblemSubmission = () => {
  const [activeTab, setActiveTab] = useState("results");
  const { status } = useSession();
  const { submissionData, isLoading, isError } = useSubmission();

  if (status === "unauthenticated") return <UnauthenticatedError />;
  if (isLoading) {
    return <Skeleton className="h-96" />;
  }
  if (!submissionData || isError) return <SubmissionError />;

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
