'use client'

import FarcasterIntegration from '@/components/FarcasterIntegration'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}
const FarcasterDistributionPage = ({
  params: { spaceId, id: groupId },
}: AdSpacePageProps) => {
  const { data: adSpace } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  if (!adSpace) return null

  return <FarcasterIntegration groupId={groupId} adSpace={adSpace} />
}

export default FarcasterDistributionPage
