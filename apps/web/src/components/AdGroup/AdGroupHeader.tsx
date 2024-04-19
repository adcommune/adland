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
import Copiable from '../Copiable'
import { truncateAddress } from '@/lib/utils'
import { superfluidAccountLink } from '@/config/constants'
import { formatEther } from 'viem'
import { Separator } from '../ui/separator'

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

  const { data: benefFlowRate } = useReadCfAv1ForwarderGetAccountFlowrate({
    address: cfaV1,
    args: beneficiary && [ethx, beneficiary],
    query: {
      enabled: Boolean(beneficiary),
    },
  })

  const monthlyRevenue =
    parseFloat(formatEther(benefFlowRate ?? BigInt(0))) * 30 * 24 * 60 * 60

  return (
    <div className="grid grid-cols-1 gap-4 font-body md:gap-8">
      <Card>
        <CardHeader className="mb-4 flex w-full flex-col items-center justify-between gap-3 space-y-0 md:flex-row">
          <CardTitle className="flex gap-4 text-center text-sm font-medium  md:text-2xl">
            Ad Group Dashboard
          </CardTitle>
          <Link href={superfluidAccountLink(beneficiary)} target="_blank">
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
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                AdGroupAdmin Balance{' '}
                <span className="group hidden cursor-pointer flex-row gap-2 space-x-2 font-semibold md:flex">
                  {truncateAddress(adGroup_subgraph.beneficiary)}
                  <Copiable text={adGroup_subgraph.beneficiary} />
                </span>
              </span>
              <span>
                {benefBalance !== undefined && benefFlowRate !== undefined && (
                  <FlowingBalance
                    startingBalance={benefBalance}
                    startingBalanceDate={new Date(dataUpdatedAt)}
                    flowRate={benefFlowRate}
                  />
                )}{' '}
                ETH
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-light">Monthly group revenue</span>
              <span className="font-light">{monthlyRevenue} ETH</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdGroupHeader
