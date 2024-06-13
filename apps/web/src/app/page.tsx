import AllAdGroups from '@/components/AdGroups/AllAdGroups'
import MyAdGroups from '@/components/AdGroups/MyAdGroups'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const AppPage = async () => {
  return (
    <div className="flex min-h-[79vh] flex-col p-2">
      <Container className="flex w-full flex-col gap-2 p-4">
        <Link href={'/group/create'}>
          <Button className="w-full gap-2">
            <PlusIcon size={16} />
            Create Ad Group
          </Button>
        </Link>
        <Tabs defaultValue="my-ad-groups" className="w-full font-body">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="my-ad-groups">My Ad Groups</TabsTrigger>
            <TabsTrigger value="all-ad-groups">All</TabsTrigger>
          </TabsList>
          <TabsContent value="my-ad-groups" className="w-full">
            <MyAdGroups />
          </TabsContent>
          <TabsContent value="all-ad-groups" className="w-full">
            <AllAdGroups />
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  )
}

export default AppPage
