'use client'

import AdGroupList from '@/components/AdGroups/AdGroupList'
import AdSpaceList from '@/components/AdSpaceList'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { useContext } from 'react'

const AppPage = () => {
  const { bicoAccountAddress } = useContext(SmartAccountContext)

  return (
    <div className="flex min-h-[79vh] flex-col p-2">
      <Container className="flex w-full flex-col gap-2 p-4">
        <Link href={'/group/create'}>
          <Button className="w-full gap-2">
            <PlusIcon size={16} />
            Create Ad Group
          </Button>
        </Link>
        <Tabs defaultValue="my-ad-spaces" className="w-full font-body">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="my-ad-spaces">My Spaces</TabsTrigger>
            <TabsTrigger value="my-ad-groups">My Groups</TabsTrigger>
            <TabsTrigger value="all-ad-groups">All Groups</TabsTrigger>
          </TabsList>
          <TabsContent value="my-ad-spaces" className="w-full">
            <AdSpaceList />
          </TabsContent>
          <TabsContent value="my-ad-groups" className="w-full">
            <AdGroupList owner={bicoAccountAddress} />
          </TabsContent>
          <TabsContent value="all-ad-groups" className="w-full">
            <AdGroupList />
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  )
}

export default AppPage
