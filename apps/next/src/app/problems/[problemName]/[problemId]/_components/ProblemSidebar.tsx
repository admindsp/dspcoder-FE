"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MdOutlineDescription } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { CiSquareChevRight } from "react-icons/ci";
import { GoCommentDiscussion } from "react-icons/go";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@dspcoder/ui/components/ui/sidebar";
import { Button } from "@dspcoder/ui/components/ui/button";

const items = [
  {
    title: "Problem Description",
    url: "?tab=description",
    icon: <MdOutlineDescription className="h-4 w-4" />,
    disabled: false,
  },
  {
    title: "Solution",
    url: "?tab=solution",
    icon: <CiSquareChevRight className="h-4 w-4" />,
    disabled: false,
  },
  {
    title: "Submissions",
    url: "?tab=submission",
    icon: <LuClipboardEdit className="h-4 w-4" />,
    disabled: false,
  },
  {
    title: "Discussion Forum",
    url: "?tab=discussion",
    icon: <GoCommentDiscussion className="h-4 w-4" />,
    disabled: true,
  },
];

const ProblemSidebar = () => {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "description";

  return (
    <Sidebar
      collapsible="icon"
      className="border-grayish_100 bg-black h-[calc(100vh-50px)]"
    >
      <SidebarContent className="bg-black outline-none border-none text-white">
        <SidebarTrigger className="text-white font-bold bg-black w-full border-b border-b-grayish_100 z-30 " />
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            Navigate To
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentTab === item.url.split("=")[1]}
                    className={`data-[active=true]:bg-white ${
                      item.disabled && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={item.disabled}
                  >
                    {item.disabled ? (
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                    ) : (
                      <Link href={item.url} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default ProblemSidebar;
