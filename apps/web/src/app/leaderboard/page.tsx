'use client'

import { Container } from '@/components/Container'
import FarcasterUserSmallBadge from '@/components/FarcasterUserSmallBadge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
    <Container>
      <Card className="mt-5 font-body">
        <CardHeader>
          <CardTitle className="font-display">Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </Container>
  )
}

export default LeaderboardPage
