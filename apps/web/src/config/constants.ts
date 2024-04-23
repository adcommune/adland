import { Chain, optimismSepolia, sepolia } from 'wagmi/chains'
import { alchemyKey } from './variables'
import { Address } from 'viem'
import { constants } from '@adland/common'
import { lowerCaseObjectKeys } from '@/lib/utils'

export const defaultChain: Chain = optimismSepolia

export const NATIVE_CURRENCY = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

export const ipfsGateway = `https://${constants.pinataPublicGateway}/ipfs`

export const alchemyUrlByChain: Record<number, string> = {
  [sepolia.id]: `https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`,
  [optimismSepolia.id]: `https://opt-sepolia.g.alchemy.com/v2/${alchemyKey}`,
}

export const superfluidAddresses: Record<
  11155111 | 11155420,
  { ethx: Address; daix: Address; cfaV1: Address }
> = {
  [11155111]: {
    ethx: '0x30a6933Ca9230361972E413a15dC8114c952414e',
    daix: '0x9Ce2062b085A2268E8d769fFC040f6692315fd2c',
    cfaV1: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  },
  [11155420]: {
    ethx: '0x0043d7c85C8b96a49A72A92C0B48CdC4720437d7',
    daix: '0xD6FAF98BeFA647403cc56bDB598690660D5257d2',
    cfaV1: '0xcfA132E353cB4E398080B9700609bb008eceB125',
  },
}

export enum FrameAspectRatio {
  RECTANGLE = '1.91:1',
  SQUARE = '1:1',
}

export const baseURL = (() => {
  let protocol = 'http'
  let url = 'localhost:3000'
  if (process.env.NEXT_PUBLIC_URL) {
    protocol = 'https'
    url = process.env.NEXT_PUBLIC_URL
  } else if (process.env.VERCEL_URL) {
    protocol = 'https'
    url = process.env.VERCEL_URL
  } else if (process.env.VERCEL_BRANCH_URL) {
    protocol = 'https'
    url = process.env.VERCEL_BRANCH_URL
  } else if (typeof window !== 'undefined' && window.location.host) {
    protocol = window.location.protocol
    url = window.location.origin
    return url
  } else {
    protocol = 'http'
    url = 'localhost:3000'
  }

  return `${protocol}://${url}`
})()

export const adPlaceholderURL = `https://i.imgur.com/gE8pP8q.png`

export const MAX_BPS = 10000

export const authorizedFileTypes = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'image/gif',
]

export const superfluidAccountLink = (address: string) =>
  `https://app.superfluid.finance/?view=${address}`

export const superfluidUpgradeLink =
  'https://app.superfluid.finance/wrap?upgrade'

export const noAdFrameImageCID =
  'QmNmAqKyGEXd1ZM4a1FRND8D4Kftgz5XRNCkC44XwFYa4g'

export const tokenSymbolsByChain: Record<number, Record<string, string>> = {
  [optimismSepolia.id]: {
    '0x4247bA6C3658Fa5C0F523BAcea8D0b97aF1a175e': 'fDAI',
    [NATIVE_CURRENCY]: 'ETH',
  },
}

export const getTokenSymbol = (tokenAddress: string) => {
  if (!tokenSymbolsByChain[defaultChain.id]) return undefined
  return (
    tokenSymbolsByChain[defaultChain.id][tokenAddress] ??
    lowerCaseObjectKeys(tokenSymbolsByChain[defaultChain.id])[tokenAddress]
  )
}
