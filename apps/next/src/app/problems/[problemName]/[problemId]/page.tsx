import { SidebarProvider } from "@dspcoder/ui/components/ui/sidebar";
import ProblemSidebar from "./_components/ProblemSidebar";
import ProblemContent from "./_components/ProblemPageContent";
import { ProblemType } from "@/types/Problem";

type ProblemPageProps = {
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
    `http://dspcoder-apibackend.onrender.com/api/problems/get-problem-description?id=${problemId}`,
    { cache: "no-store" } // This ensures fresh data on each request
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch problem data: ${response.statusText}`);
  }

  return await response.json();
}

export default async function Problem({
  params,
  searchParams,
}: ProblemPageProps) {
  const { problemId } = params;
  const problemData = await fetchProblemData(problemId);

  return (
    <SidebarProvider
      className="blur-0 !min-h-0 max-h-[calc(100vh-47px)] overflow-hidden"
      defaultOpen={false}
    >
      <ProblemSidebar />
      <ProblemContent
        problemData={problemData}
        params={params}
        searchParams={searchParams}
      />
    </SidebarProvider>
  );
}
