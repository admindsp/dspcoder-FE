"use client";

import React, { useEffect, useState } from "react";
import http_client from "@/app/api/client";
import { useContainer } from "@/contenxt/ContainerProvider";
import { ProblemType } from "@/types/Problem";
import {
  containerProblemPathAtom,
  selectedLanguageAtom,
  useAtom,
} from "@dspcoder/jotai";
import ProblemCodeEditorLoader from "../ProblemCodeEditor/_components/ProblemCodeEditorLoader";
import { SetupUserCodeBaseType } from "@/types/Container";

type Props = {
  children: React.ReactNode;
  problemData: ProblemType;
};

const ClientWrapper = ({ children, problemData }: Props) => {
  const {
    containerDetails,
    isLoading: isContainerLoading,
    isSuccess,
  } = useContainer();
  const [, setContainerProblemPath] = useAtom(containerProblemPathAtom);
  const [selectedLanguage] = useAtom(selectedLanguageAtom);
  const [isLoading, setIsLoading] = useState(true);
  const user_name = containerDetails?.user_name ?? "";
  useEffect(() => {
    const setupCodeBase = async () => {
      if (problemData.file_path && selectedLanguage && containerDetails) {
        setIsLoading(true);

        try {
          const resp = (await http_client.post(
            "/api/container/setup-code-base/",
            null,
            {
              params: {
                username: user_name,
                file_path: problemData.file_path,
                lang: selectedLanguage,
                original: false,
              },
            }
          )) as SetupUserCodeBaseType;
          console.log("resp", resp);
          if (resp && resp?.problem_path) {
            setContainerProblemPath(resp.problem_path);
          }
        } catch (error) {
          console.error("Error setting up code base:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    setupCodeBase();
  }, []);

  if (isContainerLoading || isLoading) return <ProblemCodeEditorLoader />;

  return <>{children}</>;
};

export default ClientWrapper;
