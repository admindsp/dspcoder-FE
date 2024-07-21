import type { Metadata } from "next";
import "@dspcoder/ui/globals.css";

export const metadata: Metadata = {
  title: "DSPCoder-Blog",
  description: "Get prepared for your next interview with DSPCoder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
