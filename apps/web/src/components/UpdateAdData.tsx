import { Button } from './ui/button'
import Image from 'next/image'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useCallback, useContext, useState } from 'react'
import { getAR, getGatewayUri } from '@/lib/utils'
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
  appContracts,
  authorizedFileTypes,
  ipfsGateway,
} from '@/config/constants'
import { commonAdSpacesAbi } from '@adland/contracts'
import { Metadata } from '@/lib/types'
import { uploadFile } from '@/lib/file'
import { ModalContext } from '@/context/ModalContext'
import { toast } from 'sonner'
import { queryClient } from './AppProviders'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import { encodeFunctionData } from 'viem'
import {
  AdSpaceMetadata,
  AdSpaceQuery,
  Listing,
} from '@adland/webkit/src/ponder'
import { Checkbox } from './ui/checkbox'
import { Separator } from './ui/separator'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

type UpdateAdDataDialogProps = {
  listing: Listing
  metadata?: Omit<AdSpaceMetadata, 'adSpace'> | null
}

const UpdateAdData = ({
  listing,
  metadata: initialMetadata,
}: UpdateAdDataDialogProps) => {
  const { updateAdDataModal } = useContext(ModalContext)

  const [description, setDescription] = useState<string>(
    initialMetadata?.description ?? '',
  )
  const [externalUrl, setExternalUrl] = useState<string>(
    initialMetadata?.externalUrl ?? '',
  )
  const [aspectRatio, setAspectRatio] = useState<FrameAspectRatio>(
    getAR(initialMetadata?.aspectRatio),
  )
  const [frameRedirectUrl, setFrameRedirectUrl] = useState<string>(
    initialMetadata?.frameRedirectUrl ?? '',
  )

  const [noBillboard, setNoBillboard] = useState<boolean>(
    initialMetadata?.noBillboard ?? false,
  )

  const [image, setImage] = useState<{
    url: string
    type: 'video' | 'image'
  } | null>(
    initialMetadata?.image
      ? {
          url: getGatewayUri(
            initialMetadata?.animationUrl
              ? initialMetadata?.animationUrl
              : initialMetadata?.image,
          ),
          type: initialMetadata?.animationUrl ? 'video' : 'image',
        }
      : null,
  )

  const [uploadingImage, setUploadingImage] = useState(false)

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadingImage(true)
    const file = e.target.files?.[0]
    if (file) {
      if (!authorizedFileTypes.includes(file.type)) {
        toast.error('Invalid file type (ie. png, jpeg, jpg, gif)')
        return setUploadingImage(false)
      }
      try {
        const hash = await uploadFile(file)

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

  const [uploadingData, setUploadingData] = useState(false)

  const onUpdateSuccess = useCallback((data: Partial<AdSpaceMetadata>) => {
    updateAdDataModal.set(false)

    if (!data) return

    queryClient.setQueryData(
      ['adSpace-', listing.listingId],
      (old: AdSpaceQuery['adSpace']): AdSpaceQuery['adSpace'] => {
        return Object.assign({}, old, {
          currentMetadata: data,
        })
      },
    )
  }, [])

  const { write, loading } = useSmartAccountTxs({})

  const submitAdData = async () => {
    if (!image) return

    setUploadingData(true)

    const s = image.url.split('/')
    const imageHash = s[s.length - 1]
    const data: Metadata = {
      name: `Ad Space #${Number(listing?.listingId)}`,
      description,
      image: `ipfs://${imageHash}`,
      noBillboard,
    }

    const localMetadata: Partial<AdSpaceMetadata> = {
      name: `Ad Space #${Number(listing?.listingId)}`,
      description,
      image: `ipfs://${imageHash}`,
      imageGatewayUri: getGatewayUri(`ipfs://${imageHash}`),
      noBillboard,
    }

    if (image.type === 'video') {
      data.animation_url = `ipfs://${imageHash}`
      localMetadata.animationUrl = `ipfs://${imageHash}`
    }
    if (externalUrl !== '') {
      data.external_url = externalUrl
      localMetadata.externalUrl = externalUrl
    }
    if (frameRedirectUrl !== '') {
      data.frame_redirect_url = frameRedirectUrl
      localMetadata.frameRedirectUrl = frameRedirectUrl
    }
    data.aspect_ratio = aspectRatio
    localMetadata.aspectRatio = aspectRatio

    if (initialMetadata) {
      const oldMetadata = omit(initialMetadata, ['imageGatewayURI'])

      if (isEqual(data, oldMetadata)) {
        setUploadingData(false)
        return toast.error('No changes detected')
      }
    }

    const jsonData = JSON.stringify(data)

    const metadata: File = new File([JSON.stringify(data)], 'metadata.json')
    const hash = await uploadFile(metadata)
    const adIpfsURI = `ipfs://${hash}`

    setUploadingData(false)

    write(
      {
        transactions: [
          {
            to: appContracts.adCommonOwnership,
            data: encodeFunctionData({
              abi: commonAdSpacesAbi,
              functionName: 'updateAdURI',
              args: [listing?.listingId, adIpfsURI],
            }),
            value: BigInt(0),
          },
        ],
      },
      {
        onSuccess: () => {
          onUpdateSuccess(localMetadata)
        },
      },
    )
  }

  const contentUpdating = uploadingData || loading

  const contentUpdateDisabled = uploadingImage || contentUpdating

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Edit Ad</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex w-full flex-col gap-2">
            <p className="mb-2 text-lg font-bold">General Ad Options</p>
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
              <Label htmlFor="email">Frame Link</Label>
              <Input
                type="text"
                id="frame_redirect_url"
                placeholder="Frame Redirect URL"
                defaultValue={frameRedirectUrl}
                onChange={(e) => {
                  setFrameRedirectUrl(e.target.value)
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
            <div className="flex w-full flex-row gap-2 space-y-2">
              <div className="flex grow flex-col gap-2">
                <Label htmlFor="email">Image</Label>
                <Input
                  className="cursor-pointer hover:bg-slate-100"
                  id="picture"
                  type="file"
                  accept={authorizedFileTypes
                    .map((e) => e.replace('image/', ''))
                    .join(', ')}
                  onChange={onFileChange}
                />
              </div>
              <div
                className={classNames(
                  {
                    'aspect-1/1': FrameAspectRatio.SQUARE === aspectRatio,
                    'aspect-1.91/1': FrameAspectRatio.RECTANGLE === aspectRatio,
                  },
                  'w-1/3',
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
            </div>
            <Separator className="my-4" />
            <p className="mb-2 text-lg font-bold">Farcaster Frame options</p>
            <div className="flex flex-row items-center gap-4">
              <Label htmlFor="email">Disable AdLand Billboard UI</Label>
              <Checkbox
                // className="cursor-pointer hover:bg-slate-100"
                checked={noBillboard}
                onCheckedChange={(e) => {
                  if (typeof e === 'boolean') {
                    setNoBillboard(e)
                  }
                }}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          disabled={contentUpdateDisabled}
          onClick={submitAdData}
          loading={contentUpdating}
        >
          Save
        </Button>
      </CardFooter>
    </Card>
  )
}

export default UpdateAdData
