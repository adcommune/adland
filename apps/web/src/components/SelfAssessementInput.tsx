import { Button } from './ui/button'
import { Input } from './ui/input'
import { Address, encodeFunctionData, formatEther, parseEther } from 'viem'
import { useContext, useState } from 'react'
import { directListingsLogicAbi } from '@adland/contracts'
import { ModalContext } from '@/context/ModalContext'
import { queryClient } from './AppProviders'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { appContracts } from '@/config/constants'
import { AdSpaceQuery, Listing } from '@adland/webkit/src/ponder'
import TokenImage from './TokenImage'

type AdSpaceCardProps = { listing: Listing }

const SelfAssessementInput = ({ listing }: AdSpaceCardProps) => {
  const { selfAssessmentModal } = useContext(ModalContext)
  const {
    assetContract,
    tokenId,
    quantity,
    currency,
    taxRate,
    taxBeneficiary,
    startTimestamp,
    endTimestamp,
    pricePerToken,
    reserved,
    listingId,
  } = listing

  const [newPricePerToken, setNewPricePerToken] = useState<number>(
    parseFloat(formatEther(pricePerToken)),
  )

  const { write, loading } = useSmartAccountTxs({})

  const selfAssess = async () => {
    write(
      {
        transactions: [
          {
            to: appContracts.marketplace,
            data: encodeFunctionData({
              abi: directListingsLogicAbi,
              functionName: 'updateListing',
              args: [
                listingId,
                {
                  tokenId,
                  assetContract: assetContract as Address,
                  quantity,
                  currency: currency as Address,
                  taxRate,
                  taxBeneficiary: taxBeneficiary as Address,
                  pricePerToken: parseEther(newPricePerToken.toString()),
                  startTimestamp,
                  endTimestamp,
                  reserved,
                },
              ],
            }),
            value: BigInt(0),
          },
        ],
      },
      {
        onSuccess: () => {
          selfAssessmentModal.set(false)
          queryClient.setQueryData(
            ['adSpace-', listingId],
            (old: AdSpaceQuery['adSpace']): AdSpaceQuery['adSpace'] => {
              return Object.assign({}, old, {
                listing: {
                  ...old?.listing,
                  pricePerToken: parseEther(newPricePerToken.toString()),
                },
              })
            },
          )
        },
      },
    )
  }

  return (
    <div className="flex flex-row items-center gap-2">
      <div className="relative flex flex-row items-center">
        <Input
          type="number"
          value={newPricePerToken}
          defaultValue={parseFloat(formatEther(pricePerToken))}
          onChange={(e) => setNewPricePerToken(Number(e.target.value))}
        />
        <div className="absolute right-2">
          <TokenImage
            address={listing.currency}
            symbol={listing.currencySymbol}
            className="h-6 w-6"
          />
        </div>
      </div>
      <Button
        size="sm"
        disabled={loading}
        onClick={() => {
          selfAssess()
        }}
        loading={loading}
      >
        Reassess
      </Button>
    </div>
  )
}

export default SelfAssessementInput
