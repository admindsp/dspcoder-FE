export default function ProblemPageLayout({
  children,
  navbar,
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <>
      {navbar}
      {children}
    </>
  );
}
