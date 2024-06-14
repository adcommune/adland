import { GraphQLClient } from 'graphql-request'
import {
  AdGroup_OrderBy_subgraph,
  getSdk as getAdLand,
  OrderDirection_subgraph,
} from '@adland/webkit'
import { constants } from '@adland/common'
import { Market } from './market'
import { AdCampaign, AdGroup, AdSpace, Listing, Metadata } from './types'
import { fetchJSON, getGatewayUri } from './utils'
import { client } from './services'
import { Address, erc721Abi, PublicClient, zeroAddress } from 'viem'
import { publicClient } from './viem'
import { commonAdPoolAbi, commonAdSpacesAbi } from '@adland/contracts'
import { Superfluid, SuperfluidPool } from './superfluid-subgraph'
import { appContracts } from '@/config/constants'
import { AdSpacesQuery } from '@adland/webkit/src/hooks'

export class AdLand {
  private adland: ReturnType<typeof getAdLand>
  private c: PublicClient
  private sf = new Superfluid()

  constructor() {
    this.adland = getAdLand(new GraphQLClient(constants.subgraphUrl, { fetch }))
    this.c = publicClient
  }

  async listGroups(): Promise<AdGroup[]> {
    const groups = await this.adland
      .adGroups({
        orderBy: AdGroup_OrderBy_subgraph.BlockTimestamp_subgraph,
        orderDirection: OrderDirection_subgraph.Desc_subgraph,
      })
      .then((response) => {
        return response.adGroups.filter((group) => {
          return group.adSpaces[0]?.tokenX?.superToken !== zeroAddress
        })
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

  async getGoupBySpaceId(spaceId: string): Promise<AdGroup | undefined> {
    const groupId = await this.adland
      .adSpace({
        id: spaceId,
      })
      .then((response) => {
        return response.adSpace?.adGroup.id
      })

    if (!groupId) {
      return undefined
    }

    return this.getGroup(groupId)
  }

  async getAdSpace(
    id: string,
    options: { withMetadata: boolean } = { withMetadata: true },
  ): Promise<AdSpace> {
    const adSpace = (await this.adland.adSpace({ id })).adSpace

    const listing = await new Market().getListing(id)

    try {
      // Temporary fix for non coherent listing owner in the direct listing contract
      listing.listingOwner = await client.readContract({
        abi: erc721Abi,
        functionName: 'ownerOf',
        address: listing.assetContract,
        args: [listing.listingId],
      })
    } catch (error) {
      console.error(error)
    }

    const tokenX = await this.adland
      .tokenXs({
        where: { underlyingToken: listing?.currency },
      })
      .then((res) => res.tokenXs[0])

    if (!adSpace) {
      throw new Error('AdSpace not found')
    }

    let metadata = undefined

    if (options.withMetadata) {
      metadata = await this._getAdSpaceMetadata(adSpace.uri)
    }

    return {
      adSpace_subgraph: adSpace,
      listing,
      metadata,
      tokenX,
    }
  }

  async getAdCampaign(
    spaceId: string,
    superToken: Address,
    options: { withPoolDetails?: boolean } = { withPoolDetails: true },
  ): Promise<AdCampaign> {
    const commonAdPoolAddress = await this.c
      .readContract({
        address: appContracts.adCommonOwnership,
        abi: commonAdSpacesAbi,
        functionName: 'getAdPool',
        args: [BigInt(spaceId), superToken],
      })
      .then((addr) => (addr === zeroAddress ? undefined : addr))

    let sfPoolAddress = undefined

    if (commonAdPoolAddress) {
      sfPoolAddress = await this.c.readContract({
        address: commonAdPoolAddress,
        abi: commonAdPoolAbi,
        functionName: 'pool',
        args: [],
      })
    }

    let sfPool = undefined

    if (sfPoolAddress && options?.withPoolDetails) {
      sfPool = await this.sf.fetchPool(sfPoolAddress.toLowerCase())
    }

    return {
      commonAdPoolAddress,
      sfPoolAddress,
      sfPool,
    }
  }

  async listAdCampaigns(): Promise<
    {
      adSpace: AdSpacesQuery['adSpaces'][0]
      sfPool: SuperfluidPool | undefined
    }[]
  > {
    const { adSpaces } = await this.adland.adSpaces({
      where: {
        adPools_: {
          id_gt: '0',
        },
      },
    })

    return Promise.all(
      adSpaces.map(async (adSpace) => {
        return {
          adSpace,
          sfPool: await this.sf.fetchPool(adSpace.adPools[0].dPool),
        }
      }),
    )
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
