"use client";
import React from "react";

type FileExplorerProps = {
  folderContents: string[];
  error: string | null;
  handleFileView: (filePath: string) => void;
};

const FileExplorer = ({
  folderContents,
  error,
  handleFileView,
}: FileExplorerProps) => {
  return (
    <div className="h-full">
      <p className="bg-darkish text-white py-2 font-semibold border-b border-b-slate-500">
        File Explorer
      </p>
      {error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <div className="bg-darkish h-full py-4 text-white flex flex-col gap-2 px-2">
          {folderContents.map((item, index) => (
            <button
              className="text-start font-medium"
              onClick={() => handleFileView(item)}
              key={index}
            >
              {item.split("/")[1]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
