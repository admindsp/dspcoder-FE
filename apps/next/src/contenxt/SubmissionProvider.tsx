"use client";

import React, { createContext, useContext, type ReactNode } from "react";
import { useSession } from "next-auth/react";
import { SubmitQuestionType } from "@/types/Problem";
import {
  currentProblemAtom,
  selectedLanguageAtom,
  useAtom,
} from "@dspcoder/jotai";
import { useSubmissionData } from "@/hooks/use_submission";

interface SubmissionContextType {
  submissionData: SubmitQuestionType | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => Promise<any>;
  selectedLanguage: string;
}

const SubmissionContext = createContext<SubmissionContextType | undefined>(
  undefined
);

interface SubmissionProviderProps {
  children: ReactNode;
}

export function SubmissionProvider({ children }: SubmissionProviderProps) {
  const { data: session } = useSession();
  const [selectedLanguage] = useAtom(selectedLanguageAtom);
  const [currentProblem] = useAtom(currentProblemAtom);

  const {
    data: submissionData,
    isLoading,
    isError,
    refetch,
  } = useSubmissionData({
    currentProblem,
    selectedLanguage,
    username: session?.user?.name,
  });

  const contextValue: SubmissionContextType = {
    submissionData,
    isLoading,
    isError,
    refetch,
    selectedLanguage,
  };

  return (
    <SubmissionContext.Provider value={contextValue}>
      {children}
    </SubmissionContext.Provider>
  );
}

export function useSubmission() {
  const context = useContext(SubmissionContext);

  if (context === undefined) {
    throw new Error("useSubmission must be used within a SubmissionProvider");
  }

  return context;
}
