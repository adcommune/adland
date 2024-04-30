'use client'

import CreateAdGroupForm from '@/components/AdGroup/AdGroupCreateForm'
import { Container } from '@/components/Container'
import { useAccount } from 'wagmi'
import { useTokenXsQuery } from '@adland/webkit/src/hooks'

const CreateAdminGroupPage = () => {
  const { address } = useAccount()
  const { data } = useTokenXsQuery({ first: 5 })

  console.log(data)

  if (!address || !data) return <></>

  return (
    <Container className="mt-5">
      <CreateAdGroupForm beneficiary={address} superTokens={data.tokenXs} />
    </Container>
  )
}

export default CreateAdminGroupPage
