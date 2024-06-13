'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import useAppContracts from '@/hooks/useAppContracts'
import { getExplorerLink, getWeeklyTaxDue } from '@/lib/utils'
import { useContext, useState } from 'react'
import { encodeFunctionData, erc20Abi, formatEther } from 'viem'
import { useBalance, useReadContracts } from 'wagmi'
import { format, addWeeks } from 'date-fns'
import { AdSpace } from '@/lib/types'
import {
  cfAv1ForwarderAbi,
  directListingsLogicAbi,
  isethAbi,
  superTokenAbi,
  useReadSuperTokenBalanceOf,
} from '@adland/contracts'
import {
  appContracts,
  getTokenSymbol,
  superfluidUpgradeLink,
} from '@/config/constants'
import Modal from '@/components/Modal'
import { useParams } from 'next/navigation'
import { ModalContext } from '@/context/ModalContext'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import Link from 'next/link'
import { toast } from 'sonner'
import { Separator } from './ui/separator'
import { queryClient } from './AppProviders'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { Transaction } from '@biconomy/account'

type AcquireLeaseModalProps = {
  adSpace: AdSpace
}

const AcquireLeaseModal = ({ adSpace }: AcquireLeaseModalProps) => {
  const { listing, tokenX } = adSpace

  const { spaceId } = useParams()
  const { listingId, taxRate, pricePerToken } = listing
  const { marketplace, cfaV1 } = useAppContracts()
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1)
  const { acquireLeaseModal } = useContext(ModalContext)

  const { bicoAccountAddress: address } = useContext(SmartAccountContext)

  const isNativeCurrency = tokenX?.isNativeToken
  const superToken = tokenX

  const {
    data: { superBalance, isEnough } = {
      superBalance: BigInt(0),
      isEnough: true,
    },
    refetch: refetchSuperBalance,
  } = useReadSuperTokenBalanceOf({
    address: superToken?.superToken,
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
        address: superToken?.underlyingToken,
        args: address && [address],
      },
      {
        abi: erc20Abi,
        functionName: 'allowance',
        address: superToken?.underlyingToken,
        args: address && [address, marketplace],
      },
      {
        abi: cfAv1ForwarderAbi,
        functionName: 'getFlowOperatorPermissions',
        address: cfaV1,
        args: address && [superToken?.superToken, address, marketplace],
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

  const { write: upgradeCall, loading: depositLoading } = useSmartAccountTxs({
    onSuccess: () => {
      rereadBalances()
      refetchSuperBalance()
      toast.success('Rent deposited successfully')
    },
  })

  const { write: takeOver, loading: takeOverLoading } = useSmartAccountTxs({})

  const takeOverLeaseCall = () => {
    if (!address) return
    let transactions: Transaction[] = []

    if (!isNativeCurrency) {
      if (!reads?.allowanceIsEnough) {
        transactions.push({
          to: superToken?.underlyingToken,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [marketplace, pricePerToken],
          }),
          value: BigInt(0),
        })
      }
    }

    if (!reads?.permissionGranted) {
      transactions.push({
        to: cfaV1,
        data: encodeFunctionData({
          abi: cfAv1ForwarderAbi,
          functionName: 'grantPermissions',
          args: [superToken?.superToken, marketplace],
        }),
        value: BigInt(0),
      })
    }

    transactions.push({
      to: appContracts.marketplace,
      data: encodeFunctionData({
        abi: directListingsLogicAbi,
        functionName: 'buyFromListing',
        args: [
          listingId,
          address,
          BigInt(1),
          superToken?.underlyingToken,
          pricePerToken,
        ],
      }),
      value: isNativeCurrency ? pricePerToken : BigInt(0),
    })

    takeOver(
      { transactions },
      {
        onSuccess: () => {
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
        },
      },
    )
  }

  return (
    <>
      <Modal
        title="Acquire Lease"
        description="Acquire lease for this space."
        isOpen={acquireLeaseModal.show}
        closeModal={() => {
          acquireLeaseModal.set(false)
        }}
        renderConfirm={() => {
          return (
            <Button
              disabled={!isEnough || takeOverLoading}
              onClick={() => {
                takeOverLeaseCall()
              }}
              loading={takeOverLoading}
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
            <li>
              <div className="flex flex-row gap-4">
                <Slider
                  defaultValue={[0]}
                  max={25}
                  step={1}
                  onValueChange={(value: any) => {
                    setNumberOfWeeks(value[0])
                  }}
                />
                <Button
                  disabled={depositLoading}
                  loading={depositLoading}
                  onClick={() => {
                    if (!taxRate || pricePerToken === undefined) return

                    const value =
                      getWeeklyTaxDue(pricePerToken, taxRate) *
                      BigInt(numberOfWeeks)
                    if (isNativeCurrency) {
                      upgradeCall({
                        transactions: [
                          {
                            to: superToken?.superToken,
                            data: encodeFunctionData({
                              abi: isethAbi,
                              functionName: 'upgradeByETH',
                              args: undefined,
                            }),
                            value: value,
                          },
                        ],
                      })
                    } else {
                      upgradeCall({
                        transactions: [
                          {
                            to: superToken?.underlyingToken,
                            data: encodeFunctionData({
                              abi: erc20Abi,
                              functionName: 'approve',
                              args: [superToken?.superToken, value],
                            }),
                            value: BigInt(0),
                          },
                          {
                            to: superToken?.superToken,
                            data: encodeFunctionData({
                              abi: superTokenAbi,
                              functionName: 'upgrade',
                              args: [value],
                            }),
                          },
                        ],
                      })
                    }
                  }}
                >
                  Deposit Rent: {numberOfWeeks} weeks
                </Button>
              </div>
            </li>
          </ul>
          <Separator />
          <div className="font-semibold">
            {getTokenSymbol(listing.currency)} Info
          </div>
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
