'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { alchemyUrlByChain } from '@/config/constants'
import { privyAppId } from '@/config/variables'
import { PrivyProvider } from '@privy-io/react-auth'
import { WagmiProvider, createConfig } from '@privy-io/wagmi'
import { optimismSepolia } from 'wagmi/chains'
import { http } from 'viem'

export const queryClient = new QueryClient()

export const config = createConfig({
  chains: [optimismSepolia],
  ssr: true,
  transports: {
    [optimismSepolia.id]: http(alchemyUrlByChain[optimismSepolia.id]),
  },
})

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
            {children}
          </WagmiProvider>
        </QueryClientProvider>
      </PrivyProvider>
    </>
  )
}

export default AppProviders
