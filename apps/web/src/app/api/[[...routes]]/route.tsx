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
import { distributionEnabled, shouldRecastDistributor } from './env'
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
      <Image src={imageSrc} objectFit="contain" height="100%" width="100%" />
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
    labels: {},
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
  let imageSrc = metadata?.imageGatewayUri ?? adPlaceholderURL

  if (metadata?.externalUrl) {
    intents.push(
      <Button.Link href={metadata.externalUrl}>
        {metadata?.description}
      </Button.Link>,
    )
  }

  intents.push(
    <Button.Link href={baseURL + '/ad/' + spaceId}>Buy this space</Button.Link>,
  )

  if (await distributionEnabled()) {
    intents.push(
      <Button value="distributor" action="/distributor">
        Mint Subname
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
})

/**
 * DISTRIBUTOR: ADLAND SUBNAME FRAME
 */
type DistributorFrameState = {
  labels: Record<number, string>
}

app.frame(
  '/distributor',
  neynar({
    apiKey: process.env.NEYNAR_API_KEY as string,
    features: ['interactor', 'cast'],
  }),
  async (c) => {
    const namespace = new Namespace('adland.eth')
    const {
      buttonValue,
      inputText,
      deriveState,
      var: { interactor, cast },
    } = c

    const interactorFID = interactor?.fid

    const recasted = cast?.reactions.recasts.some(
      ({ fid }) => fid === interactorFID,
    )

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

    /**¨
     * Confirm subname registration
     */

    const state = deriveState((previousState) => {
      console.log('previousState', previousState)
      if (interactorFID) {
        if (buttonValue === 'submit' && inputText) {
          previousState.labels[interactorFID] = inputText
        }
        if (buttonValue === 'restart') {
          delete previousState.labels[interactorFID]
        }
      }
    })

    if (buttonValue === 'confirm' && interactorFID && interactorEthAddress) {
      const label = state.labels[interactorFID]
      try {
        await namespace.createSubname({
          name: label,
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
            href={`https://app.ens.domains/${label}.adland.eth`}
          >
            ENS
          </Button.Link>,
          <Button.Link
            key={'link to etherscan'}
            href={`https://etherscan.io/name-lookup-search?id=${label}.adland.eth`}
          >
            ETHERSCAN
          </Button.Link>,
        ]

        return c.res({
          image: (
            <BillboardWithContent
              text={
                'Congratulations ! ' + label + '.adland.eth has been minted!'
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
      if (!recasted && (await shouldRecastDistributor())) {
        return c.res({
          image: (
            <BillboardWithContent
              text={'Recast to mint'}
              backgroundImage={errorDistributorBillboardBackground}
            />
          ),
          imageAspectRatio: FrameAspectRatio.SQUARE,
          imageOptions,
          intents: [
            <Button key={'return'} value="return" action="/distributor">
              Return
            </Button>,
          ],
        })
      }
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

app.frame('/ad-frame/:spaceId/landing', async (c) => {
  const { spaceId } = c.req.param()

  // @ts-ignore
  return c.res({
    image: baseURL + '/api/billboard/' + spaceId + '?date=' + Date.now(),
    imageAspectRatio: FrameAspectRatio.SQUARE,
    imageOptions,
    intents: [
      <Button.Link key={'landing'} href={`${baseURL}/api/ad/${spaceId}/link`}>
        Open Ad
      </Button.Link>,
      <Button key={'landing'} value="" action={`/ad-frame/${spaceId}`}>
        More info
      </Button>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
