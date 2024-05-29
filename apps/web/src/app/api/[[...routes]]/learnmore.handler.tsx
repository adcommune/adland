import { Button, FrameIntent, Frog } from 'frog'
import { FrameAspectRatio, adPlaceholderURL, baseURL } from '@/config/constants'
import { AdLand } from '@/lib/adland'
import { learnMoreBillboardBackground } from '@/config/frame'
import { distributionEnabled } from './env'
import { Text, Image, Box, imageOptions, vars } from './utils'

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

export const app = new Frog({
  ui: { vars },
}).frame('/ad-frame/:spaceId', async (c) => {
  const { spaceId } = c.req.param()

  const metadata = await new AdLand().getAdSpaceMetadata(spaceId)

  let imageAspectRatio: FrameAspectRatio = FrameAspectRatio.SQUARE
  let intents: FrameIntent[] = []
  let imageSrc = metadata?.imageGatewayURI ?? adPlaceholderURL

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
