import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@dspcoder/ui/components/ui/sidebar";
import React from "react";
import { MdOutlineDescription } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { CiSquareChevRight } from "react-icons/ci";
import { GoCommentDiscussion } from "react-icons/go";
import Link from "next/link";

const items = [
  {
    title: "Problem Description",
    url: "?tab=description",
    icon: <MdOutlineDescription />,
  },
  {
    title: "Solution",
    url: "?tab=solution",
    icon: <CiSquareChevRight />,
  },
  {
    title: "Submissions",
    url: "?tab=submission",
    icon: <LuClipboardEdit />,
  },
  {
    title: "Discussion Forum",
    url: "?tab=discussion",
    icon: <GoCommentDiscussion />,
  },
];

const ProblemSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="border-grayish_100">
      <SidebarContent className="bg-black outline-none border-none text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            Navigate To
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
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
