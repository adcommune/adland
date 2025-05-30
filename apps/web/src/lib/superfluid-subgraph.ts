import { constants } from '@adland/common'
import { GraphQLClient, gql } from 'graphql-request'
import { Account, Address, encodePacked, formatEther } from 'viem'
import { FlowUpdateEvent } from './superfluid.types'

export class Superfluid {
  client: GraphQLClient

  constructor() {
    this.client = new GraphQLClient(constants.superfluidSubgraphUrl)
  }

  async fetchLatestFlowUpdateEvent(spaceId: string) {
    const userData = encodePacked(['uint256'], [BigInt(spaceId)])

    return this.client
      .request<{
        flowUpdatedEvents: FlowUpdateEvent[]
      }>(
        gql`
          query FetchLatestFlowUpdateEvent($userData: String!) {
            flowUpdatedEvents(
              first: 10
              where: { userData: $userData }
              orderDirection: desc
              orderBy: timestamp
            ) {
              id
              timestamp
              flowRate
              oldFlowRate
            }
          }
        `,
        {
          userData,
        },
      )
      .then((data) => {
        const oldFlow = BigInt(data.flowUpdatedEvents[0].oldFlowRate)
        const newFlow = BigInt(data.flowUpdatedEvents[0].flowRate)

        const absoluteDifference =
          newFlow > oldFlow ? newFlow - oldFlow : oldFlow - newFlow

        return formatEther(
          BigInt(absoluteDifference) * BigInt(60 * 60 * 24 * 7),
        )
      })
      .catch((err) => undefined)
  }

  async fetchAccountInflows(accountAddress?: string) {
    if (!accountAddress) return Promise.resolve(undefined)
    return this.client
      .request<{ account: Account }>(
        gql`
          query FetchAccountInflows($accountAddress: String!) {
            account(id: $accountAddress) {
              id
              inflows {
                id
                currentFlowRate
                token {
                  id
                  symbol
                  decimals
                  underlyingAddress
                }
                userData
                sender {
                  id
                }
              }
            }
          }
        `,
        {
          accountAddress,
        },
      )
      .then((data) => data.account)
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
                totalAmountClaimed
                createdAtTimestamp
                updatedAtTimestamp
              }
              flowDistributionUpdatedEvents(first: 20) {
                id
                adjustmentFlowRate
                oldFlowRate
                adjustmentFlowRecipient
                newDistributorToPoolFlowRate
                newTotalDistributionFlowRate
                totalUnits
                poolDistributor {
                  id
                }
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

  async fetchPoolMember(poolAddress: string, memberAddress: string) {
    const memberId = `poolMember-${poolAddress.toLowerCase()}-${memberAddress.toLowerCase()}`
    return this.client
      .request<{ poolMember: SuperfluidPoolMember }>(
        gql`
          query FetchPoolMember($memberId: String!) {
            poolMember(id: $memberId) {
              id
              isConnected
              units
              totalAmountClaimed
              createdAtTimestamp
              updatedAtTimestamp
            }
          }
        `,
        {
          memberId,
        },
      )
      .then((data) => data.poolMember)
  }
}

export type SuperfluidPoolMember = {
  id: Address
  isConnected: boolean
  units: string
  totalAmountClaimed: string
  createdAtTimestamp: string
  updatedAtTimestamp: string
}

export type SuperfluidPool = {
  id: Address
  totalUnits: string
  totalMembers: string
  flowRate: string
  perUnitFlowRate: string
  totalConnectedUnits: string
  totalConnectedMembers: string
  poolMembers: SuperfluidPoolMember[]
  flowDistributionUpdatedEvents: {
    id: Address
    adjustmentFlowRate: string
    oldFlowRate: string
    adjustmentFlowRecipient: Address
    newDistributorToPoolFlowRate: string
    newTotalDistributionFlowRate: string
    totalUnits: string
    poolDistributor: {
      id: Address
    }
  }[]
}
