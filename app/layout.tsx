import '@/app/globals.css'
import { Metadata } from 'next'
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Analytics } from '@vercel/analytics/react';

import Providers from './providers';
import NavBar from '@/components/layout/NavBar';
import { Toaster } from '@/components/ui/toaster';
import Chat from '@/components/chat/Chat';

export const metadata: Metadata = {
  title: 'Ben Mendis',
  description: `Ben's personal website`,
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-fixed bg-blob-scene-pattern-light dark:bg-blob-scene-pattern-dark bg-cover font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <main className="antialiased">
            <NavBar />
            <section className="container py-6">{children}</section>
            <Toaster />
          </main>
          <Chat />
        </Providers>
        <Analytics debug={false} />
      </body>
    </html>
  );
}
