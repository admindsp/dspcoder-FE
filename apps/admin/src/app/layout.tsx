import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/providers/AuthProvider";
import "@dspcoder/ui/globals.css";

export const metadata = {
  title: "DSPCoder",
  description: "Get prepared for your next interview with DSPCoder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <AuthProvider>
          <Navbar />
          <div className="dark:bg-darkish dark:text-white text-black bg-[#c5c5c5] min-h-screen flex flex-col">
            <div className="w-[80%] mx-auto flex-grow">{children}</div>
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
