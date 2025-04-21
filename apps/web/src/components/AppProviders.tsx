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
import { SmartAccountProvider } from '@/context/SmartAccountContext'

export const queryClient = new QueryClient()

export const config = createConfig({
  // @ts-ignore
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
        loginMethods: ['wallet', 'farcaster'],
        embeddedWallets: {
          createOnLogin: 'all-users',
          noPromptOnSignature: true,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config} reconnectOnMount={true}>
          <SmartAccountProvider>
            <ModalProvider>
              <div className="h-full antialiased">
                <AppNavbar />
                <main className="relative z-0">{children}</main>
              </div>
            </ModalProvider>
          </SmartAccountProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  )
}

export default AppProviders
