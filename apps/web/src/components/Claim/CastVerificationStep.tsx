import { usePrivy } from '@privy-io/react-auth'
import { StepsUtils } from '../HorizontalSteps'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import useCurrentCast from './hooks/useCurrentCast'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import useAd from '@/hooks/useAd'
import { Superfluid } from '@/lib/superfluid-subgraph'
import { format } from 'date-fns'
import {
  gdAv1ForwarderAbi,
  useReadGdAv1ForwarderIsMemberConnected,
} from '@adland/contracts'
import { appContracts } from '@/config/constants'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { Address, encodeFunctionData } from 'viem'
import { toast } from 'sonner'

type ClaimParams = {
  memberAddress: string
  fid: string
  castHash: string
}

const CastVerificationStep = ({
  spaceId,
  next,
  prev,
}: { spaceId: string } & StepsUtils) => {
  const { user } = usePrivy()
  const { bicoAccountAddress, bicoAccount } = useContext(SmartAccountContext)
  const { currentCast } = useCurrentCast(spaceId)
  const { adCampaign } = useAd(spaceId)

  const { data: isConnected, refetch: refetchConnected } =
    useReadGdAv1ForwarderIsMemberConnected({
      address: appContracts.gdaV1Forwarder,
      args: adCampaign?.sfPoolAddress &&
        bicoAccountAddress && [adCampaign?.sfPoolAddress, bicoAccountAddress],
      query: {
        enabled: Boolean(adCampaign?.sfPoolAddress && bicoAccountAddress),
      },
    })

  const { writeAsync } = useSmartAccountTxs({
    mutationKey: bicoAccountAddress ? 'connectPool-' + bicoAccountAddress : '',
    onSuccess: () => {
      refetchConnected()
    },
  })

  const { data: member, refetch } = useQuery({
    queryKey: ['member-', bicoAccountAddress],
    queryFn: async () =>
      adCampaign?.sfPoolAddress &&
      bicoAccountAddress &&
      new Superfluid().fetchPoolMember(
        adCampaign?.sfPoolAddress,
        bicoAccountAddress,
      ),
  })

  const {
    data: claimRes,
    mutate: claim,
    isPending,
  } = useMutation({
    mutationKey: ['claim-' + bicoAccountAddress],
    mutationFn: async ({ memberAddress, fid, castHash }: ClaimParams) => {
      if (!adCampaign?.sfPoolAddress || !memberAddress) return
      const toastId = 'claiming-toast'

      if (!isConnected) {
        toast.loading('Connecting to pool...', {
          id: toastId,
        })
        await writeAsync({
          transactions: [
            {
              to: appContracts.gdaV1Forwarder,
              data: encodeFunctionData({
                abi: gdAv1ForwarderAbi,
                functionName: 'connectPool',
                args: [adCampaign?.sfPoolAddress, memberAddress as Address],
              }),
              value: BigInt(0),
            },
          ],
        })
      }

      console.log({ bicoAccount })

      if (!bicoAccount) throw new Error('No bico account')

      const message = `${castHash}-${fid}`
      console.log({ message, spaceId, memberAddress })
      toast.loading('Signing message...', {
        id: toastId,
      })

      const signature = await bicoAccount.signMessage(message)

      toast.loading('Sending claim...', {
        id: toastId,
      })

      return fetch(`/api/ad/pool/${spaceId}/add/${memberAddress}`, {
        method: 'POST',
        body: JSON.stringify({
          message,
          signature,
        }),
      }).then((res) => {
        toast.success('Claimed!', {
          id: toastId,
        })
        return res.json()
      })
    },
  })

  console.log({ claimRes })

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-4">
        <div className="col-span-2 col-start-2">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Claim</CardTitle>
              <CardDescription>
                Verify the cast you made to claim your share of the sponsorship
                and start claiming a revenue stream from the campaign
              </CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="grid gap-3 font-body text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Units</dt>
                  <dd>{member?.units}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Total Claimed</dt>
                  <dd>{member?.totalAmountClaimed}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Updated at</dt>
                  <dd>
                    {format(
                      parseInt(member?.updatedAtTimestamp ?? '0') * 1000,
                      'yyyy-MM-dd HH:mm',
                    )}
                  </dd>
                </div>
              </dl>
              <Button
                onClick={() => {
                  if (!bicoAccountAddress) return
                  if (!user?.farcaster?.fid) return
                  claim(
                    {
                      memberAddress: bicoAccountAddress,
                      fid: user?.farcaster?.fid?.toString(),
                      castHash: currentCast?.hash ?? '',
                    },
                    {
                      onSuccess: () => {
                        refetch()
                      },
                    },
                  )
                }}
                className="mt-4 w-full"
                loading={isPending}
                disabled={isPending}
              >
                Claim
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Button disabled={!currentCast} onClick={prev}>
          Previous
        </Button>
        <Button disabled={!currentCast} onClick={next}>
          Finish
        </Button>
      </div>
    </div>
  )
}

export default CastVerificationStep
