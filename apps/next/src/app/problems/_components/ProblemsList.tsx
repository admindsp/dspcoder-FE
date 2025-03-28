"use client";
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
import { useProblemsContext } from "@/contenxt/ProblemsProvider";
import { ProblemListSkeleton } from "./ProblemListSkeleton";

// Import motion from framer-motion
import { motion } from "framer-motion";

export default function ProblemsList() {
  const searchParams = useSearchParams();
  const { Easy, Medium, Hard } = difficulty_label_styles();
  const { problemsData, isLoading } = useProblemsContext();

  if (isLoading) {
    return <ProblemListSkeleton />;
  }

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
        {problemsData?.map((problem, idx) => (
          <motion.tr
            key={problem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="!rounded-md !border-none hover:!bg-darkish bg-black"
          >
            <TableCell className="whitespace-nowrap max-w-max">
              <Link href={`/problems/${problem.title}/${problem.id}`}>
                {problem.title}
              </Link>
            </TableCell>
            <TableCell className="capitalize whitespace-nowrap max-w-max">
              <Link href={`/problems?type=${problem?.type?.toLowerCase()}`}>
                {problem.type?.toUpperCase()}
              </Link>
            </TableCell>
            <TableCell
              className={cn(
                "capitalize whitespace-nowrap max-w-max",
                problem.difficulty == "Easy" && Easy(),
                problem.difficulty == "Medium" && Medium(),
                problem.difficulty == "Hard" && Hard()
              )}
            >
              <Link
                href={`/problems?difficulty=${problem?.difficulty?.toLowerCase()}`}
              >
                {problem.difficulty}
              </Link>
            </TableCell>
            <TableCell className="capitalize whitespace-nowrap max-w-max">
              <span className="inline-flex gap-2">
                {problem.companies.map((company, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={`/problems?${createQueryString(searchParams, "company", company)}`}
                    >
                      {company}
                      {idx !== problem.companies.length - 1 && ","}
                    </Link>
                  );
                })}
              </span>
            </TableCell>
          </motion.tr>
        ))}
      </TableBody>
    </Table>
  );
}
