import { FrameAspectRatio, baseURL } from '@/config/constants'
import { AdLand } from '@/lib/adland'
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

  return (
    <>
      {adSpace?.adSpace_subgraph.metadata?.imageGatewayURI !== undefined &&
        adSpace?.adSpace_subgraph.metadata?.aspect_ratio !== undefined && (
          <FrameMetadata
            buttons={
              adSpace?.adSpace_subgraph.metadata?.external_url
                ? [
                    {
                      label: 'Link',
                      action: 'link',
                      target: adSpace?.adSpace_subgraph.metadata?.external_url,
                    },
                  ]
                : undefined
            }
            image={{
              src: `${baseURL}/api/ad/${spaceId}/image?time=${Date.now()}`,
              aspectRatio: adSpace?.adSpace_subgraph.metadata
                ?.aspect_ratio as FrameAspectRatio,
            }}
          />
        )}
      {children}
    </>
  )
}

export default AdSpacePageLayout
