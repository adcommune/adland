import { NextRequest, NextResponse } from 'next/server'
import { FrameAspectRatio, noAdFrameImageCID } from '@/config/constants'
import { ImageResponse } from '@vercel/og'
import { AdLand } from '@/lib/adland'
import { applyMultiplier, billboardSettings, initialWidth } from './utils'
import {
  rectangleBillboardBackground,
  squareBillboardBackground,
} from './assets'
import { constants } from '@adland/common'

type GetAdsRouteParams = { params: { listingId: string } }
export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const metadata = await new AdLand().getAdSpaceMetadata(params.listingId)

  /**
   * Constants
   */
  const multiplier = 1.3

  let width = initialWidth * multiplier
  let height
  let background

  if (metadata) {
    const aspect_ratio = metadata.aspect_ratio as FrameAspectRatio

    /**
     * Set height based on aspect ratio
     */
    if (metadata.aspect_ratio === FrameAspectRatio.RECTANGLE) {
      height = Math.round(width / 1.91)
      background = rectangleBillboardBackground
    } else {
      height = width
      background = squareBillboardBackground
    }

    /**
     * Billboard position settings
     */
    const { top, left, billboardWith, billboardHeight } = applyMultiplier(
      billboardSettings[aspect_ratio],
      multiplier,
    )

    if (metadata.imageGatewayURI) {
      const imageResponse = new ImageResponse(
        (
          <div
            style={{ display: 'flex', width, height, backgroundColor: 'black' }}
          >
            <div
              style={{
                display: 'flex',
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${width}px ${height}px`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  position: 'absolute',
                  top: `${top}px`,
                  left: `${left}px`,
                  width: `${billboardWith}px`,
                  height: `${billboardHeight}px`,
                }}
              >
                <img
                  src={metadata.imageGatewayURI}
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
          width,
          height,
        },
      )

      const max_age = 5 * 60 // 5 minutes

      imageResponse.headers.set('Cache-Control', 'public, max-age=' + max_age)

      return imageResponse
    }
  }

  return NextResponse.redirect(
    `https://${constants.pinataPublicGateway}/ipfs/${noAdFrameImageCID}`,
  )
}
