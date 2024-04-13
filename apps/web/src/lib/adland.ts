import { GraphQLClient } from 'graphql-request'
import { getSdk as getAdLand } from '@adland/webkit'
import { constants } from '@adland/common'
import { Market } from './market'
import { AdGroup, AdSpace, Metadata } from './types'
import { fetchJSON, getGatewayUri } from './utils'

export class AdLand {
  private adland: ReturnType<typeof getAdLand>

  constructor() {
    this.adland = getAdLand(new GraphQLClient(constants.subgraphUrl))
  }

  async getGroup(id: string): Promise<AdGroup> {
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
      return {
        adGroup_subgraph: group,
        adSpaces: await Promise.all(
          group.adSpaces.map(async (adSpace) => ({
            adSpace_subgraph: adSpace,
            metadata: await this._getAdSpaceMetadata(adSpace.uri),
          })),
        ),
      }
    }
  }

  async getAdSpace(id: string): Promise<AdSpace> {
    const adSpace = (await this.adland.adSpace({ id })).adSpace

    const listing = await new Market().getListing(id)

    if (!adSpace) {
      throw new Error('AdSpace not found')
    }

    const metadata = await this._getAdSpaceMetadata(adSpace.uri)

    return {
      adSpace_subgraph: adSpace,
      listing,
      metadata,
    }
  }

  private async _getAdSpaceMetadata(
    uri: string | undefined | null,
  ): Promise<Metadata> {
    if (uri?.includes('undefined')) {
      throw new Error('Invalid metadata URI')
    }

    const gatewayURI = uri ? getGatewayUri(uri) : null

    const metadata = gatewayURI ? await fetchJSON(gatewayURI) : null

    if (metadata) {
      metadata.imageGatewayURI = metadata.image
        ? getGatewayUri(metadata.image)
        : null
    }

    return metadata
  }
}
