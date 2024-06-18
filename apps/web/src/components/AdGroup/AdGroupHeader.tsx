'use client'

import React, { useContext } from 'react'
import { AdGroup } from '@/lib/types'
import { getExplorerLink, truncateAddress } from '@/lib/utils'
import { CogIcon } from 'lucide-react'
import Link from 'next/link'
import { SmartAccountContext } from '@/context/SmartAccountContext'

type AdGroupHeaderProps = {
  adGroup: AdGroup
  children?: React.ReactNode
}

const AdGroupHeader = ({
  adGroup: { adGroup_subgraph, metadata, adSpaces },
  children,
}: AdGroupHeaderProps) => {
  const { id, beneficiary } = adGroup_subgraph
  const { bicoAccountAddress } = useContext(SmartAccountContext)

  const isBeneficiary =
    bicoAccountAddress?.toLowerCase() === beneficiary?.toLowerCase()

  const title = metadata?.name || `Ad Group #${id}`

  const stats: { label: string; value: number | React.ReactNode }[] = [
    {
      label: 'Admin: ',
      value: (
        <Link
          href={getExplorerLink(beneficiary, 'address')}
          className="underline"
          target="_blank"
        >
          {truncateAddress(beneficiary)}
        </Link>
      ),
    },
    { label: 'Ad Spaces: ', value: adSpaces.length },
  ]

  return (
    <div className="font-body">
      <div className="overflow-hidden rounded-tl-md rounded-tr-md">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <h2 className="sr-only" id="profile-overview-title">
            Profile Overview
          </h2>
          <div className="bg-white p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  {metadata?.image ? (
                    <img
                      className="mx-auto h-20 w-20 rounded-full"
                      src={metadata?.image}
                      alt=""
                    />
                  ) : (
                    <div className="mx-auto h-20 w-20 rounded-full bg-gray-200" />
                  )}
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  {/* <p className="text-sm font-medium text-gray-600">
                    Welcome to
                  </p> */}
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {title}
                  </p>
                  <p className="text-sm font-medium text-gray-600">
                    {metadata?.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex justify-center sm:mt-0">
                {isBeneficiary && (
                  <Link
                    href={`/group/${id}/settings`}
                    className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <CogIcon className="h-5 w-5 " />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="grow px-6 py-5 text-center text-sm font-medium"
              >
                <span className="text-gray-600">{stat.label}</span>
                <span className="text-gray-900">{stat.value}</span>{' '}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2">{children}</div>
      </div>
    </div>
  )
}

export default AdGroupHeader
