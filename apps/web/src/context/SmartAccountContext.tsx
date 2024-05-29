'use client'

import {
  BiconomySmartAccountV2,
  createSmartAccountClient,
} from '@biconomy/account'
import { createContext, useCallback, useEffect, useState } from 'react'
import { Address } from 'viem'
import { useWallets } from '@privy-io/react-auth'
import { biconomyBundlerURL } from '@/config/constants'
import { constants } from '@adland/common'

type SmartAccountContextState = {
  bicoAccount: BiconomySmartAccountV2 | undefined
  bicoAccountAddress: Address | undefined
}

const SmartAccountContext = createContext<SmartAccountContextState>({
  bicoAccount: undefined,
  bicoAccountAddress: undefined,
})

const SmartAccountProvider = ({ children }: { children: React.ReactNode }) => {
  const [bicoAccount, setBicoAccount] = useState<
    BiconomySmartAccountV2 | undefined
  >(undefined)
  const [bicoAccountAddress, setBicoAccountAddress] = useState<
    Address | undefined
  >(undefined)
  const { wallets } = useWallets()

  const buildBiconomySmartAccountClient = useCallback(async () => {
    const embeddedWallet = wallets.find((w) => w.walletClientType === 'privy')

    if (!embeddedWallet) return

    const provider = await embeddedWallet.getEthersProvider()
    const signer = provider.getSigner()

    const smartAccount = await createSmartAccountClient({
      signer: signer,
      chainId: constants.chain.id,
      bundlerUrl: biconomyBundlerURL,
      biconomyPaymasterApiKey: 'DxWkzeYwU.f7af5c07-9a5a-448a-94d6-e5cadcd2177a',
    })

    const accountAddress = await smartAccount.getAccountAddress()

    setBicoAccount(smartAccount)
    setBicoAccountAddress(accountAddress)
  }, [wallets])

  useEffect(() => {
    buildBiconomySmartAccountClient()
  }, [wallets])

  return (
    <SmartAccountContext.Provider value={{ bicoAccount, bicoAccountAddress }}>
      {children}
    </SmartAccountContext.Provider>
  )
}

export { SmartAccountProvider, SmartAccountContext }
