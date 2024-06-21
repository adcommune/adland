'use client'

import AdGroupHeader from '@/components/AdGroup/AdGroupHeader'
import { Container } from '@/components/Container'

type GroupPageLayoutProps = {
  children: React.ReactNode
  params: { id: string }
}

const GroupPageLayout = ({
  children,
  params: { id },
}: GroupPageLayoutProps) => {
  return (
    <Container className="flex flex-col gap-2 p-4">
      <AdGroupHeader adGroupId={id}>{children}</AdGroupHeader>
    </Container>
  )
}

export default GroupPageLayout
