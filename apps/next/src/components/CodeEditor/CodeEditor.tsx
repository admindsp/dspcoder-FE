"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import ConfigSelectorMenu from "./components/ConfigSelectorMenu";

type Props = {};

const CodeEditor = (props: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("cpp");
  return (
    <div className="w-full">
      <ConfigSelectorMenu
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Editor
        className="border border-t-0 border-gray-700 h-[50vh]"
        theme="vs-dark"
        language={selectedLanguage}
        defaultValue="// some comment"
      />
    </div>
  );
};

export default CodeEditor;
