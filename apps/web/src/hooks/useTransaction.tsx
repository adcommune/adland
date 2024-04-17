import { useWriteContract } from 'wagmi'
import useWaitForTransactionSuccess from './useWaitForTransactionSuccess'
import { handleWriteErrors } from '@/lib/viem'

const useTransaction = (onSuccess: () => void) => {
  const { data, writeContract, isPending } = useWriteContract({
    mutation: {
      onError: (error) => handleWriteErrors(error),
    },
  })

  const { isLoading } = useWaitForTransactionSuccess(data, onSuccess)

  return {
    writeContract,
    loading: isPending || isLoading,
  }
}

export default useTransaction
