'use client'

import FarcasterUserSmallBadge from '@/components/FarcasterUserSmallBadge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'

const LeaderboardPage = () => {
  const { data } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: async () => {
      return new AdLand().listUsers()
    },
  })

  return (
    <Table>
      {/* <TableCaption></TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Points</TableHead>
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.users.items.map((user, index) => (
          <TableRow key={user.id}>
            <TableCell className="w-[100px]">#{index + 1}</TableCell>
            <TableCell>
              <FarcasterUserSmallBadge user={user} />
            </TableCell>
            <TableCell>{user.score}</TableCell>
            {/* <TableCell className="text-right">{formatEther(invoice.amount)}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default LeaderboardPage
