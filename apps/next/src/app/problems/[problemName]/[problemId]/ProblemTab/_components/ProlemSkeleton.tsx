import Skeleton from "@/components/Skeleton/Skeleton";

const ProblemSkeleton = () => {
  return (
    <div className="mx-4 w-full ">
      <div className="mb-6">
        <Skeleton className="h-8 w-1/2 rounded mb-4" />
        <div className="flex items-center space-x-4 text-sm">
          <Skeleton className="h-6 w-24 rounded" />
          <Skeleton className="h-6 w-32 rounded" />
          <Skeleton className="h-6 w-32 rounded" />{" "}
        </div>
      </div>
      <div className="mb-6">
        <Skeleton className="h-6 w-1/4 rounded mb-2" />{" "}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-24 rounded" />
          <Skeleton className="h-6 w-24 rounded" />
          <Skeleton className="h-6 w-24 rounded" />
        </div>
      </div>
      <div className="mb-6">
        <Skeleton className="h-6 w-1/4 rounded mb-2" />{" "}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-32 rounded" />
          <Skeleton className="h-6 w-32 rounded" />
          <Skeleton className="h-6 w-32 rounded" />
        </div>
      </div>
      <div className="prose prose-invert max-w-none">
        <Skeleton className="h-6 w-full rounded mb-2" />{" "}
        <Skeleton className="h-6 w-full rounded mb-2" />{" "}
        <Skeleton className="h-48 w-full rounded mb-2" />{" "}
      </div>
    </div>
  );
};

export default ProblemSkeleton;
