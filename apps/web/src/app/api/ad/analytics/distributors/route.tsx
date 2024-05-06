import { NextRequest } from 'next/server'
import { zeroAddress } from 'viem'
import { NeynarAPIClient } from '@neynar/nodejs-sdk'
import { AppDistributor } from '@/lib/types'

const neynar = new NeynarAPIClient(process.env.NEYNAR_API_KEY ?? '')

export async function GET(req: NextRequest): Promise<Response> {
  const frameId = req.nextUrl.searchParams.get('frameId')

  const distributors: AppDistributor[] =
    (
      await prisma?.frameDistribution.findMany({
        where: { frameId },
      })
    )?.filter((d) => d.id !== zeroAddress) ?? []

  let casters = await neynar.fetchBulkUsers(
    distributors.map((d) => d.casterFid),
  )

  distributors.forEach((d) => {
    d.caster = casters.users.find((c) => c.fid === d.casterFid)
  })

  return new Response(JSON.stringify(distributors), {
    headers: { 'content-type': 'application/json' },
  })
}
