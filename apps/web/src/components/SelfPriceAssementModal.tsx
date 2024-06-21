import { Button } from './ui/button'
import { Input } from './ui/input'
import { Address, encodeFunctionData, formatEther, parseEther } from 'viem'
import { useContext, useState } from 'react'
import { AdSpace } from '@/lib/types'
import { directListingsLogicAbi } from '@adland/contracts'
import { ModalContext } from '@/context/ModalContext'
import Modal from './Modal'
import { queryClient } from './AppProviders'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { appContracts } from '@/config/constants'
import { AdSpaceQuery, Listing } from '@adland/webkit/src/ponder'

type AdSpaceCardProps = { listing: Listing }

const SelfPriceAssementModal = ({ listing }: AdSpaceCardProps) => {
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
    <Modal
      title="Self Assessment"
      description="Update the price per token for this listing."
      isOpen={selfAssessmentModal.show}
      closeModal={() => {
        selfAssessmentModal.set(false)
      }}
      renderConfirm={() => {
        return (
          <Button
            disabled={loading}
            onClick={() => {
              selfAssess()
            }}
            loading={loading}
          >
            Reassess
          </Button>
        )
      }}
    >
      <div>
        <Input
          type="number"
          value={newPricePerToken}
          defaultValue={parseFloat(formatEther(pricePerToken))}
          onChange={(e) => setNewPricePerToken(Number(e.target.value))}
        />
      </div>
    </Modal>
  )
}

export default SelfPriceAssementModal
