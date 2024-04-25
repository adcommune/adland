import { FrameAspectRatio, baseURL } from '@/config/constants'
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
      {children}
    </>
  )
}

export default AdSpacePageLayout
