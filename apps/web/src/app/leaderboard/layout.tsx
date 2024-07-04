import React from 'react'
import { Container } from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfoIcon } from 'lucide-react'

const LeaderboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Card className="mt-5 font-body">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="font-display">Leaderboard</CardTitle>
          <Link href="/leaderboard/how-does-it-work">
            <Button variant="outline" size="sm" className="flex flex-row gap-2">
              <InfoIcon className="h-4 w-4" />
              How does it work ?
            </Button>
          </Link>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </Container>
  )
}

export default LeaderboardLayout
