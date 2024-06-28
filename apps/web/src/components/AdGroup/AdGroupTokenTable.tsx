'use client'

import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table'
import SuperTokenBalance from './SuperTokenDynamicBalance'
import { useQuery } from '@tanstack/react-query'
import { AdLand } from '@/lib/adland'

const SuperTokenTable = () => {
  const { data } = useQuery({
    queryKey: ['tokenXs'],
    queryFn: () => new AdLand().listSuperTokens(),
  })

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
        {data?.items.map((tokenX) => {
          const { id } = tokenX
          return <SuperTokenBalance key={id} tokenX={tokenX} />
        })}
      </TableBody>
    </Table>
  )
}

export default SuperTokenTable
