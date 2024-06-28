import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Address, formatEther } from 'viem'
import TokenImage from '@/components/TokenImage'
import { AdSpaceMetadata, Listing } from '@adland/webkit/src/ponder'
import { formatAmount } from '@/lib/helpers'
import { getExplorerLink, truncateAddress } from '@/lib/utils'
import { Badge } from './ui/badge'
import { useBiconomyAccount } from '@/context/SmartAccountContext'
import classNames from 'classnames'

type AdSpaceCardProps = {
  listing: Listing
  owner: Address | string
  id: string
  currentMetadata?: Omit<AdSpaceMetadata, 'adSpace'> | null
}

const AdSpaceCard = ({
  id,
  owner,
  listing,
  currentMetadata: metadata,
}: AdSpaceCardProps) => {
  const { bicoAccountAddress } = useBiconomyAccount()
  const { pricePerToken, currency, taxRate, taxBeneficiary } = listing

  const ownedByBeneficiary =
    owner?.toLowerCase() === taxBeneficiary?.toLowerCase()
  const ownedByYourself =
    owner?.toLowerCase() === bicoAccountAddress?.toLowerCase()

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-md border border-white">
      <div className="white flex w-full flex-row justify-between bg-white p-2 text-sm text-black">
        <div className="px-2">
          <p className="font-bold">#{id}</p>
        </div>
        <div className="flex flex-row items-center gap-1 text-sm">
          <div className="flex flex-row items-center gap-2 px-2">
            <p className="text-xs">Price</p>
            <p className="font-bold">
              {formatAmount(formatEther(BigInt(pricePerToken)))}
            </p>
            <TokenImage address={currency} className="h-4 w-4" />
          </div>
          <div className="flex flex-row items-center gap-2 px-2">
            <p className="text-xs">Tax Rate</p>
            <p className="font-bold">{Number(taxRate ?? 0) / 100}% weekly</p>
          </div>
        </div>
      </div>
      <Link href={'/ad/' + id}>
        <div className="relative flex h-[350px] w-full flex-grow flex-col gap-2 bg-white bg-opacity-50 p-2 hover:bg-opacity-60">
          {!metadata && (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p className="font-display text-2xl">No Ad</p>
            </div>
          )}
          {metadata?.imageGatewayUri && (
            <div className="flex h-2/3 flex-grow bg-gray-200 p-4">
              <Image
                width={500}
                height={500}
                alt="AdSpace Image"
                className=" w-full object-contain"
                src={metadata?.imageGatewayUri}
              />
            </div>
          )}
          {metadata && <Separator />}
          {metadata?.description && (
            <p className="text-left font-body text-sm font-semibold">
              {metadata?.description}
            </p>
          )}
          {metadata && <Separator />}
          {metadata?.externalUrl && (
            <p className="text-left text-sm font-light">
              {metadata?.externalUrl}
            </p>
          )}
        </div>
      </Link>
      <div className="white flex w-full flex-row justify-between bg-white bg-opacity-75 p-2 text-sm text-black">
        <div className="flex flex-row items-center gap-1 text-sm">
          <div className="flex flex-row items-center gap-2 px-2">
            <p className="text-xs">Owner</p>
            <Badge
              className={classNames('bg-[#1a0eed]', {
                'bg-green-500': ownedByYourself,
                'bg-black': ownedByBeneficiary,
              })}
            >
              <Link
                className="underline"
                href={getExplorerLink(owner, 'address')}
                target="_blank"
              >
                <p className="font-bold">
                  {ownedByYourself ? 'You' : truncateAddress(owner)}
                </p>
              </Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdSpaceCard
