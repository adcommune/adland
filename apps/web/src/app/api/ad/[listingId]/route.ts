import { NextRequest, NextResponse } from 'next/server'
import { AdLand } from '@/lib/adland'

export const dynamic = 'force-dynamic'

type GetAdsRouteParams = { params: { listingId: string } }

export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  return NextResponse.json(
    await new AdLand().getAdSpaceMetadata(params?.listingId),
  )
}
