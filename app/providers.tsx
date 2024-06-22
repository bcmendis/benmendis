"use client"
import { ThemeProvider } from "@/components/layout/theme-provider";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { MessagesProvider } from "@/context/messages";

interface ProvidersProps {
  children: React.ReactNode
}


const Providers = ({children}: ProvidersProps) => {

  const client = new QueryClient();

  return (
    <ThemeProvider attribute="class">
    <QueryClientProvider client={client}>
      <MessagesProvider >
      {children}
      </MessagesProvider>
    </QueryClientProvider>
    </ThemeProvider>
  )
}

export default Providers;