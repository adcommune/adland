import { NextRequest, NextResponse } from 'next/server'
import { adPlaceholderURL } from '@/config/constants'
import { adland } from '@/lib/services'
import { resolveAdSpaceWithMetadata } from '@/lib/helpers'

export const dynamic = 'force-dynamic'

type GetAdsRouteParams = { params: { listingId: string } }
export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const ad = await adland
    .adSpace({
      id: params.listingId,
    })
    .then((response) => {
      return response.adSpace
    })

  const { metadata } = await resolveAdSpaceWithMetadata(ad)

  if (metadata) {
    if (metadata.imageGatewayURI) {
      return NextResponse.redirect(metadata.imageGatewayURI, {
        headers: {
          'Cache-Control': 'max-age=0',
        },
      })
    }
  }

  return NextResponse.redirect(adPlaceholderURL)
}
