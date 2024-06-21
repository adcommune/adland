import { NextRequest, NextResponse } from 'next/server'
import { AdLand } from '@/lib/adland'
import { constants } from '@adland/common'

export const dynamic = 'force-dynamic'

type GetAdsRouteParams = { params: { listingId: string } }
export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const metadata = await new AdLand().getAdSpaceMetadata(params.listingId)

  if (metadata) {
    if (metadata.externalUrl) {
      return NextResponse.redirect(metadata.externalUrl)
    }
  }

  return NextResponse.redirect(constants.appUrl + '/ad/' + params.listingId)
}
