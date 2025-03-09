"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@dspcoder/ui/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@dspcoder/ui/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { LogOut, User, Settings, Bell, Clock } from "lucide-react";
import http_client from "@/app/api/client";
import { Button } from "@dspcoder/ui/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@dspcoder/ui/components/ui/tooltip";

type Props = {};

const ProfilePage = (props: Props) => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      http_client.get("/api/delete_container", {
        params: {
          username: session?.user?.name,
        },
      });
      await signOut({ redirect: false });
    } catch (err) {
      alert("Unable to signout");
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-9 w-9 border-2 border-yellow-400 transition-all hover:scale-105">
              <AvatarImage
                alt="profile-picture"
                src={`${session?.user?.image}.png`}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary/80 to-primary text-primary-foreground">
                {session?.user?.name?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-64 p-0 overflow-hidden bg-gray-900 border-gray-800"
          align="end"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 flex flex-col items-center gap-2">
            <Avatar className="h-16 w-16 border-2 border-yellow-400 shadow-md">
              <AvatarImage
                alt="profile-picture"
                src={`${session?.user?.image}.png`}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary/80 to-primary text-primary-foreground text-xl">
                {session?.user?.name?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h4 className="font-semibold text-lg text-white">
                {session?.user?.name}
              </h4>
              <p className="text-sm text-gray-400 truncate max-w-[180px]">
                {session?.user?.email || "user@example.com"}
              </p>
            </div>
          </div>

          <div className="p-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <DropdownMenuItem
                      disabled
                      className="flex items-center gap-2 p-3 cursor-not-allowed rounded-md text-gray-400 opacity-70"
                    >
                      <User className="h-4 w-4 text-gray-300" />
                      <span>Profile</span>
                      <Clock className="h-3.5 w-3.5 ml-auto text-gray-500" />
                    </DropdownMenuItem>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-gray-200 border-gray-700">
                  <p>Profile feature coming soon</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <DropdownMenuItem
                      disabled
                      className="flex items-center gap-2 p-3 cursor-not-allowed rounded-md text-gray-400 opacity-70"
                    >
                      <Settings className="h-4 w-4 text-gray-300" />
                      <span>Settings</span>
                      <Clock className="h-3.5 w-3.5 ml-auto text-gray-500" />
                    </DropdownMenuItem>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-gray-200 border-gray-700">
                  <p>Settings feature coming soon</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <DropdownMenuItem
                      disabled
                      className="flex items-center gap-2 p-3 cursor-not-allowed rounded-md text-gray-400 opacity-70"
                    >
                      <Bell className="h-4 w-4 text-gray-300" />
                      <span>Notifications</span>
                      <Clock className="h-3.5 w-3.5 ml-auto text-gray-500" />
                    </DropdownMenuItem>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-gray-200 border-gray-700">
                  <p>Notifications feature coming soon</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="px-3 py-2">
            <div className="text-xs bg-gray-800 text-gray-300 rounded-md p-2 text-center">
              Additional features are currently in development and will be
              available soon.
            </div>
          </div>

          <DropdownMenuSeparator className="bg-gray-800" />

          <div className="p-2">
            <DropdownMenuItem
              onClick={handleSignOut}
              className="flex items-center gap-2 p-3 cursor-pointer text-red-400 hover:bg-gray-800 hover:text-red-300 rounded-md"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfilePage;
