'use client'

import AdGroupListItem from './AdGroupListItem'
import { Address, zeroAddress } from 'viem'
import { useQuery } from '@tanstack/react-query'
import { AdLand } from '@/lib/adland'

const AdGroupList = ({ owner }: { owner?: Address | string }) => {
  const { data: ponderData, isLoading } = useQuery({
    queryKey: ['ponderAdGroups-', owner],
    queryFn: async () => {
      return new AdLand().listGroups(owner)
    },
  })

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {ponderData?.adGroups?.items?.length ? (
        ponderData?.adGroups?.items
          ?.filter(({ adSpaces }) => {
            return adSpaces?.items[0]?.tokenX?.superToken !== zeroAddress
          })
          .map((group) => {
            return (
              <AdGroupListItem
                key={group.blockTimestamp + group.id}
                {...group}
              />
            )
          })
      ) : (
        <div className="col-span-1 flex h-[50vh] w-full flex-col items-center justify-center sm:col-span-3 md:col-span-4">
          <p className="text-lg text-white">
            {isLoading
              ? 'Loading...'
              : "You don't own any ad groups yet. Create one to get started!"}
          </p>
        </div>
      )}
    </div>
  )
}

export default AdGroupList
