'use client'

import {
  AdGroup_OrderBy,
  OrderDirection,
  useAdGroupsQuery,
} from '@adland/webkit/src/hooks'
import { useContext } from 'react'
import AdGroupListItem from './AdGroupListItem'
import {
  SmartAccountContext,
  SmartAccountProvider,
} from '@/context/SmartAccountContext'

const MyAdGroups = () => {
  const { bicoAccountAddress } = useContext(SmartAccountContext)

  const { data } = useAdGroupsQuery(
    {
      where: { beneficiary: bicoAccountAddress },
      orderBy: AdGroup_OrderBy.BlockTimestamp,
      orderDirection: OrderDirection.Desc,
    },
    { enabled: !!bicoAccountAddress },
  )

  return (
    <div className="flex flex-col gap-2">
      {data?.adGroups?.map(
        ({ id, blockTimestamp, transactionHash, adSpaces }) => (
          <AdGroupListItem
            id={id}
            key={transactionHash}
            blockTimestamp={blockTimestamp}
            adSpaces={adSpaces}
          />
        ),
      )}
    </div>
  )
}

const MyAdGroupsProvider = () => {
  return <MyAdGroups />
}

export default MyAdGroupsProvider
