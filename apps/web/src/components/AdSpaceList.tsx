import { useBiconomyAccount } from '@/context/SmartAccountContext'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'
import { zeroAddress } from 'viem'
import AdSpaceRow from './AdSpaceRow'
import { useState } from 'react'
import QueryPagination from './QueryPagination'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
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
    <div className="overflow-hidden rounded-md bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-100">
            <TableHead>ID</TableHead>
            <TableHead>Beneficiary</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Tax Rate</TableHead>
            <TableHead>Ad</TableHead>
            <TableHead className="text-right">Current Flow</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
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
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>{pagination}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default AdSpaceList
