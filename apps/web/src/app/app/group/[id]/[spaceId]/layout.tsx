import {
  FrameAspectRatio,
  baseURL,
  noAdFrameImageCID,
} from '@/config/constants'
import { AdLand } from '@/lib/adland'
import { constants } from '@adland/common'
import { AdSpace_subgraph } from '@adland/webkit'
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
  const adSpace = await new AdLand().getAdSpace(spaceId)

  const adSpaceSubgraph = adSpace.adSpace_subgraph as AdSpace_subgraph

  const noAd = !adSpace.metadata

  return (
    <>
      <FrameMetadata
        buttons={
          adSpace.metadata?.external_url
            ? [
                {
                  label: 'Link',
                  action: 'link',
                  target: adSpace.metadata?.external_url,
                },
              ]
            : [
                {
                  label: 'Buy this ad space',
                  action: 'link',
                  target: `${baseURL}/app/group/${adSpaceSubgraph.adGroup.id}/${spaceId}`,
                },
              ]
        }
        image={{
          src: noAd
            ? `https://${constants.pinataPublicGateway}/ipfs/${noAdFrameImageCID}`
            : `${baseURL}/api/billboard/${spaceId}?time=${Date.now()}`,
          aspectRatio: noAd
            ? FrameAspectRatio.SQUARE
            : (adSpace.metadata?.aspect_ratio as FrameAspectRatio),
        }}
      />
      {children}
    </>
  )
}

export default AdSpacePageLayout
