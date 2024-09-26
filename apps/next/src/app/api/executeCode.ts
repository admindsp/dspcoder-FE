import { LANGUAGE_VERSIONS } from "@/constants/constants";
import axios from "axios";

const codeExecuteAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CODE_EXECUTION_API_URL,
});

export const executeCode = async (language: string, sourceCode: string) => {
  const res = await codeExecuteAPI.post("/execute", {
    language: language,
    version:
      LANGUAGE_VERSIONS[language as keyof typeof LANGUAGE_VERSIONS].version,
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return res.data;
};
