'use client'

import { AdGroupsQuery } from '@adland/webkit/src/hooks'
import classNames from 'classnames'
import { formatDistance } from 'date-fns'
import Link from 'next/link'
import { queryClient } from '../AppProviders'
import { AdLand } from '@/lib/adland'

type AdGroupListItemProps = {
  id: string
  blockTimestamp: string
  adSpaces: AdGroupsQuery['adGroups'][0]['adSpaces']
}

const AdGroupListItem = ({
  id,
  blockTimestamp,
  adSpaces,
}: AdGroupListItemProps) => {
  return (
    <Link href={'/group/' + id} key={id}>
      <div
        onMouseEnter={() => {
          queryClient
            .prefetchQuery({
              queryKey: ['adGroup-', id],
              queryFn: async () => {
                return new AdLand().getGroup(id)
              },
            })
            .then(() => {
              console.log('prefetch done')
            })
        }}
        className="flex flex-row justify-between rounded-md bg-white p-3 hover:bg-gray-100"
      >
        <h1>Ad Group - #{id}</h1>
        <div className="flex flex-row flex-wrap gap-1">
          {adSpaces.map(({ uri, transactionHash }) => {
            return (
              <div
                key={transactionHash}
                className={classNames('aspect-square h-4 w-4', {
                  'bg-green-500': Boolean(uri),
                  'bg-gray-300': !Boolean(uri),
                })}
              />
            )
          })}
        </div>
        <div className="flex flex-wrap">
          created {formatDistance(parseInt(blockTimestamp) * 1000, Date.now())}{' '}
          ago
        </div>
      </div>
    </Link>
  )
}

export default AdGroupListItem
