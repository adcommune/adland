'use client'

import { Container } from '@/components/Container'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'
import AdCardItem from '@/components/AdGroup/AdCardItem'

type GroupPageProps = { params: { id: string } }

const GroupPage = ({ params: { id } }: GroupPageProps) => {
  const { data: adGroup, isLoading } = useQuery({
    queryKey: ['adGroup-', id],
    queryFn: async () => {
      return new AdLand().getGroup(id)
    },
  })

  if (isLoading) {
    return (
      <Container className="flex  h-[400px] w-full flex-row items-center justify-center gap-2 p-4">
        <p className="font-body text-2xl text-white">Loading...</p>
      </Container>
    )
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
      {adSpaces?.map((space) => {
        return <AdCardItem key={space.adSpace_subgraph.id} space={space} />
      })}
    </div>
  )
}

export default GroupPage
