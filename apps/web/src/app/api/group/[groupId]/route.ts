import { AdLand } from '@/lib/adland'
import { NextResponse, NextRequest } from 'next/server'

type GetAdsRouteParams = { params: { groupId: string } }

export async function GET(_: NextRequest, { params }: GetAdsRouteParams) {
  return NextResponse.json(await new AdLand().getGroup(params.groupId))
}
