'use client';

import { Inter } from 'next/font/google';
import { Navigation } from './navigation';
import { Footer } from './footer';
import { ThemeProvider } from './theme-provider';
import { usePathname } from 'next/navigation';
import { QuizProvider } from '@/contexts/quiz-context';

const inter = Inter({ subsets: ['latin'] });

export function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QuizProvider>
          <div className="relative min-h-screen">
            <Navigation />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </QuizProvider>
      </ThemeProvider>
    </body>
  );
}
