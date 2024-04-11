import { GraphQLClient } from 'graphql-request'
import { AdSpaceQuery_subgraph, getSdk as getAdLand } from '@adland/webkit'
import { constants } from '@adland/common'
import { resolveAdSpaceWithMetadata } from './helpers'
import { Market } from './market'
import { AdSpace } from './types'
import { fetchJSON, getGatewayUri } from './utils'

export class AdLand {
  private adland: ReturnType<typeof getAdLand>

  constructor() {
    this.adland = getAdLand(new GraphQLClient(constants.subgraphUrl))
  }

  async getGroup(id: string) {
    const group = await this.adland
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
            resolveAdSpaceWithMetadata(
              adSpace as AdSpaceQuery_subgraph['adSpace'],
            ),
          ),
        ),
      }
      return group_response
    }
  }

  async getAdSpace(id: string): Promise<AdSpace> {
    const adSpace = (await this.adland.adSpace({ id })).adSpace

    const listing = await new Market().getListing(id)

    if (!adSpace) {
      throw new Error('AdSpace not found')
    }

    const uri = adSpace?.uri
    const gatewayURI = uri ? getGatewayUri(uri) : null

    const metadata = gatewayURI ? await fetchJSON(gatewayURI) : null

    if (metadata) {
      metadata.imageGatewayURI = metadata.image
        ? getGatewayUri(metadata.image)
        : null
    }

    return {
      adSpace_subgraph: adSpace,
      listing,
      metadata,
    }
  }
}
