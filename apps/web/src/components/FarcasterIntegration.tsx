import { Input } from './ui/input'
import { baseURL } from '@/config/constants'
import Copiable from './Copiable'
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
import { Button } from './ui/button'

type FarcasterIntegrationProps = {
  groupId: string
  spaceId: string
}

const FarcasterIntegration = ({
  groupId,
  spaceId,
}: FarcasterIntegrationProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div>
        <Card>
          <CardHeader className="">
            <CardTitle className="font-body">
              Distribution on Farcaster
            </CardTitle>
            <CardDescription className="font-body">
              <div className="flex w-full flex-row items-center justify-center gap-2">
                <Input
                  className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
                  disabled
                  placeholder={`${baseURL}/ad/${spaceId}`}
                />
                <Copiable visible text={`${baseURL}/ad/${spaceId}`} />
              </div>
              <CardDescription className="font-body">
                This is your Ad Frame link. Copy and cast to share this ad.
              </CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Followers
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Start</TableHead>
                  <TableHead className="">Interactions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="">
                  <TableCell
                    colSpan={6}
                    className="items-center justify-center text-center font-body"
                  >
                    <div className="flex flex-col gap-2">
                      <Button disabled>Start Campaign (coming soon)</Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FarcasterIntegration
