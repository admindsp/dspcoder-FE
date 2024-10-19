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
    <div className="bg-darkish h-screen md:px-20 md:py-10">
      <ProblemsListFilter type={type} />
      <ProblemsList />
    </div>
  );
};

export default Problems;
