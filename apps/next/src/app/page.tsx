import HomePageContent from "@/components/HomePageContent/HomePageContent";
import { ProblemsSearchParamsType } from "@/types/Problem";

type HomePageProps = {
  searchParams: ProblemsSearchParamsType;
};
export default function Home({ searchParams }: HomePageProps) {
  return (
    <div className="p-4 bg-black">
      <HomePageContent />
    </div>
  );
}
