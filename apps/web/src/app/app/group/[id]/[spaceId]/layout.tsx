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
        buttons={[
          {
            label: 'Buy this ad space',
            action: 'link',
            target: `${baseURL}/app/group/${adSpaceSubgraph.adGroup.id}/${spaceId}`,
          },
        ]}
        image={{
          src: `${baseURL}/api/billboard/${spaceId}?time=${Date.now()}`,
          aspectRatio: FrameAspectRatio.SQUARE,
        }}
      />
      {children}
    </>
  )
}

export default AdSpacePageLayout
