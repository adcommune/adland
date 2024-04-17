import { NextRequest, NextResponse } from 'next/server'
import { FrameAspectRatio, adPlaceholderURL } from '@/config/constants'
import { ImageResponse } from '@vercel/og'
import { AdLand } from '@/lib/adland'

type GetAdsRouteParams = { params: { listingId: string } }
export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const { metadata } = await new AdLand().getAdSpace(params.listingId)

  const width = 500
  let height = width

  if (metadata) {
    if (metadata.aspect_ratio === FrameAspectRatio.RECTANGLE) {
      height = Math.round(width / 1.91)
    }

    if (metadata.imageGatewayURI) {
      console.log('metadata.imageGatewayURI', metadata.imageGatewayURI)
      const imageResponse = new ImageResponse(
        (
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={metadata.imageGatewayURI} width={width} height={height} />
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

  return NextResponse.redirect(adPlaceholderURL)
}
