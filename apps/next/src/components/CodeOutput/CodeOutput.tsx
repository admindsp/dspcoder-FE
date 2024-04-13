"use client";
import { executeCode } from "@/api/executeCode";
import { LANGUAGE_VERSIONS } from "@/constants/constants";
import React, { MutableRefObject, use, useState } from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  editorRef: MutableRefObject<any>;
  language: string;
};

const CodeOutput = ({ editorRef, language }: Props) => {
  const [output, setOutput] = useState<string>("");
  const [stdout, setStdout] = useState<string>("");
  const [stderr, setStderr] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setOutput("");
      setStderr("");
      setStdout("");
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      if (result?.stdout) setStdout(result.stdout);
      if (result?.output) setOutput(result.output);
      if (result?.stderr) setStderr(result.stderr);
    } catch (error) {
      console.log(error);
      alert("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 pr-2 my-2">
      <div className="flex justify-end items-center gap-3 transition-all">
        <button
          className=" transition-all hover:bg-gray-100 min-w-24 text-black border border-gray-500 h-8 px-4 py-1 rounded"
          onClick={runCode}
        >
          {isLoading ? <ClipLoader color="#00000" size="20" /> : "Run"}
        </button>

        <button
          className="text-white  h-8 px-4 py-1 min-w-24 rounded transition-all disabled:bg-gray-600 bg-[#1e1e1e] hover:bg-[#444444]"
          disabled={true}
          onClick={runCode}
        >
          {isLoading ? <ClipLoader color="#00000" size="20" /> : "Submit"}
        </button>
      </div>
      <div className="output-window bg-slate-100 h-full text-sm">
        <p className="font-bold px-2 py-1">STDOUT</p>
        <div className="stdout bg-stone-100 border border-gray-400 border-opacity-60 h-20 px-2 py-2 text-wrap overflow-y-scroll rounded">
          {stdout}
        </div>
      </div>
      <div className="output-window bg-slate-100 h-full text-sm">
        <p className="font-bold px-2 py-1">Code Output</p>
        <div className="output bg-stone-100 border border-gray-400 border-opacity-60 h-20 px-2 py-2 text-wrap overflow-y-scroll rounded">
          {stderr ? stderr : output}
        </div>
      </div>
    </div>
  );
};

export default CodeOutput;
