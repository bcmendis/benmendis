import '@/app/globals.css'
import { Metadata } from 'next'
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import NavBar from '@/components/layout/NavBar';

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex flex-col justify-start items-center min-h-screen">
            <NavBar />
            <section className="flex flex-col flex-1 w-[90%] sm:w-[70%] items-center justify-between py-10 sm:py-24">
              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
