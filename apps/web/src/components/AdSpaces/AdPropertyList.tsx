import { Metadata } from '@/lib/types'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import Link from 'next/link'

const PropertyContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full px-4 md:w-1/2">{children}</div>
}

type AdPropertyListProps = {
  metadata?: Metadata
}

const emptyMetadata: Metadata = {
  name: '',
  image: '',
  imageGatewayURI: '',
  external_url: '',
  description: '',
  aspect_ratio: '',
}

const AdPropertyList = ({ metadata }: AdPropertyListProps) => {
  if (!metadata) {
    metadata = emptyMetadata
  }

  const {
    imageGatewayURI,
    external_url,
    description,
    aspect_ratio,
    frame_redirect_url,
  } = metadata

  return (
    <div className="flex flex-grow flex-col justify-center gap-2 rounded-md">
      <div className="relative flex min-h-[300px] w-full flex-row justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">image</Badge>
        <PropertyContainer>
          {imageGatewayURI ? (
            <Image
              src={imageGatewayURI}
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
          {external_url && (
            <Link href={external_url}>
              <p className="text-white underline">{external_url}</p>
            </Link>
          )}
        </PropertyContainer>
      </div>
      {frame_redirect_url && (
        <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
          <Badge className="absolute right-2 top-2">frame_redirect_url</Badge>
          <PropertyContainer>
            {frame_redirect_url && (
              <Link href={frame_redirect_url}>
                <p className="text-white underline">{frame_redirect_url}</p>
              </Link>
            )}
          </PropertyContainer>
        </div>
      )}
      <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">aspect_ratio</Badge>
        <PropertyContainer>
          {aspect_ratio && <p className="text-white">{aspect_ratio}</p>}
        </PropertyContainer>
      </div>
    </div>
  )
}

export default AdPropertyList
