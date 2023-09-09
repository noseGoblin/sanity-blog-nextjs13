import Header from '@/components/Header';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Banner from '@/components/Banner';

import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import { token } from '@/sanity/lib/fetch';

const inter = Inter({ subsets: ['latin'] });
const PreviewProvider = dynamic(
  () => import('../../components/PreviewProvider')
);

export const metadata: Metadata = {
  title: 'Jay&#39;s Personal Website',
  description: 'Powered by Sanity v3 and Next.js 13',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <Banner />
        {draftMode().isEnabled ? (
          <PreviewProvider token={token}>{children}</PreviewProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
