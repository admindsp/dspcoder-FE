import GithubLogin from "@/components/AuthPopupContent/GithubLogin";
import { LockIcon } from "lucide-react";

export function UnauthenticatedErrorEditor() {
  return (
    <div
      className="flex-grow h-full flex flex-col items-center justify-center gap-6 p-8"
      style={{ backgroundColor: "#0e0e0e" }}
    >
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="bg-zinc-800/50 p-4 rounded-full mb-4">
          <LockIcon className="h-10 w-10 text-zinc-400" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">
          Authentication Required
        </h2>

        <p className="text-zinc-400 mb-6">
          Please sign in with your GitHub account to access your editor and
          continue your work.
        </p>

        <div className="w-full max-w-xs flex justify-center">
          <GithubLogin />
        </div>
      </div>

      <div className="text-xs text-zinc-500 mt-8">
        Your work will be saved securely once you're logged in.
      </div>
    </div>
  );
}
