import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { formatEther } from 'viem'
import TokenImage from '@/components/TokenImage'
import { AdSpaceMetadata, Listing } from '@adland/webkit/src/ponder'
import { formatAmount } from '@/lib/helpers'

type AdSpaceCardProps = {
  listing: Listing
  id: string
  currentMetadata?: Omit<AdSpaceMetadata, 'adSpace'> | null
}

const AdSpaceCard = ({
  id,
  listing,
  currentMetadata: metadata,
}: AdSpaceCardProps) => {
  const { pricePerToken, currency, taxRate } = listing

  return (
    <Link href={'/ad/' + id}>
      <div className="relative flex flex-col overflow-hidden rounded-md border border-white">
        <div className="white flex w-full flex-row justify-between bg-white p-2 text-sm text-black">
          <div className="px-2">
            <p className="font-bold">#{id}</p>
          </div>
          <Separator
            orientation="vertical"
            className="h-full border-red-500 bg-red-600"
          />
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
        <div className="relative flex h-[350px] w-full flex-grow flex-col gap-2 bg-white bg-opacity-50 p-4 hover:bg-opacity-60">
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
      </div>
    </Link>
  )
}

export default AdSpaceCard
