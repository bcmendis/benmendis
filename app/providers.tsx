"use client"

import { ThemeProvider } from "@/components/layout/theme-provider";
import { MessagesProvider } from "@/context/messages";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

interface ProvidersProps {
  children: React.ReactNode
}


const Providers = ({children}: ProvidersProps) => {

  const client = new QueryClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={client}>
      <MessagesProvider >
      {children}
      </MessagesProvider>
    </QueryClientProvider>
    </ThemeProvider>
  )
}

export default Providers;