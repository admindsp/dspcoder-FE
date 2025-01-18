export default function ProblemPageLayout({
  children,
  navbar,
}: Readonly<{
  children: React.ReactNode;
  problemCodeEditor: React.ReactNode;
  problemTab: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <>
      {navbar}
      {children}
    </>
  );
}
