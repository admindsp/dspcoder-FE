"use client";
import { Button } from "@dspcoder/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@dspcoder/ui/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@dspcoder/ui/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { IoIosLogOut } from "react-icons/io";

type Props = {};

const ProfilePage = (props: Props) => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    try {
      signOut();
    } catch (err) {
      alert("Unable to signout");
    }
  };

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 items-center">
          <Avatar className="max-w-[30px] max-h-[30px] border border-whitish">
            <AvatarImage
              alt="profile-picture"
              src={`${session?.user?.image}.png`}
            />
            <AvatarFallback>{session?.user?.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[200px] p-0">
          <DropdownMenuLabel>
            Hi, <span className="font-bold">{session?.user?.name}</span>
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
