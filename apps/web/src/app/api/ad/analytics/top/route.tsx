import { NextRequest } from 'next/server'
import { getTopInteractions } from '@/lib/pinata'

export async function GET(req: NextRequest): Promise<Response> {
  const frameId = req.nextUrl.searchParams.get('frameId')

  const res = await getTopInteractions()

  return new Response(JSON.stringify(res), {
    headers: { 'content-type': 'application/json' },
  })
}
