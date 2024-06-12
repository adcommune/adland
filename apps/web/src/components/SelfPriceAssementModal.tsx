import { Button } from './ui/button'
import { Input } from './ui/input'
import { encodeFunctionData, formatEther, parseEther } from 'viem'
import { useContext, useState } from 'react'
import { AdSpace } from '@/lib/types'
import { directListingsLogicAbi } from '@adland/contracts'
import { ModalContext } from '@/context/ModalContext'
import Modal from './Modal'
import { queryClient } from './AppProviders'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { appContracts } from '@/config/constants'

type AdSpaceCardProps = { adSpace: AdSpace }

const SelfPriceAssementModal = ({ adSpace }: AdSpaceCardProps) => {
  const { listing } = adSpace
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
                  assetContract,
                  quantity,
                  currency,
                  taxRate,
                  taxBeneficiary,
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
            ['adSpace-', adSpace?.adSpace_subgraph?.id],
            (old: AdSpace): AdSpace => {
              return {
                ...old,
                listing: {
                  ...old.listing,
                  pricePerToken: parseEther(newPricePerToken.toString()),
                },
              }
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
