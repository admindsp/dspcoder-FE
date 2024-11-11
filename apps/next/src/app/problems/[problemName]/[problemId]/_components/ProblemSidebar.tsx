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

const items = [
  {
    title: "Problem Description",
    url: "?to=description",
    icon: <MdOutlineDescription />,
  },
  {
    title: "Solution",
    url: "?to=solution",
    icon: <CiSquareChevRight />,
  },
  {
    title: "Submissions",
    url: "?to=submission",
    icon: <LuClipboardEdit />,
  },
  {
    title: "Discussion Forum",
    url: "?to=discussion",
    icon: <GoCommentDiscussion />,
  },
];

const ProblemSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-darkish outline-none border-none text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            Navigate To
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
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
