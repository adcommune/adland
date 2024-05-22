'use client'

import {
  SmartAccountContext,
  SmartAccountProvider,
} from '@/hooks/useSmartAccount'
import {
  AdGroup_OrderBy,
  OrderDirection,
  useAdGroupsQuery,
} from '@adland/webkit/src/hooks'
import { format } from 'date-fns'
import Link from 'next/link'
import { useContext } from 'react'

const MyAdGroups = () => {
  const { client } = useContext(SmartAccountContext)

  console.log(client?.account?.address)

  const { data } = useAdGroupsQuery(
    {
      where: { beneficiary: client?.account.address },
      orderBy: AdGroup_OrderBy.BlockTimestamp,
      orderDirection: OrderDirection.Desc,
    },
    { enabled: !!client?.account.address },
  )

  return (
    <div className="flex flex-col gap-2">
      {data?.adGroups?.map(({ id, blockTimestamp, adSpaces }) => (
        <Link href={'/group/' + id} key={id}>
          <div className="flex flex-row justify-between rounded-md bg-white p-3 hover:bg-gray-100">
            <h1>Ad Group - #{id}</h1>
            <div className="flex flex-wrap">{adSpaces.length} Ad Spaces</div>
            <div className="flex flex-wrap">
              Created on: {format(parseInt(blockTimestamp) * 1000, 'MM/dd')}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

const MyAdGroupsProvider = () => {
  return (
    <SmartAccountProvider>
      <MyAdGroups />
    </SmartAccountProvider>
  )
}

export default MyAdGroupsProvider
