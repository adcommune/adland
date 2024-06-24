import { PaymasterMode, Transaction } from '@biconomy/account'
import { useCallback, useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { handleWriteErrors } from '@/lib/viem'
import useWaitForTransactionSuccess from './useWaitForTransactionSuccess'
import { toast } from 'sonner'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { Log } from 'viem'

type SmartAccountBatchWriteParams = {
  transactions: Transaction | Transaction[]
}

type UseSmartAccountTxsArgs = {
  onSuccess?: (logs: Log[]) => void
}

export const useSmartAccountTxs = ({ onSuccess }: UseSmartAccountTxsArgs) => {
  const { bicoAccount } = useContext(SmartAccountContext)

  const { data, mutate, mutateAsync, isPending } = useMutation<
    `0x${string}` | undefined,
    Error,
    SmartAccountBatchWriteParams,
    `0x${string}`
  >({
    mutationFn: async ({ transactions }: SmartAccountBatchWriteParams) => {
      if (!bicoAccount) return Promise.resolve(undefined)

      // Call bicoAccount.encodeExecute & simulate in tenderly manually if execution
      // reverts. Could automate logs with tenderly as well.
      const { waitForTxHash } = await bicoAccount.sendTransaction(
        transactions,
        {
          paymasterServiceData: {
            mode: PaymasterMode.SPONSORED,
            calculateGasLimits: true,
          },
        },
      )

      const userOpStatus = await waitForTxHash()

      const { transactionHash } = userOpStatus

      return transactionHash as `0x${string}` | undefined
    },
    onError: (error) =>
      handleWriteErrors(error, (error) => {
        toast.error(error.message)
      }),
  })

  const { isLoading } = useWaitForTransactionSuccess(
    data,
    useCallback(async (logs) => {
      if (logs.length) {
        onSuccess && onSuccess(logs)
      }
    }, []),
  )

  return {
    write: mutate,
    writeAsync: mutateAsync,
    loading: isLoading || isPending,
  }
}
