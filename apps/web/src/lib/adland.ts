import { GraphQLClient } from 'graphql-request'
import { getSdk as getAdLand } from '@adland/webkit'
import { constants } from '@adland/common'
import { Market } from './market'
import { AdGroup, AdSpace } from './types'

export class AdLand {
  private adland: ReturnType<typeof getAdLand>

  constructor() {
    this.adland = getAdLand(new GraphQLClient(constants.subgraphUrl))
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

    return {
      adSpace_subgraph: adSpace,
      listing,
    }
  }
}
