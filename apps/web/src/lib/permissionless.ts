import { pimlicoURL } from '@/config/constants'
import { createBundlerClient } from 'permissionless'
import { http } from 'viem'

export const bundler = createBundlerClient({
  transport: http(pimlicoURL),
})
