import { FrameAspectRatio } from '@/config/constants'
import { AdLand } from '@/lib/adland'
import { FrameMetadata } from '@coinbase/onchainkit'

type AdSpacePageLayoutProps = {
  children: React.ReactNode
  params: { spaceId: string }
}

const AdSpacePageLayout = async ({
  children,
  params: { spaceId },
}: AdSpacePageLayoutProps) => {
  const adSpace = await new AdLand().getAdSpace(spaceId)

  return (
    <>
      {adSpace?.metadata?.imageGatewayURI !== undefined &&
        adSpace?.metadata?.aspect_ratio !== undefined && (
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
                : undefined
            }
            image={{
              src: adSpace.metadata?.imageGatewayURI,
              aspectRatio: adSpace.metadata?.aspect_ratio as FrameAspectRatio,
            }}
          />
        )}
      {children}
    </>
  )
}

export default AdSpacePageLayout
