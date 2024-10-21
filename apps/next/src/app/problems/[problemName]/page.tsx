"use client";

import { useEffect, useState } from "react";
import { Button } from "@dspcoder/ui/components/ui/button";
import { GrDrag } from "react-icons/gr";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Problem = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch("/test.md");
      const text = await response.text();
      setMarkdownContent(text);
    };

    fetchMarkdown();
  }, []);

  return (
    <PanelGroup
      className="min-h-[90vh]"
      autoSaveId="problem-window"
      direction="horizontal"
    >
      <Panel minSize={10} defaultSize={20}>
        <div className="markdown-content p-4 text-white">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </Panel>

      <PanelResizeHandle className="w-3 bg-black flex justify-center items-center">
        <GrDrag className="w-full h-full text-white" />
      </PanelResizeHandle>

      <Panel minSize={30} defaultSize={45}>
        <div
          id="external-buttons"
          className="flex flex-row-reverse gap-2 items-center py-2"
        >
          <Button className="bg-grayish hover:bg-white hover:text-black text-white">
            Run
          </Button>
          <Button className="bg-grayish hover:bg-white hover:text-black text-white">
            Submit
          </Button>
        </div>

        <Panel minSize={10} defaultSize={20}></Panel>

        <iframe
          src="http://localhost:8080/?folder=/home/dspcoder"
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </Panel>
    </PanelGroup>
  );
};

export default Problem;
