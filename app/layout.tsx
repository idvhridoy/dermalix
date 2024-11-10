import './globals.css';
import type { Metadata } from 'next';
import { RootLayoutClient } from '../components/root-layout-client';
import { BackToTop } from '@/components/back-to-top';

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
      <RootLayoutClient>
        {children}
        <BackToTop />
      </RootLayoutClient>
    </html>
  );
}
