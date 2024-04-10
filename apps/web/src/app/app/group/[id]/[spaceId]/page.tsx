'use client'

import { useParams } from 'next/navigation'

const AdSpacePage = () => {
  const { spaceId } = useParams()

  return (
    <div>
      <h1>AdSpacePage: {spaceId}</h1>
    </div>
  )
}

export default AdSpacePage
