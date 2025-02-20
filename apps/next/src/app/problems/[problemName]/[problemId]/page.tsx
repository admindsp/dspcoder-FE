import { SidebarProvider } from "@dspcoder/ui/components/ui/sidebar";
import ProblemSidebar from "./_components/ProblemSidebar";
import ProblemContent from "./_components/ProblemPageContent";

type ProblemPageProps = {
  params: {
    problemName: string;
    problemId: string;
  };
  searchParams: {
    tab: string;
  };
};

export default async function Problem({
  params,
  searchParams,
}: ProblemPageProps) {
  return (
    <SidebarProvider
      className="blur-0 !min-h-0 max-h-[calc(100vh-47px)] overflow-hidden"
      defaultOpen={false}
    >
      <ProblemSidebar />
      <ProblemContent params={params} searchParams={searchParams} />
    </SidebarProvider>
  );
}
