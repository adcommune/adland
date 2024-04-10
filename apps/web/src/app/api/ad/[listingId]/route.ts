import { NextRequest, NextResponse } from 'next/server'
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

  if (!ad) {
    return NextResponse.error()
  }

  const resolvedAd = await resolveAdSpaceWithMetadata(ad)

  return NextResponse.json(resolvedAd)
}
