'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import useAppContracts from '@/hooks/useAppContracts'
import { getExplorerLink, getWeeklyTaxDue } from '@/lib/utils'
import { useContext, useMemo, useState } from 'react'
import { Address, encodeFunctionData, erc20Abi, formatEther } from 'viem'
import { useBalance, useReadContracts } from 'wagmi'
import { format, addWeeks } from 'date-fns'
import {
  cfAv1ForwarderAbi,
  directListingsLogicAbi,
  isethAbi,
  superTokenAbi,
  useReadSuperTokenBalanceOf,
} from '@adland/contracts'
import { appContracts, superfluidUpgradeLink } from '@/config/constants'
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
import { AdSpaceQuery, Listing, TokenX } from '@adland/webkit/src/ponder'
import classNames from 'classnames'
import { formatAmount } from '@/lib/helpers'

type AcquireLeaseModalProps = {
  listing: Listing
  tokenX: TokenX
}

const AcquireLeaseModal = ({ listing, tokenX }: AcquireLeaseModalProps) => {
  const { spaceId } = useParams()
  const { listingId, taxRate, pricePerToken } = listing
  const { marketplace, cfaV1 } = useAppContracts()
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1)
  const { acquireLeaseModal } = useContext(ModalContext)

  const { bicoAccountAddress: address } = useContext(SmartAccountContext)

  const isNativeCurrency = tokenX?.isNativeToken
  const superTokenAddress = tokenX?.superToken as Address
  const underlyingTokenAddress = tokenX?.underlyingToken as Address
  const dueWeekly = getWeeklyTaxDue(pricePerToken, taxRate)

  const {
    data: { superBalance, isEnough } = {
      superBalance: BigInt(0),
      isEnough: true,
    },
    refetch: refetchSuperBalance,
  } = useReadSuperTokenBalanceOf({
    address: superTokenAddress,
    args: address && [address],
    query: {
      select: (data) => ({
        superBalance: data,
        isEnough: data >= dueWeekly,
      }),
    },
  })

  const numberOfWeeksAvailable = dueWeekly
    ? Number(superBalance / dueWeekly)
    : 0

  const { data: ethBalance } = useBalance({
    address: address,
  })

  const { data: reads, refetch: rereadBalances } = useReadContracts({
    contracts: [
      {
        abi: erc20Abi,
        functionName: 'balanceOf',
        address: underlyingTokenAddress,
        args: address && [address],
      },
      {
        abi: erc20Abi,
        functionName: 'allowance',
        address: underlyingTokenAddress,
        args: address && [address, marketplace],
      },
      {
        abi: cfAv1ForwarderAbi,
        functionName: 'getFlowOperatorPermissions',
        address: cfaV1,
        args: address && [superTokenAddress, address, marketplace],
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
          to: underlyingTokenAddress,
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
          args: [superTokenAddress, marketplace],
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
          underlyingTokenAddress,
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
              (old: AdSpaceQuery['adSpace']): AdSpaceQuery['adSpace'] => {
                return Object.assign({}, old, {
                  owner: address,
                })
              },
            )
          }
          toast.success('Lease acquired successfully !')
        },
      },
    )
  }

  const notEnoughBalanceForPurchase = useMemo(() => {
    if (isNativeCurrency) {
      if (ethBalance?.value !== undefined) {
        return ethBalance.value < pricePerToken
      }
    } else {
      if (reads?.currencyBalance !== undefined) {
        return reads.currencyBalance < pricePerToken
      }
    }
  }, [ethBalance, reads, pricePerToken])

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
              disabled={
                !isEnough || takeOverLoading || notEnoughBalanceForPurchase
              }
              onClick={() => {
                takeOverLeaseCall()
              }}
              loading={takeOverLoading}
            >
              Take over lease ({formatAmount(formatEther(pricePerToken))}{' '}
              {listing.currencySymbol})
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
                  {listing.currencySymbol}x
                </Link>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Weekly Tax Due</span>
              <span>
                {formatEther(dueWeekly)} {listing.currencySymbol}x
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

                    const value = dueWeekly * BigInt(numberOfWeeks)
                    if (isNativeCurrency) {
                      upgradeCall({
                        transactions: [
                          {
                            to: superTokenAddress,
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
                            to: underlyingTokenAddress,
                            data: encodeFunctionData({
                              abi: erc20Abi,
                              functionName: 'approve',
                              args: [superTokenAddress, value],
                            }),
                            value: BigInt(0),
                          },
                          {
                            to: superTokenAddress,
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
          <div className="font-semibold">{listing.currencySymbol} Info</div>
          <ul className="grid gap-3">
            <li
              className={classNames('flex items-center justify-between', {
                'text-red-500': notEnoughBalanceForPurchase,
              })}
            >
              <span
                className={classNames('text-muted-foreground', {
                  'text-red-500': notEnoughBalanceForPurchase,
                })}
              >
                Balance
              </span>
              <span>
                {formatAmount(
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
