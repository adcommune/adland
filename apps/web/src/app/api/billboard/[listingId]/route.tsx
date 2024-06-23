import { NextRequest } from 'next/server'
import { adPlaceholderURL } from '@/config/constants'
import { ImageResponse } from '@vercel/og'
import { AdLand } from '@/lib/adland'
import {
  frameAdPositions,
  frameConfig,
  noAdBillboardBackground,
  squareBillboardBackground,
} from '@/config/frame'
import { applyRatios } from './utils'

export const dynamic = 'force-dynamic'

type GetAdsRouteParams = { params: { listingId: string } }
export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const metadata = await new AdLand().getAdSpaceMetadata(params.listingId)
  const background = _req.nextUrl.searchParams.get('background')

  let imageResponse
  let frameHeight = frameConfig.height
  let frameWidth = frameConfig.height
  let backgroundUrl = noAdBillboardBackground

  const { billboardTop, billboardLeft, billboardHeight, billboardWith } =
    applyRatios(frameAdPositions.default, frameWidth)

  if (metadata) {
    backgroundUrl = squareBillboardBackground
  }

  if (background) {
    backgroundUrl = background
  }

  imageResponse = new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: frameWidth,
          height: frameHeight,
          backgroundColor: 'black',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${frameWidth}px ${frameHeight}px`,
          }}
        >
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              top: `${billboardTop}px`,
              left: `${billboardLeft}px`,
              width: `${billboardWith}px`,
              height: `${billboardHeight}px`,
            }}
          >
            <img
              src={
                metadata?.imageGatewayUri
                  ? metadata.imageGatewayUri
                  : adPlaceholderURL
              }
              style={{
                display: 'flex',
                width: `${billboardWith}px`,
                height: `${billboardHeight}px`,
                objectFit: 'contain',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width: frameWidth,
      height: frameHeight,
    },
  )

  const max_age = frameConfig.initialFrameImageMaxAge

  imageResponse?.headers.set('Cache-Control', 'public, max-age=' + max_age)
  imageResponse?.headers.set('cache-control', 'public, max-age=' + max_age)

  return imageResponse
}
