'use client'

import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { AdGroup } from '@/lib/types'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { superfluidAccountLink } from '@/config/constants'
import { CogIcon, HomeIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

type AdGroupHeaderProps = {
  adGroup: AdGroup
}

const AdGroupHeader = ({
  adGroup: { adGroup_subgraph },
}: AdGroupHeaderProps) => {
  const { beneficiary, id } = adGroup_subgraph

  const path = usePathname()

  const isSettingsPage = path.includes('settings')

  return (
    <div className="grid grid-cols-1 gap-4 font-body md:gap-8">
      <Card>
        <CardHeader className="flex w-full flex-col items-center justify-between gap-3 space-y-0 md:flex-row">
          <CardTitle className="flex gap-4 text-center text-sm font-medium  md:text-2xl">
            Ad Group #{id}
          </CardTitle>
          <div className="flex flex-row gap-2">
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
            {isSettingsPage ? (
              <Link href={`/group/${adGroup_subgraph.id}`}>
                <Button variant="outline">
                  <HomeIcon size={24} />
                </Button>
              </Link>
            ) : (
              <Link href={`/group/${adGroup_subgraph.id}/settings`}>
                <Button variant="outline">
                  <CogIcon size={24} />
                </Button>
              </Link>
            )}
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}

export default AdGroupHeader
