import { FrameAspectRatio, baseURL } from '@/config/constants'
import { AdLand } from '@/lib/adland'
import { constants } from '@adland/common'
import { AdSpace_subgraph } from '@adland/webkit'
import { FrameButtonMetadata, getFrameHtmlResponse } from '@coinbase/onchainkit'

import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const spaceId = req.nextUrl.searchParams.get('spaceId')!

  const frameRequest = await req.json()

  try {
    const frame_id = `ad-${constants.chain.id}-${spaceId}`

    const anal_response = await fetch(
      'https://api.pinata.cloud/farcaster/frames/interactions',
      {
        method: 'POST',
        body: JSON.stringify({
          frame_id,
          data: frameRequest,
          custom_id: spaceId,
        }),
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
          'Content-Type': 'application/json',
        },
      },
    ).then((res) => res.json())

    console.log('PINATA ANALYTICS:', anal_response)
  } catch (error) {
    console.error('PINATA ANALYTICS:', error)
  }

  const adSpace = await new AdLand().getAdSpace(spaceId)

  const adSpaceSubgraph = adSpace.adSpace_subgraph as AdSpace_subgraph

  const buttons: [FrameButtonMetadata] = [
    {
      label: 'Buy this ad space',
      action: 'link',
      target: `${baseURL}/app/group/${adSpaceSubgraph.adGroup.id}/${spaceId}`,
    },
  ]

  if (adSpace.metadata?.external_url) {
    buttons.push({
      label: adSpace?.metadata?.description,
      action: 'link',
      target: adSpace?.metadata?.external_url,
    })
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons,
      image: {
        src: `${baseURL}/api/billboard/${spaceId}?time=${Date.now()}`,
        aspectRatio: FrameAspectRatio.SQUARE,
      },
    }),
  )
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}
