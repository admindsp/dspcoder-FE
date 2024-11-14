import {
  SidebarProvider,
  SidebarTrigger,
} from "@dspcoder/ui/components/ui/sidebar";
import ProblemSidebar from "./_components/ProblemSidebar";
import ProblemPageContent from "./_components/ProblemPageContent";

export default function ProblemPageLayout({
  children,
  problemCodeEditor,
  problemTab,
}: Readonly<{
  children: React.ReactNode;
  problemCodeEditor: React.ReactNode;
  problemTab: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="blur-0 " defaultOpen={false}>
      <div className="relative">
        <ProblemSidebar />
        <SidebarTrigger className="text-white font-bold absolute -right-6 top-0 z-20" />
      </div>

      <ProblemPageContent
        leftContent={problemTab}
        rightContent={problemCodeEditor}
      />
    </SidebarProvider>
  );
}
