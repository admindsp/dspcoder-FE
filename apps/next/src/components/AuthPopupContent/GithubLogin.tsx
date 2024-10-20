import { Button } from "@dspcoder/ui/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";
import { IoLogoGithub } from "react-icons/io";

const GithubLogin = () => {
  const handleSignIn = () => {
    signIn("github", { callbackUrl: "https://www.dspcoder.com" });
  };
  return (
    <div className="w-full">
      <Button
        onClick={handleSignIn}
        className="bg-darkish flex gap-2 items-center justify-center px-4 py-2 text-white w-full"
      >
        <IoLogoGithub className="w-5 h-5" />
        <span>Login with Github</span>
      </Button>
    </div>
  );
};

export default GithubLogin;
