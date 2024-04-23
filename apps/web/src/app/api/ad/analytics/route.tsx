import { NextRequest } from 'next/server'
import { format, subDays } from 'date-fns'

export async function GET(req: NextRequest): Promise<Response> {
  const frameId = req.nextUrl.searchParams.get('frameId')

  // Past 30 days startDate, endDate in the format YYYY-MM-DD HH:MM:SS
  const startDate = format(subDays(new Date(), 30), 'yyyy-MM-dd HH:mm:ss')
  const endDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss')

  const rest = await fetch(
    'https://api.pinata.cloud/farcaster/frames/interactions?frame_id=' +
      frameId +
      '&start_date=' +
      startDate +
      '&end_date=' +
      endDate,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.PINATA_JWT}`,
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => res.json())

  console.log(rest)

  return new Response(JSON.stringify(rest), {
    headers: { 'content-type': 'application/json' },
  })
}
