'use client'

import { useNewListingsQuery } from '@adland/webkit/src/hooks'
import { AdGroup } from '@/lib/types'
import { Separator } from '../ui/separator'
import { Badge } from '../ui/badge'
import { truncateAddress } from '@/lib/utils'
import { formatEther } from 'viem'
import { MAX_BPS } from '@/config/constants'

type AdGroupActivityProps = {
  adGroup: AdGroup
}

const AdGroupActivity = ({ adGroup }: AdGroupActivityProps) => {
  const { data: new_listings_events } = useNewListingsQuery(
    {
      where: {
        listing_taxBeneficiary: adGroup?.adGroup_subgraph?.beneficiary,
      },
    },
    {
      select: ({ newListings }) => newListings,
    },
  )

  return (
    <div className="rounded-md bg-white">
      {new_listings_events?.map((listing) => {
        return (
          <>
            <div key={listing.id} className="grid grid-cols-8 flex-row p-8">
              <div className="col-span-1 font-display">
                <p>{listing.listingId}</p>
              </div>
              <div className="col-span-2 font-body">
                <Badge>
                  New <span className="ml-1 hidden md:flex"> Ad Space</span>
                </Badge>
              </div>
              <div className="col-span-5 font-body">
                <ul className="grid">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Currency</span>
                    <span>{truncateAddress(listing.listing_currency)}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Price</span>
                    <span>{formatEther(listing.listing_pricePerToken)}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tax rate</span>
                    <span>{(listing.listing_taxRate / MAX_BPS) * 100}%</span>
                  </li>
                </ul>
              </div>
            </div>
            <Separator />
          </>
        )
      })}
    </div>
  )
}

export default AdGroupActivity
