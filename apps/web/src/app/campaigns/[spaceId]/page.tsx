'use client'

import ClaimCampaignSteps from '@/components/Claim'
import { Container } from '@/components/Container'
import CopiableInput from '@/components/CopiableInput'
import FundFlow from '@/components/FarcasterDistribution/FundFlow'
import PoolTable from '@/components/PoolTable'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { baseURL, getTokenSymbol } from '@/config/constants'
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

  const frameURL = baseURL + '/ad/' + spaceId

  return (
    <Container className="flex flex-col gap-4 p-4">
      <Card>
        <CardHeader className="">
          <CardTitle className="font-body">Ad Campaign</CardTitle>
          <CardDescription>
            This advertising space&apos;s distribution is currently being
            sponsored. You can claim a share of this sponsorship by connecting
            sharing this ad space on farcaster and connect to the distribution
            pool.
          </CardDescription>
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
          <div>
            <PoolTable pool={adCampaign?.sfPool} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-body">Cast to earn</CardTitle>
          <CardDescription>
            Follow there steps to claim your share of the ad campaign
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CopiableInput text={frameURL} label="Ad Space URL" />
          <ClaimCampaignSteps spaceId={spaceId} />
        </CardContent>
      </Card>
    </Container>
  )
}

export default FarcasterDistributionPage
