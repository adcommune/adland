'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http } from 'viem'
import { optimismSepolia } from 'viem/chains'

import { alchemyKey, privyAppId } from '@/config/variables'
import { PrivyProvider } from '@privy-io/react-auth'
import { WagmiProvider, createConfig } from '@privy-io/wagmi'
import { ModalProvider } from '@/context/ModalContext'
import AppNavbar from './AppNavbar'
export const queryClient = new QueryClient()

export const config = createConfig({
  chains: [optimismSepolia],
  ssr: true,
  transports: {
    [optimismSepolia.id]: http(
      `https://opt-sepolia.g.alchemy.com/v2/${alchemyKey}`,
    ),
  },
})

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#4e4e4e',
        },
        loginMethods: ['wallet'],
        embeddedWallets: {
          createOnLogin: 'off',
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config} reconnectOnMount={false}>
          <ModalProvider>
            <div className="h-full antialiased">
              <AppNavbar />
              <main className="relative z-0">{children}</main>
            </div>
          </ModalProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  )
}

export default AppProviders
