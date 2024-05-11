import AdGroupHeader from '@/components/AdGroup/AdGroupHeader'
import { Container } from '@/components/Container'
import { AdLand } from '@/lib/adland'

type GroupPageLayoutProps = {
  children: React.ReactNode
  params: { id: string }
}

const GroupPageLayout = async ({
  children,
  params: { id },
}: GroupPageLayoutProps) => {
  const adGroup = await new AdLand().getGroup(id)

  if (!adGroup) return null

  return (
    <Container className="flex flex-col gap-2 p-4">
      <AdGroupHeader adGroup={adGroup} />
      {children}
    </Container>
  )
}

export default GroupPageLayout
