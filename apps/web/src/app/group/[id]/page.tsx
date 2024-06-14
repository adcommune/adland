'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import { AdLand } from '@/lib/adland'
import { Separator } from '@/components/ui/separator'
import { useQuery } from '@tanstack/react-query'
import { formatUnits } from 'viem'
import TokenImage from '@/components/TokenImage'
import { AdSpace } from '@/lib/types'
import { useReadErc20Decimals } from '@adland/contracts'

type GroupPageProps = { params: { id: string } }

const GroupPage = ({ params: { id } }: GroupPageProps) => {
  const { data: adGroup, isLoading } = useQuery({
    queryKey: ['adGroup-', id],
    queryFn: async () => {
      return new AdLand().getGroup(id)
    },
  })

  if (isLoading) {
    return (
      <Container className="flex  h-[400px] w-full flex-row items-center justify-center gap-2 p-4">
        <p className="font-body text-2xl text-white">Loading...</p>
      </Container>
    )
  }

  if (!adGroup) {
    return (
      <Container className="flex  h-[400px] w-full flex-row items-center justify-center gap-2 p-4">
        <p className="font-body text-2xl text-white">AD GROUP NOT FOUND</p>
      </Container>
    )
  }

  const { adSpaces } = adGroup

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      {adSpaces?.map((space) => {
        return <AdCardItem space={space} />
      })}
    </div>
  )
}

const AdCardItem = ({ space }: { space: Omit<AdSpace, 'listing'> }) => {
  const { adSpace_subgraph: adSpace, metadata } = space

  const { data: decimals } = useReadErc20Decimals({
    address: adSpace.listing.listing_currency,
  })

  return (
    <Link
      key={adSpace?.transactionHash + adSpace?.id}
      href={'/ad/' + adSpace?.id}
    >
      <div className="relative flex flex-col overflow-hidden rounded-md border border-white">
        <div className="absolute left-0 top-0 z-10 flex w-full flex-row justify-between p-2">
          <div className="rounded-md border border-black bg-white px-2">
            <p className="text-black">#{adSpace?.id}</p>
          </div>
          <div className="flex flex-row items-center gap-2 rounded-md border border-black bg-white px-2">
            {formatUnits(
              BigInt(adSpace.listing.listing_pricePerToken),
              decimals ?? 18,
            )}
            <TokenImage
              address={adSpace.listing.listing_currency}
              className="h-4 w-4"
            />
          </div>
        </div>
        <div className="relative flex h-[400px] w-full flex-grow flex-col gap-2 bg-white bg-opacity-50 p-4 hover:bg-opacity-60">
          {!metadata && (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p className="font-display text-2xl">No Ad</p>
            </div>
          )}
          {metadata?.imageGatewayURI && (
            <div className="flex h-2/3 flex-grow bg-gray-200 p-4">
              <Image
                width={500}
                height={500}
                alt="AdSpace Image"
                className=" w-full object-contain"
                src={metadata?.imageGatewayURI}
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
          {metadata?.external_url && (
            <p className="text-left text-sm font-light">
              {metadata?.external_url}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default GroupPage
