"use client";

import { ProblemsSearchParamsType, ProblemType } from "@/types/Problem";
import { ProblemsProvider } from "@/contenxt/ProblemsProvider";
import { ProblemPageContainer } from "./[problemName]/[problemId]/_components/problems_page_container";

type ProblemsPageProps = {
  searchParams: ProblemsSearchParamsType;
};

export default function Problems({ searchParams }: ProblemsPageProps) {
  const { type } = searchParams;

  return (
    <ProblemsProvider searchParams={searchParams}>
      <ProblemPageContainer type={type} />
    </ProblemsProvider>
  );
}
