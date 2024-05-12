/** @jsxImportSource frog/jsx */

import { Button, FrameIntent, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { FrameAspectRatio, adPlaceholderURL, baseURL } from '@/config/constants'
import { Box, Image, frameConfig, vars, Text } from './utils'
import { AdLand } from '@/lib/adland'

const learnMoreBillboardBackground = 'https://i.imgur.com/jABvz51.jpg'
const squareBillboardBackground = 'https://i.imgur.com/vvNJpNf.jpg'
const distributorBillboardBackground = 'https://i.imgur.com/FoJusWv.jpg'

const { maxAge, height } = frameConfig

const app = new Frog({
  basePath: '/api',
  headers: {
    'cache-control': 'max-age=' + maxAge,
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
    headers: {
      'cache-control': 'max-age=' + maxAge,
    },
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
      <TextInput key={'textInput'} placeholder="Pick you subname" />,
      <Button key={'submitButton'} value="submit">
        Submit
      </Button>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
