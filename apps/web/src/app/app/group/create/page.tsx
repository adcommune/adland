'use client'

import CreateAdGroupForm from '@/components/AdGroup/AdGroupCreateForm'
import { Container } from '@/components/Container'
import { useAccount } from 'wagmi'

const CreateAdminGroupPage = () => {
  const { address } = useAccount()

  if (!address) return <></>

  return (
    <Container className="mt-5">
      <CreateAdGroupForm beneficiary={address} />
    </Container>
  )
}

export default CreateAdminGroupPage
