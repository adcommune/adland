import { FrameAspectRatio, baseURL } from '@/config/constants'
import { AdLand } from '@/lib/adland'
import { getFrameId, postFrameInteractionAnalytics } from '@/lib/analytics'
import { AdSpace_subgraph } from '@adland/webkit'
import {
  FrameButtonMetadata,
  FrameRequest,
  getFrameHtmlResponse,
  getFrameMessage,
} from '@coinbase/onchainkit'

import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const spaceId = req.nextUrl.searchParams.get('spaceId')!

  const frameRequest: FrameRequest = await req.json()

  // Validate frame, if successfull account for the interaction w/ analytics
  try {
    const { isValid, message } = await getFrameMessage(frameRequest, {
      neynarApiKey: process.env.NEYNAR_API_KEY,
    })

    console.log({ spaceId, message })

    if (!isValid) {
      throw new Error(message)
    }

    try {
      const frame_id = getFrameId(spaceId)

      console.log('ANALYTICS ARGS:', { frame_id, frameRequest })
      const analytics_response = await postFrameInteractionAnalytics({
        frameId: frame_id,
        castFid: frameRequest.untrustedData.castId.fid,
        castHash: frameRequest.untrustedData.castId.hash,
      })
      console.log('ANALYTICS RESPONSE:', analytics_response)
    } catch (error) {
      console.error('ANALYTICS ERROR:', error)
    }
  } catch (error) {
    console.error('getFrameMessage:error:', error)
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
