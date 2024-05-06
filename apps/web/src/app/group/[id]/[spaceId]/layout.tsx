import { FrameAspectRatio, baseURL } from '@/config/constants'
import useAppContracts from '@/hooks/useAppContracts'
import { StandartNFTMetadata as HeyCardMetadata } from '@/lib/hey'
import { constants } from '@adland/common'
import { FrameMetadata as FcFrameMetadata } from '@coinbase/onchainkit'

type AdSpacePageLayoutProps = {
  children: React.ReactNode
  params: { spaceId: string }
}

export const dynamic = 'force-dynamic'

const AdSpacePageLayout = async ({
  children,
  params: { spaceId },
}: AdSpacePageLayoutProps) => {
  const { adCommonOwnership } = useAppContracts()
  return (
    <>
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
    </>
  )
}

export default AdSpacePageLayout
