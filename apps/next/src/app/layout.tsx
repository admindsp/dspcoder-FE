import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "@dspcoder/ui/globals.css";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/contenxt/AuthProvider";
import QueryProvider from "@/contenxt/QueryClientProvider";
import ContainerProvider from "@/contenxt/ContainerProvider";
import { Toaster } from "@dspcoder/ui/components/ui/toaster";

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
    <html lang="en">
      <QueryProvider>
        <AuthProvider>
          <ContainerProvider>
            <body className="relative bg-darkish">
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </body>
          </ContainerProvider>
        </AuthProvider>
      </QueryProvider>
    </html>
  );
}
