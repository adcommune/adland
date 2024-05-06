import {
  directListingsLogicAbi,
  directListingsLogicAddress,
} from '@adland/contracts'
import { Address, ContractFunctionReturnType } from 'viem'
import { client } from './services'
import { constants } from '@adland/common'

export class Market {
  contractOptions: { abi: typeof directListingsLogicAbi; address: Address } = {
    abi: directListingsLogicAbi,
    // @ts-ignore
    address: directListingsLogicAddress[constants.chain.id],
  }

  async getListing(
    id: string,
  ): Promise<
    ContractFunctionReturnType<
      typeof directListingsLogicAbi,
      'view',
      'getListing'
    >
  > {
    return await client.readContract({
      ...this.contractOptions,
      functionName: 'getListing',
      args: [BigInt(id)],
    })
  }
}
