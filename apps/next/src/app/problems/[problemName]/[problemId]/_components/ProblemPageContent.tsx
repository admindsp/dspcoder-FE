"use client";

import { useMemo, useState } from "react";
import { GrDrag } from "react-icons/gr";
import dynamic from "next/dynamic";
import ProblemCodeEditor from "../ProblemCodeEditor/page";
import ProblemTab from "../ProblemTab/ProblemTab";
import type { PanelResizeHandleProps } from "react-resizable-panels";

const PanelResizeHandle = dynamic<PanelResizeHandleProps>(
  () =>
    import("react-resizable-panels").then(
      ({ PanelResizeHandle }) => PanelResizeHandle
    ),
  { ssr: false }
);
const PanelGroup = dynamic(
  () => import("react-resizable-panels").then(({ PanelGroup }) => PanelGroup),
  { ssr: false }
);
const Panel = dynamic(
  () => import("react-resizable-panels").then(({ Panel }) => Panel),
  { ssr: false }
);

type ProblemPageContentProps = {
  params: {
    problemName: string;
    problemId: string;
  };
  searchParams: {
    tab: string;
  };
};

const ProblemContent = ({ params, searchParams }: ProblemPageContentProps) => {
  const [isResizing, setIsResizing] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <PanelGroup
        autoSaveId="problem-window"
        className="flex-grow overflow-hidden min-h-[calc(100vh-47px)]"
        direction="horizontal"
      >
        <Panel
          minSizePercentage={0}
          maxSizePercentage={70}
          defaultSizePercentage={40}
          className="overflow-y-auto"
        >
          <ProblemTab
            tab={searchParams.tab}
            params={params}
            searchParams={searchParams}
          />
        </Panel>

        <PanelResizeHandle
          className="w-1 bg-darkish flex justify-center items-center hover:bg-blue-500 transition-colors duration-200"
          onDragging={(isDragging) => setIsResizing(isDragging)}
          aria-label="Resize problem panel"
        >
          <div
            className={`w-4 h-8 flex items-center justify-center ${isResizing ? "bg-blue-500" : "bg-darkish"}`}
          >
            <GrDrag
              className={`w-3 h-3 ${isResizing ? "text-white" : "text-white/50"}`}
            />
          </div>
        </PanelResizeHandle>

        <Panel minSizePercentage={30} defaultSizePercentage={60}>
          <ProblemCodeEditor />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ProblemContent;
