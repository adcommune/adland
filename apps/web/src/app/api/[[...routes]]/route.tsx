/** @jsxImportSource frog/jsx */

import { Button, FrameIntent, Frog } from 'frog'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { FrameAspectRatio, adPlaceholderURL, baseURL } from '@/config/constants'
import { Box, Image, frameConfig, vars } from './utils'
import { AdLand } from '@/lib/adland'

export const squareBillboardBackground = 'https://i.imgur.com/Nizhf4V.jpg'

const { maxAge, height } = frameConfig

const app = new Frog({
  basePath: '/api',
  headers: {
    'cache-control': 'public, max-age=' + maxAge,
  },
  ui: { vars },
})

export const runtime = 'edge'

app.frame('/ad-frame/:spaceId', async (c) => {
  const { buttonValue } = c

  const { spaceId } = c.req.param()

  const metadata = await new AdLand().getAdSpaceMetadata(spaceId)

  let imageAspectRatio: FrameAspectRatio = FrameAspectRatio.SQUARE
  let intents: FrameIntent[] = []
  let imageOptions: { width: number; height: number } = {
    height,
    width: height,
  }
  let imageSrc = metadata?.imageGatewayURI ?? adPlaceholderURL

  let image: string | JSX.Element = (
    <Box
      grow
      backgroundImage={`url(${squareBillboardBackground})`}
      backgroundRepeat="no-repeat"
      backgroundSize={imageOptions.width + 'px ' + imageOptions.height + 'px'}
    >
      <Box
        top="billboard-top"
        left="billboard-left"
        width="billboard-width"
        height="billboard-height"
        alignVertical="center"
        alignHorizontal="center"
        // overflow="hidden"
      >
        <Image src={imageSrc} objectFit="cover" height="100%" width="100%" />
      </Box>
    </Box>
  )

  if (buttonValue === 'learn-more') {
    intents.push(
      <Button.Link href={baseURL + '/ad/' + spaceId}>Your ad here</Button.Link>,
    )

    if (metadata?.external_url) {
      intents.push(
        <Button.Link href={metadata.external_url}>
          {metadata?.description}
        </Button.Link>,
      )
    }

    return c.res({
      image,
      imageAspectRatio,
      imageOptions,
      intents,
    })
  }

  intents.push(<Button value="learn-more">Learn more</Button>)

  return c.res({
    image,
    imageAspectRatio,
    imageOptions,
    intents,
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
