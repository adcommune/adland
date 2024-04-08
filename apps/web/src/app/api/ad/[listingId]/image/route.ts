import { NextRequest, NextResponse } from 'next/server'
import { getGatewayUri } from '@/lib/utils'
import { fetchAd } from '@/lib/ad'
import { adPlaceholderURL } from '@/config/constants'

export const dynamic = 'force-dynamic'

type GetAdsRouteParams = { params: { listingId: string } }

export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const data = await fetchAd(params.listingId)

  if (Boolean(data.metadata) && data.metadata?.image) {
    return NextResponse.redirect(getGatewayUri(data.metadata?.image))
  }

  return NextResponse.redirect(adPlaceholderURL)
}
