'use client'

import CopiableInput from '@/components/CopiableInput'
// import FarcasterDistribution from '@/components/FarcasterDistribution'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { baseURL } from '@/config/constants'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}

const FarcasterDistributionPage = ({
  params: { spaceId },
}: AdSpacePageProps) => {
  const { data: adSpace } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  // const { data: adCampaign } = useQuery({
  //   queryKey: ['adCampaign-', spaceId],
  //   queryFn: async () =>
  //     new AdLand().getAdCampaign(spaceId, adSpace?.tokenX?.superToken),
  //   enabled: Boolean(adSpace?.tokenX?.superToken),
  // })
  const frameLink = `${baseURL}/ad/${spaceId}`

  return (
    <div className="flex w-full flex-col gap-2">
      <Card>
        <CardHeader className="">
          <CardTitle className="font-body">Distribution on Farcaster</CardTitle>
          <CardDescription className="font-body">
            This is your Ad Frame link. Copy and cast to share this ad.
          </CardDescription>
          {adSpace && <CopiableInput text={frameLink} />}
        </CardHeader>
        {/* {adSpace && adCampaign && (
          <FarcasterDistribution adSpace={adSpace} adCampaign={adCampaign} />
        )} */}
      </Card>
    </div>
  )
}

export default FarcasterDistributionPage
