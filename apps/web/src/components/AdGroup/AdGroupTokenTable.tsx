'use client'

import { AdGroup } from '@/lib/types'
import { useTokenXsQuery } from '@adland/webkit/src/hooks'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import SuperTokenBalance from './SuperTokenDynamicBalance'

const SuperTokenTable = ({ adGroup }: { adGroup: AdGroup }) => {
  const { data } = useTokenXsQuery({ first: 5 }, {})

  return (
    <Table>
      <TableCaption>Streaming revenue from AdSpaces</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Flow Rate</TableHead>
          <TableHead className="w-[300px]">Balance</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.tokenXs.map((tokenX) => {
          const { id } = tokenX
          return (
            <SuperTokenBalance key={id} tokenX={tokenX} adGroup={adGroup} />
          )
        })}
      </TableBody>
    </Table>
  )
}

export default SuperTokenTable
