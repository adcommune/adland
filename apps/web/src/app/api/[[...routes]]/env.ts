import { constants } from '@adland/common'
import { get } from '@vercel/edge-config'

const env = constants.chain.testnet ? 'testnet' : 'mainnet'

export const distributionEnabled = async () =>
  (await get(`${env}-distribution`)) === 'true'

export const shouldRecastDistributor = async () =>
  (await get(`${env}-distribution-recast`)) === 'true'

export const poolClaimEnabled = async () =>
  (await get(`${env}-pool-claim`)) === 'true' ||
  process.env.NODE_ENV === 'development'
