"use client";
import http_client from "@/app/api/client";
import { useContainer } from "@/contenxt/ContainerProvider";
import { ProblemType } from "@/types/Problem";
import { containerProblemPathAtom, useAtom } from "@dspcoder/jotai";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  problemData: ProblemType;
};

const ClientWrapper = ({ children, problemData }: Props) => {
  const { containerDetails, isLoading, isSuccess } = useContainer();
  const [, setContainerProblemPath] = useAtom(containerProblemPathAtom);
  const { data } = useQuery({
    queryKey: ["setup_code_base"],
    queryFn: async () => {
      const resp = await http_client.post(
        "/api/container/setup-code-base/",
        null,
        {
          params: {
            username: containerDetails?.user_name,
            file_path: problemData.file_path,
            lang: "C",
            original: false,
          },
        }
      );
      //   console.log(resp.message.URL, "RESPONSE URL");
      if (resp?.message?.URL) setContainerProblemPath(resp.message.URL);
    },
  });
  return <>{children}</>;
};
export default ClientWrapper;
