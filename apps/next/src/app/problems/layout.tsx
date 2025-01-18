import Footer from "../@footer/page";
import Navbar from "../@navbar/page";

export default function ProblemsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
