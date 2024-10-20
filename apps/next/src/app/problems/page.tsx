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
    <div className="container bg-darkish min-h-screen md:py-10 gap-4 flex justify-between">
      <div className="w-full">
        <ProblemsListFilter type={type} />
        <ProblemsList />
      </div>

      {/* <Calendar className="text-white p-4 rounded-md border border-whitish w-fit h-fit hidden lg:block" /> */}
    </div>
  );
};

export default Problems;
