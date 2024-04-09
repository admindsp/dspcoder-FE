"use client";
import React from "react";
import Editor from "@monaco-editor/react";

type Props = {};

const CodeEditor = (props: Props) => {
  return (
    <div className="w-full">
      <Editor
        className="border border-gray-500"
        height="50vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
};

export default CodeEditor;
