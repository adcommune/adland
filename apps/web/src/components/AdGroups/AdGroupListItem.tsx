'use client'

import { AdGroupsQuery } from '@adland/webkit/src/ponder'
import classNames from 'classnames'
import { formatDistance } from 'date-fns'
import Link from 'next/link'
import { queryClient } from '../AppProviders'
import { AdLand } from '@/lib/adland'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import FarcasterUserSmallBadge from '../FarcasterUserSmallBadge'

const AdGroupListItem = (group: AdGroupsQuery['adGroups']['items'][0]) => {
  const { id, blockTimestamp, adSpaces, metadata, beneficiary, user } = group

  return (
    <Link href={'/group/' + id} key={id}>
      <Card
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
        className="overflow-hidden border-transparent"
      >
        <CardHeader className="flex flex-row gap-3 p-4">
          <div className="-mt- h-11 w-11 overflow-hidden rounded-full">
            {metadata?.image ? (
              <img
                className=" h-full w-full object-cover"
                src={metadata?.image}
              />
            ) : (
              <div className="h-full w-full bg-gray-300" />
            )}
          </div>
          <CardTitle className="-mt-8 text-xl">
            {metadata?.name || `Ad Group - #${id}`}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-2 p-4 py-0">
          {adSpaces?.items
            ?.slice(0, 4)
            .map(({ id, transactionHash, currentMetadata: metadata }, i) => {
              return (
                <div
                  key={transactionHash + '-' + id}
                  className={classNames(
                    'flex aspect-square w-full flex-col items-center justify-center border',
                    {
                      'bg-gray-300': !Boolean(metadata),
                    },
                  )}
                >
                  {metadata && metadata.imageGatewayUri && i < 3 && (
                    <img
                      src={metadata?.imageGatewayUri}
                      className="h-full w-full object-contain"
                    />
                  )}
                  {!metadata && i < 3 && (
                    <p className="font-display text-xs">NO AD</p>
                  )}
                  {i === 3 && (
                    <p className="font-bold">+{adSpaces.items.length - 3}</p>
                  )}
                </div>
              )
            })}
        </CardContent>
        <CardFooter className="flex justify-between p-4">
          <div className="flex flex-row items-end gap-2">
            <FarcasterUserSmallBadge user={user} />
          </div>
          <div className="flex flex-wrap">
            <p className="text-xs text-gray-500">
              {formatDistance(parseInt(blockTimestamp) * 1000, Date.now())} ago
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default AdGroupListItem
