import Image from 'next/image'
import { formatEther } from 'viem'
import TokenImage from '@/components/TokenImage'
import {
  AdFlow,
  AdGroup,
  AdSpaceMetadata,
  Listing,
  User,
} from '@adland/webkit/src/ponder'
import { formatAmount } from '@/lib/helpers'
import FarcasterUserSmallBadge from './FarcasterUserSmallBadge'
import FlowRateBadge from './FlowRateBadge'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { useRouter } from 'next/navigation'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Separator } from './ui/separator'

type AdSpaceRowProps = {
  listing: Listing
  owner?: string | null
  id: string
  currentMetadata?: Omit<AdSpaceMetadata, 'adSpace'> | null
  flow?: Omit<AdFlow, 'adSpace'> | null
  user?: User | null
  adGroup?: AdGroup
}

type AdSpaceTableProps = {
  children: React.ReactNode
  pagination?: React.ReactNode
}

export const AdSpaceTable = ({ children, pagination }: AdSpaceTableProps) => {
  return (
    <div className="overflow-hidden rounded-md bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-100">
            <TableHead>ID</TableHead>
            <TableHead>Beneficiary</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Tax Rate</TableHead>
            <TableHead className="text-center">Ad</TableHead>
            <TableHead className="text-right">Current Flow</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
        {pagination && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>{pagination}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  )
}

const AdSpaceRow = ({
  id,
  owner,
  listing,
  currentMetadata: metadata,
  flow,
  adGroup,
}: AdSpaceRowProps) => {
  const { push } = useRouter()
  const { pricePerToken, currency, taxRate, taxBeneficiary } = listing
  const ownedBySomeoneElseThanBeneficiary = owner !== taxBeneficiary
  const beneficiaryUser = adGroup?.user

  return (
    <TableRow
      onClick={() => {
        push('/ad/' + id)
      }}
      className="cursor-pointer"
    >
      <TableCell>#{id}</TableCell>
      <TableCell>
        <FarcasterUserSmallBadge user={beneficiaryUser} />
      </TableCell>
      <TableCell className="flex flex-row items-center gap-2">
        <p className="font-bold">
          {formatAmount(formatEther(BigInt(pricePerToken)))}
        </p>
        <TokenImage address={currency} className="h-4 w-4" />
      </TableCell>
      <TableCell>{Number(taxRate ?? 0) / 100}% weekly</TableCell>
      <TableCell className="relative h-full">
        {metadata && (
          <HoverCard openDelay={50} closeDelay={100}>
            <HoverCardTrigger>
              <div className="rounded-md border text-center hover:bg-slate-100">
                See Ad Data
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="flex w-auto flex-col items-center gap-2">
              {metadata?.description && <p>{metadata.description}</p>}
              {metadata?.externalUrl && <Separator />}
              {metadata?.externalUrl && (
                <p className="truncate overflow-ellipsis text-wrap break-words">
                  {metadata?.externalUrl}
                </p>
              )}
              {metadata?.imageGatewayUri && <Separator />}
              {metadata?.imageGatewayUri && (
                <Image
                  src={metadata.imageGatewayUri}
                  width={300}
                  height={300}
                  layout="responsive"
                  className="max-w-64 rounded-md"
                  alt=""
                />
              )}
            </HoverCardContent>
          </HoverCard>
        )}
      </TableCell>
      <TableCell className="flex flex-row justify-end">
        {flow && ownedBySomeoneElseThanBeneficiary && (
          <FlowRateBadge currency={currency} flowRate={flow.weeklyFlowRate} />
        )}
      </TableCell>
    </TableRow>
  )
}

export default AdSpaceRow
