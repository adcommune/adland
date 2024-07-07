'use client'

import AdGroupForm from '@/components/AdGroup/AdGroupForm'
import { Container } from '@/components/Container'
import { useBiconomyAccount } from '@/context/SmartAccountContext'
import useAppContracts from '@/hooks/useAppContracts'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { AdLand } from '@/lib/adland'
import { handleWriteErrors } from '@/lib/viem'
import { commonAdSpacesAbi } from '@adland/contracts'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Address, encodeFunctionData } from 'viem'

const CreateAdminGroupPage = () => {
  const { adCommonOwnership } = useAppContracts()
  const { bicoAccountAddress } = useBiconomyAccount()
  const { data } = useQuery({
    queryKey: ['tokenXs'],
    queryFn: () => new AdLand().listSuperTokens(),
  })

  const { write, loading } = useSmartAccountTxs({
    onSuccess: () => {
      toast.success('Ad Group created')
    },
  })

  if (!data) return <></>

  return (
    <Container className="mt-5">
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
                    functionName: 'createAdGroup',
                    args: [
                      bicoAccountAddress,
                      {
                        currency: currency as Address,
                        initialPrice,
                        taxRate,
                      },
                      size,
                      '',
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
    </Container>
  )
}

export default CreateAdminGroupPage
