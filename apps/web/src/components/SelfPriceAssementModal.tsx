import { Button } from './ui/button'
import { Input } from './ui/input'
import { formatEther, parseEther } from 'viem'
import { useContext, useEffect, useState } from 'react'
import { AdSpace } from '@/lib/types'
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { useSimulateDirectListingsLogicUpdateListing } from '@adland/contracts'
import { ModalContext } from '@/context/ModalContext'
import Modal from './Modal'
import { queryClient } from './AppProviders'

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

  const { data: selfAssessRequest } =
    useSimulateDirectListingsLogicUpdateListing({
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
    })

  const { data: hash, writeContract, isPending } = useWriteContract()

  const { data: isSuccess, isLoading: selfAssessmentLoading } =
    useWaitForTransactionReceipt({
      hash,
      query: {
        enabled: Boolean(hash),
        select: (receipt) => receipt.status === 'success',
      },
    })

  useEffect(() => {
    if (isSuccess) {
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
    }
  }, [isSuccess])

  const selfAssess = async () => {
    writeContract(selfAssessRequest!.request)
  }

  const assessmentLoading = isPending || selfAssessmentLoading

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
            disabled={!Boolean(selfAssessRequest?.request) || assessmentLoading}
            onClick={() => {
              selfAssess()
            }}
            loading={assessmentLoading}
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
