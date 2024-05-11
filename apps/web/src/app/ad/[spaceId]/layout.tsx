import { FrameAspectRatio, baseURL } from '@/config/constants'
import useAppContracts from '@/hooks/useAppContracts'
import { StandartNFTMetadata as HeyCardMetadata } from '@/lib/hey'
import { constants } from '@adland/common'
import { FrameMetadata as FcFrameMetadata } from '@coinbase/onchainkit'
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
const AdSpacePageLayout = async ({ children }: AdSpacePageLayoutProps) => {
  return (
    <>
      {/* <HeyCardMetadata
        {...{
          chain: constants.chain.name,
          collection: 'AdLand: AdSpace #' + spaceId,
          contract_address: adCommonOwnership,
          media_url: `${baseURL}/api/billboard/${spaceId}?time=${Date.now()}`,
        }}
      />
      <FcFrameMetadata
        buttons={[
          {
            label: 'Learn more',
            action: 'post',
            target: `${baseURL}/api/ad/frame?spaceId=${spaceId}`,
          },
        ]}
        image={{
          src: `${baseURL}/api/billboard/${spaceId}?time=${Date.now()}`,
          aspectRatio: FrameAspectRatio.SQUARE,
        }}
        postUrl={`${baseURL}/api/ad/frame?spaceId=${spaceId}`}
      /> */}

      {children}
    </>
  )
}

export default AdSpacePageLayout
