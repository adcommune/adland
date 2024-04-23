'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import useAppContracts from '@/hooks/useAppContracts'
import { getExplorerLink, getWeeklyTaxDue } from '@/lib/utils'
import { useCallback, useContext, useState } from 'react'
import { erc20Abi, formatEther } from 'viem'
import { useAccount, useBalance, useReadContracts } from 'wagmi'
import { format, addWeeks } from 'date-fns'
import { AdSpace, Listing } from '@/lib/types'
import {
  cfAv1ForwarderAbi,
  useReadSuperTokenBalanceOf,
  useSimulateDirectListingsLogicBuyFromListing,
  useWriteIsethUpgradeByEth,
} from '@adland/contracts'
import {
  NATIVE_CURRENCY,
  getTokenSymbol,
  superfluidUpgradeLink,
} from '@/config/constants'
import Modal from '@/components/Modal'
import { useParams } from 'next/navigation'
import { queryClient } from '@/app/app/providers'
import { ModalContext } from '@/context/ModalContext'
import useTransaction from '@/hooks/useTransaction'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import Link from 'next/link'
import { handleWriteErrors } from '@/lib/viem'
import useWaitForTransactionSuccess from '@/hooks/useWaitForTransactionSuccess'
import { toast } from 'sonner'
import { Separator } from './ui/separator'
import { TokenX } from '@adland/webkit/src/hooks'

type AcquireLeaseModalProps = {
  listing: Listing
  superToken: TokenX
}

const AcquireLeaseModal = ({ listing, superToken }: AcquireLeaseModalProps) => {
  const { spaceId } = useParams()
  const { listingId, taxRate, pricePerToken } = listing
  const { address } = useAccount()
  const { marketplace, cfaV1 } = useAppContracts()
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1)
  const { acquireLeaseModal } = useContext(ModalContext)

  const isNativeCurrency =
    superToken.underlyingToken.toLowerCase() === NATIVE_CURRENCY.toLowerCase()

  const {
    data: { superBalance, isEnough } = {
      superBalance: BigInt(0),
      isEnough: true,
    },
    refetch: refetchSuperBalance,
  } = useReadSuperTokenBalanceOf({
    address: superToken.superToken,
    args: address && [address],
    query: {
      select: (data) => ({
        superBalance: data,
        isEnough: data >= getWeeklyTaxDue(pricePerToken, taxRate),
      }),
    },
  })

  const numberOfWeeksAvailable = Number(
    superBalance / getWeeklyTaxDue(pricePerToken, taxRate) ?? 0,
  )

  const { data: ethBalance } = useBalance({
    address: address,
  })

  const { data: reads, refetch: rereadBalances } = useReadContracts({
    contracts: [
      {
        abi: erc20Abi,
        functionName: 'balanceOf',
        address: superToken.underlyingToken,
        args: address && [address],
      },
      {
        abi: erc20Abi,
        functionName: 'allowance',
        address: superToken.underlyingToken,
        args: address && [address, marketplace],
      },
      {
        abi: cfAv1ForwarderAbi,
        functionName: 'getFlowOperatorPermissions',
        address: cfaV1,
        args: address && [superToken.superToken, address, marketplace],
      },
    ],
    query: {
      select: (data) => ({
        currencyBalance: data[0].result,
        allowance: data[1].result,
        allowanceIsEnough: (data[1].result ?? BigInt(0)) >= pricePerToken,
        permissionGranted: data[2].result && data[2].result[0] === 7,
      }),
    },
  })

  const {
    data: upgradeEthTxHash,
    writeContract: callUpgradeByEth,
    isPending,
  } = useWriteIsethUpgradeByEth()

  const depositRent = (weeks: number) => {
    const price = pricePerToken

    if (!taxRate || price === undefined) return

    callUpgradeByEth(
      {
        address: superToken.superToken,
        args: undefined,
        value: getWeeklyTaxDue(price, taxRate) * BigInt(weeks),
      },
      {
        onError: (error) => handleWriteErrors(error),
      },
    )
  }

  const { data: buyRequest, refetch: refetchBuySim } =
    useSimulateDirectListingsLogicBuyFromListing({
      args: address && [
        listingId,
        address,
        BigInt(1),
        superToken.underlyingToken,
        pricePerToken,
      ],
      value: isNativeCurrency ? pricePerToken : BigInt(0),
      query: { enabled: Boolean(address) },
    })

  const { isLoading } = useWaitForTransactionSuccess(
    upgradeEthTxHash,
    useCallback(() => {
      refetchSuperBalance()
      refetchBuySim()
      toast.success('Rent deposited successfully')
    }, []),
  )

  const { loading: takoverLoading, writeContract } = useTransaction(
    useCallback(() => {
      if (address) {
        acquireLeaseModal.set(false)
        queryClient.setQueryData(
          ['adSpace-', spaceId],
          (old: AdSpace): AdSpace => {
            return {
              ...old,
              listing: {
                ...old.listing,
                listingOwner: address,
              },
            }
          },
        )
      }
      toast.success('Lease acquired successfully !')
    }, []),
  )

  const { writeContract: allow, loading } = useTransaction(() => {
    rereadBalances()
    refetchBuySim()
  })

  const { writeContract: grantPermissionToken, loading: permissionLoading } =
    useTransaction(() => {
      rereadBalances()
      refetchBuySim()
    })

  return (
    <>
      <Modal
        title="Acquire Lease"
        description="Acquire lease for this space."
        isOpen={acquireLeaseModal.show}
        closeModal={() => {
          console.log('close')
          acquireLeaseModal.set(false)
        }}
        renderConfirm={() => {
          return (
            <Button
              disabled={!Boolean(buyRequest?.request) || takoverLoading}
              onClick={() => {
                writeContract(buyRequest!.request)
              }}
              loading={takoverLoading}
            >
              Take over lease ({formatEther(pricePerToken)}{' '}
              {getTokenSymbol(listing.currency)})
            </Button>
          )
        }}
      >
        <div className="grid gap-3">
          <Separator />
          <div className="font-semibold">Super Token Info</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Balance</span>
              <span>
                {formatEther(superBalance)}{' '}
                <Link
                  target="_blank"
                  className="underline"
                  href={getExplorerLink(listing?.currency, 'address')}
                >
                  {getTokenSymbol(listing.currency)}x
                </Link>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Weekly Tax Due</span>
              <span>
                {formatEther(
                  getWeeklyTaxDue(
                    pricePerToken ?? BigInt(0),
                    taxRate ?? BigInt(0),
                  ),
                )}{' '}
                {getTokenSymbol(listing.currency)}x
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Current balance covers tax until
              </span>
              <span>
                {format(
                  addWeeks(
                    Date.now(),
                    numberOfWeeksAvailable > 20 * 52
                      ? 20 * 52
                      : numberOfWeeksAvailable,
                  ),
                  'MMM d, yyyy',
                )}{' '}
                ({numberOfWeeksAvailable} weeks)
              </span>
            </li>
            {isNativeCurrency && (
              <li>
                <div className="flex flex-row gap-4">
                  <Slider
                    defaultValue={[0]}
                    max={10}
                    step={1}
                    onValueChange={(value: any) => {
                      setNumberOfWeeks(value[0])
                    }}
                  />
                  <Button
                    loading={isPending || isLoading}
                    disabled={isLoading}
                    onClick={() => {
                      depositRent(numberOfWeeks)
                    }}
                  >
                    Deposit Rent: {numberOfWeeks} weeks
                  </Button>
                </div>
              </li>
            )}
          </ul>
          <Separator />
          <div className="font-semibold">ETH Info</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Balance</span>
              <span>
                {Number(
                  formatEther(
                    isNativeCurrency
                      ? ethBalance?.value ?? BigInt(0)
                      : reads?.currencyBalance ?? BigInt(0),
                  ),
                )}
              </span>
            </li>
            {!isNativeCurrency && !reads?.allowanceIsEnough && (
              <li>
                <Button
                  loading={loading}
                  disabled={loading}
                  onClick={() => {
                    allow(
                      {
                        abi: erc20Abi,
                        functionName: 'approve',
                        address: superToken.underlyingToken,
                        args: [marketplace, pricePerToken],
                      },
                      {
                        onError: (error) => handleWriteErrors(error),
                      },
                    )
                  }}
                  className="w-full"
                >
                  Approve {getTokenSymbol(listing.currency)}x
                </Button>
              </li>
            )}
            {!reads?.permissionGranted && (
              <li>
                <Button
                  loading={permissionLoading}
                  disabled={permissionLoading}
                  onClick={() => {
                    grantPermissionToken(
                      {
                        abi: cfAv1ForwarderAbi,
                        functionName: 'grantPermissions',
                        address: cfaV1,
                        args: [superToken.superToken, marketplace],
                      },
                      {
                        onError: (error) => handleWriteErrors(error),
                      },
                    )
                  }}
                  className="w-full"
                >
                  Grant Permission
                </Button>
              </li>
            )}
          </ul>
        </div>
        {!isEnough && (
          <Alert variant="destructive" className="my-4">
            <AlertTitle>Out of funds</AlertTitle>
            <AlertDescription>
              You SuperToken balance should account for at least 1 week of this
              asset&apos;s tax. Deposit more with the deposit button above or on{' '}
              <Link
                href={superfluidUpgradeLink}
                className="underline"
                target="_blank"
              >
                Superfluid&apos;s dashboard
              </Link>
            </AlertDescription>
          </Alert>
        )}
      </Modal>
    </>
  )
}

export default AcquireLeaseModal
