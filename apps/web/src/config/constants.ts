import { base, optimismSepolia, sepolia } from 'wagmi/chains'
import { alchemyKey, pimlicoKey } from './variables'
import { Address, keccak256, zeroAddress, stringToBytes } from 'viem'
import { constants } from '@adland/common'
import { lowerCaseObjectKeys } from '@/lib/utils'
import {
  commonAdSpacesAddress,
  directListingsLogicAddress,
  userBaseAddress,
} from '@adland/contracts'

export const NATIVE_CURRENCY = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

export const emptyBytes =
  '0x0000000000000000000000000000000000000000000000000000000000000000'

export const ipfsGateway = `https://${constants.pinataPublicGateway}/ipfs`

export const pimlicoURL = `https://api.pimlico.io/v2/${constants.chain.id}/rpc?apikey=${pimlicoKey}`

export const biconomyBundlerApiKey =
  process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_API_KEY ??
  'nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44'

export const biconomyBundlerURL = `https://bundler.biconomy.io/api/v2/${constants.chain.id}/${biconomyBundlerApiKey}`

export const biconomyPaymasterApiKey =
  process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_API_KEY ?? ''

export const biconomyPaymasterURL = `https://paymaster.biconomy.io/api/v1/${constants.chain.id}/${biconomyPaymasterApiKey}`

export const alchemyUrlByChain: Record<number, string> = {
  [sepolia.id]: `https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`,
  [optimismSepolia.id]: `https://opt-sepolia.g.alchemy.com/v2/${alchemyKey}`,
  [base.id]: `https://base-mainnet.g.alchemy.com/v2/${alchemyKey}`,
}

export const superfluidAddresses: Record<
  11155111 | 11155420 | 8453,
  { cfaV1: Address; gdaV1Forwarder: Address }
> = {
  [11155111]: {
    cfaV1: '0xcfA132E353cB4E398080B9700609bb008eceB125',
    gdaV1Forwarder: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  },
  [11155420]: {
    cfaV1: '0xcfA132E353cB4E398080B9700609bb008eceB125',
    gdaV1Forwarder: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  },
  [8453]: {
    cfaV1: '0xcfA132E353cB4E398080B9700609bb008eceB125',
    gdaV1Forwarder: '0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08',
  },
}

export enum FrameAspectRatio {
  RECTANGLE = '1.91:1',
  SQUARE = '1:1',
}

export const baseURL = (() => {
  let protocol = 'http'
  let url = 'localhost:3001'
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
    url = 'localhost:3001'
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
    '0x4247bA6C3658Fa5C0F523BAcea8D0b97aF1a175e': 'DAI',
    [NATIVE_CURRENCY]: 'ETH',
    [zeroAddress]: 'ETH',
  },
  [base.id]: {
    [zeroAddress]: 'ETH',
    [NATIVE_CURRENCY]: 'ETH',
    ['0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb']: 'DAI',
    ['0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed']: 'DEGEN',
    ['0xBf4Db8b7A679F89Ef38125d5F84dd1446AF2ea3B']: 'BLEU',
    ['0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913']: 'USDC',
    ['0x6888c2409D48222E2CB738eB5a805A522a96CE80']: 'TREE',
  },
}

export const getTokenSymbol = (tokenAddress?: string) => {
  if (!tokenAddress) return undefined
  if (!tokenSymbolsByChain[constants.chain.id]) return undefined
  return (
    tokenSymbolsByChain[constants.chain.id][tokenAddress] ??
    lowerCaseObjectKeys(tokenSymbolsByChain[constants.chain.id])[tokenAddress]
  )
}

export const MEMBER_UNITS_ADMIN_ROLE = keccak256(
  stringToBytes('MEMBER_ADMIN_ROLE'),
)

export type AppChainIds = keyof typeof commonAdSpacesAddress

const appChain = constants.chain

export const appContracts = {
  cfaV1: superfluidAddresses[appChain.id as AppChainIds].cfaV1,
  gdaV1Forwarder:
    superfluidAddresses[appChain.id as AppChainIds].gdaV1Forwarder,
  marketplace: directListingsLogicAddress[appChain.id as AppChainIds],
  adCommonOwnership: commonAdSpacesAddress[appChain.id as AppChainIds],
  eas: '0x4200000000000000000000000000000000000021',
  userBase: userBaseAddress[appChain.id as keyof typeof userBaseAddress],
}

export const adSpacePageLimit = 10
