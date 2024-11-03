import ProblemContent from "./_components/ProblemContent";

type ProblemPageProps = {
  params: {
    problemName: string;
    problemId: string;
  };
};

export default async function Problem({ params }: ProblemPageProps) {
  const { problemName, problemId } = params;

  return (
    <>
      <ProblemContent />
    </>
  );
}
