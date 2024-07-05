'use client'

import { Container } from '@/components/Container'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'
import AdSpaceRow, { AdSpaceTable } from '@/components/AdSpaceRow'

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
    <AdSpaceTable>
      {adSpaces?.items?.map((adSpace) => {
        const { transactionHash, id } = adSpace
        return <AdSpaceRow key={transactionHash + '-' + id} {...adSpace} />
      })}
    </AdSpaceTable>
  )
}

export default GroupPage
