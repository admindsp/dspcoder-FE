import { Button } from "@dspcoder/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@dspcoder/ui/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { IoIosLogOut } from "react-icons/io";

type Props = {};

const ProfilePage = (props: Props) => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 items-center">
          <img
            src={`${session?.user?.image}.png`}
            alt="profile-picture"
            width={25}
            height={25}
            className="rounded-full"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>
            Hi, <span className="font-semibold">{session?.user?.name}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button
              onClick={handleSignOut}
              className="w-full flex gap-2 items-center"
            >
              <IoIosLogOut className="w-[20px] h-[20px]" />
              <span>Logout</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfilePage;
