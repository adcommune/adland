import { NextRequest, NextResponse } from 'next/server'
import { adPlaceholderURL } from '@/config/constants'
import { AdLand } from '@/lib/adland'

export const dynamic = 'force-dynamic'

type GetAdsRouteParams = { params: { listingId: string } }
export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const metadata = await new AdLand().getAdSpaceMetadata(params.listingId)

  if (metadata) {
    if (metadata.imageGatewayURI) {
      return NextResponse.redirect(metadata.imageGatewayURI)
    }
  }

  return NextResponse.redirect(adPlaceholderURL)
}
