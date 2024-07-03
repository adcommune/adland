import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TokenX } from '@adland/webkit/src/ponder'
import { ArrowDown, ArrowRight, MoveLeftIcon } from 'lucide-react'
import { useProfile } from '../context'
import { Progress } from '@/components/ui/progress'
import { useBiconomyAccount } from '@/context/SmartAccountContext'
import useAccountBalances from '@/hooks/useAccountBalances'
import TokenImage from '@/components/TokenImage'
import useColorThief from 'use-color-thief'
import { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AdLand } from '@/lib/adland'
import FlowRateBadge from '@/components/FlowRateBadge'
import { formatAmount } from '@/lib/helpers'
import {
  Address,
  encodeFunctionData,
  erc20Abi,
  formatEther,
  getAddress,
  parseEther,
  zeroAddress,
} from 'viem'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import {
  isethAbi,
  superTokenAbi,
  useReadConstantFlowAgreementV1GetAccountFlowInfo,
} from '@adland/contracts'
import { appContracts } from '@/config/constants'
import { Alert } from '@/components/ui/alert'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
} from '@/components/ui/form'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { handleWriteErrors } from '@/lib/viem'
import { Transaction } from '@biconomy/account'
import { toast } from 'sonner'
import classNames from 'classnames'

type withdrawFormProps = { tokenX: TokenX }

const flowRateToWeekly = (flowRate: bigint) => {
  return flowRate * BigInt(60 * 60 * 24 * 7)
}

const withdrawFundsSchema = z.object({
  amount: z.bigint(),
  amountReadable: z.number(),
  to: z.string().length(42),
})

type WithdrawFundsValues = z.infer<typeof withdrawFundsSchema>

const WithdrawForm = ({ tokenX }: withdrawFormProps) => {
  const form = useForm<WithdrawFundsValues>({
    resolver: zodResolver(withdrawFundsSchema),
    defaultValues: {
      amount: BigInt(0),
      amountReadable: 0,
      to: '',
    },
  })
  console.log(zeroAddress.length)
  const { tokenxWithdraw } = useProfile()
  const { bicoAccountAddress } = useBiconomyAccount()
  const {
    ratioUnderlyingSuperToken,
    balanceOfSuperTokenReadable,
    balanceOfUnderlyingReadable,
    balanceOfUnderlyingBigInt,
    balanceOfSuperTokenBigInt,
  } = useAccountBalances(tokenX, bicoAccountAddress)

  const { data: accountSuperTokenFlowRate } =
    useReadConstantFlowAgreementV1GetAccountFlowInfo({
      address: appContracts.cfaV1,
      args: bicoAccountAddress && [
        tokenX.superToken as Address,
        bicoAccountAddress,
      ],
      query: {
        select: (data) => {
          const flowRateWeekly = flowRateToWeekly(data[1])
          return {
            bigint: flowRateWeekly,
            readable: formatAmount(formatEther(flowRateWeekly)),
          }
        },
      },
    })

  const { data: currencyData } = useQuery({
    queryKey: ['accountBalances-', tokenX, bicoAccountAddress],
    queryFn: () =>
      bicoAccountAddress &&
      new AdLand().listAdSpacesByOwner(bicoAccountAddress),
    select: (data) => {
      const flows = data?.adSpaces.items
        .filter(
          (space) => space.tokenX.underlyingToken === tokenX.underlyingToken,
        )
        .map((space) => space.flow)
        .filter(Boolean)
      const weeklyStreamTotal = flows?.reduce(
        (acc, space) => acc + (BigInt(space?.weeklyFlowRate) ?? BigInt(0)),
        BigInt(0),
      )
      return {
        flows,
        weeklyStreamTotalBigInt: weeklyStreamTotal,
        weeklyStreamTotalReadable: formatAmount(
          formatEther(weeklyStreamTotal ?? BigInt(0)),
        ),
      }
    },
  })

  const imageRef = useRef(null)
  // @ts-ignore
  const { color } = useColorThief(imageRef, {
    format: 'hex',
    colorCount: 2,
  })

  const { write, loading } = useSmartAccountTxs({
    onSuccess: () => {
      toast.success('Withdrawal successful !')
    },
  })

  const submitWithdrawal = async (values: WithdrawFundsValues) => {
    if (!balanceOfSuperTokenBigInt || !balanceOfUnderlyingBigInt) {
      return
    }

    const { amount, to } = values

    let recipient

    try {
      recipient = getAddress(to)
    } catch (error) {
      return toast.error('Invalid recipient address')
    }

    let transactions: Transaction[] = []

    if (amount > balanceOfUnderlyingBigInt) {
      const amountOfSuperTokenToDowngrade = amount - balanceOfUnderlyingBigInt

      console.log({
        amountOfSuperTokenToDowngrade: formatEther(
          amountOfSuperTokenToDowngrade,
        ),
        balanceOfUnderlyingBigInt: formatEther(balanceOfUnderlyingBigInt),
        amount: formatEther(amount),
      })

      if (amountOfSuperTokenToDowngrade > balanceOfSuperTokenBigInt) {
        return toast.error('Insufficient funds: Trying to withdraw too much')
      } else {
        if (tokenX.isNativeToken) {
          console.log('Downgrading to ETH')
          transactions.push({
            to: tokenX.superToken,
            data: encodeFunctionData({
              abi: isethAbi,
              functionName: 'downgradeToETH',
              args: [amountOfSuperTokenToDowngrade],
            }),
            value: BigInt(0),
          })
        } else {
          transactions.push({
            to: tokenX.superToken,
            data: encodeFunctionData({
              abi: superTokenAbi,
              functionName: 'downgrade',
              args: [amountOfSuperTokenToDowngrade],
            }),
            value: BigInt(0),
          })
        }
      }
    }

    if (tokenX.isNativeToken) {
      console.log('Sending ETH')
      transactions.push({
        to: recipient,
        value: amount,
        data: '0x',
      })
    } else {
      transactions.push({
        to: tokenX.underlyingToken,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: erc20Abi,
          functionName: 'transfer',
          args: [recipient, amount],
        }),
      })
    }

    console.log({ transactions })

    write(
      {
        transactions,
      },
      {
        onSuccess: () => {},
        onError: (err) => handleWriteErrors(err),
      },
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-4">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              tokenxWithdraw.set(undefined)
            }}
          >
            <MoveLeftIcon className="h-6 w-6" />
          </Button>
          Withdraw {tokenX.underlyingSymbol}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Card>
          <CardHeader>
            <div className="flex flex-row justify-between">
              <CardTitle className="flex flex-row items-center gap-2">
                <TokenImage ref={imageRef} address={tokenX.underlyingToken} />
                <span className="hidden md:flex">{tokenX.underlyingName} </span>
                <span className="font-thin">
                  ({tokenX.underlyingSymbol})
                </span>{' '}
              </CardTitle>
              <CardTitle className="flex flex-row items-center gap-2">
                <TokenImage address={tokenX.underlyingToken} />
                <span className="hidden md:flex">{tokenX.superName} </span>
                <span className="font-thin">({tokenX.superSymbol})</span>
              </CardTitle>
            </div>
            <div className="flex flex-row justify-between">
              <p>Balance: {balanceOfUnderlyingReadable}</p>
              <p>Balance: {balanceOfSuperTokenReadable}</p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Progress
              className="w-full"
              style={{
                backgroundColor: typeof color === 'string' ? color : 'black',
              }}
              value={ratioUnderlyingSuperToken * 100}
            />
            <Separator />
            <div>
              <p className="font-body">
                You currently own {currencyData?.flows?.length} ad space
                {(currencyData?.flows?.length ?? 0) > 1 ? 's' : ''} in{' '}
                {tokenX.underlyingSymbol}, streamig out{' '}
                <span className="font-bold">
                  {currencyData?.weeklyStreamTotalReadable} {tokenX.superSymbol}{' '}
                  / week
                </span>
                , and have a total account flow rate of{' '}
                {accountSuperTokenFlowRate && (
                  <span className="font-bold">
                    {accountSuperTokenFlowRate?.bigint > 0 && '+'}
                    {accountSuperTokenFlowRate?.readable} {tokenX.superSymbol} /
                    week
                  </span>
                )}
                . Make sure your total flow is greater than what you&apos;re
                streaming out for ad spaces or that you&apos;ve got enough
                SuperTokens.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 font-body md:grid-cols-5">
              {currencyData?.flows?.map((flow) => (
                <div
                  key={flow?.id}
                  className="flex flex-col items-center gap-2 rounded-md border p-2"
                >
                  <p className="font-bold">Ad Space #{flow?.adSpaceId}</p>
                  <Separator />
                  <FlowRateBadge
                    currency={tokenX.underlyingToken}
                    flowRate={flow?.weeklyFlowRate}
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="font-body"></p>
              <Alert className="flex flex-row items-center border border-yellow-700 bg-yellow-200 font-body text-yellow-700">
                <div>
                  <span className="mr-2 font-bold">Warning:</span> You&apos;ll
                  lose ownership of your ad spaces if your {tokenX.superSymbol}{' '}
                  balance hits zero
                </div>
              </Alert>
            </div>
            <Separator />
            <Form {...form}>
              <form onSubmit={form.handleSubmit(submitWithdrawal)}>
                <div className="flex flex-col gap-4 font-body">
                  <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-end">
                    <FormField
                      control={form.control}
                      name="amountReadable"
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                        formState,
                      }) => {
                        console.log({ error, values: form.getValues() })
                        return (
                          <div className="w-full">
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <div className="relative flex items-center">
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="0"
                                    value={value}
                                    min={0}
                                    step="any"
                                    onChange={(e) => {
                                      const val = e.target.valueAsNumber
                                      if (!isNaN(val)) {
                                        onChange(val)
                                        form.setValue(
                                          'amount',
                                          parseEther(val.toString()),
                                        )
                                      }
                                    }}
                                  />
                                </FormControl>
                              </div>
                            </FormItem>
                          </div>
                        )
                      }}
                    />
                    <ArrowRight className="mb-2 hidden w-10 md:flex" />
                    <ArrowDown className="flex w-10 md:hidden" />
                    <FormField
                      control={form.control}
                      name="to"
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => {
                        console.log(error)
                        return (
                          <div className="w-full">
                            <FormItem>
                              <FormLabel>Send to</FormLabel>
                              <div className="relative flex items-center">
                                <FormControl>
                                  <Input
                                    type="text"
                                    className={classNames({
                                      'border-red-500': Boolean(error),
                                    })}
                                    placeholder="Wallet address"
                                    value={value}
                                    onChange={(e) => {
                                      const val = e.target.value
                                      onChange(val)
                                    }}
                                  />
                                </FormControl>
                              </div>
                            </FormItem>
                          </div>
                        )
                      }}
                    />
                  </div>
                  <Button type="submit" loading={loading} disabled={loading}>
                    Withdraw
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default WithdrawForm
