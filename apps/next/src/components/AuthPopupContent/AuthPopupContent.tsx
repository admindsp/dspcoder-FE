import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@dspcoder/ui/components/ui/dialog";
import { FaRegUserCircle } from "react-icons/fa";
import GithubLogin from "./GithubLogin";

const AuthPopupContent = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <FaRegUserCircle />
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-2 justify-center items-center w-full">
        <DialogHeader className="text-lg font-semibold ">
          Signup / Login
        </DialogHeader>
        <GithubLogin />
      </DialogContent>
    </Dialog>
  );
};

export default AuthPopupContent;
