"use client";
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
import Link from "next/link";
import { createQueryString } from "@/utils/createQueryString";
import { useSearchParams } from "next/navigation";

export default function ProblemsList() {
  const searchParams = useSearchParams();
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
              <span className="inline-flex gap-2">
                {problem.type.map((type, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={`/problems?${createQueryString(searchParams, "type", type)}`}
                    >
                      {type}
                      {idx !== problem.type.length - 1 && ","}
                    </Link>
                  );
                })}
              </span>
            </TableCell>
            <TableCell className="whitespace-nowrap max-w-max">
              <Link href={`/problems/${problem.title}`}>{problem.title}</Link>
            </TableCell>
            <TableCell
              className={cn(
                "uppercase whitespace-nowrap max-w-max",
                problem.difficulty == "Easy" && Easy(),
                problem.difficulty == "Medium" && Medium(),
                problem.difficulty == "Hard" && Hard(),
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
