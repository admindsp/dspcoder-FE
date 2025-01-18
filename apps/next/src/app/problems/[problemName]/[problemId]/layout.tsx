import Navbar from "@/components/Navbar/Navbar";

export default function ProblemPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
