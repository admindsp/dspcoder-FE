"use client";
import { executeCode } from "@/api/executeCode";
import { LANGUAGE_VERSIONS } from "@/constants/constants";
import React, { MutableRefObject, useState } from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  editorRef: MutableRefObject<any>;
  language: string;
};

const CodeOutput = ({ editorRef, language }: Props) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();

    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      alert("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex justify-end items-center gap-3 ">
        <button
          className="bg-green-700 text-white w-32 h-8 px-4 py-1 rounded"
          onClick={runCode}
        >
          {isLoading ? <ClipLoader color="#00000" size="20" /> : "Run"}
        </button>
      </div>
      <div className="output-window bg-gray-400 h-full">OUTPUT</div>
    </div>
  );
};

export default CodeOutput;
