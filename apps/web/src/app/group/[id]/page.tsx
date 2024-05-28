import { Container } from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { AdLand } from '@/lib/adland'
import { Separator } from '@/components/ui/separator'
import { AdGroup, AdSpace } from '@/lib/types'

type GroupPageProps = { params: { id: string } }

const GroupPage = async ({ params: { id } }: GroupPageProps) => {
  const adGroup = (await new AdLand().getGroup(id)) as Omit<
    AdGroup,
    'adSpaces'
  > & {
    adSpaces: AdSpace[]
  }

  if (!adGroup) {
    return (
      <Container className="flex  h-[400px] w-full flex-row items-center justify-center gap-2 p-4">
        <p className="font-body text-2xl text-white">AD GROUP NOT FOUND</p>
      </Container>
    )
  }

  const { adSpaces } = adGroup
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      {adSpaces?.map(({ adSpace_subgraph: adSpace, metadata }, index) => {
        const liveDistribution = adSpace.adPools.length > 0

        return (
          <Link
            key={adSpace?.transactionHash + adSpace?.id}
            href={'/ad/' + adSpace?.id}
          >
            <Card className="flex flex-col overflow-hidden bg-transparent">
              <CardHeader className="relative bg-white">
                <CardTitle className="flex w-full flex-row items-center justify-between font-body font-normal">
                  <span>AdSpace #{adSpace.id}</span>
                  {liveDistribution && (
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative flex h-[400px] w-full flex-grow flex-col gap-2 bg-white bg-opacity-75 py-4">
                {!metadata && (
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <p className="font-display text-2xl">No Ad</p>
                  </div>
                )}
                {metadata?.imageGatewayURI && (
                  <div className="flex h-2/3 flex-grow bg-gray-200">
                    <Image
                      width={500}
                      height={500}
                      alt="AdSpace Image"
                      className=" w-full object-contain"
                      src={metadata?.imageGatewayURI}
                    />
                  </div>
                )}
                {metadata && <Separator />}
                {metadata?.description && (
                  <p className="text-left font-body text-sm font-semibold">
                    {metadata?.description}
                  </p>
                )}
                {metadata && <Separator />}
                {metadata?.external_url && (
                  <p className="text-left text-sm font-light">
                    {metadata?.external_url}
                  </p>
                )}
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

export default GroupPage
