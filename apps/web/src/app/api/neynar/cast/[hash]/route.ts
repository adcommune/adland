import { neynar } from '@/lib/neynar'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  _req: NextRequest,
  { params }: { params: { hash: string } },
) => {
  return NextResponse.json(
    (await neynar.fetchBulkCasts([params.hash])).result.casts[0],
  )
}
