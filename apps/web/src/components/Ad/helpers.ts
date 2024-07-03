import { commonAdValidatorAbi } from '@adland/contracts'
import { AdSpaceQuery } from '@adland/webkit/src/ponder'
import { Log, parseEventLogs, ParseEventLogsReturnType } from 'viem'
import { queryClient } from '../AppProviders'
import { merge } from 'lodash'
import { DeepPartial } from '@/lib/types'

export const opupdate_attestAd = async (
  logs: Log[],
  adSpace: AdSpaceQuery['adSpace'],
) => {
  const attestation = adSpace?.currentMetadata?.attestation

  const attestedAdLog = parseEventLogs({
    abi: commonAdValidatorAbi,
    logs,
  }).find((log) => log.eventName === 'AttestAd') as ParseEventLogsReturnType<
    typeof commonAdValidatorAbi,
    'AttestAd',
    true
  >[0]

  if (!attestedAdLog) return

  const toMerge: DeepPartial<AdSpaceQuery['adSpace']> = {
    currentMetadata: {
      attestation: {
        id: attestedAdLog.args.uid,
        revoked: false,
        timestamp: 0,
        transactionHash: attestedAdLog.transactionHash,
      },
      attestationId: attestation?.id,
    },
  }

  queryClient.setQueryData(
    ['adSpace-', attestedAdLog.args.adSpaceId.toString()],
    (old: AdSpaceQuery['adSpace']): AdSpaceQuery['adSpace'] => {
      return merge({}, old, toMerge)
    },
  )
}

export const opupdate_revokeAd = async (adSpace: AdSpaceQuery['adSpace']) => {
  const toMerge: DeepPartial<AdSpaceQuery['adSpace']> = {
    currentMetadata: {
      attestation: {
        id: adSpace?.currentMetadata?.attestation?.id,
        revoked: true,
        timestamp: 0,
        transactionHash: '',
      },
      attestationId: adSpace?.currentMetadata?.attestationId,
    },
  }

  queryClient.setQueryData(
    ['adSpace-', adSpace?.id.toString()],
    (old: AdSpaceQuery['adSpace']): AdSpaceQuery['adSpace'] => {
      return merge({}, old, toMerge)
    },
  )
}
