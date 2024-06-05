import { SuperfluidPool } from '@/lib/superfluid-subgraph'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { truncateAddress } from '@/lib/utils'

const PoolTable = ({ pool }: { pool?: SuperfluidPool }) => {
  if (!pool) return null
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden sm:table-cell">Units</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pool?.poolMembers.map(({ id, isConnected, units }) => (
          <TableRow key={id}>
            <TableCell>{truncateAddress(id, 10)}</TableCell>
            <TableCell>{isConnected ? 'Connected' : 'Not Connected'}</TableCell>
            <TableCell>{units}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PoolTable
