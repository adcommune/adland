import { NextRequest } from 'next/server'
import { getInteractions } from '@/lib/pinata'

export async function GET(req: NextRequest): Promise<Response> {
  const frameId = req.nextUrl.searchParams.get('frameId')

  if (!frameId) {
    return new Response(JSON.stringify({ error: 'frameId is required' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify(await getInteractions(frameId)), {
    headers: { 'content-type': 'application/json' },
  })
}
