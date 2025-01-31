"use client";

import { useMemo, useState } from "react";
import { GrDrag } from "react-icons/gr";
import dynamic from "next/dynamic";
import ProblemCodeEditor from "../ProblemCodeEditor/page";
import ProblemTab from "../ProblemTab/ProblemTab";
import type { ProblemType } from "@/types/Problem";

import type { MixedSizes } from "react-resizable-panels";
import type { PanelResizeHandleProps } from "react-resizable-panels";

const PanelResizeHandle = dynamic<PanelResizeHandleProps>(() =>
  import("react-resizable-panels").then(
    ({ PanelResizeHandle }) => PanelResizeHandle
  )
);
const PanelGroup = dynamic(() =>
  import("react-resizable-panels").then(({ PanelGroup }) => PanelGroup)
);
const Panel = dynamic(() =>
  import("react-resizable-panels").then(({ Panel }) => Panel)
);

type ProblemPageContentProps = {
  params: {
    problemName: string;
    problemId: string;
  };
  searchParams: {
    tab: string;
  };
  problemData: ProblemType;
};

const ProblemContent = ({
  params,
  searchParams,
  problemData,
}: ProblemPageContentProps) => {
  const [leftPanelWidth, setLeftPanelWidth] = useState(40);
  const [isResizing, setIsResizing] = useState(false);
  const memoizedProblemTab = useMemo(
    () => <ProblemTab tab={searchParams.tab} problemData={problemData} />,
    [searchParams.tab, problemData]
  );

  const handleResize = (sizes: MixedSizes[]) => {
    const numericSizes = sizes.map((size) =>
      typeof size === "number" ? size : Number(size)
    );
    setLeftPanelWidth(numericSizes[0]);
  };

  return (
    <div className="flex flex-col w-full">
      <PanelGroup
        autoSaveId="problem-window"
        className="flex-grow overflow-hidden min-h-[calc(100vh-47px)]"
        direction="horizontal"
        onLayout={handleResize}
      >
        <Panel
          minSizePercentage={0}
          maxSizePercentage={50}
          defaultSizePercentage={40}
          collapsible
          className={`${leftPanelWidth * 10 < 500 ? "overflow-x-auto" : ""} overflow-y-auto`}
        >
          {memoizedProblemTab}
        </Panel>

        <PanelResizeHandle
          className="w-1 bg-darkish flex justify-center items-center hover:bg-blue-500 transition-colors duration-200"
          onDragging={(isDragging) => setIsResizing(isDragging)}
        >
          <div
            className={`w-4 h-8 flex items-center justify-center ${isResizing ? "bg-blue-800" : "bg-darkish"}`}
          >
            <GrDrag
              className={`w-4 h-3 ${isResizing ? "text-white" : "text-white/50"}`}
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
