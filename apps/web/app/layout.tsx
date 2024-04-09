import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import CodeEditor from './components/CodeEditor/CodeEditor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DSPCoder',
  description: 'A platform for embedded systems engineers'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <CodeEditor />
        {children}
      </body>
    </html>
  );
}
