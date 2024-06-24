import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { formatEther } from 'viem'
import TokenImage from '@/components/TokenImage'
import { AdSpaceMetadata, Listing } from '@adland/webkit/src/ponder'
import { formatAmount } from '@/lib/helpers'

const AdSpaceCard = ({
  id,
  listing,
  currentMetadata: metadata,
}: {
  listing: Listing
  id: string
  currentMetadata?: Omit<AdSpaceMetadata, 'adSpace'> | null
}) => {
  const { pricePerToken, currency } = listing

  return (
    <Link href={'/ad/' + id}>
      <div className="relative flex flex-col overflow-hidden rounded-md border border-white">
        <div className="absolute left-0 top-0 z-10 flex w-full flex-row justify-between p-2">
          <div className="rounded-md border border-black bg-white px-2">
            <p className="text-black">#{id}</p>
          </div>
          <div className="flex flex-row items-center gap-2 rounded-md border border-black bg-white px-2">
            {formatAmount(formatEther(BigInt(pricePerToken)))}
            <TokenImage address={currency} className="h-4 w-4" />
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
