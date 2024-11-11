import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "@dspcoder/ui/globals.css";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/contenxt/AuthProvider";
import QueryProvider from "@/contenxt/QueryClientProvider";
import ContainerProvider from "@/contenxt/ContainerProvider";
import { Toaster } from "@dspcoder/ui/components/ui/toaster";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@dspcoder/ui/components/ui/sidebar";
import ProblemSidebar from "./_components/ProblemSidebar";

export default function ProblemPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <ProblemSidebar />
      <SidebarTrigger className="text-white" />
      <div className="relative ">{children}</div>
    </SidebarProvider>
  );
}
