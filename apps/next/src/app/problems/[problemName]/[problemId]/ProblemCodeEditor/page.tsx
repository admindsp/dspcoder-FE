"use client";

import { useSession } from "next-auth/react";
import ProblemCodeEditorLoader from "./_components/ProblemCodeEditorLoader";
import { useContainer } from "@/contenxt/ContainerProvider";
import { UnauthenticatedErrorEditor } from "./_components/unauthenticated-error-editor";

const ProblemCodeEditor = () => {
  const { containerUrl, isLoading, isSuccess } = useContainer();
  const { status } = useSession();

  if (status === "unauthenticated") return <UnauthenticatedErrorEditor />;
  if (status === "authenticated" && isLoading)
    return (
      <div className="flex-grow h-full flex items-center justify-center">
        <ProblemCodeEditorLoader />
      </div>
    );

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-hidden">
        <iframe
          src={containerUrl || ""}
          className="w-full h-full"
          frameBorder="0"
          title="Code Editor"
        ></iframe>
      </div>
    </div>
  );
};

export default ProblemCodeEditor;
