'use client'

import { ModalContext } from '@/context/ModalContext'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { ImageIcon, MoreVertical, ShoppingCart } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import ForecloseDropdownItem from '@/components/AdSpaces/ForecloseDropdownItem'
import SelfPriceAssementModal from '@/components/SelfPriceAssementModal'
import AcquireLeaseModal from '@/components/AcquireLeaseModal'
import { encodeFunctionData, formatEther } from 'viem'
import { getExplorerLink, getWarpcastLink, truncateAddress } from '@/lib/utils'
import { format } from 'date-fns'
import { Button } from '../ui/button'
import { appContracts } from '@/config/constants'
import { usePathname } from 'next/navigation'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import TokenImage from '../TokenImage'
import { formatAmount } from '@/lib/helpers'
import { Alert } from '../Alert'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { directListingsLogicAbi } from '@adland/contracts'
import { handleWriteErrors } from '@/lib/viem'
import { queryClient } from '../AppProviders'
import { AdSpaceQuery } from '@adland/webkit/src/ponder'
import { toast } from 'sonner'
import { merge } from 'lodash'
import FarcasterUserSmallBadge from '../FarcasterUserSmallBadge'

type AdDetailsSidebarProps = {
  spaceId: string
  children: React.ReactNode
}

const AdDetailsSidebar = ({ spaceId, children }: AdDetailsSidebarProps) => {
  const { data: adSpace, isLoading } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })
  const { bicoAccountAddress: address } = useContext(SmartAccountContext)
  const { acquireLeaseModal, selfAssessmentModal } = useContext(ModalContext)
  const listing = adSpace?.listing
  const isOwner = adSpace?.owner?.toLowerCase() === address?.toLowerCase()
  const isBeneficiary =
    listing?.taxBeneficiary?.toLowerCase() === address?.toLowerCase()
  const showDropdown = isOwner || isBeneficiary
  const isFarcasterPage = usePathname().includes('/farcaster')
  const isWebPage = usePathname().includes('/web')

  const taxRatePercentage = Number(listing?.taxRate ?? 0) / 100

  const { write: giveUp, loading: giveUpLoading } = useSmartAccountTxs({
    onSuccess: () => {},
  })

  return (
    <div className="relative flex min-h-[80vh] flex-col items-start gap-2 md:flex-row">
      <Card className="w-full overflow-hidden font-body md:max-w-[400px]">
        <CardHeader className="flex flex-col gap-2 bg-muted/50">
          <div className="flex flex-row items-start gap-8 ">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                AdSpace{' '}
                {listing?.listingId ? (
                  Number(listing?.listingId)
                ) : (
                  <Skeleton className="h-4 w-9" />
                )}
              </CardTitle>
              <CardDescription>
                Opened on{' '}
                {listing?.startTimestamp
                  ? format(
                      Number(listing?.startTimestamp ?? 0) * 1000,
                      'MMMM do',
                    )
                  : ''}
              </CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              {isBeneficiary ? (
                <></>
              ) : isOwner ? (
                <Link href={`/ad/${spaceId}/edit`}>
                  <Button size="sm" variant="default" className="h-8 gap-1">
                    <ImageIcon className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Edit Ad
                    </span>
                  </Button>
                </Link>
              ) : (
                <>
                  <Button
                    disabled={!listing || isBeneficiary}
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
                          <Link href={`/ad/${spaceId}/upgrade`}>
                            <DropdownMenuItem>Deposit</DropdownMenuItem>
                          </Link>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem disabled>Give up</DropdownMenuItem>
                        </>
                      )}
                      {isBeneficiary && !isOwner && listing && (
                        <ForecloseDropdownItem listingId={listing?.listingId} />
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {adSpace && (
                    <SelfPriceAssementModal listing={adSpace.listing} />
                  )}
                </>
              )}
              {adSpace && (
                <AcquireLeaseModal
                  listing={adSpace?.listing}
                  tokenX={adSpace?.tokenX}
                />
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Ad Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Price</span>
                {listing?.pricePerToken ? (
                  <span className="flex flex-row items-center gap-2">
                    {formatAmount(
                      formatEther(listing?.pricePerToken ?? BigInt(0)),
                    )}{' '}
                    <Link
                      href={getExplorerLink(listing.currency, 'address')}
                      className="underline"
                      target="_blank"
                    >
                      {listing.currencySymbol}
                    </Link>
                    <TokenImage
                      address={listing?.currency}
                      className="h-5 w-5"
                    />
                  </span>
                ) : (
                  <Skeleton className="h-4 w-9" />
                )}
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax Rate (weekly)</span>
                {listing || !isLoading ? (
                  <span>{taxRatePercentage} %</span>
                ) : (
                  <Skeleton className="h-4 w-9" />
                )}
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Owner</span>
                {listing || !isLoading ? (
                  <span>
                    {' '}
                    {adSpace?.user?.fid ? (
                      <Link
                        href={getWarpcastLink(adSpace?.user?.username)}
                        target="_blank"
                      >
                        <FarcasterUserSmallBadge user={adSpace?.user} />
                      </Link>
                    ) : isOwner ? (
                      ' you'
                    ) : (
                      <span>{truncateAddress(listing?.listingOwner)}</span>
                    )}
                  </span>
                ) : (
                  <Skeleton className="h-4 w-9" />
                )}
              </li>
            </ul>
            {/* {adSpace && <AdAttestationSection adSpace={adSpace} />} */}
            <div className="grid gap-3">
              <div className="font-semibold">Distribution</div>
              <ul className="grid grid-cols-2 gap-3">
                <Link
                  href={isWebPage ? `/ad/${spaceId}` : `/ad/${spaceId}/web`}
                >
                  <Button
                    variant={'outline'}
                    className={classNames(
                      'group flex h-12 w-full flex-row items-center justify-start gap-4 p-1 font-body',
                      {
                        'bg-slate-200': isWebPage,
                      },
                    )}
                  >
                    <div className="aspect-square h-full">
                      <p className="flex h-full w-full scale-[2] flex-row items-center justify-center">
                        🌐
                      </p>
                    </div>
                    <p>Web</p>
                  </Button>
                </Link>
                <Link
                  href={
                    isFarcasterPage
                      ? `/ad/${spaceId}`
                      : `/ad/${spaceId}/farcaster`
                  }
                >
                  <Button
                    variant={'outline'}
                    className={classNames(
                      'group flex h-12 w-full flex-row items-center justify-start gap-4 p-1 font-body',
                      {
                        'bg-slate-200': isFarcasterPage,
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
                </Link>
              </ul>
            </div>
            {isOwner && !isBeneficiary && (
              <div className="grid gap-3">
                <div className="font-semibold">Actions</div>
                <ul className="grid gap-3">
                  {isOwner && !isBeneficiary && (
                    <li className="flex items-center justify-between">
                      <p>Give up space</p>
                      <Alert
                        title="Give Up"
                        description="Are you sure you want to give up this ad space?"
                        onConfirm={() => {
                          giveUp(
                            {
                              transactions: [
                                {
                                  to: appContracts.marketplace,
                                  data: encodeFunctionData({
                                    abi: directListingsLogicAbi,
                                    functionName: 'cancelListing',
                                    args: [listing?.listingId],
                                  }),
                                  value: BigInt(0),
                                },
                              ],
                            },
                            {
                              onSuccess: () => {
                                queryClient.setQueryData(
                                  ['adSpace-', spaceId],
                                  (
                                    old: AdSpaceQuery['adSpace'],
                                  ): AdSpaceQuery['adSpace'] => {
                                    return merge({}, old, {
                                      owner: listing?.taxBeneficiary,
                                    })
                                  },
                                )
                                toast.success('Ad Space given up successfully')
                              },
                              onError: (err) => handleWriteErrors(err),
                            },
                          )
                        }}
                      >
                        <Button
                          disabled={giveUpLoading}
                          size="sm"
                          loading={giveUpLoading}
                          variant="destructive"
                        >
                          Give Up
                        </Button>
                      </Alert>{' '}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            This ad is frameable on the open web
          </div>
        </CardFooter>
      </Card>
      {children}
    </div>
  )
}

export default AdDetailsSidebar
