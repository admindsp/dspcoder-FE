import { useContainer } from "@/contenxt/ContainerProvider";
import { Button } from "@dspcoder/ui/components/ui/button";
import { useSession } from "next-auth/react";
import React from "react";
import ProblemCodeEditorLoader from "./ProblemCodeEditorLoader";
import GithubLogin from "@/components/AuthPopupContent/GithubLogin";

type Props = {};

const ProblemCodeEditor = (props: Props) => {
  const { containerDetails, isLoading, isSuccess } = useContainer();
  const { status } = useSession();
  const path = "http://" + containerDetails?.default_folder_path;

  if (status === "authenticated" && isLoading) {
    return <ProblemCodeEditorLoader />;
  }

  if (status === "authenticated" && !isLoading)
    return (
      <div className="h-full">
        {/* <div
          id="external-buttons"
          className="flex flex-row-reverse gap-2 items-center py-2"
        >
          <Button className="bg-grayish hover:bg-white hover:text-black text-white">
            Run
          </Button>
          <Button className="bg-grayish hover:bg-white hover:text-black text-white">
            Submit
          </Button>
        </div> */}
        <iframe src={path} className="w-full h-full" frameBorder="0"></iframe>
      </div>
    );

  if (status === "unauthenticated")
    return (
      <div className="text-white flex flex-col items-center justify-center h-full gap-2">
        <p className="text-lg font-bold">Kindly Login to view your editor.</p>
        <GithubLogin />
      </div>
    );
};

export default ProblemCodeEditor;
