import { toast } from 'sonner'
import { WriteContractErrorType } from 'wagmi/actions'
import {
  UserRejectedRequestError,
  BaseError,
  createPublicClient,
  http,
} from 'viem'
import { alchemyUrlByChain } from '@/config/constants'
import { constants } from '@adland/common'

export const handleWriteErrors = (
  error: WriteContractErrorType | Error,
  callback?: (error: BaseError | Error) => void,
) => {
  console.log({ error })
  if (error instanceof BaseError) {
    const revertError = error.walk(
      (err) => err instanceof UserRejectedRequestError,
    )

    if (revertError instanceof UserRejectedRequestError) {
      toast.error('User rejected the request')
    }
  }
  if (callback) {
    callback(error)
  }
}

export const publicClient = createPublicClient({
  transport: http(alchemyUrlByChain[constants.chain.id]),
  chain: constants.chain,
})
