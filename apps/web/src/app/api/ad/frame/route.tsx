import { FrameAspectRatio, baseURL } from '@/config/constants'
import { AdLand } from '@/lib/adland'
import {
  getFramePinataCustomId,
  getFramePinataId,
  postInteraction,
} from '@/lib/pinata'
import { AdSpace_subgraph } from '@adland/webkit'
import {
  FrameButtonMetadata,
  getFrameHtmlResponse,
  getFrameMessage,
} from '@coinbase/onchainkit'

import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const spaceId = req.nextUrl.searchParams.get('spaceId')!

  const frameRequest = await req.json()

  const { isValid, message } = await getFrameMessage(frameRequest, {
    neynarApiKey: process.env.NEYNAR_API_KEY,
  })

  console.log({ spaceId, message })

  if (!isValid) {
    return NextResponse.json({ error: message })
  }

  try {
    const frame_id = getFramePinataId(spaceId)
    const custom_id = getFramePinataCustomId(frameRequest)

    console.log('PINATA ANALYTICS:', { frame_id, custom_id, frameRequest })

    const analytics_response = await postInteraction({
      frame_id,
      frameRequest,
      custom_id,
    })
    console.log('PINATA ANALYTICS:', analytics_response)
  } catch (error) {
    console.error('PINATA ANALYTICS:', error)
  }

  const adSpace = await new AdLand().getAdSpace(spaceId)

  const frameRedirectURL = adSpace.metadata?.frame_redirect_url

  if (frameRedirectURL) {
    return NextResponse.redirect(frameRedirectURL)
  }

  const adSpaceSubgraph = adSpace.adSpace_subgraph as AdSpace_subgraph

  const buttons: [FrameButtonMetadata] = [
    {
      label: 'Buy this ad space',
      action: 'link',
      target: `${baseURL}/group/${adSpaceSubgraph.adGroup.id}/${spaceId}`,
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
