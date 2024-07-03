import { appContracts, emptyBytes } from '@/config/constants'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { handleWriteErrors } from '@/lib/viem'
import { ieasAbi } from '@adland/contracts'
import { AdSpaceQuery } from '@adland/webkit/src/ponder'
import Link from 'next/link'
import { Address, encodeFunctionData } from 'viem'
import { Button } from '../ui/button'
import { BadgeCheck, BadgeX } from 'lucide-react'
import {
  encodeAdValidationData,
  getAdValidationSchema,
  getEASExplorerLink,
} from '@/lib/eas'
import { Alert } from '../Alert'
import { opupdate_attestAd, opupdate_revokeAd } from './helpers'
import { useAdLogic } from './hooks'

type AdAttestationSectionProps = {
  adSpace: AdSpaceQuery['adSpace']
}

const AdAttestationSection = ({ adSpace }: AdAttestationSectionProps) => {
  const { isBeneficiary } = useAdLogic(adSpace)

  const { write: attestWrite, loading: attestLoading } = useSmartAccountTxs({
    onSuccess: (logs) => opupdate_attestAd(logs, adSpace),
  })
  const { write: revokeWrite, loading: revokLoading } = useSmartAccountTxs({
    onSuccess: () => opupdate_revokeAd(adSpace),
  })

  const attest = async () => {
    const cid = adSpace?.currentMetadata?.id.split('/')[0]
    const adGroupId = adSpace?.adGroupId
    const adSpaceId = adSpace?.id
    const owner = adSpace?.owner as Address

    if (!cid || !adGroupId || !adSpaceId || !owner) return

    attestWrite(
      {
        transactions: [
          {
            to: appContracts.eas,
            data: encodeFunctionData({
              abi: ieasAbi,
              functionName: 'attest',
              args: [
                {
                  schema: getAdValidationSchema(),
                  data: {
                    recipient: owner,
                    expirationTime: BigInt(0),
                    revocable: true,
                    refUID: emptyBytes,
                    data: encodeAdValidationData({
                      adGroupId: BigInt(adGroupId),
                      adSpaceId: BigInt(adSpaceId),
                      cid,
                      reason: 'Ad validation',
                    }),
                    value: BigInt(0),
                  },
                },
              ],
            }),
            value: BigInt(0),
          },
        ],
      },
      {
        onError: (errors) => handleWriteErrors(errors),
      },
    )
  }

  const revoke = async () => {
    if (!adSpace?.currentMetadata?.attestation?.id) return

    const uid = adSpace?.currentMetadata?.attestation?.id as Address

    revokeWrite({
      transactions: [
        {
          to: appContracts.eas,
          data: encodeFunctionData({
            abi: ieasAbi,
            functionName: 'revoke',
            args: [
              {
                schema: getAdValidationSchema(),
                data: {
                  uid,
                  value: BigInt(0),
                },
              },
            ],
          }),
          value: BigInt(0),
        },
      ],
    })
  }

  const attestation = adSpace?.currentMetadata?.attestation

  return (
    <>
      <div className="font-semibold">Moderation</div>
      <ul className="grid gap-3">
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Attestation</span>

          <div className="flex flex-row items-center gap-2">
            {attestation && (
              <Link href={getEASExplorerLink(attestation?.id)} target="_blank">
                <Button className="gap-2" size="sm" variant="outline">
                  {!attestation?.revoked ? (
                    <BadgeCheck className="h-5 w-5 stroke-green-500" />
                  ) : (
                    <BadgeX className="h-5 w-5 stroke-red-500" />
                  )}
                  {!attestation?.revoked ? 'Valid' : 'Revoked'}
                </Button>
              </Link>
            )}
            {isBeneficiary && (
              <>
                {attestation?.revoked || !attestation ? (
                  <Alert
                    title="Validate Ad"
                    description="Are you sure you want to validate this ad space data"
                    onConfirm={() => {
                      attest()
                    }}
                  >
                    <Button
                      loading={attestLoading}
                      disabled={attestLoading || !adSpace?.currentMetadata}
                      size="sm"
                      className="bg-green-600"
                    >
                      Validate
                    </Button>
                  </Alert>
                ) : (
                  <Alert
                    title="Revoke Ad"
                    description="Are you sure you want to revoke this ad space data"
                    onConfirm={() => {
                      revoke()
                    }}
                  >
                    <Button
                      disabled={revokLoading}
                      size="sm"
                      loading={revokLoading}
                      variant="destructive"
                    >
                      Revoke
                    </Button>
                  </Alert>
                )}
              </>
            )}
          </div>
        </li>
      </ul>
    </>
  )
}

export default AdAttestationSection
