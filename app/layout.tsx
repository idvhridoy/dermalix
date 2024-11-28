import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootLayoutClient } from '../components/root-layout-client';
import { BackToTop } from '@/components/back-to-top';
import { LiveVisitors } from '@/components/live-visitors';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dermalix - Innovative Skincare Solutions',
  description: 'Transform your skin with Dermalix\'s scientifically advanced skincare products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RootLayoutClient>
          {children}
          <BackToTop />
          <LiveVisitors />
        </RootLayoutClient>
      </body>
    </html>
  );
}
