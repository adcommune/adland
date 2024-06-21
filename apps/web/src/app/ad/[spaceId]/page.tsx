'use client'

import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'
import AdPropertyList from '@/components/AdSpaces/AdPropertyList'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}

const AdSpacePage = ({ params: { spaceId } }: AdSpacePageProps) => {
  const { data: adSpace } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  return <AdPropertyList metadata={adSpace?.currentMetadata} />
}

export default AdSpacePage
