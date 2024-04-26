import SuperTokenTable from '@/components/AdGroup/AdGroupTokenTable'
import { Card, CardContent } from '@/components/ui/card'
import { AdLand } from '@/lib/adland'

export const dynamic = 'force-dynamic'

const SettingsPage = async ({ params }: { params: { id: string } }) => {
  const adGroup = await new AdLand().getGroup(params.id)

  if (!adGroup) return null

  return (
    <Card>
      <CardContent className="font-body">
        <SuperTokenTable adGroup={adGroup} />
      </CardContent>
    </Card>
  )
}

export default SettingsPage
