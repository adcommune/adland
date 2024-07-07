'use client'

import AdGroupList from '@/components/AdGroups/AdGroupList'
import AdSpaceList from '@/components/AdSpaceList'
import { Container } from '@/components/Container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import classNames from 'classnames'
import { useContext } from 'react'

const AppPage = () => {
  const { bicoAccountAddress } = useContext(SmartAccountContext)

  return (
    <div className="flex min-h-[79vh] flex-col">
      <Container className="flex w-full flex-col gap-2 p-4">
        <Tabs
          defaultValue={bicoAccountAddress ? 'my-ad-spaces' : 'all-ad-groups'}
          className="w-full font-body"
        >
          <TabsList
            className={classNames('grid w-full grid-cols-3', {
              'grid-cols-1': !bicoAccountAddress,
            })}
          >
            {bicoAccountAddress && (
              <>
                <TabsTrigger value="my-ad-spaces">My Spaces</TabsTrigger>
                <TabsTrigger value="my-ad-groups">My Groups</TabsTrigger>
              </>
            )}
            <TabsTrigger value="all-ad-groups">All Groups</TabsTrigger>
          </TabsList>
          {bicoAccountAddress && (
            <>
              <TabsContent value="my-ad-spaces" className="w-full">
                <AdSpaceList />
              </TabsContent>
              <TabsContent value="my-ad-groups" className="w-full">
                <AdGroupList owner={bicoAccountAddress} />
              </TabsContent>
            </>
          )}
          <TabsContent value="all-ad-groups" className="w-full">
            <AdGroupList />
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  )
}

export default AppPage
