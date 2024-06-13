'use client'

import {
  BiconomySmartAccountV2,
  createSmartAccountClient,
} from '@biconomy/account'
import { createContext, useCallback, useEffect, useState } from 'react'
import { Address } from 'viem'
import { useWallets } from '@privy-io/react-auth'
import { biconomyBundlerURL, biconomyPaymasterApiKey } from '@/config/constants'
import { constants } from '@adland/common'
import { useBalance } from 'wagmi'

type SmartAccountContextState = {
  bicoAccount: BiconomySmartAccountV2 | undefined
  bicoAccountAddress: Address | undefined
  balance: bigint
}

const SmartAccountContext = createContext<SmartAccountContextState>({
  bicoAccount: undefined,
  bicoAccountAddress: undefined,
  balance: BigInt(0),
})

const SmartAccountProvider = ({ children }: { children: React.ReactNode }) => {
  const [bicoAccount, setBicoAccount] = useState<
    BiconomySmartAccountV2 | undefined
  >(undefined)
  const [bicoAccountAddress, setBicoAccountAddress] = useState<
    Address | undefined
  >(undefined)
  const { wallets } = useWallets()

  const { data } = useBalance({
    address: bicoAccountAddress,
  })

  const buildBiconomySmartAccountClient = useCallback(async () => {
    const embeddedWallet = wallets.find((w) => w.walletClientType === 'privy')

    if (!embeddedWallet) return

    const provider = await embeddedWallet.getEthersProvider()
    const signer = provider.getSigner()

    const smartAccount = await createSmartAccountClient({
      signer: signer,
      chainId: constants.chain.id,
      bundlerUrl: biconomyBundlerURL,
      biconomyPaymasterApiKey,
    })

    const accountAddress = await smartAccount.getAccountAddress()

    setBicoAccount(smartAccount)
    setBicoAccountAddress(accountAddress)
  }, [wallets])

  useEffect(() => {
    buildBiconomySmartAccountClient()
  }, [wallets])

  return (
    <SmartAccountContext.Provider
      value={{
        bicoAccount,
        bicoAccountAddress,
        balance: data?.value ?? BigInt(0),
      }}
    >
      {children}
    </SmartAccountContext.Provider>
  )
}

export { SmartAccountProvider, SmartAccountContext }
