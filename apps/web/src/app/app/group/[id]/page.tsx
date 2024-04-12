import { Container } from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { AdLand } from '@/lib/adland'
import { Separator } from '@/components/ui/separator'

type GroupPageProps = { params: { id: string } }

const GroupPage = async ({ params: { id } }: GroupPageProps) => {
  const { adSpaces } = await new AdLand().getGroup(id)

  return (
    <Container className="flex flex-col gap-2 p-4">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--,--- ETH</div>
            <p className="text-xs text-muted-foreground">
              +--.-% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {adSpaces?.map((adSpace, index) => {
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
                  {adSpace?.metadata?.imageGatewayURI && (
                    <div className="flex h-2/3 flex-grow bg-gray-200">
                      <Image
                        width={500}
                        height={500}
                        alt="AdSpace Image"
                        className=" w-full object-contain"
                        src={adSpace?.metadata?.imageGatewayURI}
                      />
                    </div>
                  )}
                  <Separator />
                  {adSpace?.metadata?.description && (
                    <p className="text-left font-body text-sm font-semibold">
                      {adSpace?.metadata?.description}
                    </p>
                  )}
                  <Separator />
                  {adSpace?.metadata?.external_url && (
                    <p className="text-left text-sm font-light">
                      {adSpace?.metadata?.external_url}
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
