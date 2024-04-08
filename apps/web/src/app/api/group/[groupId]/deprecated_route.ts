import {
  adCommonOwnershipAbi,
  adCommonOwnershipAddress,
} from '@adland/contracts'
import { NextResponse, NextRequest } from 'next/server'
import { readContract } from 'viem/actions'
import { client } from '../../services'
import { fetchJSON, formatAd } from '../../helpers'
import { defaultChain } from '@/config/constants'

type GetAdsRouteParams = { params: { groupId: string } }

// TODO: Fix this endpoint with new all space ids possible
export async function GET(_: NextRequest, { params }: GetAdsRouteParams) {
  const { groupId: groupIdString } = params

  const groupId = BigInt(groupIdString)

  const { beneficiary, startListingId, endListingId } = await readContract(
    client,
    {
      address:
        adCommonOwnershipAddress[
          defaultChain.id as keyof typeof adCommonOwnershipAddress
        ],
      abi: adCommonOwnershipAbi,
      functionName: 'getAdGroup',
      args: [groupId],
    },
  )

  const start = Number(startListingId)
  const end = Number(endListingId)

  const adsPromises = Array.from({ length: end - start + 1 }, (_, i) => {
    return new Promise(async (resolve) => {
      try {
        const { uri, gatewayUri } = formatAd(
          await readContract(client, {
            address:
              adCommonOwnershipAddress[
                defaultChain.id as keyof typeof adCommonOwnershipAddress
              ],
            abi: adCommonOwnershipAbi,
            functionName: 'getAd',
            args: [BigInt(i + start)],
          }),
        )

        return resolve({
          uri,
          gatewayUri,
          metadata: gatewayUri
            ? await fetchJSON(gatewayUri).then((metadata) => {
                return {
                  ...metadata,
                  image: formatAd(metadata.image),
                }
              })
            : null,
        })
      } catch (error) {
        console.error(error)
      }
    })
  })

  const ads = await Promise.all(adsPromises)

  return NextResponse.json({ start, end, beneficiary, ads })
}
