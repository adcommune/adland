import { alchemyUrlByChain } from '@/config/constants'
import { createPublicClient, http } from 'viem'
import { AdSpaceQuery, getSdk as getAdLand } from '@adland/webkit'
import { GraphQLClient } from 'graphql-request'
import { constants } from '@adland/common'
import { resolveAdSpaceWithMetadata } from './helpers'

const client = createPublicClient({
  chain: constants.chain,
  transport: http(alchemyUrlByChain[constants.chain.id]),
})

const adland = getAdLand(new GraphQLClient(constants.subgraphUrl))

export class AdLand {
  private adland: ReturnType<typeof getAdLand>

  constructor() {
    this.adland = getAdLand(new GraphQLClient(constants.subgraphUrl))
  }

  async getGroup(id: string) {
    const group = await adland
      .adGroup({
        id,
      })
      .then((response) => {
        return response.adGroup
      })

    if (!group) {
      throw new Error('Group not found')
    } else {
      const group_response = {
        ...group,
        adSpaces: await Promise.all(
          group.adSpaces.map(async (adSpace) =>
            resolveAdSpaceWithMetadata(adSpace as AdSpaceQuery['adSpace']),
          ),
        ),
      }
      return group_response
    }
  }
}

export { client, adland }
