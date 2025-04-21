'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { getExplorerLink, getWeeklyTaxDue } from '@/lib/utils'
import { useContext, useState } from 'react'
import { Address, encodeFunctionData, erc20Abi, formatEther } from 'viem'
import { format, addWeeks } from 'date-fns'
import {
  isethAbi,
  superTokenAbi,
  useReadSuperTokenBalanceOf,
} from '@adland/contracts'
import Link from 'next/link'
import { toast } from 'sonner'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { Listing, TokenX } from '@adland/webkit/src/ponder'

type DepositForAdSpaceProps = {
  listing: Listing
  tokenX: TokenX
  onDeposit?: () => void
}

const DepositForAdSpace = ({
  listing,
  tokenX,
  onDeposit,
}: DepositForAdSpaceProps) => {
  const dueWeekly = getWeeklyTaxDue(listing?.pricePerToken, listing?.taxRate)
  const isNativeCurrency = tokenX?.isNativeToken
  const superTokenAddress = tokenX?.superToken as Address
  const underlyingTokenAddress = tokenX?.underlyingToken as Address
  const pricePerToken = listing.pricePerToken
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1)

  const { bicoAccountAddress: address } = useContext(SmartAccountContext)

  const {
    data: { superBalance } = {
      superBalance: BigInt(0),
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

  const { write: upgradeCall, loading: depositLoading } = useSmartAccountTxs({
    onSuccess: () => {
      onDeposit && onDeposit()
      refetchSuperBalance()
      toast.success('Rent deposited successfully')
    },
  })

  return (
    <>
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
              {listing?.currencySymbol}x
            </Link>
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Weekly Tax Due</span>
          <span>
            {formatEther(dueWeekly)} {listing?.currencySymbol}x
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
                if (!listing.taxRate || pricePerToken === undefined) return

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
    </>
  )
}

export default DepositForAdSpace
