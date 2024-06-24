'use client'

import DepositForAdSpace from '@/components/DepositForAdSpace'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'

const UpgradePage = ({
  params: { spaceId },
}: {
  params: { spaceId: string }
}) => {
  const { data: adSpace } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Deposit</CardTitle>
        <CardDescription>
          Upgrade more Super Tokens for you ad space rental
        </CardDescription>
      </CardHeader>
      {adSpace && (
        <CardContent>
          <DepositForAdSpace
            listing={adSpace?.listing}
            tokenX={adSpace?.tokenX}
          />
        </CardContent>
      )}
    </Card>
  )
}

export default UpgradePage
