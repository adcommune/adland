'use client'

import CreateAdGroupForm from '@/components/AdGroup/AdGroupCreateForm'
import { Container } from '@/components/Container'
import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'

const CreateAdminGroupPage = () => {
  const { data } = useQuery({
    queryKey: ['tokenXs'],
    queryFn: () => new AdLand().listSuperTokens(),
  })

  if (!data) return <></>

  return (
    <Container className="mt-5">
      <CreateAdGroupForm superTokens={data} />
    </Container>
  )
}

export default CreateAdminGroupPage
