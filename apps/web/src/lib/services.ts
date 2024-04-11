import { alchemyUrlByChain } from '@/config/constants'
import { createPublicClient, http } from 'viem'
import { getSdk as getAdLand } from '@adland/webkit'
import { GraphQLClient } from 'graphql-request'
import { constants } from '@adland/common'

const client = createPublicClient({
  chain: constants.chain,
  transport: http(alchemyUrlByChain[constants.chain.id]),
})

const adland = getAdLand(new GraphQLClient(constants.subgraphUrl))

export { client, adland }
