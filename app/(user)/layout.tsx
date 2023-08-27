import Header from '@/components/Header';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jay&#39;s Personal Website',
  description: 'Powered by Sanity v3 and Next.js 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {/* {Banner} */}
        {children}
      </body>
    </html>
  );
}
