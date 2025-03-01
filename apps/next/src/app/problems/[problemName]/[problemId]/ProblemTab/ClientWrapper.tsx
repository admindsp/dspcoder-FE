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
import { SetupUserCodeBaseType } from "@/types/Container";
import axios from "axios";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  problemData: ProblemType;
};

function extractFilename(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 2];
}

const ClientWrapper = ({ children, problemData }: Props) => {
  const {
    containerUrl,
    isLoading: isContainerLoading,
    isSuccess,
  } = useContainer();
  const { data } = useSession();
  const [selectedLanguage] = useAtom(selectedLanguageAtom);
  console.log("CONTINARE UIRL", containerUrl);
  if (!containerUrl) return;

  const setup_code_base_api_url =
    containerUrl?.toString() + "uvi/setup_user_codebase";
  const params = {
    username: data?.user?.name,
    question_id: extractFilename(problemData.file_path),
    lang: selectedLanguage,
    original: "False",
  };
  const setup_code_base = async () => {
    const resp = await axios.get(setup_code_base_api_url, { params });
    console.log(resp);
  };

  setup_code_base();

  return <>{children}</>;
};

export default ClientWrapper;
