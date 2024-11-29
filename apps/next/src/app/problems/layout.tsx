export default function ProblemPageLayout({
  children,
  navbar,
  footer,
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <>
      {navbar}
      {children}
      {footer}
    </>
  );
}
