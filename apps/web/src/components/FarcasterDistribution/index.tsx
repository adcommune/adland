import { Input } from '../ui/input'
import {
  MEMBER_UNITS_ADMIN_ROLE,
  baseURL,
  getTokenSymbol,
} from '@/config/constants'
import Copiable from '../Copiable'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { AdSpace } from '@/lib/types'
import { useContext } from 'react'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import {
  commonAdPoolAbi,
  commonAdSpacesAbi,
  gdAv1ForwarderAbi,
  isethAbi,
  superTokenAbi,
} from '@adland/contracts'
import { useBalance, useReadContracts } from 'wagmi'
import { getExplorerLink, truncateAddress } from '@/lib/utils'
import {
  Address,
  encodeFunctionData,
  erc20Abi,
  formatEther,
  zeroAddress,
} from 'viem'
import AdCampaignModal from '../AdCampaignModal'
import { Button } from '../ui/button'
import { framePoolAdminAddressPublicKey } from '@/config/frame'
import useAppContracts from '@/hooks/useAppContracts'
import { toast } from 'sonner'
import { Transaction } from '@biconomy/account'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { useQuery } from '@tanstack/react-query'
import { ModalContext } from '@/context/ModalContext'
import FundFlow from './FundFlow'
import { AdLand } from '@/lib/adland'

type FarcasterDistributionProps = {
  groupId: string
  adSpace: AdSpace
}

type LaunchCampaignProps = {
  flowRate: bigint
  amount: bigint
}

const FarcasterDistribution = ({ adSpace }: FarcasterDistributionProps) => {
  const { adSpace_subgraph, tokenX } = adSpace
  const { id: spaceId } = adSpace_subgraph
  const { adCommonOwnership, gdaV1Forwarder } = useAppContracts()
  const { bicoAccountAddress } = useContext(SmartAccountContext)
  const { fundAdModal } = useContext(ModalContext)
  const superToken = tokenX?.superToken
  const isNativeCurrency = tokenX?.isNativeToken

  const { data: campaign, refetch } = useQuery({
    queryKey: ['adCampaign', spaceId],
    queryFn: async () => new AdLand().getAdCampaign(spaceId, superToken),
  })

  const { data: reads } = useReadContracts({
    contracts: [
      {
        abi: commonAdPoolAbi,
        functionName: 'hasRole',
        address: campaign?.commonAdPoolAddress,
        args: [MEMBER_UNITS_ADMIN_ROLE, framePoolAdminAddressPublicKey],
      },
      {
        address: tokenX?.underlyingToken,
        functionName: 'balanceOf',
        args: bicoAccountAddress && [bicoAccountAddress],
        abi: erc20Abi,
      },
    ],
    query: {
      enabled: Boolean(campaign?.commonAdPoolAddress),
      select: (data) => {
        return {
          frameHasMemberUnitsAdminRole: data[0].result,
          erc20Balance: data[1].result,
        }
      },
    },
  })

  const { data: nativeBalance } = useBalance({
    address: bicoAccountAddress,
    query: {
      enabled: isNativeCurrency,
    },
  })

  const balanceOfAdToken =
    (isNativeCurrency ? nativeBalance?.value : reads?.erc20Balance) ?? BigInt(0)

  const { write: writeLaunchCampaign, loading: launchCampaignLoading } =
    useSmartAccountTxs({
      mutationKey: 'fundCampaign',
      onSuccess: () => {
        refetch()
      },
    })

  const { write, loading: createPoolLoading } = useSmartAccountTxs({
    mutationKey: 'createPool',
  })

  const launchCampaign = async ({ flowRate, amount }: LaunchCampaignProps) => {
    if (!campaign?.commonAdPoolAddress) {
      toast.error('Must create ad pool first')
      return
    }
    if (!bicoAccountAddress) {
      toast.error('Must have a campaign account')
      return
    }
    if (!campaign?.sfPoolAddress) {
      toast.error('Pool not found')
      return
    }
    if (!superToken) {
      return console.log('SuperToken must be defined')
    }

    let transactions: Transaction[] = []

    const superTokenAddress = superToken as Address

    transactions.push({
      to: superTokenAddress,
      data: encodeFunctionData({
        abi: isNativeCurrency ? isethAbi : superTokenAbi,
        args: isNativeCurrency ? [] : [superTokenAddress, amount, '0x0'],
        functionName: isNativeCurrency ? 'upgradeByETH' : 'upgradeTo',
      }),
      value: isNativeCurrency ? amount : BigInt(0),
    })

    if (!reads?.frameHasMemberUnitsAdminRole) {
      console.log('Granting role')
      transactions.push({
        to: campaign?.commonAdPoolAddress,
        data: encodeFunctionData({
          abi: commonAdPoolAbi,
          args: [MEMBER_UNITS_ADMIN_ROLE, framePoolAdminAddressPublicKey],
          functionName: 'grantRole',
        }),
        value: BigInt(0),
      })
    }

    transactions.push({
      to: gdaV1Forwarder,
      data: encodeFunctionData({
        abi: gdAv1ForwarderAbi,
        args: [
          superTokenAddress,
          bicoAccountAddress,
          campaign?.sfPoolAddress,
          flowRate,
          zeroAddress,
        ],
        functionName: 'distributeFlow',
      }),
      value: BigInt(0),
    })

    if (transactions.length === 0) {
      return
    }

    console.log({ gdaV1Forwarder, transactions })

    writeLaunchCampaign({
      transactions,
    })
  }

  const flowRate = BigInt(campaign?.sfPool?.flowRate ?? '0')

  return (
    <div className="flex w-full flex-col gap-2">
      <Card>
        <CardHeader className="">
          <CardTitle className="font-body">Distribution on Farcaster</CardTitle>
          <CardDescription className="font-body">
            This is your Ad Frame link. Copy and cast to share this ad.
          </CardDescription>
          <CardDescription className="font-body">
            <div className="flex w-full flex-row items-center justify-center gap-2">
              <Input
                className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
                disabled
                placeholder={`${baseURL}/ad/${spaceId}`}
              />
              <Copiable visible text={`${baseURL}/ad/${spaceId}`} />
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Ad Distribution Pool
              </CardTitle>
              {getTokenSymbol(tokenX?.underlyingToken)}
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">
                  {campaign?.sfPool?.totalMembers} Distributor
                </div>
                <p className="text-xs text-muted-foreground">
                  +{formatEther(flowRate)}{' '}
                  {getTokenSymbol(tokenX?.underlyingToken)}
                  /week
                </p>
                <FundFlow
                  enabled={flowRate !== BigInt(0)}
                  poolExplorerLink={getExplorerLink(
                    campaign?.sfPoolAddress,
                    'address',
                  )}
                />
              </div>
              <div className="grid w-full grid-cols-2 gap-2">
                <Button
                  className="col-span-1"
                  loading={createPoolLoading}
                  disabled={
                    createPoolLoading || Boolean(campaign?.commonAdPoolAddress)
                  }
                  onClick={() => {
                    write({
                      transactions: [
                        {
                          to: adCommonOwnership,
                          data: encodeFunctionData({
                            abi: commonAdSpacesAbi,
                            args: [BigInt(spaceId), superToken],
                            functionName: 'createAdPool',
                          }),
                          value: BigInt(0),
                        },
                      ],
                    })
                  }}
                >
                  Open Pool
                </Button>
                <Button
                  disabled={!Boolean(campaign?.sfPool)}
                  className="col-span-1"
                  onClick={() => {
                    fundAdModal.set(true)
                  }}
                >
                  Fund
                </Button>
              </div>
            </CardContent>
            {/* <CardFooter>
              <div className="flex w-full flex-row items-center justify-center gap-2">
                <Input
                  className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
                  disabled
                  placeholder={poolAddress}
                />
                <Copiable visible text={poolAddress ?? ''} />
              </div>
            </CardFooter> */}
          </Card>

          <div className="flex flex-row gap-2"></div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:table-cell">Units</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaign?.sfPool?.poolMembers.map(
                ({ id, isConnected, units }) => (
                  <TableRow key={id}>
                    <TableCell>{truncateAddress(id, 10)}</TableCell>
                    <TableCell>
                      {isConnected ? 'Connected' : 'Not Connected'}
                    </TableCell>
                    <TableCell>{units}</TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <AdCampaignModal
        adSpace={adSpace}
        superTokenBalance={balanceOfAdToken}
        onSubmit={({ flowRate, amount }) => {
          launchCampaign({
            flowRate,
            amount,
          })
        }}
        loading={launchCampaignLoading}
      />
    </div>
  )
}

export default FarcasterDistribution
