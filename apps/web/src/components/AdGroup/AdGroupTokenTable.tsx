'use client'

import { useTokenXsQuery } from '@adland/webkit/src/hooks'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table'
import SuperTokenBalance from './SuperTokenDynamicBalance'

const SuperTokenTable = () => {
  const { data } = useTokenXsQuery({ first: 5 }, {})

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Token Balance</TableHead>
          <TableHead className="w-[300px]">Super Token Balance</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.tokenXs.map((tokenX) => {
          const { id } = tokenX
          return <SuperTokenBalance key={id} tokenX={tokenX} />
        })}
      </TableBody>
    </Table>
  )
}

export default SuperTokenTable
