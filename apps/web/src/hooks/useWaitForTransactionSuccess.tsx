import { useEffect } from 'react'
import { Log } from 'viem'
import { useWaitForTransactionReceipt } from 'wagmi'

const useWaitForTransactionSuccess = (
  hash: `0x${string}` | undefined,
  callback: (logs: Log<bigint, number, false>[]) => void,
) => {
  const { data, isLoading } = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
      select: (receipt) => ({
        isSuccess: receipt.status === 'success',
        logs: receipt.logs,
      }),
    },
  })

  useEffect(() => {
    if (data?.isSuccess && hash) {
      callback(data?.logs)
    }
  }, [data, callback])

  return {
    isLoading,
  }
}

export default useWaitForTransactionSuccess
