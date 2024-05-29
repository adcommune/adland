import { alchemyUrlByChain } from '@/config/constants'
import { constants } from '@adland/common'
import { commonAdPoolAbi } from '@adland/contracts'
import {
  Address,
  Chain,
  PrivateKeyAccount,
  Transport,
  WalletClient,
  createWalletClient,
  http,
} from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

export class CommonAdPool {
  poolAddress: Address
  wallet: WalletClient<Transport, Chain, PrivateKeyAccount, undefined>

  constructor(address: Address) {
    if (!process.env.FRAME_PK) throw new Error('FRAME_PK not set')

    this.poolAddress = address
    this.wallet = createWalletClient({
      chain: constants.chain,
      transport: http(alchemyUrlByChain[constants.chain.id]),
      account: privateKeyToAccount(process.env.FRAME_PK as Address),
    })
  }

  async addMemeberToGroup(member: Address, units: number) {
    return this.wallet.writeContract({
      address: this.poolAddress,
      abi: commonAdPoolAbi,
      functionName: 'updateMemberUnits',
      args: [member, BigInt(units)],
    })
  }
}
