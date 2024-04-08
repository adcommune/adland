import {
  adCommonOwnershipAbi,
  adCommonOwnershipAddress,
} from '@adland/contracts'
import { readContract } from 'viem/actions'
import { fetchJSON, formatAd } from '@/app/api/helpers'
import { GetAdReturnType } from './types'
import { client } from '@/app/api/services'
import { defaultChain } from '@/config/constants'

export const fetchAd = async (listingId: string): Promise<GetAdReturnType> => {
  const res = await readContract(client, {
    address:
      adCommonOwnershipAddress[
        defaultChain.id as keyof typeof adCommonOwnershipAddress
      ],
    abi: adCommonOwnershipAbi,
    functionName: 'getAd',
    args: [BigInt(parseInt(listingId))],
  }).then(formatAd)

  return {
    ...res,
    metadata: res.gatewayUri ? await fetchJSON(res.gatewayUri) : null,
  }
}
