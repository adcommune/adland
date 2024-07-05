import Link from 'next/link'
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
import { getExplorerLink } from '@/lib/utils'
import FarcasterUserSmallBadge from './FarcasterUserSmallBadge'
import FlowRateBadge from './FlowRateBadge'
import { TableCell, TableRow } from './ui/table'
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
        <Link
          className="underline"
          href={getExplorerLink(beneficiaryUser?.id, 'address')}
          target="_blank"
        >
          <FarcasterUserSmallBadge user={beneficiaryUser} />
        </Link>
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
                Ad Data
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col items-center gap-2">
              {metadata?.description && <p>{metadata.description}</p>}
              {metadata?.externalUrl && <Separator />}
              {metadata?.externalUrl && <p>{metadata?.externalUrl}</p>}
              {metadata?.imageGatewayUri && <Separator />}
              {metadata?.imageGatewayUri && (
                <Image
                  src={metadata.imageGatewayUri}
                  width={300}
                  height={300}
                  layout="responsive"
                  className="rounded-md"
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
