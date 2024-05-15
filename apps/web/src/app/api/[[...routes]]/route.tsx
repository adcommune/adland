/** @jsxImportSource frog/jsx */

import { Button, FrameIntent, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { neynar } from 'frog/middlewares'
import { serveStatic } from 'frog/serve-static'
import { FrameAspectRatio, adPlaceholderURL, baseURL } from '@/config/constants'
import { Box, Image, vars, imageOptions, Text } from './utils'
import { AdLand } from '@/lib/adland'
import {
  distributorBillboardBackground,
  errorDistributorBillboardBackground,
  learnMoreBillboardBackground,
  successDistributorBillboardBackground,
} from '@/config/frame'
import { distributionEnabled } from './env'
import { Namespace } from '@/lib/namespace'

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

const app = new Frog<{ State: DistributorFrameState }>({
  basePath: '/api',
  ui: { vars },
  initialState: {
    label: '',
  },
})

export const runtime = 'edge'

/**
 * AD FRAME
 */
app.frame('/ad-frame/:spaceId', async (c) => {
  const { spaceId } = c.req.param()

  const metadata = await new AdLand().getAdSpaceMetadata(spaceId)

  let imageAspectRatio: FrameAspectRatio = FrameAspectRatio.SQUARE
  let intents: FrameIntent[] = []
  let imageSrc = metadata?.imageGatewayURI ?? adPlaceholderURL

  // if (buttonValue === 'learn-more') {
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
  // }

  // intents.push(<Button value="learn-more">Learn more</Button>)

  // return c.res({
  //   image: baseURL + '/api/billboard/' + spaceId + '?date=' + Date.now(),
  //   imageAspectRatio,
  //   imageOptions: {
  //     ...imageOptions,
  //     headers: {
  //       'Cache-Control':
  //         'public, max-age=' + frameConfig.initialFrameImageMaxAge,
  //       'cache-control':
  //         'public, max-age=' + frameConfig.initialFrameImageMaxAge,
  //     },
  //   },
  //   intents,
  // })
})

/**
 * DISTRIBUTOR: ADLAND SUBNAME FRAME
 */
type DistributorFrameState = {
  label: string
}

app.frame(
  '/distributor',
  neynar({
    apiKey: process.env.NEYNAR_API_KEY as string,
    features: ['interactor'],
  }),
  async (c) => {
    const namespace = new Namespace('adland.eth')
    const { buttonValue, inputText, deriveState } = c
    const interactor = c.var.interactor

    const interactorEthAddress =
      interactor?.verifiedAddresses.ethAddresses[0] ||
      interactor?.verifications[0] ||
      interactor?.custodyAddress

    let statement =
      'Register your .adland.eth subname to become an official ad distributor'
    let intents: FrameIntent[] = []
    const submissionIntents = [
      <TextInput key={'textInput'} placeholder="Pick your subname" />,
      <Button key={'submitButton'} value="submit">
        Submit
      </Button>,
    ]
    const confirmingIntents = [
      <Button key={'confirm'} value="confirm" action="/distributor">
        Confirm
      </Button>,
      <Button key={'cancel'} value="cancel" action="/distributor">
        Cancel
      </Button>,
    ]

    const state = deriveState((previousState) => {
      if (buttonValue === 'submit' && inputText) {
        previousState.label = inputText
      }
    })

    /**¨
     * Confirm subname registration
     */
    if (!interactorEthAddress) {
      return c.res({
        image: (
          <BillboardWithContent
            text={'Something went wrong 😔 Please try again later'}
            backgroundImage={errorDistributorBillboardBackground}
          />
        ),
        imageAspectRatio: FrameAspectRatio.SQUARE,
        imageOptions,
        intents: [
          <Button key={'retry'} value="retry" action="/distributor">
            Cancel
          </Button>,
        ],
      })
    }

    if (buttonValue === 'confirm') {
      try {
        await namespace.createSubname({
          name: state.label,
          address: interactorEthAddress,
          textRecords: {
            fid: interactor.fid,
            avatar: interactor?.pfpUrl,
            'com.warpcast': `https://warpcast.com/${interactor.username ?? interactor?.displayName}`,
          },
        })

        intents = [
          <Button key={'restart'} value="restart" action="/distributor">
            Mint another
          </Button>,
          <Button.Link
            key={'link to ens'}
            href={`https://app.ens.domains/${state.label}.adland.eth`}
          >
            ENS
          </Button.Link>,
          <Button.Link
            key={'link to etherscan'}
            href={`https://etherscan.io/name-lookup-search?id=${state.label}.adland.eth`}
          >
            ETHERSCAN
          </Button.Link>,
        ]

        return c.res({
          image: (
            <BillboardWithContent
              text={
                'Congratulations ! ' +
                state.label +
                '.adland.eth has been minted!'
              }
              backgroundImage={successDistributorBillboardBackground}
            />
          ),
          imageAspectRatio: FrameAspectRatio.SQUARE,
          imageOptions,
          intents,
        })
      } catch (error) {
        statement = 'Subname registration failed 😔 Please try again'
        intents = [
          <Button key={'confirm'} value="confirm" action="/distributor">
            Try again
          </Button>,
          <Button key={'cancel'} value="cancel" action="/distributor">
            Cancel
          </Button>,
        ]
        return c.res({
          image: (
            <BillboardWithContent
              text={statement}
              backgroundImage={errorDistributorBillboardBackground}
            />
          ),
          imageAspectRatio: FrameAspectRatio.SQUARE,
          imageOptions,
          intents,
        })
      }
    }

    /**
     * Cancel subname registration
     */
    if (buttonValue === 'submit' && inputText) {
      const label = inputText

      const { isAvailable } = await namespace.checkAvailability(label)

      if (isAvailable) {
        statement =
          inputText +
          '.adland.eth is available ! Are you sure you want to mint it?'
        intents = confirmingIntents
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
      } else {
        statement = 'Subname is not available. Please try again'
        intents = [
          <Button key={'retry'} value="retry" action="/distributor">
            Retry
          </Button>,
        ]
        return c.res({
          image: (
            <BillboardWithContent
              text={statement}
              backgroundImage={errorDistributorBillboardBackground}
            />
          ),
          imageAspectRatio: FrameAspectRatio.SQUARE,
          imageOptions,
          intents,
        })
      }
    }

    intents = submissionIntents

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
  },
)

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
