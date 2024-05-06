import { truncateAddress } from '@/lib/utils'
import { Input } from './ui/input'
import { baseURL } from '@/config/constants'
import Copiable from './Copiable'
import { useQuery } from '@tanstack/react-query'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { zeroAddress } from 'viem'
import { getFramePinataId } from '@/lib/pinata'

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

  // const { data: topInteractions } = useQuery<PinataFrameAnalytics>({
  //   queryFn: () => fetch('/api/ad/analytics/top').then((res) => res.json()),
  //   queryKey: ['farcaster-analytics-top'],
  // })

  const distributors = [{ account: zeroAddress }]

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex flex-grow flex-col gap-4 rounded-md border bg-white bg-opacity-20 p-4">
        <div className="rounded-md border bg-white p-2">
          <p className="font-body font-semibold">Frame Link</p>
          <div className="flex w-full flex-row items-center justify-center gap-2">
            <Input
              className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
              disabled
              placeholder={truncateAddress(
                `${baseURL}/group/${groupId}/${spaceId}`,
                14,
              )}
            />
            <Copiable visible text={`${baseURL}/group/${groupId}/${spaceId}`} />
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
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Unique interactions</CardDescription>
              <CardTitle className="text-4xl">
                {data?.total_unique_interactions ?? 0}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="rounded-md border bg-white bg-opacity-20 p-4">
        <div>
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Distributors</CardTitle>
              <CardDescription>
                Accounts distributing this ad space on the farcaster network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Followers
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Start
                    </TableHead>
                    <TableHead className="">Interactions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {false &&
                    distributors.map(({ account }) => {
                      return (
                        <TableRow className="bg-accent" key={account}>
                          <TableCell>
                            <div className="font-medium">Account 1</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              {truncateAddress(account)}
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            0
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            x
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            0
                          </TableCell>
                        </TableRow>
                      )
                    })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FarcasterIntegration
