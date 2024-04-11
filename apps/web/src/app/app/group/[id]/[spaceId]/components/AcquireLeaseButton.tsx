'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import useAppContracts from '@/hooks/useAppContracts'
import { getWeeklyTaxDue } from '@/lib/utils'
import { useState } from 'react'
import { formatEther } from 'viem'
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { format, addWeeks } from 'date-fns'
import { Listing } from '@/lib/types'
import {
  useReadSuperTokenBalanceOf,
  useSimulateDirectListingsLogicBuyFromListing,
  useWriteIsethUpgradeByEth,
} from '@adland/contracts'
import { NATIVE_CURRENCY } from '@/config/constants'
import { ShoppingCart } from 'lucide-react'
import Modal from '@/components/Modal'

const AcquireLeaseActions = ({ listing }: { listing: Listing }) => {
  const { listingId, taxRate, pricePerToken, assetContract, tokenId } = listing
  const { address } = useAccount()
  const { ethx } = useAppContracts()
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1)
  const [showModal, setShowModal] = useState(false)

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

  const { data: hash, writeContract, isPending } = useWriteContract()

  const { isLoading } = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
    },
  })

  const takoverLoading = isPending || isLoading

  const numberOfWeeksAvailable = Number(
    (ethXBalane ?? BigInt(0)) / getWeeklyTaxDue(pricePerToken, taxRate) ?? 0,
  )

  return (
    <>
      <Button
        size="sm"
        variant="default"
        className="h-8 gap-1"
        onClick={() => {
          setShowModal(true)
        }}
      >
        <ShoppingCart className="h-3.5 w-3.5" />
        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
          Acquire space
        </span>
      </Button>
      <Modal
        title="Acquire Lease"
        description="Acquire lease for this space."
        isOpen={showModal}
        closeModal={() => {
          setShowModal(false)
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

export default AcquireLeaseActions
