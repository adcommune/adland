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
            <CardTitle className="font-body">Distributors</CardTitle>
            <CardDescription className="font-body">
              Accounts distributing this ad space on the farcaster network
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <p className="font-body text-xl font-semibold">Frame Link</p>
              <CardDescription className="font-body">
                Copy & cast this link to distribute this ad space on farcaster
              </CardDescription>
              <div className="flex w-full flex-row items-center justify-center gap-2">
                <Input
                  className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
                  disabled
                  placeholder={`${baseURL}/ad/${spaceId}`}
                />
                <Copiable visible text={`${baseURL}/ad/${spaceId}`} />
              </div>
            </div>
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
                  <TableCell colSpan={6} className="text-center font-body">
                    Distributor reward program not yet active. Make sure to mint
                    your adland.eth subname through any Ad Frame on farcaster to
                    enroll !
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
