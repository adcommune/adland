import { useBiconomyAccount } from '@/context/SmartAccountContext'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'
import { zeroAddress } from 'viem'
import AdSpaceRow, { AdSpaceTable } from './AdSpaceRow'
import { useState } from 'react'
import QueryPagination from './QueryPagination'
import { TableCell, TableRow } from './ui/table'
import { adSpacePageLimit } from '@/config/constants'

const AdSpaceList = () => {
  const { bicoAccountAddress } = useBiconomyAccount()
  const [currentCursor, setCurrentCursor] = useState<string | null | undefined>(
    null,
  )

  const { data, isLoading } = useQuery({
    queryFn: () =>
      bicoAccountAddress &&
      new AdLand().listAdSpacesByOwner(bicoAccountAddress, currentCursor),
    queryKey: ['listAdSpaces-' + bicoAccountAddress + '-' + currentCursor],
  })

  const pagination = (
    <QueryPagination
      pageInfo={data?.adSpaces.pageInfo}
      currentCursor={currentCursor}
      onChangeCursor={(cursor) => setCurrentCursor(cursor)}
    />
  )

  return (
    <AdSpaceTable pagination={pagination}>
      {isLoading
        ? Array(adSpacePageLimit)
            .fill({})
            .map((_, i) => (
              <TableRow key={i}>
                <TableCell colSpan={6}>
                  <p className="opacity-0">Hello</p>
                </TableCell>
              </TableRow>
            ))
        : data?.adSpaces.items
            .filter((space) => {
              return space.tokenX.superToken !== zeroAddress
            })
            .map((adSpace) => {
              const { transactionHash, id } = adSpace
              return (
                <AdSpaceRow key={transactionHash + '-' + id} {...adSpace} />
              )
            })}
    </AdSpaceTable>
  )
}

export default AdSpaceList
