import { AppChainIds } from '@/config/constants'
import { constants } from '@adland/common'
import { SchemaEncoder } from '@ethereum-attestation-service/eas-sdk'
import { Address } from 'viem'
import { base, optimismSepolia } from 'viem/chains'

export const getEASExplorerLink = (uid?: string) => {
  if (!uid) return '#'
  const easExplorerBaseUrlByChain: Record<number, string> = {
    [optimismSepolia.id]:
      'https://optimism-sepolia.easscan.org/attestation/view',
    [base.id]: 'https://base.easscan.org/attestation/view',
  }

  return `${easExplorerBaseUrlByChain[constants.chain.id]}/${uid}`
}

export const getAdValidationSchema = () => {
  const adValidationSchemaByChain: Record<AppChainIds, Address> = {
    [optimismSepolia.id]:
      '0xb3083a055999fa059123c4d1ea5d8c3ad000eff54cef71dbdd51fe5eed775bee',
    [base.id]: '0x00',
  }

  return adValidationSchemaByChain[constants.chain.id as AppChainIds]
}

type AdValidationDataArgs = {
  adGroupId: bigint
  adSpaceId: bigint
  cid: string
  reason: string
}

export const encodeAdValidationData = ({
  adGroupId,
  adSpaceId,
  cid,
  reason,
}: AdValidationDataArgs) => {
  return new SchemaEncoder(
    'uint256 adGroupId,uint256 adSpaceId,string cid,string reason',
  ).encodeData([
    { name: 'adGroupId', value: adGroupId, type: 'uint256' },
    { name: 'adSpaceId', value: adSpaceId, type: 'uint256' },
    { name: 'cid', value: cid, type: 'string' },
    { name: 'reason', value: reason, type: 'string' },
  ]) as Address
}
