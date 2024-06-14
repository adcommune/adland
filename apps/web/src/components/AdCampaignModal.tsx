import { formatUnits, parseUnits } from 'viem'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Slider } from './ui/slider'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { getTokenSymbol } from '@/config/constants'
import { AdSpace } from '@/lib/types'
import Modal from './Modal'
import { useContext } from 'react'
import { ModalContext } from '@/context/ModalContext'
import { useReadErc20Decimals } from '@adland/contracts'

const fundAdPoolSchema = z.object({
  amount: z.bigint().gt(BigInt(0), 'Amount must be greater than 0'),
  weeks: z.bigint(),
})

type FunAdPoolFormValues = z.infer<typeof fundAdPoolSchema>

type AdCampaignModalProps = {
  adSpace: AdSpace
  superTokenBalance: BigInt
  onSubmit: (args: { flowRate: bigint; amount: bigint }) => void
  loading: boolean
}

const AdCampaignModal = ({
  adSpace,
  superTokenBalance,
  onSubmit: submit,
  loading,
}: AdCampaignModalProps) => {
  const { fundAdModal } = useContext(ModalContext)

  const form = useForm<FunAdPoolFormValues>({
    resolver: zodResolver(fundAdPoolSchema),
    defaultValues: {
      amount: BigInt(0),
      weeks: BigInt(1),
    },
  })

  const onSubmit = ({ amount, weeks }: FunAdPoolFormValues) => {
    submit({
      flowRate: amount / (weeks * BigInt(7 * 24 * 60 * 60)),
      amount: amount,
    })
  }

  const { data: decimals } = useReadErc20Decimals({
    address: adSpace.tokenX?.underlyingToken,
  })

  return (
    <Modal
      title="Fund Ad campaign"
      description="Define an amount to be distributed to ad distributors over a period of time."
      isOpen={fundAdModal.show}
      closeModal={() => {
        fundAdModal.set(false)
      }}
      renderConfirm={() => {
        return (
          <Button
            disabled={!form.formState.isValid || loading}
            loading={loading}
            className=""
            type="button"
            onClick={form.handleSubmit(onSubmit)}
          >
            Fund
          </Button>
        )
      }}
    >
      <Form {...form}>
        <form className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl className="">
                  <div className="flex flex-row items-center gap-2">
                    <Input
                      type="number"
                      step={0.01}
                      min={0}
                      value={Number(formatUnits(value, decimals ?? 18))}
                      onChange={(e) => {
                        const val = e.target.valueAsNumber

                        if (!isNaN(val)) {
                          onChange(parseUnits(val.toString(), decimals ?? 18))
                        }
                      }}
                    />
                    <Button
                      onClick={() => {
                        onChange(superTokenBalance)
                      }}
                    >
                      MAX
                    </Button>
                  </div>
                </FormControl>

                <FormDescription>
                  Amount to be distributed during ad campaign (
                  {getTokenSymbol(adSpace.tokenX?.underlyingToken)})
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weeks"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Length of campaign</FormLabel>
                <FormControl>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    defaultValue={[Number(value)]}
                    onValueChange={(vals) => {
                      onChange(BigInt(vals[0]))
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Number of weeks to spread this fund over:{' '}
                  <span className="text-lg font-bold">{Number(value)}</span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Modal>
  )
}

export default AdCampaignModal
