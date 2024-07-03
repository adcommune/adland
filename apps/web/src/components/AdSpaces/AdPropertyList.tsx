import { Badge } from '../ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { AdSpaceMetadata } from '@adland/webkit/src/ponder'

const PropertyContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full px-4 md:w-1/2">{children}</div>
}

type AdPropertyListProps = {
  metadata?: Omit<AdSpaceMetadata, 'adSpace'> | null
  isLoading: boolean
}

const AdPropertyList = ({ metadata, isLoading }: AdPropertyListProps) => {
  return (
    <div className="flex flex-grow flex-col justify-center gap-2 rounded-md">
      <div className="relative flex min-h-[300px] w-full flex-row justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">image</Badge>
        <PropertyContainer>
          {isLoading ? (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p className="font-body text-white">Loading...</p>
            </div>
          ) : metadata?.imageGatewayUri ? (
            <Image
              src={metadata?.imageGatewayUri}
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
          {metadata?.description && (
            <p className="text-white">{metadata?.description}</p>
          )}
        </PropertyContainer>
      </div>
      <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">external_url</Badge>
        <PropertyContainer>
          {metadata?.externalUrl && (
            <Link href={metadata?.externalUrl}>
              <p className="text-white underline">{metadata?.externalUrl}</p>
            </Link>
          )}
        </PropertyContainer>
      </div>
      {metadata?.frameRedirectUrl && (
        <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
          <Badge className="absolute right-2 top-2">frame_redirect_url</Badge>
          <PropertyContainer>
            {metadata?.frameRedirectUrl && (
              <Link href={metadata?.frameRedirectUrl}>
                <p className="text-white underline">
                  {metadata?.frameRedirectUrl}
                </p>
              </Link>
            )}
          </PropertyContainer>
        </div>
      )}
      <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">aspect_ratio</Badge>
        <PropertyContainer>
          {metadata?.aspectRatio && (
            <p className="text-white">{metadata?.aspectRatio}</p>
          )}
        </PropertyContainer>
      </div>
      <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
        <Badge className="absolute right-2 top-2">fc:show_billboard</Badge>
        <PropertyContainer>
          <p className="text-white">{metadata?.noBillboard ? 'no' : 'yes'}</p>
        </PropertyContainer>
      </div>
    </div>
  )
}

export default AdPropertyList
