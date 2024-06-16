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
    <html lang="en" className="dark">
      <body>
        <Toaster position="bottom-center" />
        <Navbar />
        <div className="dark:bg-darkish dark:text-white text-black bg-[#c5c5c5] min-h-screen flex flex-col">
          <div className="w-[80%] mx-auto flex-grow">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
