'use client'

import CreateAdGroupForm from '@/components/AdGroup/AdGroupCreateForm'
import { Container } from '@/components/Container'
import { useTokenXsQuery } from '@adland/webkit/src/hooks'
import { zeroAddress } from 'viem'

const CreateAdminGroupPage = () => {
  const { data } = useTokenXsQuery({
    first: 5,
    where: { superToken_not: zeroAddress },
  })

  if (!data) return <></>

  return (
    <Container className="mt-5">
      <CreateAdGroupForm superTokens={data.tokenXs} />
    </Container>
  )
}

export default CreateAdminGroupPage
