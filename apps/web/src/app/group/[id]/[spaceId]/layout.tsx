import { FrameAspectRatio, baseURL } from '@/config/constants'
import useAppContracts from '@/hooks/useAppContracts'
import { constants } from '@adland/common'
import { FrameMetadata } from '@coinbase/onchainkit'
import { Address } from 'viem'

type AdSpacePageLayoutProps = {
  children: React.ReactNode
  params: { spaceId: string }
}

const StandartNFTMetadata = ({
  chain,
  collection,
  contract_address,
  creator_address,
  media_url,
}: {
  chain: string
  collection: string
  contract_address: string | Address
  media_url: string
  creator_address?: string | Address
}) => {
  return (
    <>
      <meta property="eth:nft:chain" content={chain} />
      <meta property="eth:nft:collection" content={collection} />
      <meta property="eth:nft:contract_address" content={contract_address} />
      <meta property="eth:nft:creator_address" content={creator_address} />
      <meta property="eth:nft:media_url" content={media_url} />
    </>
  )
}

export const dynamic = 'force-dynamic'

const AdSpacePageLayout = async ({
  children,
  params: { spaceId },
}: AdSpacePageLayoutProps) => {
  const { adCommonOwnership } = useAppContracts()
  return (
    <>
      <FrameMetadata
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
      <StandartNFTMetadata
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
