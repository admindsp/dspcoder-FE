import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@dspcoder/ui/components/ui/dialog";
import { FaRegUserCircle } from "react-icons/fa";
import GithubLogin from "./GithubLogin";

const AuthPopupContent = () => {
  // return (
  //   <Dialog>
  //     <DialogTrigger className="border border-whitish rounded-md px-2 py-0.5 hover:bg-[#1a1a1b] transition-all">
  //       <span className="inline-flex gap-2 font-semibold">Sign In</span>
  //     </DialogTrigger>
  //     <DialogContent className="flex flex-col gap-2 justify-center items-center w-full">
  //       <DialogHeader className="text-lg font-semibold ">
  //         Signup / Login
  //       </DialogHeader>
  //       <GithubLogin />
  //     </DialogContent>
  //   </Dialog>
  // );
  return <GithubLogin />;
};

export default AuthPopupContent;
