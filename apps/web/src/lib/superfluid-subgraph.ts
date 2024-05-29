import { constants } from '@adland/common'
import { GraphQLClient, gql } from 'graphql-request'
import { Address } from 'viem'

export class Superfluid {
  client: GraphQLClient

  constructor() {
    this.client = new GraphQLClient(constants.superfluidSubgraphUrl)
  }

  async fetchPool(poolAddress?: string): Promise<SuperfluidPool | undefined> {
    if (!poolAddress) return Promise.resolve(undefined)
    return this.client
      .request<{ pool: SuperfluidPool }>(
        gql`
          query FetchPool($poolAddress: String!) {
            pool(id: $poolAddress) {
              id
              totalUnits
              totalMembers
              flowRate
              perUnitFlowRate
              totalConnectedUnits
              totalConnectedMembers
              poolMembers {
                id
                isConnected
                units
              }
            }
          }
        `,
        {
          poolAddress,
        },
      )
      .then((data) => data.pool)
  }
}

export type SuperfluidPool = {
  id: Address
  totalUnits: string
  totalMembers: string
  flowRate: string
  perUnitFlowRate: string
  totalConnectedUnits: string
  totalConnectedMembers: string
  poolMembers: {
    id: Address
    isConnected: boolean
    units: string
  }[]
}
