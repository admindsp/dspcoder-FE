"use client";

import React from "react";
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

const items = [
  {
    title: "Problem Description",
    url: "?tab=description",
    icon: <MdOutlineDescription className="h-4 w-4" />,
  },
  {
    title: "Solution",
    url: "?tab=solution",
    icon: <CiSquareChevRight className="h-4 w-4" />,
  },
  {
    title: "Submissions",
    url: "?tab=submission",
    icon: <LuClipboardEdit className="h-4 w-4" />,
  },
  {
    title: "Discussion Forum",
    url: "?tab=discussion",
    icon: <GoCommentDiscussion className="h-4 w-4" />,
  },
];

const ProblemSidebar = () => {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "description";

  return (
    <Sidebar
      collapsible="icon"
      className="border-grayish_100 bg-black h-[calc(100vh-100px)]"
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
                    isActive={currentTab === item.url.split("=")[1]}
                    asChild
                    className=" data-[active=true]:bg-white"
                  >
                    <Link href={item.url} className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
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
