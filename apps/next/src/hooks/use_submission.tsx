import { useQuery } from "@tanstack/react-query";
import { SubmitQuestionType } from "@/types/Problem";
import http_client from "@/app/api/client";

// Define types

interface UseSubmissionDataParams {
  currentProblem: string | null;
  selectedLanguage: string;
  username?: string | null;
  profile?: boolean;
}

export function useSubmissionData({
  currentProblem,
  selectedLanguage,
  username,
  profile = true,
}: UseSubmissionDataParams) {
  return useQuery<SubmitQuestionType>({
    queryKey: ["submission-data", currentProblem, selectedLanguage],
    queryFn: async () => {
      const resp = (await http_client.post("/api/submit_question", {
        username,
        question_id: currentProblem,
        lang: selectedLanguage,
        profile: profile ? "true" : "false",
      })) as SubmitQuestionType;

      return resp;
    },
    retry: (failureCount, error: any) => {
      return failureCount < 1;
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });
}
