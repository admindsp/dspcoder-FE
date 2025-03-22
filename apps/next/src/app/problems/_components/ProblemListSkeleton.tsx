import Skeleton from "@/components/Skeleton/Skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@dspcoder/ui/components/ui/table";

export function ProblemListSkeleton() {
  return (
    <Table className="table-auto border-collapse overflow-auto">
      <TableHeader>
        <TableRow className="font-bold text-sm text-white hover:bg-transparent !border-b-[#2B2B2B]">
          <TableHead className="text-grayish_text">Title</TableHead>
          <TableHead className="text-grayish_text">Type</TableHead>
          <TableHead className="text-grayish_text">Difficulty</TableHead>
          <TableHead className="text-grayish_text">Companies</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-white max-h-[calc(100vh-200px)] overflow-auto">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <TableRow
              className="!rounded-md !border-none hover:!bg-darkish bg-black"
              key={index}
            >
              <TableCell className="whitespace-nowrap max-w-max">
                <Skeleton className="w-[200px] h-[20px]" />
              </TableCell>
              <TableCell className="capitalize whitespace-nowrap max-w-max">
                <Skeleton className="w-[100px] h-[20px]" />
              </TableCell>
              <TableCell className="capitalize whitespace-nowrap max-w-max">
                <Skeleton className="w-[80px] h-[20px]" />
              </TableCell>
              <TableCell className="capitalize whitespace-nowrap max-w-max">
                <Skeleton className="w-[150px] h-[20px]" />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
