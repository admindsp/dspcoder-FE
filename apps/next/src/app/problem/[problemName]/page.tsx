import React from "react";
import CodeEditor from "@/app/problem/[problemName]/_components/CodeEditor/CodeEditor";
import CodeTerminal from "./_components/CodeTerminal/CodeTerminal.";
import FileExplorer from "./_components/FileExplorer/FileExplorer";

type Props = {};

const Problem = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between min-h-screen">
      <div className="min-w-[400px]  dark:bg-darkish">
        <FileExplorer />
      </div>
      <CodeEditor />
    </div>
  );
};

export default Problem;
