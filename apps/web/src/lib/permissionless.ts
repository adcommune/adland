import { pimlicoURL } from '@/config/constants'
import { constants } from '@adland/common'
import {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} from 'permissionless/clients/pimlico'
import { http } from 'viem'

export const bundler = createPimlicoBundlerClient({
  transport: http(pimlicoURL),
  entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
  chain: constants.chain,
})

export const paymaster = createPimlicoPaymasterClient({
  transport: http(pimlicoURL),
  entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
})
