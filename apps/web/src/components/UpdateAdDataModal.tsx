import { Button } from './ui/button'
import Image from 'next/image'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useCallback, useContext, useState } from 'react'
import useAppContracts from '@/hooks/useAppContracts'
import { getAR, getGatewayUri } from '@/lib/utils'
import { useWriteContract } from 'wagmi'
import { omit, isEqual } from 'lodash'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import classNames from 'classnames'
import {
  FrameAspectRatio,
  authorizedFileTypes,
  ipfsGateway,
} from '@/config/constants'
import { commonAdSpacesAbi } from '@adland/contracts'
import { AdSpace, Metadata } from '@/lib/types'
import { uploadFile } from '@/lib/file'
import { ModalContext } from '@/context/ModalContext'
import Modal from './Modal'
import { queryClient } from '@/app/app/providers'
import { toast } from 'sonner'
import { handleWriteErrors } from '@/lib/viem'
import useWaitForTransactionSuccess from '@/hooks/useWaitForTransactionSuccess'

type UpdateAdDataDialogProps = {
  adSpace: AdSpace
}

const UpdateAdDataDialog = ({ adSpace }: UpdateAdDataDialogProps) => {
  const { listing, metadata } = adSpace

  const { updateAdDataModal } = useContext(ModalContext)

  const { adCommonOwnership } = useAppContracts()

  const [description, setDescription] = useState<string>(
    metadata?.description ?? '',
  )
  const [externalUrl, setExternalUrl] = useState<string>(
    metadata?.external_url ?? '',
  )
  const [aspectRatio, setAspectRatio] = useState<FrameAspectRatio>(
    getAR(metadata?.aspect_ratio),
  )

  const [image, setImage] = useState<{
    url: string
    type: 'video' | 'image'
  } | null>(
    metadata?.image
      ? {
          url: getGatewayUri(
            metadata?.animation_url ? metadata?.animation_url : metadata?.image,
          ),
          type: metadata?.animation_url ? 'video' : 'image',
        }
      : null,
  )

  const [newMetadata, setNewMetadata] = useState<Metadata | null>(null)

  const [uploadingImage, setUploadingImage] = useState(false)

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadingImage(true)
    const file = e.target.files?.[0]
    if (file) {
      if (!authorizedFileTypes.includes(file.type)) {
        toast.error('Invalid file type (ie. png, jpeg, jpg)')
        return setUploadingImage(false)
      }
      try {
        const hash = await uploadFile(file)

        console.log('hash', hash)

        setImage({
          url: `${ipfsGateway}/${hash}`,
          type: file.type.includes('video') ? 'video' : 'image',
        })
      } catch (error) {
        console.error(error)
      }
    }
    setUploadingImage(false)
  }

  const {
    data: updateDataTxHash,
    writeContract,
    isPending,
  } = useWriteContract({})

  const [uploadingData, setUploadingData] = useState(false)

  const submitAdData = async () => {
    if (!image) return

    setUploadingData(true)

    const s = image.url.split('/')
    const imageHash = s[s.length - 1]
    const data: Metadata = {
      name: `Ad Space #${Number(listing?.listingId)}`,
      description,
      image: `ipfs://${imageHash}`,
    }

    if (image.type === 'video') {
      data.animation_url = `ipfs://${imageHash}`
    }
    if (externalUrl !== '') {
      data.external_url = externalUrl
    }
    data.aspect_ratio = aspectRatio

    if (adSpace.metadata) {
      const oldMetadata = omit(adSpace.metadata, ['imageGatewayURI'])

      if (isEqual(data, oldMetadata)) {
        setUploadingData(false)
        return toast.error('No changes detected')
      }
    }

    const metadata: File = new File([JSON.stringify(data)], 'metadata.json')
    const hash = await uploadFile(metadata)
    const adIpfsURI = `ipfs://${hash}`

    setUploadingData(false)

    writeContract(
      {
        abi: commonAdSpacesAbi,
        address: adCommonOwnership,
        functionName: 'updateAdURI',
        args: [listing?.listingId, adIpfsURI],
      },
      {
        onSuccess: () => {
          setNewMetadata(data)
        },
        onError: (error) => handleWriteErrors(error),
      },
    )
  }

  const { isLoading } = useWaitForTransactionSuccess(
    updateDataTxHash,
    useCallback(() => {
      updateAdDataModal.set(false)

      if (!newMetadata) return

      newMetadata.imageGatewayURI = getGatewayUri(newMetadata?.image)

      queryClient.setQueryData(
        ['adSpace-', adSpace?.adSpace_subgraph?.id],
        (old: AdSpace): AdSpace => {
          return {
            ...old,
            metadata: newMetadata,
          }
        },
      )
    }, [newMetadata]),
  )

  const contentUpdating = isPending || uploadingData || isLoading

  const contentUpdateDisabled = uploadingImage || contentUpdating

  return (
    <Modal
      title="Update Ad Data"
      description="Update the ad data for this ad space."
      isOpen={updateAdDataModal.show}
      closeModal={() => {
        updateAdDataModal.set(false)
      }}
      renderConfirm={() => {
        return (
          <Button
            disabled={contentUpdateDisabled}
            onClick={submitAdData}
            loading={contentUpdating}
          >
            Upload
          </Button>
        )
      }}
    >
      <div className="flex flex-col gap-3 md:flex-row">
        <div
          className={classNames(
            {
              'aspect-1/1': FrameAspectRatio.SQUARE === aspectRatio,
              'aspect-1.91/1': FrameAspectRatio.RECTANGLE === aspectRatio,
            },
            'w-full md:w-1/2',
          )}
        >
          {image ? (
            image.type === 'video' ? (
              <video className="w-full" controls preload="nonde">
                <source src={image.url} type="video/mp4"></source>
              </video>
            ) : (
              <Image
                src={image.url}
                alt="Uploaded image"
                width={200}
                height={200}
                className={classNames(
                  'h-full w-full bg-gray-100 object-contain',
                )}
              />
            )
          ) : (
            <div className="h-full bg-gray-100"></div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full space-y-2">
            <Label htmlFor="email">Ad Text</Label>
            <Input
              type="text"
              id="description"
              placeholder="Ad Text"
              defaultValue={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
          </div>
          <div className="w-full space-y-2">
            <Label htmlFor="email">Link</Label>
            <Input
              type="text"
              id="external_url"
              placeholder="Ad Link"
              defaultValue={externalUrl}
              onChange={(e) => {
                setExternalUrl(e.target.value)
              }}
            />
          </div>

          <div className="w-full space-y-2">
            <Label htmlFor="email">Aspect Ratio</Label>

            <Select
              defaultValue={aspectRatio}
              onValueChange={(v: FrameAspectRatio) => {
                setAspectRatio(v)
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select the aspect ratio" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={FrameAspectRatio.RECTANGLE}>
                    Rectangle
                  </SelectItem>
                  <SelectItem value={FrameAspectRatio.SQUARE}>
                    Square
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full space-y-2">
            <Label htmlFor="email">Image</Label>
            <Input
              className="cursor-pointer hover:bg-slate-100"
              id="picture"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={onFileChange}
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default UpdateAdDataDialog
