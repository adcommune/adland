import { Metadata } from '@/lib/types'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { AdSpaceMetadata } from '@adland/webkit/src/ponder'

const PropertyContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full px-4 md:w-1/2">{children}</div>
}

type PropertyListMetadata = Pick<
  Omit<AdSpaceMetadata, 'adSpace'>,
  | 'image'
  | 'imageGatewayUri'
  | 'externalUrl'
  | 'description'
  | 'aspectRatio'
  | 'frameRedirectUrl'
  | 'noBillboard'
>

type AdPropertyListProps = {
  metadata?: PropertyListMetadata | null
}

const emptyMetadata: PropertyListMetadata = {
  image: '',
  imageGatewayUri: '',
  externalUrl: '',
  description: '',
  aspectRatio: '',
  noBillboard: false,
}

const AdPropertyList = ({ metadata }: AdPropertyListProps) => {
  if (!metadata) {
    metadata = emptyMetadata
  }

  const {
    imageGatewayUri,
    externalUrl,
    description,
    aspectRatio,
    frameRedirectUrl,
    noBillboard,
  } = metadata

  console.log({ noBillboard })

  return (
    <div className="flex flex-grow flex-col justify-center gap-2 rounded-md">
      <div className="relative flex min-h-[300px] w-full flex-row justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">image</Badge>
        <PropertyContainer>
          {imageGatewayUri ? (
            <Image
              src={imageGatewayUri}
              alt="AdSpace Image"
              className="h-full w-full object-contain"
              width={500}
              height={500}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="font-display text-white">NO AD</p>
            </div>
          )}
        </PropertyContainer>
      </div>
      <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">description</Badge>
        <PropertyContainer>
          {description && <p className="text-white">{description}</p>}
        </PropertyContainer>
      </div>
      <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">external_url</Badge>
        <PropertyContainer>
          {externalUrl && (
            <Link href={externalUrl}>
              <p className="text-white underline">{externalUrl}</p>
            </Link>
          )}
        </PropertyContainer>
      </div>
      {frameRedirectUrl && (
        <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
          <Badge className="absolute right-2 top-2">frame_redirect_url</Badge>
          <PropertyContainer>
            {frameRedirectUrl && (
              <Link href={frameRedirectUrl}>
                <p className="text-white underline">{frameRedirectUrl}</p>
              </Link>
            )}
          </PropertyContainer>
        </div>
      )}
      <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">aspect_ratio</Badge>
        <PropertyContainer>
          {aspectRatio && <p className="text-white">{aspectRatio}</p>}
        </PropertyContainer>
      </div>
      <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">fc:show_billboard</Badge>
        <PropertyContainer>
          <p className="text-white">{noBillboard ? 'no' : 'yes'}</p>
        </PropertyContainer>
      </div>
    </div>
  )
}

export default AdPropertyList
