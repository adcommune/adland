import { alchemyUrlByChain } from '@/config/constants'
import { createPublicClient, http } from 'viem'
import { constants } from '@adland/common'

const client = createPublicClient({
  // @ts-ignore
  chain: constants.chain,
  transport: http(alchemyUrlByChain[constants.chain.id]),
})

export { client }
