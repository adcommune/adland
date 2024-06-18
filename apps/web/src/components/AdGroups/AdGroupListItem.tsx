'use client'

import { AdGroupsQuery } from '@adland/webkit/src/hooks'
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
import { AdGroupMetadata, AdSpace } from '@/lib/types'

type AdGroupListItemProps = {
  id: string
  blockTimestamp: string
  adSpaces: Omit<AdSpace, 'listing'>[]
  metadata?: AdGroupMetadata
}

const AdGroupListItem = ({
  id,
  blockTimestamp,
  adSpaces,
  metadata,
}: AdGroupListItemProps) => {
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
          {adSpaces.slice(0, 4).map(({ adSpace_subgraph, metadata }, i) => {
            const { uri, transactionHash } = adSpace_subgraph

            return (
              <div
                key={transactionHash}
                className={classNames(
                  'flex aspect-square w-full flex-col items-center justify-center border',
                  {
                    'bg-gray-300': !Boolean(uri),
                  },
                )}
              >
                {metadata && metadata.imageGatewayURI && i < 3 && (
                  <img
                    src={metadata?.imageGatewayURI}
                    className="h-full w-full object-contain"
                  />
                )}
                {!metadata && i < 3 && (
                  <p className="font-display text-xs">NO AD</p>
                )}
                {i === 3 && <p className="font-bold">+{adSpaces.length - 3}</p>}
              </div>
            )
          })}
        </CardContent>
        <CardFooter className="flex justify-end p-4">
          <div className="flex flex-wrap">
            <p className="text-xs text-gray-500">
              created{' '}
              {formatDistance(parseInt(blockTimestamp) * 1000, Date.now())} ago
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default AdGroupListItem
