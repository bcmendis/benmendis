import '@/app/globals.css'
import { Metadata } from 'next'
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import NavBar from '@/components/layout/NavBar';
import { Toaster } from '@/components/ui/toaster';
import Providers from './providers';
import Chat from '@/components/chat/Chat';
import { Analytics } from '@vercel/analytics/react';

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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <main className="min-h-screen antialiased">
            <NavBar />
            <section className="container py-6">{children}</section>
            <Toaster />
          </main>
        <Chat />
        </Providers>
        <Analytics
          debug={false}
        />
      </body>
    </html>
  );
}
