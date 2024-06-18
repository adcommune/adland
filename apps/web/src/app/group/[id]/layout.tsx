'use client'

import AdGroupHeader from '@/components/AdGroup/AdGroupHeader'
import { Container } from '@/components/Container'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'

type GroupPageLayoutProps = {
  children: React.ReactNode
  params: { id: string }
}

const GroupPageLayout = ({
  children,
  params: { id },
}: GroupPageLayoutProps) => {
  const { data: adGroup } = useQuery({
    queryKey: ['adGroup-', id],
    queryFn: async () => {
      return new AdLand().getGroup(id)
    },
  })

  if (!adGroup) return null

  return (
    <Container className="flex flex-col gap-2 p-4">
      <AdGroupHeader adGroup={adGroup}>{children}</AdGroupHeader>
    </Container>
  )
}

export default GroupPageLayout
