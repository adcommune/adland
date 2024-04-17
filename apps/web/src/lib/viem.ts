import { toast } from 'sonner'
import { WriteContractErrorType } from 'wagmi/actions'
import { UserRejectedRequestError, BaseError } from 'viem'

export const handleWriteErrors = (
  error: WriteContractErrorType,
  callback?: (error: BaseError) => void,
) => {
  if (error instanceof BaseError) {
    const revertError = error.walk(
      (err) => err instanceof UserRejectedRequestError,
    )

    if (revertError instanceof UserRejectedRequestError) {
      toast.error('User rejected the request')
    }

    if (callback) {
      callback(error)
    }
  }
}
