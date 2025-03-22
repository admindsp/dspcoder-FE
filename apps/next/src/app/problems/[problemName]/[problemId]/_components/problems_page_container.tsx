"use client";
import ProblemsList from "@/app/problems/_components/ProblemsList";
import ProblemsListFilter from "@/app/problems/_components/ProblemsListFilter";
import { Calendar } from "@dspcoder/ui/components/ui/calendar";
import React, { useState } from "react";

type Props = {
  type?: string;
};

export const ProblemPageContainer = ({ type }: Props) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="grid grid-cols-[1fr,auto]">
      <div className="px-4 md:px-20 bg-black py-5 sm:py-8 gap-4 grid grid-rows-[auto_1fr] h-screen">
        <ProblemsListFilter type={type} />
        <ProblemsList />
      </div>
    </div>
  );
};
