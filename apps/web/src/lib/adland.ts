import { GraphQLClient } from 'graphql-request'
import { getSdk as getAdLand } from '@adland/webkit'
import { constants } from '@adland/common'
import { Market } from './market'
import { AdGroup, AdSpace, Listing, Metadata } from './types'
import { fetchJSON, getGatewayUri } from './utils'
import { client } from './services'
import { erc721Abi } from 'viem'

export class AdLand {
  private adland: ReturnType<typeof getAdLand>

  constructor() {
    this.adland = getAdLand(new GraphQLClient(constants.subgraphUrl))
  }

  async listGroups(): Promise<AdGroup[]> {
    const groups = await this.adland.adGroups().then((response) => {
      return response.adGroups
    })

    return Promise.all(
      groups.map(async (group) => {
        return {
          adGroup_subgraph: group,
          adSpaces: await Promise.all(
            group.adSpaces.map(async (adSpace) => ({
              adSpace_subgraph: adSpace,
              metadata: await this._getAdSpaceMetadata(adSpace.uri),
            })),
          ),
        }
      }),
    )
  }

  async listGroupListings(id: string): Promise<Listing[]> {
    const group = await this.adland
      .adGroup({
        id,
      })
      .then((response) => {
        return response.adGroup
      })

    if (!group) {
      throw new Error('Group not found')
    }

    return Promise.all(
      group.adSpaces.map(async (adSpace) => {
        return await new Market().getListing(adSpace.id)
      }),
    )
  }

  async getGroup(id: string): Promise<AdGroup | undefined> {
    const group = await this.adland
      .adGroup({
        id,
      })
      .then((response) => {
        return response.adGroup
      })

    if (!group) {
      return undefined
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

    // Temporary fix for non coherent listing owner in the direct listing contract
    listing.listingOwner = await client.readContract({
      abi: erc721Abi,
      functionName: 'ownerOf',
      address: listing.assetContract,
      args: [listing.listingId],
    })

    const tokenX = await this.adland
      .tokenXs({
        where: { underlyingToken: listing?.currency },
      })
      .then((res) => res.tokenXs[0])

    if (!adSpace) {
      throw new Error('AdSpace not found')
    }

    const metadata = await this._getAdSpaceMetadata(adSpace.uri)

    return {
      adSpace_subgraph: adSpace,
      listing,
      metadata,
      tokenX,
    }
  }

  async getAdSpaceMetadata(id: string): Promise<Metadata | undefined> {
    const adSpace = (await this.adland.adSpace({ id })).adSpace

    return this._getAdSpaceMetadata(adSpace?.uri)
  }

  private async _getAdSpaceMetadata(
    uri: string | undefined | null,
  ): Promise<Metadata | undefined> {
    if (uri?.includes('undefined')) {
      throw new Error('Invalid metadata URI')
    }
    try {
      const gatewayURI = uri ? getGatewayUri(uri) : null

      const metadata = gatewayURI ? await fetchJSON(gatewayURI) : null

      if (metadata) {
        metadata.imageGatewayURI = metadata.image
          ? getGatewayUri(metadata.image)
          : null
      }

      return metadata
    } catch (error) {
      console.error(error)
    }
  }
}
