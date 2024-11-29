import {
  SidebarProvider,
  SidebarTrigger,
} from "@dspcoder/ui/components/ui/sidebar";
import ProblemSidebar from "./_components/ProblemSidebar";
import ProblemPageContent from "./_components/ProblemPageContent";
import ProblemsNavbar from "@/components/ProblemsNavbar/ProblemsNavbar";

export default function ProblemPageLayout({
  children,
  problemCodeEditor,
  problemTab,
  navbar,
}: Readonly<{
  children: React.ReactNode;
  problemCodeEditor: React.ReactNode;
  problemTab: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <>
      {navbar}
      <SidebarProvider
        className="blur-0 !min-h-0 max-h-[calc(100vh-100px)] overflow-hidden"
        defaultOpen={false}
      >
        <ProblemSidebar />

        <ProblemPageContent
          leftContent={problemTab}
          rightContent={problemCodeEditor}
        />
      </SidebarProvider>
    </>
  );
}
