import { Namespace } from '@/lib/namespace'
import { NeynarVariables, neynar } from 'frog/middlewares'
import { imageOptions, Text, Image, Box, vars } from './utils'
import { Button, FrameIntent, FrameContext, TextInput, Frog } from 'frog'
import {
  distributorBillboardBackground,
  errorDistributorBillboardBackground,
  successDistributorBillboardBackground,
} from '@/config/frame'
import { FrameAspectRatio } from '@/config/constants'
import { shouldRecastDistributor } from './env'

/**
 * DISTRIBUTOR: ADLAND SUBNAME FRAME
 */
export type DistributorFrameState = {
  labels: Record<number, string>
}

export const app = new Frog({
  ui: { vars },
  initialState: {
    labels: {},
  },
})

type BillboardWithContentProps = {
  text?: string
  imageSrc?: string
  backgroundImage: string
}

const BillboardWithContent = ({
  text,
  imageSrc,
  backgroundImage,
}: BillboardWithContentProps): JSX.Element => {
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

app.frame(
  '/',
  neynar({
    apiKey: process.env.NEYNAR_API_KEY as string,
    features: ['interactor', 'cast'],
  }),
  async (
    c: FrameContext<
      { State: DistributorFrameState } & { Variables: NeynarVariables }
    >,
  ) => {
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
