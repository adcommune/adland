import { NextRequest, NextResponse } from 'next/server'
import { adPlaceholderURL, ipfsGateway } from '@/config/constants'
import { GraphQLClient } from 'graphql-request'
import { getSdk as getAdLand } from '@adland/webkit'
import { fetchJSON } from '@/app/api/helpers'

export const dynamic = 'force-dynamic'

type GetAdsRouteParams = { params: { listingId: string } }

export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const adland = getAdLand(
    new GraphQLClient(
      'https://api.thegraph.com/subgraphs/name/nezz0746/adland-optsepolia',
    ),
  )

  const ad = await adland
    .adSpace({
      id: params.listingId,
    })
    .then((response) => {
      return response.adSpace
    })

  const uri = ad?.uri
  const gatewayURI = uri ? `${ipfsGateway}/${uri.split('ipfs://')[1]}` : null

  const metadata = gatewayURI ? await fetchJSON(gatewayURI) : null

  if (metadata) {
    metadata.imageGatewayURI = metadata.image
      ? `${ipfsGateway}/${metadata.image.split('ipfs://')[1]}`
      : null

    if (metadata.imageGatewayURI) {
      return NextResponse.redirect(metadata.imageGatewayURI)
    }
  }

  return NextResponse.redirect(adPlaceholderURL)
}
