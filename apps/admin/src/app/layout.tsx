import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/providers/AuthProvider";
import "@dspcoder/ui/globals.css";

export const metadata = {
  title: "DSPCoder",
  description: "Get prepared for your next interview with DSPCoder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <div className=" flex flex-grow flex-col">
            <div className="w-[80%] mx-auto flex-grow">{children}</div>
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
