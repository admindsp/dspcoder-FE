import type { Metadata } from "next";
import "@dspcoder/ui/globals.css";

import AuthProvider from "@/contenxt/AuthProvider";
import QueryProvider from "@/contenxt/QueryClientProvider";
import ContainerProvider from "@/contenxt/ContainerProvider";

export const metadata: Metadata = {
  title: "DSPCoder",
  description: "Get prepared for your next interview with DSPCoder",
};

export default function RootLayout({
  children,
  navbar,
  footer,
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <AuthProvider>
          <ContainerProvider>
            <body className="flex flex-col min-h-screen">
              <header>{navbar}</header>
              <div className="flex-grow overflow-y-auto bg-black">
                {children}
              </div>
              <footer>{footer}</footer>
            </body>
          </ContainerProvider>
        </AuthProvider>
      </QueryProvider>
    </html>
  );
}
