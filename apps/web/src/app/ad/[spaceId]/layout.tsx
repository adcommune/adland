import AdGroupHeader from '@/components/AdGroup/AdGroupHeader'
import { Container } from '@/components/Container'
import { baseURL } from '@/config/constants'
import useAppContracts from '@/hooks/useAppContracts'
import { AdLand } from '@/lib/adland'
import { StandartNFTMetadata as HeyCardMetadata } from '@/lib/hey'
import { constants } from '@adland/common'
import { getFrameMetadata } from 'frog/next'
import { Metadata } from 'next'

type AdSpacePageLayoutProps = {
  children: React.ReactNode
  params: { spaceId: string }
}

export const dynamic = 'force-dynamic'
export async function generateMetadata({
  params: { spaceId },
}: AdSpacePageLayoutProps): Promise<Metadata> {
  const frameURL = `${baseURL}/api/ad-frame/` + spaceId
  const frameMetadata = await getFrameMetadata(frameURL)
  return {
    other: frameMetadata,
  }
}
const AdSpacePageLayout = async ({
  children,
  params: { spaceId },
}: AdSpacePageLayoutProps) => {
  const adGroup = await new AdLand().getGoupBySpaceId(spaceId)
  const { adCommonOwnership } = useAppContracts()

  return (
    <Container className="flex flex-col gap-2 p-4">
      {adGroup && <AdGroupHeader adGroup={adGroup} />}
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
