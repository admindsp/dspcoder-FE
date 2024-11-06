import { Button } from "@dspcoder/ui/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";
import { IoLogoGithub } from "react-icons/io";

const GithubLogin = () => {
  const handleSignIn = async () => {
    await signIn("github", { callbackUrl: "https://www.dspcoder.com" });
  };

  return (
    <div className="w-fit">
      <Button
        onClick={handleSignIn}
        className="bg-darkish max-h-[30px] flex gap-2 items-center justify-center px-4 py-1 text-white w-full"
      >
        <IoLogoGithub className="w-5 h-5" />
        <span>Sign in with Github</span>
      </Button>
    </div>
  );
};

export default GithubLogin;
