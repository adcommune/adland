import { FrameAspectRatio, baseURL } from '@/config/constants'
import { AdLand } from '@/lib/adland'
import { postInteraction } from '@/lib/pinata'
import { getFramePinataId } from '@/lib/utils'
import { AdSpace_subgraph } from '@adland/webkit'
import { FrameButtonMetadata, getFrameHtmlResponse } from '@coinbase/onchainkit'

import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const spaceId = req.nextUrl.searchParams.get('spaceId')!

  const frameRequest = await req.json()

  try {
    const frame_id = getFramePinataId(spaceId)

    const anal_response = await postInteraction({
      frame_id,
      frameRequest,
      custom_id: spaceId,
    })
    console.log('PINATA ANALYTICS:', anal_response)
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
