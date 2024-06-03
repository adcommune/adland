'use client'

import { Container } from '@/components/Container'
import FundFlow from '@/components/FarcasterDistribution/FundFlow'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTokenSymbol } from '@/config/constants'
import { AdLand } from '@/lib/adland'
import { getExplorerLink } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { formatEther } from 'viem'

type AdSpacePageProps = {
  params: { spaceId: string }
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
  const flowRate = BigInt(adCampaign?.sfPool?.flowRate ?? '0')

  return (
    <Container className="p-4">
      <Card>
        <CardHeader className="">
          <CardTitle className="font-body">Distribution on Farcaster</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold">
              {adCampaign?.sfPool?.totalMembers} Distributor
            </div>
            <p className="text-xs text-muted-foreground">
              +{formatEther(flowRate)}{' '}
              {getTokenSymbol(adSpace?.tokenX?.underlyingToken)}
              /week
            </p>
            {adCampaign?.sfPool?.flowRate && (
              <FundFlow
                enabled={flowRate !== BigInt(0)}
                poolExplorerLink={getExplorerLink(
                  adCampaign.sfPoolAddress,
                  'address',
                )}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}

export default FarcasterDistributionPage
