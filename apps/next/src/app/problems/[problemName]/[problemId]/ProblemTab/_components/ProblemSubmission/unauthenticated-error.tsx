import GithubLogin from "@/components/AuthPopupContent/GithubLogin";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@dspcoder/ui/components/ui/card";
import { LockKeyhole } from "lucide-react";
import Link from "next/link";

export function UnauthenticatedError() {
  return (
    <Card className="bg-darkish_100 border-gray-700 min-w-[300px]">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
            <LockKeyhole className="h-5 w-5 text-amber-500" />
            Authentication Required
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-wrap flex-wrap">
        <div className="mb-4 text-amber-500 font-medium">
          You are not logged in. Kindly login first to submit your work.
        </div>
        <div className="text-gray-300 space-y-2 pl-1 border-l-2 border-gray-700">
          <p className="text-sm">
            <span className="font-semibold">✨ Quick Tip:</span> Logging in
            ensures your submission is properly attributed to your account.
          </p>
          <p className="text-sm flex items-center gap-2">
            <div className="px-3 cursor-default py-1.5 bg-amber-500/20 text-amber-400 rounded-md hover:bg-amber-500/30 transition-colors font-medium text-xs">
              Go to Login
            </div>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
