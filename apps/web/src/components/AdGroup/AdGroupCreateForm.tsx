'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import {
  Address,
  GetEventArgs,
  decodeEventLog,
  formatEther,
  parseEther,
} from 'viem'
import { useWriteContract } from 'wagmi'
import useAppContracts from '@/hooks/useAppContracts'
import { NATIVE_CURRENCY } from '@/config/constants'
import { commonAdSpacesAbi, directListingsLogicAbi } from '@adland/contracts'
import useWaitForTransactionSuccess from '@/hooks/useWaitForTransactionSuccess'
import { useCallback } from 'react'
import { handleWriteErrors } from '@/lib/viem'
import { toast } from 'sonner'
import { Checkbox } from '../ui/checkbox'

const createAdGroupSchema = z.object({
  recipientIsBeneficiary: z.boolean().default(true),
  beneficiary: z.string(),
  currency: z.string(),
  initialPrice: z.bigint(),
  taxRate: z.bigint().lte(BigInt(10000)),
  size: z.bigint(),
})

type CreateAdGroupFormValues = z.infer<typeof createAdGroupSchema>

type CreateAdGroupFormProps = {
  beneficiary: Address
}

const CreateAdGroupForm = ({
  beneficiary: rawBeneficiary,
}: CreateAdGroupFormProps) => {
  const form = useForm<CreateAdGroupFormValues>({
    resolver: zodResolver(createAdGroupSchema),
    defaultValues: {
      beneficiary: rawBeneficiary,
      recipientIsBeneficiary: true,
      currency: NATIVE_CURRENCY,
      initialPrice: BigInt(1e16),
      taxRate: BigInt(10),
      size: BigInt(1),
    },
  })
  const { adCommonOwnership, marketplace } = useAppContracts()

  const {
    data: hash,
    writeContract,
    isPending: confirmPending,
  } = useWriteContract()

  const onSubmit = ({
    beneficiary,
    currency,
    initialPrice,
    taxRate,
    size,
    recipientIsBeneficiary,
  }: CreateAdGroupFormValues) => {
    writeContract(
      {
        abi: commonAdSpacesAbi,
        address: adCommonOwnership,
        functionName: 'createAdGroup',
        args: [
          recipientIsBeneficiary ? rawBeneficiary : (beneficiary as Address),
          {
            currency: currency as Address,
            initialPrice,
            taxRate,
          },
          size,
        ],
      },
      {
        onError: (error) => handleWriteErrors(error),
      },
    )
  }

  const { isLoading } = useWaitForTransactionSuccess(
    hash,
    useCallback((logs) => {
      toast.success('Ad group created successfully')
      const decodedLogs = logs.map((log) => {
        if (log.address.toLowerCase() === adCommonOwnership.toLowerCase()) {
          return decodeEventLog({
            abi: commonAdSpacesAbi,
            topics: log.topics,
            data: log.data,
          })
        } else if (log.address.toLowerCase() === marketplace.toLowerCase()) {
          return decodeEventLog({
            abi: directListingsLogicAbi,
            topics: log.topics,
            data: log.data,
          })
        }
      })

      const newGroupLog = decodedLogs.filter(
        (log) => log?.eventName === 'AdGroupCreated',
      )[0]?.args as GetEventArgs<typeof commonAdSpacesAbi, 'AdGroupCreated'>

      // TODO: Wait for indexing to be able to redirect to the new ad group page
    }, []),
  )

  const isPending = confirmPending || isLoading

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="font-body">
        <Card>
          <CardHeader>
            <CardTitle>Open new Ad spaces</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="recipientIsBeneficiary"
              render={({ field: { value: checked, onChange } }) => (
                <>
                  <FormField
                    control={form.control}
                    name="beneficiary"
                    render={({
                      field: {
                        value: beneficiaryValue,
                        onChange: onChangeBeneficiary,
                      },
                    }) => (
                      <FormItem>
                        <FormLabel>Ad Group Recipient</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            disabled={checked}
                            defaultValue={beneficiaryValue}
                            onChange={(e) => {
                              const val = e.target.value

                              onChangeBeneficiary(val)
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormDescription>
                    <FormItem>
                      <FormControl>
                        <div className="flex flex-row items-center gap-4">
                          <Checkbox
                            checked={checked}
                            onCheckedChange={onChange}
                          />
                          <p className="text-sm">Creating for myself</p>
                        </div>
                      </FormControl>
                    </FormItem>
                  </FormDescription>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="initialPrice"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Initial Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step={0.01}
                      defaultValue={Number(formatEther(value))}
                      onChange={(e) => {
                        const val = e.target.valueAsNumber

                        if (!isNaN(val)) {
                          onChange(parseEther(val.toString()))
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    The initial price for the ad group (ETH)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="taxRate"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Tax Rate</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step={0.01}
                      min={0}
                      defaultValue={Number(value) / 100}
                      onChange={(e) => {
                        const val = Math.fround(e.target.valueAsNumber * 100)

                        if (!isNaN(val)) {
                          onChange(BigInt(Math.round(val)))
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Percentage of price owed to the beneficiary, per week. (%)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      defaultValue={[Number(value)]}
                      onValueChange={(vals) => {
                        onChange(BigInt(vals[0]))
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    The amount of ad space in the group:{' '}
                    <span className="text-lg font-bold">{Number(value)}</span>
                    <span className="ml-2 text-xs">
                      (you can add more later)
                    </span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="justify-end">
            <Button type="submit" disabled={isPending} loading={isPending}>
              Create Ad Group
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default CreateAdGroupForm
