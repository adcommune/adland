import { useEffect } from 'react'
import { useWaitForTransactionReceipt } from 'wagmi'

const useWaitForTransactionSuccess = (
  hash: `0x${string}` | undefined,
  callback: () => void,
) => {
  const { data: isSuccess, isLoading } = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
      select: (receipt) => receipt.status === 'success',
    },
  })

  useEffect(() => {
    if (isSuccess) {
      callback()
    }
  }, [isSuccess, callback])

  return {
    isLoading,
  }
}

export default useWaitForTransactionSuccess
