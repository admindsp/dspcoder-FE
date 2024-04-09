import React from "react";
import CodeEditor from "../components/CodeEditor/CodeEditor";

type Props = {};

const Problem = (props: Props) => {
  return (
    <div className="flex justify-between">
      <div className="w-full min-w-[360px]">Problem Description</div>
      <CodeEditor />
    </div>
  );
};

export default Problem;
