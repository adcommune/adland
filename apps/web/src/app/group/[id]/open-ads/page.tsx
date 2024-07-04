'use client'

import AdGroupForm from '@/components/AdGroup/AdGroupForm'
import { useBiconomyAccount } from '@/context/SmartAccountContext'
import useAppContracts from '@/hooks/useAppContracts'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { AdLand } from '@/lib/adland'
import { handleWriteErrors } from '@/lib/viem'
import { commonAdSpacesAbi } from '@adland/contracts'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Address, encodeFunctionData } from 'viem'

type OpenAdsPageProps = { params: { id: string } }

const OpenAdsPage = ({ params: { id: groupId } }: OpenAdsPageProps) => {
  const { adCommonOwnership } = useAppContracts()
  const { bicoAccountAddress } = useBiconomyAccount()
  const { data } = useQuery({
    queryKey: ['tokenXs'],
    queryFn: () => new AdLand().listSuperTokens(),
  })

  const { write, loading } = useSmartAccountTxs({
    onSuccess: () => {
      toast.success('Ad Spaces opened')
    },
  })

  if (!data) return <></>

  return (
    <AdGroupForm
      superTokens={data}
      loading={loading}
      submit={({ currency, initialPrice, taxRate, size }) => {
        if (!bicoAccountAddress) {
          return
        }
        write(
          {
            transactions: [
              {
                to: adCommonOwnership,
                data: encodeFunctionData({
                  abi: commonAdSpacesAbi,
                  functionName: 'openAdSpaces',
                  args: [
                    BigInt(groupId),
                    {
                      currency: currency as Address,
                      initialPrice,
                      taxRate,
                    },
                    size,
                  ],
                }),
                value: BigInt(0),
              },
            ],
          },
          {
            onError: (error) => handleWriteErrors(error),
          },
        )
      }}
    />
  )
}

export default OpenAdsPage
