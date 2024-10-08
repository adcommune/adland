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
import { formatEther, parseEther } from 'viem'
import { useContext } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { truncateAddress } from '@/lib/utils'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import TokenImage from '../TokenImage'
import { TokenXsQuery } from '@adland/webkit/src/ponder'

const createAdGroupSchema = z.object({
  currency: z.string(),
  initialPrice: z.bigint(),
  taxRate: z.bigint().lte(BigInt(10000)),
  size: z.bigint(),
})

type AdGroupFormValues = z.infer<typeof createAdGroupSchema>

type AdGroupFormProps = {
  superTokens: TokenXsQuery['tokenXs']
  submit: (values: AdGroupFormValues) => void
  loading: boolean
}

const AdGroupForm = ({ superTokens, submit, loading }: AdGroupFormProps) => {
  const { bicoAccountAddress } = useContext(SmartAccountContext)

  const form = useForm<AdGroupFormValues>({
    resolver: zodResolver(createAdGroupSchema),
    defaultValues: {
      currency: superTokens.items[0].underlyingToken,
      initialPrice: BigInt(1e16),
      taxRate: BigInt(10),
      size: BigInt(1),
    },
  })

  const onSubmit = async (v: AdGroupFormValues) => {
    if (!bicoAccountAddress) return

    submit(v)
  }

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
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the currencry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {superTokens.items.map((token) => (
                          <SelectItem
                            key={token.id}
                            value={token.underlyingToken}
                          >
                            <div className="flex flex-row items-center gap-2">
                              <p className="w-16">
                                {token.underlyingSymbol ??
                                  truncateAddress(token.underlyingToken)}
                              </p>
                              <TokenImage
                                symbol={token.underlyingSymbol}
                                address={token.underlyingToken}
                                className="h-6 w-6"
                              />
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
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
            <Button
              type="submit"
              disabled={loading || !bicoAccountAddress}
              loading={loading}
            >
              Create Ad Group
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default AdGroupForm
