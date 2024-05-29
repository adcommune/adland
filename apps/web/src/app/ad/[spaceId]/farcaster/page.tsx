'use client'

import Copiable from '@/components/Copiable'
import FarcasterDistribution from '@/components/FarcasterDistribution'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { baseURL } from '@/config/constants'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
  children: React.ReactNode
}
const FarcasterDistributionPage = ({
  params: { spaceId },
}: AdSpacePageProps) => {
  const { data: adSpace } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  const { data: adCampaign } = useQuery({
    queryKey: ['adCampaign-', spaceId],
    queryFn: async () =>
      new AdLand().getAdCampaign(spaceId, adSpace?.tokenX?.superToken),
    enabled: Boolean(adSpace?.tokenX?.superToken),
  })

  return (
    <div className="flex w-full flex-col gap-2">
      <Card>
        <CardHeader className="">
          <CardTitle className="font-body">Distribution on Farcaster</CardTitle>
          <CardDescription className="font-body">
            This is your Ad Frame link. Copy and cast to share this ad.
          </CardDescription>
          {adSpace && (
            <CardDescription className="font-body">
              <div className="flex w-full flex-row items-center justify-center gap-2">
                <Input
                  className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
                  disabled
                  placeholder={`${baseURL}/ad/${spaceId}`}
                />
                <Copiable visible text={`${baseURL}/ad/${spaceId}`} />
              </div>
            </CardDescription>
          )}
        </CardHeader>
        {adSpace && adCampaign && (
          <FarcasterDistribution adSpace={adSpace} adCampaign={adCampaign} />
        )}
      </Card>
    </div>
  )
}

export default FarcasterDistributionPage
