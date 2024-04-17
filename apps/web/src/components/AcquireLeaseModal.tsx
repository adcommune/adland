'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import useAppContracts from '@/hooks/useAppContracts'
import { getWeeklyTaxDue } from '@/lib/utils'
import { useCallback, useContext, useState } from 'react'
import { formatEther } from 'viem'
import { useAccount, useBalance } from 'wagmi'
import { format, addWeeks } from 'date-fns'
import { AdSpace, Listing } from '@/lib/types'
import {
  useReadSuperTokenBalanceOf,
  useSimulateDirectListingsLogicBuyFromListing,
  useWriteIsethUpgradeByEth,
} from '@adland/contracts'
import { NATIVE_CURRENCY, superfluidUpgradeLink } from '@/config/constants'
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

const AcquireLeaseModal = ({ listing }: { listing: Listing }) => {
  const { spaceId } = useParams()
  const { listingId, taxRate, pricePerToken } = listing
  const { address } = useAccount()
  const { ethx } = useAppContracts()
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1)
  const { acquireLeaseModal } = useContext(ModalContext)

  const {
    data: { superBalance, isEnough } = {
      superBalance: BigInt(0),
      isEnough: true,
    },
    refetch: refetchSuperBalance,
  } = useReadSuperTokenBalanceOf({
    address: ethx,
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

  const {
    data: upgradeTxHash,
    writeContract: callUpgradeByEth,
    isPending,
  } = useWriteIsethUpgradeByEth()

  const depositRent = (weeks: number) => {
    const price = pricePerToken

    if (!taxRate || price === undefined) return

    callUpgradeByEth(
      {
        address: ethx,
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
        NATIVE_CURRENCY,
        pricePerToken,
      ],
      value: pricePerToken,
      query: { enabled: Boolean(address) },
    })

  const { isLoading } = useWaitForTransactionSuccess(
    upgradeTxHash,
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
              Take over lease ({formatEther(pricePerToken)} ETH)
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
              <span>{formatEther(superBalance)} ETHx</span>
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
                ETHx
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Current balance covers tax until
              </span>
              <span>
                {format(
                  addWeeks(Date.now(), numberOfWeeksAvailable),
                  'MMM d, yyyy',
                )}{' '}
                ({numberOfWeeksAvailable} weeks)
              </span>
            </li>
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
          </ul>
          <Separator />
          <div className="font-semibold">ETH Info</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Balance</span>
              <span>{Number(formatEther(ethBalance?.value ?? BigInt(0)))}</span>
            </li>
          </ul>
        </div>
        {!isEnough && (
          <Alert variant="destructive" className="my-4">
            <AlertTitle>Out of funds</AlertTitle>
            <AlertDescription>
              You SuperToken balance should account for at least 1 week of this
              asset&apos;s tax. Deposit more with the deposit button about or on{' '}
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
