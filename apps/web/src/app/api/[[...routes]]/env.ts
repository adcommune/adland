import { constants } from '@adland/common'
import { get } from '@vercel/edge-config'

const env = constants.chain.testnet ? 'testnet' : 'mainnet'

export const distributionEnabled = async () =>
  (await get(`${env}-distribution`)) === 'true' ||
  process.env.NODE_ENV === 'development'
