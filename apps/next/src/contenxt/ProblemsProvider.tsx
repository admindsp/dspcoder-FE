import { createContext, useContext, ReactNode } from "react";
import { ProblemsSearchParamsType, ProblemType } from "@/types/Problem";
import http_client from "@/app/api/client";
import { useQuery } from "@tanstack/react-query";

type ProblemsContextType = {
  problemsData: ProblemType[];
  isLoading: boolean;
};

const ProblemsContext = createContext<ProblemsContextType>({
  problemsData: [],
  isLoading: true,
});

export const ProblemsProvider = ({
  children,
  searchParams,
}: {
  children: ReactNode;
  searchParams: ProblemsSearchParamsType;
}) => {
  const { type, title, tags, difficulty } = searchParams;
  const filterPayload = {
    ...(type && { type: type }),
    ...(title && { title: title }),
    ...(difficulty && { difficulty: difficulty }),
    ...(tags && { tags: tags }),
  };

  const {
    data: problemsData,
    isLoading,
    refetch,
  } = useQuery<ProblemType[]>({
    queryKey: [
      `type:${type}-title:${title}-difficulty:${difficulty}-tags:${tags}`,
    ],
    queryFn: async () => {
      const response = await http_client.get<ProblemType[]>("/api/problems/", {
        params: filterPayload,
      });
      return response;
    },
  });

  return (
    <ProblemsContext.Provider
      value={{ problemsData: problemsData || [], isLoading }}
    >
      {children}
    </ProblemsContext.Provider>
  );
};

export const useProblemsContext = () => {
  const context = useContext(ProblemsContext);
  if (!context) {
    throw new Error(
      "useProblemsContext must be used within a ProblemsProvider"
    );
  }
  return context;
};
