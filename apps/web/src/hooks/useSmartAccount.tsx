import {
  SmartAccountClient as PermissionlessSmartAccountClient,
  getAccountNonce,
} from 'permissionless'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  Address,
  Chain,
  EncodeFunctionDataParameters,
  HttpTransport,
  createWalletClient,
  custom,
  encodeFunctionData,
  http,
} from 'viem'
import { constants } from '@adland/common'
import {
  createSmartAccountClient,
  walletClientToSmartAccountSigner,
} from 'permissionless'

import {
  SimpleSmartAccount,
  signerToSimpleSmartAccount,
} from 'permissionless/accounts'
import { createPimlicoPaymasterClient } from 'permissionless/clients/pimlico'
import { useWallets } from '@privy-io/react-auth'
import { useMutation } from '@tanstack/react-query'
import { pimlicoURL } from '@/config/constants'
import { publicClient } from '@/lib/viem'

export type SmartAccountClient = PermissionlessSmartAccountClient<
  HttpTransport,
  Chain,
  SimpleSmartAccount
>

type SmartAccountContextState = {
  client: SmartAccountClient | null
}

const SmartAccountContext = createContext<SmartAccountContextState>({
  client: null,
})

const SmartAccountProvider = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState<SmartAccountClient | null>(null)
  const { wallets } = useWallets()

  const buildSmartAccountClient = useCallback(async () => {
    const embeddedWallet = wallets.find((w) => w.walletClientType === 'privy')

    if (!embeddedWallet) return

    const eip1193provider = await embeddedWallet.getEthereumProvider()

    if (!embeddedWallet.address) return

    const privyClient = createWalletClient({
      account: embeddedWallet.address as Address,
      chain: constants.chain, // Replace this with the chain used by your application
      transport: custom(eip1193provider),
    })

    const customSigner = walletClientToSmartAccountSigner(privyClient)

    // Initialize the smart account for the user
    const simpleSmartAccount = await signerToSimpleSmartAccount(publicClient, {
      entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
      signer: customSigner,
      factoryAddress: '0x9406Cc6185a346906296840746125a0E44976454',
    })

    // Create the Paymaster for gas sponsorship using the API key from your Pimlico dashboard
    const pimlicoPaymaster = createPimlicoPaymasterClient({
      transport: http(pimlicoURL),
    })

    // Create the SmartAccountClient for requesting signatures and transactions (RPCs)
    const smartAccountClient = createSmartAccountClient({
      account: simpleSmartAccount,
      chain: constants.chain, // Replace this with the chain for your app
      transport: http(pimlicoURL),
      sponsorUserOperation: pimlicoPaymaster.sponsorUserOperation, // If your app uses a paymaster for gas sponsorship
    })

    setClient(smartAccountClient)
  }, [wallets])

  useEffect(() => {
    buildSmartAccountClient()
  }, [wallets])

  return (
    <SmartAccountContext.Provider value={{ client }}>
      {children}
    </SmartAccountContext.Provider>
  )
}

type SmartAccountWriteParams = {
  to: Address
  call: EncodeFunctionDataParameters
  value?: bigint
}

const recurrentlySerializeBigInts = (obj: any): any => {
  const level = 0

  const replacer = (key: string, value: any) => {
    if (typeof value === 'bigint') {
      return value.toString()
    }
    return value
  }

  return JSON.stringify(obj, replacer, level)
}

const useSmartAccountWrite = () => {
  const { client } = useContext(SmartAccountContext)

  const write = useMutation<
    `0x${string}` | undefined,
    Error,
    SmartAccountWriteParams,
    `0x${string}`
  >({
    mutationKey: ['smartAccountWrite'],
    mutationFn: async ({ to, call, value }: SmartAccountWriteParams) => {
      if (!client) return Promise.resolve(undefined)

      const nonce = Number(
        await getAccountNonce(publicClient, {
          sender: client.account?.address,
          entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        }),
      )

      return client.sendTransaction({
        account: client.account,
        to: to,
        data: encodeFunctionData(call),
        value: value ?? BigInt(0),
        nonce,
      })
    },
  })

  return {
    write: write.mutate,
    ...write,
  }
}

export { SmartAccountContext, SmartAccountProvider, useSmartAccountWrite }
