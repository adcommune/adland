import { AdGroupsQuery } from '@adland/webkit/src/hooks'
import classNames from 'classnames'
import { format } from 'date-fns'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

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
      <div className="flex flex-row justify-between rounded-md bg-white p-3 hover:bg-gray-100">
        <h1>Ad Group - #{id}</h1>
        <div className="flex flex-row flex-wrap gap-1">
          {adSpaces.map(({ uri }) => {
            return (
              <div
                className={classNames('aspect-square h-4 w-4', {
                  'bg-green-500': Boolean(uri),
                  'bg-gray-300': !Boolean(uri),
                })}
              />
            )
          })}
        </div>
        <div className="flex flex-wrap">
          Created on: {format(parseInt(blockTimestamp) * 1000, 'MM/dd')}
        </div>
      </div>
    </Link>
  )
}

export default AdGroupListItem
