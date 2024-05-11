/** @jsxImportSource frog/jsx */

import { Button, FrameIntent, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { FrameAspectRatio, adPlaceholderURL, baseURL } from '@/config/constants'
import { Box, Image, frameConfig, vars, Text } from './utils'
import { AdLand } from '@/lib/adland'

export const learnMoreBillboardBackground =
  'https://cdn.midjourney.com/ab3e008f-9b29-48cd-bce0-737a6a3d35ac/0_1.png'
export const squareBillboardBackground =
  'https://cdn.midjourney.com/70ae4003-8c49-4687-be21-f92e24e90289/0_0.png'
export const distributorBillboardBackground = 'https://i.imgur.com/FoJusWv.jpg'

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

  let image: (image_url: string) => string | JSX.Element = (
    image_url: string,
  ) => (
    <Box
      grow
      backgroundImage={`url(${image_url})`}
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
      image: image(learnMoreBillboardBackground),
      imageAspectRatio,
      imageOptions,
      intents,
    })
  }

  intents.push(<Button value="learn-more">Learn more</Button>)
  intents.push(
    <Button value="distributor" action="/distributor">
      Distributor
    </Button>,
  )

  return c.res({
    image: image(squareBillboardBackground),
    imageAspectRatio,
    imageOptions,
    intents,
  })
})

app.frame('/distributor', async (c) => {
  const { buttonValue, inputText } = c

  console.log('subname', { buttonValue, inputText })

  let imageOptions: { width: number; height: number } = {
    height,
    width: height,
  }

  // if()

  let image: string | JSX.Element = (
    <Box
      grow
      backgroundImage={`url(${distributorBillboardBackground})`}
      backgroundRepeat="no-repeat"
      backgroundSize={imageOptions.width + 'px ' + imageOptions.height + 'px'}
    >
      <Box
        top="distributor-billboard-top"
        left="distributor-billboard-left"
        width="distributor-billboard-width"
        height="distributor-billboard-height"
        alignVertical="center"
        alignHorizontal="center"
        textAlign="center"
        padding={'20'}
      >
        <Text color="background200" align="center" size="24" weight="700">
          Register your .adland.eth subname to become an official distributor
        </Text>
      </Box>
    </Box>
  )

  return c.res({
    image,
    imageAspectRatio: FrameAspectRatio.SQUARE,
    imageOptions,
    intents: [
      <TextInput placeholder="Pick you subname" />,
      <Button value="submit">Submit</Button>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
