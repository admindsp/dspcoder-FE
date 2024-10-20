import { ProblemsData } from "@/constants/ProblemsData";
import { difficulty_label_styles } from "./FilterSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@dspcoder/ui/components/ui/table";

import { cn } from "@dspcoder/ui/lib/utils";

export default function ProblemsList() {
  const { Easy, Medium, Hard } = difficulty_label_styles();
  return (
    <Table className="">
      <TableHeader>
        <TableRow className="font-bold text-base text-white hover:bg-transparent">
          <TableHead>Type</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Difficulty</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-white">
        {ProblemsData.map((problem) => (
          <TableRow className="!rounded-md" key={problem.id}>
            <TableCell className="uppercase whitespace-nowrap max-w-max">
              {problem.type.join(", ")}
            </TableCell>
            <TableCell className="whitespace-nowrap max-w-max">
              {problem.title}
            </TableCell>
            <TableCell
              className={cn(
                "uppercase whitespace-nowrap max-w-max",
                problem.difficulty == "Easy" && Easy(),
                problem.difficulty == "Medium" && Medium(),
                problem.difficulty == "Hard" && Hard()
              )}
            >
              {problem.difficulty}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
