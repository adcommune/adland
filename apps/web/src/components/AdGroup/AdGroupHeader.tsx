'use client'

import React from 'react'
import { AdGroup } from '@/lib/types'
import { truncateAddress } from '@/lib/utils'

type AdGroupHeaderProps = {
  adGroup: AdGroup
  children?: React.ReactNode
}

const AdGroupHeader = ({
  adGroup: { adGroup_subgraph },
  children,
}: AdGroupHeaderProps) => {
  const { id, beneficiary } = adGroup_subgraph

  return (
    <div className="font-body">
      <div className="overflow-hidden rounded-tl-md rounded-tr-md">
        <div className="flex flex-col border bg-white pb-5">
          <div className="relative w-full">
            <div className="h-[70px] w-full bg-gradient-to-b from-gray-200 to-transparent" />
          </div>
          <div className="mt-2 min-w-0 flex-1 px-4 sm:hidden sm:px-6 md:block lg:px-8">
            <h1 className="truncate text-2xl font-bold text-black">
              Ad Group #{id}
            </h1>
            <p className="font-body text-gray-500">
              Group Beneficiary: {truncateAddress(beneficiary)}
            </p>
          </div>
        </div>
        <div className="pt-2">{children}</div>
      </div>
    </div>
  )
}

export default AdGroupHeader
