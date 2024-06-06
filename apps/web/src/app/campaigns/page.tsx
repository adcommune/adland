'use client'

import { Container } from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { formatEther } from 'viem'

const CampaignsPage = () => {
  const { data: campaigns } = useQuery({
    queryKey: ['liveAdCampaigns'],
    queryFn: () => new AdLand().listAdCampaigns(),
  })

  return (
    <Container className="p-4">
      <div className="grid grid-cols-4 gap-2">
        {campaigns?.map(({ adSpace, sfPool }) => {
          return (
            <Link
              key={adSpace?.transactionHash + adSpace?.id}
              href={'/campaigns/' + adSpace?.id}
            >
              <Card className="flex flex-col overflow-hidden bg-transparent">
                <CardHeader className="relative bg-white">
                  <CardTitle className="flex w-full flex-row items-center justify-between font-body text-lg font-normal">
                    Campaign - Ad #{adSpace.id}
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative flex w-full flex-grow flex-col gap-2 bg-white bg-opacity-75 py-4">
                  <p>AdGroup: #{adSpace.adGroup.id}</p>
                  <p>
                    FlowRate:{' '}
                    {formatEther(BigInt(sfPool?.flowRate ?? '0') * BigInt(4))}
                  </p>
                  <p>Members: {sfPool?.poolMembers.length} </p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export default CampaignsPage
