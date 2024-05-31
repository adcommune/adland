import { alchemyUrlByChain, biconomyBundlerURL } from '@/config/constants'
import { constants } from '@adland/common'
import { commonAdPoolAbi } from '@adland/contracts'
import { PaymasterMode, createSmartAccountClient } from '@biconomy/account'
import {
  Address,
  PublicClient,
  createWalletClient,
  encodeFunctionData,
  http,
} from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { publicClient } from './viem'

export class CommonPoolAdmin {
  async getSmartAccount() {
    if (!process.env.FRAME_PK) throw new Error('FRAME_PK not set')
    if (!process.env.BICONOMY_PAYMASTER_API_KEY)
      throw new Error('BICONOMY_PAYMASTER_API_KEY not set')

    return createSmartAccountClient({
      signer: createWalletClient({
        chain: constants.chain,
        transport: http(alchemyUrlByChain[constants.chain.id]),
        account: privateKeyToAccount(process.env.FRAME_PK as Address),
      }),
      chainId: constants.chain.id,
      bundlerUrl: biconomyBundlerURL,
      biconomyPaymasterApiKey: process.env.BICONOMY_PAYMASTER_API_KEY,
    })
  }
}

export class CommonAdPool extends CommonPoolAdmin {
  poolAddress: Address
  client: PublicClient

  constructor(address: Address) {
    super()

    this.poolAddress = address
    this.client = publicClient
  }

  async addMemeberToGroup(member: Address, units: number) {
    const smartAccount = await this.getSmartAccount()

    const { waitForTxHash } = await smartAccount.sendTransaction(
      {
        to: this.poolAddress,
        data: encodeFunctionData({
          abi: commonAdPoolAbi,
          functionName: 'updateMemberUnits',
          args: [member, BigInt(units)],
        }),
        value: BigInt(0),
      },
      {
        paymasterServiceData: {
          mode: PaymasterMode.SPONSORED,
        },
      },
    )

    const hash = (await waitForTxHash()).transactionHash as Address | undefined

    if (!hash) throw new Error('Transaction failed')

    return this.client.waitForTransactionReceipt({
      hash,
    })
  }
}
