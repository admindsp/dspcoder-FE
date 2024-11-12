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
  const { problemName, problemId } = params;
  const { tab } = searchParams;

  return <>This is the root page</>;
}
