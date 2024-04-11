'use client'

import { Container } from '@/components/Container'
import { useParams } from 'next/navigation'

const AdSpacePage = () => {
  const { spaceId } = useParams()

  return (
    <Container>
      <h1>AdSpacePage: {spaceId}</h1>
    </Container>
  )
}

export default AdSpacePage
