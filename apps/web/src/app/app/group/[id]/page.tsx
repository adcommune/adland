import { Container } from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { adland } from '@/lib/services'
import Link from 'next/link'

const GroupPage = async ({ params: { id } }: { params: { id: string } }) => {
  const { adGroup } = await adland.adGroup({ id })

  return (
    <Container className="p-4">
      <div className="grid grid-cols-3 gap-2">
        {adGroup?.adSpaces?.map((adSpace, index) => {
          return (
            <Link
              key={adSpace?.transactionHash + adSpace?.id}
              href={'/app/group/' + id + '/' + adSpace?.id}
            >
              <Card className="">
                <CardHeader>
                  <CardTitle>AdSpace #{index}</CardTitle>
                </CardHeader>
                <CardContent>{/* <Image src={adSpace?.} /> */}</CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export default GroupPage
