import { Calendar } from "@dspcoder/ui/components/ui/calendar";
import ProblemsList from "./_components/ProblemsList";
import ProblemsListFilter from "./_components/ProblemsListFilter";

type ProblemsPageProps = {
  searchParams: {
    type?: string;
  };
};

const Problems = ({ searchParams }: ProblemsPageProps) => {
  const { type } = searchParams;
  return (
    <div className="bg-darkish h-screen md:px-20 md:py-10 flex justify-between gap-4">
      <div className="w-full">
        <ProblemsListFilter type={type} />
        <ProblemsList />
      </div>
      <div>
        <Calendar className="text-white p-4 rounded-md border border-whitish" />
      </div>
    </div>
  );
};

export default Problems;
