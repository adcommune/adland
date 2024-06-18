'use client'

import AdGroupListItem from './AdGroupListItem'
import { Address, zeroAddress } from 'viem'
import { useQuery } from '@tanstack/react-query'
import { AdLand } from '@/lib/adland'
import { AdGroup_subgraph } from '@adland/webkit'

const AdGroupList = ({ owner }: { owner?: Address | string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['adGroups-', owner],
    queryFn: async () => {
      return new AdLand().listGroups(owner)
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {data?.length ? (
        data
          ?.filter((group) => {
            return group.adSpaces[0]?.tokenX?.superToken !== zeroAddress
          })
          .map(({ metadata, adGroup_subgraph, adSpaces }) => {
            const { id, blockTimestamp, transactionHash } =
              adGroup_subgraph as AdGroup_subgraph

            return (
              <AdGroupListItem
                id={id}
                key={transactionHash}
                blockTimestamp={blockTimestamp}
                adSpaces={adSpaces}
                metadata={metadata}
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
