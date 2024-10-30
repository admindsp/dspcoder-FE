import ProblemsList from "./_components/ProblemsList";
import ProblemsListFilter from "./_components/ProblemsListFilter";
import http_client from "../api/client";
import { ProblemsSearchParamsType, ProblemType } from "@/types/Problem";

type ProblemsPageProps = {
  searchParams: ProblemsSearchParamsType;
};

export default async function Problems({ searchParams }: ProblemsPageProps) {
  const { type, title, tags, difficulty } = searchParams;
  const filterPayload = {
    ...(type && { type: type }),
    ...(title && { title: title }),
    ...(difficulty && { difficulty: difficulty }),
    ...(tags && { tags: tags }),
  };

  const problemsData: ProblemType[] = await http_client.get("/api/problems/", {
    params: filterPayload,
  });
  return (
    <div className="px-4 md:px-20 bg-black min-h-screen py-5 sm:py-8 gap-4 flex justify-between">
      <div className="w-full">
        <ProblemsListFilter type={type} />
        <ProblemsList problemsData={problemsData} />
      </div>
    </div>
  );
}
