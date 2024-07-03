'use client'

import React, { useContext } from 'react'
import { getExplorerLink, getWarpcastLink, truncateAddress } from '@/lib/utils'
import { AdLand } from '@/lib/adland'
import { CogIcon } from 'lucide-react'
import Link from 'next/link'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { useQuery } from '@tanstack/react-query'
import FarcasterUserSmallBadge from '../FarcasterUserSmallBadge'

type AdGroupHeaderProps = {
  adGroupId?: string
  children?: React.ReactNode
}

const AdGroupHeader = ({ adGroupId, children }: AdGroupHeaderProps) => {
  const { data: adGroup, error } = useQuery({
    queryKey: ['adGroup-', adGroupId],
    queryFn: async () => {
      return new AdLand().getGroup(adGroupId)
    },
    enabled: !!adGroupId,
  })

  const { bicoAccountAddress } = useContext(SmartAccountContext)

  const isBeneficiary =
    bicoAccountAddress?.toLowerCase() === adGroup?.beneficiary?.toLowerCase()

  const title = !adGroupId
    ? ''
    : adGroup?.metadata?.name || `Ad Group #${adGroupId}`

  const stats: { label: string; value: number | React.ReactNode }[] = [
    {
      label: 'Admin: ',
      value: (
        <Link
          href={
            adGroup?.user?.fid
              ? getWarpcastLink(adGroup?.user?.username)
              : getExplorerLink(adGroup?.beneficiary, 'address')
          }
          className="underline"
          target="_blank"
        >
          {adGroup?.user ? (
            <FarcasterUserSmallBadge user={adGroup?.user} />
          ) : (
            truncateAddress(adGroup?.beneficiary)
          )}
        </Link>
      ),
    },
    { label: 'Ad Spaces: ', value: adGroup?.adSpaces?.items.length },
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
                  {adGroup?.metadata?.image ? (
                    <Link href={'/group/' + adGroupId}>
                      <img
                        className="mx-auto h-20 w-20 rounded-full ring-gray-400 hover:cursor-pointer hover:ring-2"
                        src={adGroup?.metadata?.image}
                        alt=""
                      />
                    </Link>
                  ) : (
                    <div className="mx-auto h-20 w-20 rounded-full bg-gray-200" />
                  )}
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <Link href={'/group/' + adGroupId}>
                    <p className="text-xl font-bold text-gray-900 hover:cursor-pointer hover:underline sm:text-2xl">
                      {title}
                    </p>
                  </Link>
                  <p className="text-sm font-medium text-gray-600">
                    {adGroup?.metadata?.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex justify-center sm:mt-0">
                {isBeneficiary && (
                  <Link
                    href={`/group/${adGroupId}/settings`}
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
                className="flex grow flex-row justify-center gap-2 px-6 py-5 text-center text-sm font-medium"
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
