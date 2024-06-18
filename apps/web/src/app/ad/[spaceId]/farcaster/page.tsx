'use client'

import CopiableInput from '@/components/CopiableInput'
import FarcasterDistribution from '@/components/FarcasterDistribution'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { baseURL } from '@/config/constants'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { AdLand } from '@/lib/adland'
import { AdSpace } from '@/lib/types'
import { AdGroup_subgraph, AdSpace_subgraph } from '@adland/webkit'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}

const FarcasterDistributionPage = ({
  params: { spaceId },
}: AdSpacePageProps) => {
  const { bicoAccountAddress } = useContext(SmartAccountContext)
  const { data: adSpace } = useQuery({
    queryFn: () =>
      new AdLand().getAdSpace(spaceId) as Promise<
        AdSpace & {
          adSpace_subgraph: AdSpace_subgraph & { adGroup: AdGroup_subgraph }
        }
      >,
    queryKey: ['adSpace-', spaceId],
  })

  const { data: adCampaign } = useQuery({
    queryKey: ['adCampaign-', spaceId],
    queryFn: async () =>
      new AdLand().getAdCampaign(spaceId, adSpace?.tokenX?.superToken),
    enabled: Boolean(adSpace?.tokenX?.superToken),
  })

  const frameLink = `${baseURL}/ad/${spaceId}`

  const isBenef =
    bicoAccountAddress?.toLowerCase() ===
    adSpace?.adSpace_subgraph.adGroup?.beneficiary?.toLowerCase()

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
        {adSpace && adCampaign && isBenef && (
          <FarcasterDistribution adSpace={adSpace} adCampaign={adCampaign} />
        )}
      </Card>
    </div>
  )
}

export default FarcasterDistributionPage
