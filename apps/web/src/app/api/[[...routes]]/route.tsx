/** @jsxImportSource frog/jsx */

import { Button, FrameIntent, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { FrameAspectRatio, adPlaceholderURL, baseURL } from '@/config/constants'
import { Box, Image, vars, imageOptions, Text } from './utils'
import { AdLand } from '@/lib/adland'
import {
  distributorBillboardBackground,
  frameConfig,
  learnMoreBillboardBackground,
} from '@/config/frame'
import { distributionEnabled } from './env'

type BillboardWithContentProps = {
  text?: string
  imageSrc?: string
  backgroundImage: string
}

const BillboardWithContent = ({
  text,
  imageSrc,
  backgroundImage,
}: BillboardWithContentProps) => {
  let billboardContent = (
    <Text color="background200" align="center" size="24" weight="700">
      {text}
    </Text>
  )

  if (imageSrc) {
    billboardContent = (
      <Image src={imageSrc} objectFit="cover" height="100%" width="100%" />
    )
  }

  return (
    <Box
      grow
      backgroundImage={`url(${backgroundImage})`}
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
        textAlign="center"
        padding={text ? '20' : '0'}
      >
        {billboardContent}
      </Box>
    </Box>
  )
}

const app = new Frog({
  basePath: '/api',
  ui: { vars },
})

export const runtime = 'edge'

/**
 * AD FRAME
 */
app.frame('/ad-frame/:spaceId', async (c) => {
  const { buttonValue } = c

  const { spaceId } = c.req.param()

  const metadata = await new AdLand().getAdSpaceMetadata(spaceId)

  let imageAspectRatio: FrameAspectRatio = FrameAspectRatio.SQUARE
  let intents: FrameIntent[] = []
  let imageSrc = metadata?.imageGatewayURI ?? adPlaceholderURL

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

    if (await distributionEnabled()) {
      intents.push(
        <Button value="distributor" action="/distributor">
          Distribute
        </Button>,
      )
    }

    return c.res({
      image: (
        <BillboardWithContent
          backgroundImage={learnMoreBillboardBackground}
          imageSrc={imageSrc}
        />
      ),
      imageAspectRatio,
      imageOptions,
      intents,
    })
  }

  intents.push(<Button value="learn-more">Learn more</Button>)

  return c.res({
    image: baseURL + '/api/billboard/' + spaceId + '?date=' + Date.now(),
    imageAspectRatio,
    imageOptions: {
      ...imageOptions,
      headers: {
        'Cache-Control':
          'public, max-age=' + frameConfig.initialFrameImageMaxAge,
      },
    },
    intents,
  })
})

/**
 * DISTRIBUTOR: ADLAND SUBNAME FRAME
 */
app.frame('/distributor', async (c) => {
  const { buttonValue, inputText } = c

  let statement =
    'Register your .adland.eth subname to become an official ad distributor'
  let intents: FrameIntent[] = []
  const submissionIntents = [
    <TextInput key={'textInput'} placeholder="Pick you subname" />,
    <Button key={'submitButton'} value="submit">
      Submit
    </Button>,
  ]

  if (buttonValue === 'submit') {
    // check if the subname is available
    const isAvailable = true
    if (isAvailable) {
      try {
        // throw new Error('Subname registration failed')
        statement = inputText + '.adland.eth registered successfully !'
        intents = [
          <Button key={'restart'} value="restart" action="/distributor">
            Mint another
          </Button>,
          <Button.Link key={'link to etherscan'} href={'https://etherscan.io'}>
            View on etherscan
          </Button.Link>,
        ]
      } catch (error) {
        statement = 'Subname registration failed 😔 Please try again'
      }
    } else {
      statement = 'Subname is already taken. Please try again'
    }
  } else {
    intents = submissionIntents
  }

  return c.res({
    image: (
      <BillboardWithContent
        text={statement}
        backgroundImage={distributorBillboardBackground}
      />
    ),
    imageAspectRatio: FrameAspectRatio.SQUARE,
    imageOptions,
    intents,
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
