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
        className=""
      >
        <CardHeader className="p-4">
          <CardTitle className="text-xl">Ad Group - #{id}</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-2 p-4">
          {adSpaces.slice(0, 4).map(({ uri, transactionHash }, i) => {
            return (
              <div
                key={transactionHash}
                className={classNames(
                  'flex aspect-square w-full flex-col items-center justify-center border',
                  {
                    'bg-green-500': Boolean(uri),
                    'bg-gray-300': !Boolean(uri),
                  },
                )}
              >
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
