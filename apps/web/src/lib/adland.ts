import { GraphQLClient } from 'graphql-request'

import {
  getSdk as getPonder,
  AdGroupsQuery,
  AdSpacesQuery,
  AdGroupQuery,
  AdSpaceQuery,
  AdSpaceMetadata,
  TokenXsQuery,
  UsersQuery,
} from '@adland/webkit/src/ponder'
import { constants } from '@adland/common'
import { AdCampaign } from './types'
import { Address, encodeFunctionData, PublicClient, zeroAddress } from 'viem'
import { publicClient } from './viem'
import {
  commonAdPoolAbi,
  commonAdSpacesAbi,
  userBaseAbi,
} from '@adland/contracts'
import { Superfluid } from './superfluid-subgraph'
import { adSpacePageLimit, appContracts } from '@/config/constants'
import { BiconomySmartAccountV2, PaymasterMode } from '@biconomy/account'

export class AdLand {
  private ponder: ReturnType<typeof getPonder>
  private c: PublicClient
  private sf = new Superfluid()

  constructor() {
    this.ponder = getPonder(new GraphQLClient(constants.ponderUrl, { fetch }))
    this.c = publicClient
  }

  async listUsers(): Promise<UsersQuery> {
    return this.ponder.users({ orderBy: 'score', orderDirection: 'desc' })
  }

  async createUser(
    acct: BiconomySmartAccountV2,
    fid?: number | null,
  ): Promise<void> {
    const txRequest = await (
      await acct.sendTransaction(
        [
          {
            to: appContracts.userBase,
            data: encodeFunctionData({
              abi: userBaseAbi,
              functionName: 'addUser',
              args: [
                await acct.getAddress(),
                BigInt(fid ?? BigInt(0)) ?? BigInt(0),
              ],
            }),
            value: BigInt(0),
          },
        ],
        {
          paymasterServiceData: {
            mode: PaymasterMode.SPONSORED,
            calculateGasLimits: true,
          },
        },
      )
    ).waitForTxHash()

    if (txRequest) {
      const { transactionHash } = txRequest

      transactionHash &&
        (await this.c
          .waitForTransactionReceipt({
            hash: transactionHash as Address,
          })
          .then(() => {
            console.log('User created')
          }))
    }
  }

  async userExists(smartAccount: Address): Promise<boolean> {
    return this.ponder
      .user({ id: smartAccount })
      .then((res) => Boolean(res.user))
  }

  async listSuperTokens(): Promise<TokenXsQuery['tokenXs']> {
    return this.ponder
      .tokenXs({
        where: {
          superToken_not: zeroAddress,
        },
      })
      .then((res) => res.tokenXs)
  }

  async listAdSpacesByOwner(
    owner: Address | string,
    after?: string | null,
  ): Promise<AdSpacesQuery> {
    return this.ponder.adSpaces({
      where: {
        owner,
      },
      after,
      limit: adSpacePageLimit,
    })
  }

  async listGroups(owner?: Address | string): Promise<AdGroupsQuery> {
    return this.ponder.adGroups({
      orderBy: 'blockTimestamp',
      orderDirection: 'desc',
      where: {
        ...(owner ? { beneficiary: owner } : {}),
      },
    })
  }

  async getGroup(id?: string): Promise<AdGroupQuery['adGroup'] | undefined> {
    if (!id) {
      return undefined
    }
    return this.ponder
      .adGroup({
        id,
      })
      .then((res) => res.adGroup)
  }

  async getAdSpace(
    id: string,
    options: { withMetadata: boolean } = { withMetadata: true },
  ): Promise<AdSpaceQuery['adSpace']> {
    return this.ponder.adSpace({ id }).then(async (res) => {
      return res.adSpace
    })
  }

  async getAdCampaign(
    spaceId: string,
    superToken?: Address,
    options: { withPoolDetails?: boolean } = { withPoolDetails: true },
  ): Promise<AdCampaign | undefined> {
    if (!superToken) {
      return undefined
    }
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

    return {
      commonAdPoolAddress,
      sfPoolAddress,
      sfPool,
    }
  }

  // async listAdCampaigns(): Promise<
  //   {
  //     adSpace: AdSpacesQuerySub['adSpaces'][0]
  //     sfPool: SuperfluidPool | undefined
  //   }[]
  // > {
  //   const { adSpaces } = await this.adland.adSpaces({
  //     where: {
  //       adPools_: {
  //         id_gt: '0',
  //       },
  //     },
  //   })

  //   return Promise.all(
  //     adSpaces.map(async (adSpace) => {
  //       return {
  //         adSpace,
  //         sfPool: await this.sf.fetchPool(adSpace.adPools[0].dPool),
  //       }
  //     }),
  //   )
  // }

  async getAdSpaceMetadata(
    id: string,
  ): Promise<Omit<AdSpaceMetadata, 'adSpace'> | null> {
    const adSpace = (await this.ponder.adSpace({ id })).adSpace?.currentMetadata

    return adSpace ?? null
  }

  // private async _getAdSpaceMetadata(
  //   uri: string | undefined | null,
  // ): Promise<Metadata | undefined> {
  //   if (uri?.includes('undefined')) {
  //     throw new Error('Invalid metadata URI')
  //   }
  //   try {
  //     const gatewayURI = uri ? getGatewayUri(uri) : null

  //     const metadata = gatewayURI ? await fetchJSON(gatewayURI) : null

  //     if (metadata) {
  //       metadata.imageGatewayURI = metadata.image
  //         ? getGatewayUri(metadata.image)
  //         : null
  //     }

  //     return metadata
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // private async _getAdGroupMetadata(
  //   uri: string | undefined | null,
  // ): Promise<AdGroupMetadata | undefined> {
  //   if (uri?.includes('undefined')) {
  //     throw new Error('Invalid metadata URI')
  //   }
  //   try {
  //     const gatewayURI = uri ? getGatewayUri(uri) : null

  //     const metadata = gatewayURI ? await fetchJSON(gatewayURI) : null

  //     return metadata
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
}
