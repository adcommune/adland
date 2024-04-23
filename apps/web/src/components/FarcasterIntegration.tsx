import { getFramePinataId, truncateAddress } from '@/lib/utils'
import { Input } from './ui/input'
import { baseURL } from '@/config/constants'
import Copiable from './Copiable'
import { useQuery } from '@tanstack/react-query'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

type FarcasterIntegrationProps = {
  groupId: string
  spaceId: string
}

type PinataFrameAnalytics = {
  total_interactions: number
  total_unique_interactions: number
  time_periods: {
    interactions: number
    period_start_time: string
    unique_interactions: number
  }
}

const FarcasterIntegration = ({
  groupId,
  spaceId,
}: FarcasterIntegrationProps) => {
  const { data } = useQuery<PinataFrameAnalytics>({
    queryFn: () =>
      fetch('/api/ad/analytics?frameId=' + getFramePinataId(spaceId)).then(
        (res) => res.json(),
      ),
    queryKey: ['farcaster-analytics', spaceId],
  })

  return (
    <div className="flex flex-grow flex-col gap-4">
      <div className="rounded-md border bg-white p-2">
        <p className="font-body font-semibold">Frame Link</p>
        <div className="flex w-full flex-row items-center justify-center gap-2">
          <Input
            className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
            disabled
            placeholder={truncateAddress(
              `${baseURL}/app/group/${groupId}/${spaceId}`,
              14,
            )}
          />
          <Copiable
            visible
            text={`${baseURL}/app/group/${groupId}/${spaceId}`}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total interactions</CardDescription>
            <CardTitle className="text-4xl">
              {data?.total_interactions ?? 0}
            </CardTitle>
          </CardHeader>
          {/* <CardContent>
            <div className="text-xs text-muted-foreground">
              +10% from last month
            </div>
          </CardContent> */}
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Unique interactions</CardDescription>
            <CardTitle className="text-4xl">
              {data?.total_unique_interactions ?? 0}
            </CardTitle>
          </CardHeader>
          {/* <CardContent>
            <div className="text-xs text-muted-foreground">
              +10% from last month
            </div>
          </CardContent> */}
        </Card>
      </div>
    </div>
  )
}

export default FarcasterIntegration
