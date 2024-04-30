'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http } from 'viem'
import { privyAppId } from '@/config/variables'
import { PrivyProvider } from '@privy-io/react-auth'
import { WagmiProvider, createConfig } from '@privy-io/wagmi'
import { ModalProvider } from '@/context/ModalContext'
import AppNavbar from './AppNavbar'
import { constants } from '@adland/common'
import { alchemyUrlByChain } from '@/config/constants'

export const queryClient = new QueryClient()

export const config = createConfig({
  chains: [constants.chain],
  ssr: true,
  transports: {
    [constants.chain.id]: http(alchemyUrlByChain[constants.chain.id]),
  },
})

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        appearance: {
          showWalletLoginFirst: false,
          theme: 'light',
          accentColor: '#4e4e4e',
        },
        defaultChain: constants.chain,
        loginMethods: ['wallet'],
        embeddedWallets: {
          createOnLogin: 'off',
          noPromptOnSignature: true,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config} reconnectOnMount={true}>
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
