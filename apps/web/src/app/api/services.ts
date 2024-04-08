import { alchemyUrlByChain, defaultChain } from '@/config/constants'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: defaultChain,
  transport: http(alchemyUrlByChain[defaultChain.id]),
})

export { client }
