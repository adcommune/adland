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
import { getFrameId, maxDistribution } from '@/lib/analytics'
import { format } from 'date-fns'
import { AppDistributor } from '@/lib/types'

type FarcasterIntegrationProps = {
  groupId: string
  spaceId: string
}

const FarcasterIntegration = ({
  groupId,
  spaceId,
}: FarcasterIntegrationProps) => {
  const { data: distributors } = useQuery<AppDistributor[]>({
    queryFn: () =>
      fetch(
        '/api/ad/analytics/distributors?frameId=' + getFrameId(spaceId),
      ).then((res) => res.json()),
    queryKey: ['top-distributors', spaceId],
  })

  console.log({ distributors })

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex flex-grow flex-col gap-4 rounded-md border bg-white bg-opacity-20 p-4">
        <div className="rounded-md border bg-white p-2">
          <p className="font-body font-semibold">Frame Link</p>
          <div className="flex w-full flex-row items-center justify-center gap-2">
            <Input
              className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
              disabled
              placeholder={truncateAddress(`${baseURL}/ad/${spaceId}`, 14)}
            />
            <Copiable visible text={`${baseURL}/ad/${spaceId}`} />
          </div>
        </div>
      </div>
      <div className="rounded-md border bg-white bg-opacity-20 p-4">
        <div>
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Distributors</CardTitle>
              <CardDescription>
                Accounts distributing this ad space on the farcaster network
                <ul className="ml-4 list-disc">
                  <li>
                    Cannot distribute this ad more than {maxDistribution} times.
                    Distribute carefully !
                  </li>
                  <li>Interactions with your own frame will not be counted.</li>
                </ul>
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
                  {distributors?.map(
                    ({
                      casterFid,
                      createdAt,
                      frameId,
                      interactions,
                      caster,
                    }) => {
                      return (
                        <TableRow
                          className="bg-accent"
                          key={casterFid + '-' + frameId}
                        >
                          <TableCell>
                            <div className="font-medium">
                              @{caster?.display_name}
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {caster?.follower_count}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {format(createdAt, "yyyy-MM-dd' 'HH:mm")}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {interactions}
                          </TableCell>
                        </TableRow>
                      )
                    },
                  )}
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
