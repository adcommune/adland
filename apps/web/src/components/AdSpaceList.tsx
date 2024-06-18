import { SmartAccountContext } from '@/context/SmartAccountContext'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import AdSpaceCard from './AdSpaceCard'

const AdSpaceList = () => {
  const { bicoAccountAddress } = useContext(SmartAccountContext)

  const { data, isLoading } = useQuery({
    queryFn: () =>
      bicoAccountAddress &&
      new AdLand().listAdSpacesByOwner(bicoAccountAddress),
    queryKey: ['listAdSpaces-' + bicoAccountAddress],
  })

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      {isLoading ? (
        <div className="col-span-1 flex h-[50vh] w-full flex-col items-center justify-center sm:col-span-3 md:col-span-4">
          <p className="text-lg text-white">Loading...</p>
        </div>
      ) : (
        data?.map((adSpace) => {
          return (
            <AdSpaceCard
              key={
                adSpace.adSpace_subgraph.transactionHash +
                '-' +
                adSpace.adSpace_subgraph.id
              }
              price={adSpace.listing.pricePerToken.toString()}
              currency={adSpace.listing.currency}
              metadata={adSpace?.metadata}
              id={adSpace.adSpace_subgraph.id}
            />
          )
        })
      )}
    </div>
  )
}

export default AdSpaceList
