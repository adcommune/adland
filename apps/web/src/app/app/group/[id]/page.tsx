import { Container } from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { AdLand } from '@/lib/adland'
import { Separator } from '@/components/ui/separator'
import AdGroupHeader from '@/components/AdGroup/AdGroupHeader'

type GroupPageProps = { params: { id: string } }

const GroupPage = async ({ params: { id } }: GroupPageProps) => {
  const adGroup = await new AdLand().getGroup(id)

  const { adSpaces } = adGroup

  return (
    <Container className="flex flex-col gap-2 p-4">
      <AdGroupHeader adGroup={adGroup} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {adSpaces?.map(({ adSpace_subgraph: adSpace, metadata }, index) => {
          return (
            <Link
              key={adSpace?.transactionHash + adSpace?.id}
              href={'/app/group/' + id + '/' + adSpace?.id}
            >
              <Card className="flex flex-col overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-body font-normal text-gray-500">
                    AdSpace #{index}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative flex h-[400px] w-full flex-grow flex-col gap-2 bg-gray-100 py-4">
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
                  <Separator />
                  {metadata?.description && (
                    <p className="text-left font-body text-sm font-semibold">
                      {metadata?.description}
                    </p>
                  )}
                  <Separator />
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
    </Container>
  )
}

export default GroupPage
