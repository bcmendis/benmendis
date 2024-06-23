import '@/app/globals.css'
import { Metadata } from 'next'
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      {/* check for tailwind support of new viewport units "svh, lvh & dvh"
      background image jumping in mobile browsers 
      this solution seems to work on Chrome/Android for now*/}
      <body
        className={cn(
          "supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] bg-custom font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <main className="antialiased">
            <NavBar />
            <section className="py-8">{children}</section>
            <Toaster />
          </main>
          <Chat />
        </Providers>
        <SpeedInsights />
        <Analytics debug={false} />
      </body>
    </html>
  );
}
