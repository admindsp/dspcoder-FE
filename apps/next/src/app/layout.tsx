import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "@dspcoder/ui/globals.css";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "DSPCoder",
  description: "Get prepared for your next interview with DSPCoder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="white">
      <body>
        <Toaster position="bottom-center" />
        <Navbar />
        <div className="dark:bg-black dark:text-white text-black bg-white min-h-screen flex flex-col">
          <div className="w-[80%] mx-auto flex-grow">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
