'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import useAppContracts from '@/hooks/useAppContracts'
import { getWeeklyTaxDue } from '@/lib/utils'
import { useContext, useEffect, useState } from 'react'
import { formatEther } from 'viem'
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { format, addWeeks } from 'date-fns'
import { AdSpace, Listing } from '@/lib/types'
import {
  useReadSuperTokenBalanceOf,
  useSimulateDirectListingsLogicBuyFromListing,
  useWriteIsethUpgradeByEth,
} from '@adland/contracts'
import { NATIVE_CURRENCY } from '@/config/constants'
import Modal from '@/components/Modal'
import { useParams } from 'next/navigation'
import { queryClient } from '@/app/app/providers'
import { ModalContext } from '@/context/ModalContext'

const AcquireLeaseModal = ({ listing }: { listing: Listing }) => {
  const { spaceId } = useParams()
  const { listingId, taxRate, pricePerToken } = listing
  const { address } = useAccount()
  const { ethx } = useAppContracts()
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1)
  const { acquireLeaseModal } = useContext(ModalContext)

  const { data: ethXBalane } = useReadSuperTokenBalanceOf({
    address: ethx,
    args: address && [address],
  })

  const { data: ethBalance } = useBalance({
    address: address,
  })

  const { writeContract: callUpgradeByEth } = useWriteIsethUpgradeByEth()

  const depositRent = (weeks: number) => {
    const price = pricePerToken

    if (!taxRate || price === undefined) return

    callUpgradeByEth({
      address: ethx,
      args: undefined,
      value: getWeeklyTaxDue(price, taxRate) * BigInt(weeks),
    })
  }

  const { data: buyRequest } = useSimulateDirectListingsLogicBuyFromListing({
    args: [listingId, address, BigInt(1), NATIVE_CURRENCY, pricePerToken],
    value: pricePerToken,
    query: { enabled: true },
  })

  const { data: hash, writeContract, isPending } = useWriteContract({})

  const { data: txSuccess, isLoading } = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
      select: (receipt) => receipt.status === 'success',
    },
  })

  useEffect(() => {
    if (txSuccess) {
      acquireLeaseModal.set(false)

      const previousAdSpace = queryClient.getQueryData(['adSpace-', spaceId])

      if (!address) return { previousAdSpace }

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
  }, [txSuccess])

  const takoverLoading = isPending || isLoading

  const numberOfWeeksAvailable = Number(
    (ethXBalane ?? BigInt(0)) / getWeeklyTaxDue(pricePerToken, taxRate) ?? 0,
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
          <div className="font-semibold">Super Token Info</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Balance</span>
              <span>{formatEther(ethXBalane ?? BigInt(0))} ETHx</span>
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
                  onClick={() => {
                    depositRent(numberOfWeeks)
                  }}
                >
                  Deposit Rent: {numberOfWeeks} weeks
                </Button>
              </div>
            </li>
          </ul>
          <div className="font-semibold">ETH Info</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Balance</span>
              <span>{Number(formatEther(ethBalance?.value ?? BigInt(0)))}</span>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  )
}

export default AcquireLeaseModal
