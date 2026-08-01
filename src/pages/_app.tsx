import AppShell from "@/compnents/commons/AppShell";
import "@/styles/globals.css";
import "@/styles/dashboard.css"
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToasterProvider } from "@/contexts/toasterContext";
import { SessionProvider } from "next-auth/react";
import responseHandler from "@/libs/responseHandler";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1,
      throwOnError:(error) => {
        responseHandler.jwtExpired(error);
        return false
      }
    },
    mutations: {
      retry: false,
      onError: responseHandler.jwtExpired
    }
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <ToasterProvider>
            <AppShell>
              <Component {...pageProps} />
            </AppShell>
          </ToasterProvider>
        </HeroUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
