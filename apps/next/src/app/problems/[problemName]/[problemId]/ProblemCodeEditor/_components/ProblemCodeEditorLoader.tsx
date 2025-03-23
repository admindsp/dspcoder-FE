import { PacmanLoader, ScaleLoader } from "react-spinners";
import { Code, Terminal, Braces, Hash, FileCode } from "lucide-react";

const ProblemCodeEditorLoader = () => {
  return (
    <div
      className="h-screen flex justify-center items-center relative overflow-hidden w-full"
      style={{ backgroundColor: "#0e0e0e" }}
    >
      <div className="absolute inset-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <Braces className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float-medium">
          <Code className="w-20 h-20 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-fast">
          <Hash className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-medium">
          <FileCode className="w-14 h-14 text-white" />
        </div>
        <div className="absolute top-2/3 left-1/5 animate-float-slow">
          <Terminal className="w-18 h-18 text-white" />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-md text-center px-8">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl -m-6 animate-spin-slow"></div>
          <div className="relative">
            <ScaleLoader color="#ffffff" className="bg-transparent" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3">
          Preparing Your Workspace
        </h3>

        <p className="text-zinc-400 mb-8 leading-relaxed">
          We're configuring your coding environment with everything you need to
          succeed.
        </p>

        <div className="flex flex-col items-center gap-3 mt-2">
          <div className="h-1.5 w-full max-w-xs rounded-full bg-zinc-800 overflow-hidden backdrop-blur-sm border border-zinc-800">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-2/3 rounded-full animate-pulse"></div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xs text-zinc-400 font-medium">
              <span className="animate-pulse inline-block">⚡</span> Almost
              ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemCodeEditorLoader;
