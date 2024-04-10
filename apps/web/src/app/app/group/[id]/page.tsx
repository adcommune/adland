import { Container } from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AdLand } from '@/lib/services'
import Link from 'next/link'
import Image from 'next/image'

const GroupPage = async ({ params: { id } }: { params: { id: string } }) => {
  const { adSpaces } = await new AdLand().getGroup(id)

  return (
    <Container className="p-4">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {adSpaces?.map((adSpace, index) => {
          return (
            <Link
              key={adSpace?.transactionHash + adSpace?.id}
              href={'/app/group/' + id + '/' + adSpace?.id}
            >
              <Card className="flex h-[400px] flex-col overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-body font-normal text-gray-500">
                    AdSpace #{index}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative flex w-full flex-grow flex-col items-center justify-center gap-2 bg-gray-100 py-4">
                  {adSpace?.metadata?.description && (
                    <p className="text-left text-sm">
                      {adSpace?.metadata?.description}
                    </p>
                  )}
                  {adSpace?.metadata?.imageGatewayURI && (
                    <div className="flex w-full flex-grow bg-gray-400">
                      <Image
                        width={500}
                        height={500}
                        alt="AdSpace Image"
                        className="h-full w-full object-contain"
                        src={adSpace?.metadata?.imageGatewayURI}
                      />
                    </div>
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
