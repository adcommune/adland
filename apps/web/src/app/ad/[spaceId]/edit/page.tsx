'use client'

import UpdateAdData from '@/components/UpdateAdData'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'

type EditAdPageProps = {
  params: { spaceId: string }
}

const EditAdPage = ({ params: { spaceId } }: EditAdPageProps) => {
  const { data: adSpace } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  if (!adSpace) return null

  return (
    <UpdateAdData
      listing={adSpace?.listing}
      metadata={adSpace?.currentMetadata}
    />
  )
}

export default EditAdPage
