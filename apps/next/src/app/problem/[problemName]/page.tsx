"use client";
import React, { useEffect, useState } from "react";
import CodeEditor from "@/app/problem/[problemName]/_components/CodeEditor/CodeEditor";
import FileExplorer from "./_components/FileExplorer/FileExplorer";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CodeTerminal from "./_components/CodeTerminal/CodeTerminal.";
import { GrDrag } from "react-icons/gr";
import axios from "axios";

type ProblemPageParamsProps = {
  params: {
    problemName: string;
  };
};

type ProblemPageSearchParamsProps = {
  problemName: string;
};

const Problem = ({ params: { problemName } }: ProblemPageParamsProps) => {
  const [folderContents, setFolderContents] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState(`${problemName}/main.c`);
  const [fileContent, setFileContent] = useState<string>("");

  const folderPath = problemName;

  const getSelectedFileContent = async (filePath: string) => {
    const response = await axios.get("http://127.0.0.1:8000/get-file-content", {
      params: { file_path: filePath },
    });
    console.log(response);
    if (response) setFileContent(response?.data?.content);
  };

  useEffect(() => {
    const fetchFolderContents = async () => {
      if (!folderPath) {
        setError("Folder path is missing.");
        return;
      }

      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/list-folder-contents/",
          {
            params: { folder_path: folderPath },
          }
        );
        setFolderContents(response.data.contents);
        setError(null);
      } catch (err) {
        setError("Error fetching folder contents");
        setFolderContents([]);
      }
    };

    fetchFolderContents();
  }, [folderPath]);

  useEffect(() => {
    try {
      getSelectedFileContent(selectedFile);
    } catch (err) {
      console.log("Unable to set file");
      setFileContent("Unable to fetch file content.");
    }
  }, [selectedFile]);

  const handleFileView = (filePath: string) => {
    setSelectedFile(filePath);
  };

  return (
    <PanelGroup
      className="min-h-screen "
      autoSaveId="problem-window"
      direction="horizontal"
    >
      <Panel minSize={10} defaultSize={20}>
        <FileExplorer
          folderContents={folderContents}
          error={error}
          handleFileView={handleFileView}
        />
      </Panel>
      <PanelResizeHandle className="w-3 bg-black flex justify-center items-center">
        <GrDrag className="w-full h-full text-white" />
      </PanelResizeHandle>
      <Panel minSize={30} defaultSize={45}>
        <CodeEditor fileContent={fileContent} />
      </Panel>
      <PanelResizeHandle className="w-3 bg-black flex justify-center items-center">
        <GrDrag className="w-full h-full text-white" />
      </PanelResizeHandle>
      <Panel minSize={10} defaultSize={35}>
        <CodeTerminal />
      </Panel>
    </PanelGroup>
  );
};

export default Problem;
