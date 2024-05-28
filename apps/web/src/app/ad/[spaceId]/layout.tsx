import AdGroupHeader from '@/components/AdGroup/AdGroupHeader'
import { Container } from '@/components/Container'
import { FrameAspectRatio, baseURL } from '@/config/constants'
import { SmartAccountProvider } from '@/context/SmartAccountContext'
import useAppContracts from '@/hooks/useAppContracts'
import { AdLand } from '@/lib/adland'
import { StandartNFTMetadata as HeyCardMetadata } from '@/lib/hey'
import { constants } from '@adland/common'
import { FrameMetadata } from '@coinbase/onchainkit'

type AdSpacePageLayoutProps = {
  children: React.ReactNode
  params: { spaceId: string }
}

export const dynamic = 'force-dynamic'

const AdSpacePageLayout = async ({
  children,
  params: { spaceId },
}: AdSpacePageLayoutProps) => {
  const adGroup = await new AdLand().getGoupBySpaceId(spaceId)
  const { adCommonOwnership } = useAppContracts()

  const postURL = `${baseURL}/api/ad-frame/${spaceId}`
  const dynamicBillboardURL = `${baseURL}/api/billboard/${spaceId}?time=${Date.now()}`

  return (
    <Container className="flex flex-col gap-2 p-4">
      {adGroup && <AdGroupHeader adGroup={adGroup} />}
      <FrameMetadata
        buttons={[
          {
            label: 'Learn More',
            target: postURL,
          },
        ]}
        postUrl={postURL}
        image={{
          src: dynamicBillboardURL,
          aspectRatio: FrameAspectRatio.SQUARE,
        }}
      />
      <HeyCardMetadata
        {...{
          chain: constants.chain.name,
          collection: 'AdLand: AdSpace #' + spaceId,
          contract_address: adCommonOwnership,
          media_url: `${baseURL}/api/billboard/${spaceId}?time=${Date.now()}`,
        }}
      />
      {children}
    </Container>
  )
}

export default AdSpacePageLayout
