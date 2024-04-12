'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import {
  useReadCfAv1ForwarderGetAccountFlowrate,
  useReadIsethBalanceOf,
} from '@adland/contracts'
import useAppContracts from '@/hooks/useAppContracts'
import { AdGroup } from '@/lib/types'
import FlowingBalance from '@/lib/superfluid'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const AdGroupHeader = ({
  adGroup: { adGroup_subgraph },
}: {
  adGroup: AdGroup
}) => {
  const { beneficiary } = adGroup_subgraph

  const { ethx, cfaV1 } = useAppContracts()

  const { data: benefBalance, dataUpdatedAt } = useReadIsethBalanceOf({
    address: ethx,
    args: beneficiary && [beneficiary],
    query: {
      enabled: Boolean(beneficiary),
    },
  })

  const { data: benefFlowRate, refetch } =
    useReadCfAv1ForwarderGetAccountFlowrate({
      address: cfaV1,
      args: beneficiary && [ethx, beneficiary],
      query: {
        enabled: Boolean(beneficiary),
      },
    })

  return (
    <div className="grid grid-cols-1 gap-4 font-body md:gap-8">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="flex w-full flex-row justify-between text-sm font-medium">
            Streaming Revenue
            <Link href={''}>
              <Button variant="outline" className="gap-2">
                <Image
                  src="/superfluid.png"
                  className="h-5 w-5"
                  width={40}
                  height={40}
                  alt=""
                />
                Superfluid Dashboard
              </Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Admin - {adGroup_subgraph.beneficiary}</p>
          <p className=" text-2xl font-bold">
            {benefBalance !== undefined && benefFlowRate !== undefined && (
              <FlowingBalance
                startingBalance={benefBalance}
                startingBalanceDate={new Date(dataUpdatedAt)}
                flowRate={benefFlowRate}
              />
            )}{' '}
            ETH
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdGroupHeader
