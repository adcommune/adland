'use client'

import { ImageIcon, MoreVertical, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AdLand } from '@/lib/adland'
import { format } from 'date-fns'
import { formatEther } from 'viem'
import { truncateAddress } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { useContext, useState } from 'react'
import { ModalContext } from '@/context/ModalContext'
import AcquireLeaseModal from '@/components/AcquireLeaseModal'
import UpdateAdDataDialog from '@/components/UpdateAdDataModal'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import SelfPriceAssementModal from '@/components/SelfPriceAssementModal'
import { getTokenSymbol } from '@/config/constants'
import Image from 'next/image'
import AdPropertyList from '@/components/AdSpaces/AdPropertyList'
import classNames from 'classnames'
import FarcasterIntegration from '@/components/FarcasterIntegration'
import { useSimulateDirectListingsLogicForecloseListing } from '@adland/contracts'
import useTransaction from '@/hooks/useTransaction'

const ForecloseDropdownItem = ({ listingId }: { listingId: bigint }) => {
  const { data } = useSimulateDirectListingsLogicForecloseListing({
    args: [listingId],
  })

  const { writeContract, loading } = useTransaction(() => {})

  return (
    <DropdownMenuItem
      disabled={!Boolean(data?.request)}
      onClick={() => {
        writeContract(data!.request)
      }}
      className="bg-red-500 text-white"
    >
      Foreclos{loading ? 'ing...' : 'e'}
    </DropdownMenuItem>
  )
}

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}

const AdSpacePage = ({
  params: { spaceId, id: groupId },
}: AdSpacePageProps) => {
  const { address } = useAccount()
  const { acquireLeaseModal, updateAdDataModal, selfAssessmentModal } =
    useContext(ModalContext)

  const { data: adSpace, isLoading } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  const [selectedIntegration, setSelectedIntegration] = useState<
    'farcaster' | null
  >(null)

  if (!(adSpace && adSpace.tokenX) || isLoading) return null

  const { listing } = adSpace

  const isOwner = listing?.listingOwner === address
  const isBeneficiarty = listing?.taxBeneficiary === address
  const showDropdown = isOwner || isBeneficiarty

  return (
    <div className="relative flex min-h-[80vh] flex-col items-start gap-4 py-4 md:flex-row">
      <Card className="min-w-[400px] overflow-hidden font-body">
        <CardHeader className="flex flex-col gap-2 bg-muted/50">
          <div className="flex flex-row items-start gap-8 ">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                AdSpace {Number(listing?.listingId)}
              </CardTitle>
              <CardDescription>
                Opened on{' '}
                {format(Number(listing?.startTimestamp) * 1000, 'MMMM do')}
              </CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              {isOwner ? (
                <Button
                  size="sm"
                  variant="default"
                  className="h-8 gap-1"
                  onClick={() => {
                    updateAdDataModal.set(true)
                  }}
                >
                  <ImageIcon className="h-3.5 w-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Edit Ad
                  </span>
                </Button>
              ) : (
                <>
                  <Button
                    size="sm"
                    variant="default"
                    className="h-8 gap-1"
                    onClick={() => {
                      acquireLeaseModal.set(true)
                    }}
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Acquire space
                    </span>
                  </Button>
                </>
              )}

              {showDropdown && (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      {isOwner && (
                        <>
                          <DropdownMenuItem
                            onClick={() => {
                              selfAssessmentModal.set(true)
                            }}
                          >
                            Self Assess
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem disabled>Give up</DropdownMenuItem>
                        </>
                      )}
                      {isBeneficiarty && !isOwner && (
                        <ForecloseDropdownItem
                          listingId={adSpace.listing.listingId}
                        />
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <SelfPriceAssementModal adSpace={adSpace} />
                  <UpdateAdDataDialog adSpace={adSpace} />
                </>
              )}
              <AcquireLeaseModal
                listing={listing}
                superToken={adSpace.tokenX}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Ad Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Price</span>
                <span>
                  {formatEther(listing?.pricePerToken)}{' '}
                  {getTokenSymbol(listing?.currency)}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax Rate</span>
                <span>{Number(listing?.taxRate) / 100} %</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Currencry</span>
                <span>
                  {getTokenSymbol(listing?.currency) ??
                    truncateAddress(listing?.currency)}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Owner</span>
                <span>
                  {' '}
                  {isOwner ? (
                    ' you'
                  ) : (
                    <span>{truncateAddress(listing?.listingOwner)}</span>
                  )}
                </span>
              </li>
            </ul>
            <div className="grid gap-3">
              <div className="font-semibold">Integrations</div>
              <ul className="grid grid-cols-2 gap-3">
                <Button
                  variant={'outline'}
                  onClick={() => {
                    if (selectedIntegration !== 'farcaster') {
                      setSelectedIntegration('farcaster')
                    } else {
                      setSelectedIntegration(null)
                    }
                  }}
                  className={classNames(
                    'group flex h-12 w-full flex-row items-center justify-start gap-4 p-1 font-body',
                    {
                      'bg-slate-200': selectedIntegration === 'farcaster',
                    },
                  )}
                >
                  <div className="aspect-square h-full">
                    <Image
                      src="/farcaster.png"
                      width={50}
                      height={50}
                      className="h-full w-full scale-[85%] object-contain"
                      alt="farcaster-logo"
                    />
                  </div>
                  <p>Farcaster</p>
                </Button>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            This ad is frameable on the open web
          </div>
        </CardFooter>
      </Card>{' '}
      {selectedIntegration === null ? (
        <AdPropertyList metadata={adSpace.metadata} />
      ) : (
        (() => {
          if (selectedIntegration === 'farcaster') {
            return <FarcasterIntegration groupId={groupId} spaceId={spaceId} />
          }
          return null
        })()
      )}
    </div>
  )
}

export default AdSpacePage
